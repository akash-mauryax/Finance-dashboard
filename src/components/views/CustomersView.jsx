import React, { useState } from 'react';
import { customersData as initialCustomers } from '../../data/mockData';
import { Edit2, Save, X } from 'lucide-react';

const CustomersView = () => {
  const [customers, setCustomers] = useState(initialCustomers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);

  const handleEditClick = (customer) => {
    setEditingCustomer({ ...customer });
    setIsModalOpen(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setCustomers(customers.map(c => c.id === editingCustomer.id ? editingCustomer : c));
    setIsModalOpen(false);
    setEditingCustomer(null);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <header>
        <div>
          <h1>Customers</h1>
          <p>Manage your client relationships and their lifetime value.</p>
        </div>
      </header>

      <div className="glass-panel dashboard-section">
         <div style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Last Order</th>
                  <th>Total Spent</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {customers.map(customer => (
                  <tr key={customer.id}>
                    <td style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>
                      <span className={`status-badge ${customer.status === 'Active' ? 'completed' : customer.status === 'Pending' ? 'pending' : ''}`} style={{ backgroundColor: customer.status === 'Inactive' ? 'var(--bg-dark)' : undefined}}>
                        {customer.status}
                      </span>
                    </td>
                    <td>{customer.lastOrder}</td>
                    <td style={{ fontWeight: 600 }}>${customer.totalSpent.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                    <td>
                      <button 
                        onClick={() => handleEditClick(customer)} 
                        style={{ background: 'transparent', color: 'var(--accent-cyan)', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        <Edit2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
         </div>
      </div>

      {isModalOpen && editingCustomer && (
        <div className="modal-overlay">
          <div className="glass-panel modal-content">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2 className="section-title">Edit Customer</h2>
              <button onClick={() => setIsModalOpen(false)} style={{ background: 'transparent', color: 'var(--text-secondary)' }}>
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSave}>
              <div className="form-group">
                <label>Name</label>
                <input 
                  type="text" 
                  required 
                  value={editingCustomer.name} 
                  onChange={e => setEditingCustomer({...editingCustomer, name: e.target.value})} 
                />
              </div>
              
              <div className="form-group">
                <label>Email</label>
                <input 
                  type="email" 
                  required 
                  value={editingCustomer.email} 
                  onChange={e => setEditingCustomer({...editingCustomer, email: e.target.value})} 
                />
              </div>
              
              <div className="form-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                 <div style={{display:'flex', flexDirection:'column', gap:'8px'}}>
                    <label>Status</label>
                    <select 
                      value={editingCustomer.status} 
                      onChange={e => setEditingCustomer({...editingCustomer, status: e.target.value})}
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                      <option value="Pending">Pending</option>
                    </select>
                 </div>
                 <div style={{display:'flex', flexDirection:'column', gap:'8px'}}>
                    <label>Total Spent ($)</label>
                    <input 
                      type="number" 
                      step="0.01" 
                      required 
                      value={editingCustomer.totalSpent} 
                      onChange={e => setEditingCustomer({...editingCustomer, totalSpent: parseFloat(e.target.value) || 0})} 
                    />
                 </div>
              </div>
              
              <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button type="submit" className="btn-primary" style={{ gap: '8px' }}>
                  <Save size={16} /> Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomersView;
