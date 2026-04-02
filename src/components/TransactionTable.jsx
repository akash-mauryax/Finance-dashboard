import React, { useState, useMemo } from 'react';
import { Search, Plus, Trash2, ArrowUpDown } from 'lucide-react';

const TransactionTable = ({ transactions, setTransactions, currentRole }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTx, setNewTx] = useState({ date: '', description: '', amount: '', category: '', type: 'expense', status: 'completed' });

  // Handle Sort
  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') direction = 'desc';
    setSortConfig({ key, direction });
  };

  // Process data (Search & Sort)
  const processedTransactions = useMemo(() => {
    let result = [...transactions];
    
    // Sort
    result.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });

    // Search
    if (searchTerm) {
      result = result.filter(tx => 
        tx.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tx.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return result;
  }, [transactions, sortConfig, searchTerm]);

  // Handle Add Transaction
  const handleAdd = (e) => {
    e.preventDefault();
    if (newTx.description && newTx.amount && newTx.date) {
      const amountVal = newTx.type === 'expense' ? -Math.abs(parseFloat(newTx.amount)) : Math.abs(parseFloat(newTx.amount));
      const newEntry = {
        id: Date.now().toString(),
        ...newTx,
        amount: amountVal
      };
      setTransactions([newEntry, ...transactions]);
      setIsModalOpen(false);
      setNewTx({ date: '', description: '', amount: '', category: '', type: 'expense', status: 'completed' });
    }
  };

  // Handle Delete
  const handleDelete = (id) => {
    if(currentRole === 'Admin') {
      setTransactions(transactions.filter(tx => tx.id !== id));
    }
  };

  return (
    <div className="glass-panel dashboard-section">
      <div className="section-header">
        <h2 className="section-title">Recent Transactions</h2>
      </div>

      <div className="table-controls">
        <div className="search-box">
          <Search className="search-icon" size={18} />
          <input 
            type="text" 
            placeholder="Search transactions..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {currentRole === 'Admin' && (
          <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
            <Plus size={18} /> Add New
          </button>
        )}
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th onClick={() => requestSort('date')}>Date <ArrowUpDown size={14} style={{display:'inline', marginLeft:'4px'}}/></th>
              <th onClick={() => requestSort('description')}>Description <ArrowUpDown size={14} style={{display:'inline', marginLeft:'4px'}}/></th>
              <th onClick={() => requestSort('category')}>Category <ArrowUpDown size={14} style={{display:'inline', marginLeft:'4px'}}/></th>
              <th onClick={() => requestSort('status')}>Status <ArrowUpDown size={14} style={{display:'inline', marginLeft:'4px'}}/></th>
              <th onClick={() => requestSort('amount')}>Amount <ArrowUpDown size={14} style={{display:'inline', marginLeft:'4px'}}/></th>
              {currentRole === 'Admin' && <th>Action</th>}
            </tr>
          </thead>
          <tbody>
            {processedTransactions.map(tx => (
              <tr key={tx.id}>
                <td>{tx.date}</td>
                <td style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{tx.description}</td>
                <td>{tx.category}</td>
                <td>
                  <span className={`status-badge ${tx.status}`}>{tx.status}</span>
                </td>
                <td style={{ color: tx.amount < 0 ? 'var(--status-expense)' : 'var(--status-success)', fontWeight: 600 }}>
                  {tx.amount < 0 ? '-' : '+'}${Math.abs(tx.amount).toFixed(2)}
                </td>
                {currentRole === 'Admin' && (
                  <td>
                    <button className="btn-danger" onClick={() => handleDelete(tx.id)}>
                      <Trash2 size={16} />
                    </button>
                  </td>
                )}
              </tr>
            ))}
            {processedTransactions.length === 0 && (
              <tr>
                <td colSpan={currentRole === 'Admin' ? 6 : 5} style={{ textAlign: 'center', padding: '32px' }}>
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Transaction Modal */}
      {isModalOpen && currentRole === 'Admin' && (
        <div className="modal-overlay">
          <div className="glass-panel modal-content">
            <h2 className="section-title" style={{ marginBottom: '24px' }}>Add Transaction</h2>
            <form onSubmit={handleAdd}>
              <div className="form-group">
                <label>Date</label>
                <input type="date" required value={newTx.date} onChange={e => setNewTx({...newTx, date: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input type="text" required placeholder="e.g. Server hosting" value={newTx.description} onChange={e => setNewTx({...newTx, description: e.target.value})} />
              </div>
              <div className="form-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                 <div style={{display:'flex', flexDirection:'column', gap:'8px'}}>
                    <label>Amount</label>
                    <input type="number" step="0.01" required placeholder="0.00" value={newTx.amount} onChange={e => setNewTx({...newTx, amount: e.target.value})} />
                 </div>
                 <div style={{display:'flex', flexDirection:'column', gap:'8px'}}>
                    <label>Type</label>
                    <select value={newTx.type} onChange={e => setNewTx({...newTx, type: e.target.value})}>
                      <option value="expense">Expense</option>
                      <option value="income">Income</option>
                    </select>
                 </div>
              </div>
              <div className="form-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{display:'flex', flexDirection:'column', gap:'8px'}}>
                   <label>Category</label>
                   <input type="text" required placeholder="Category" value={newTx.category} onChange={e => setNewTx({...newTx, category: e.target.value})} />
                </div>
                <div style={{display:'flex', flexDirection:'column', gap:'8px'}}>
                   <label>Status</label>
                   <select value={newTx.status} onChange={e => setNewTx({...newTx, status: e.target.value})}>
                     <option value="completed">Completed</option>
                     <option value="pending">Pending</option>
                   </select>
                </div>
              </div>
              <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button type="submit" className="btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionTable;
