import React, { useState, useMemo } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import SummaryCard from './components/SummaryCard';
import DashboardChart from './components/DashboardChart';
import TransactionTable from './components/TransactionTable';
import AnalyticsView from './components/views/AnalyticsView';
import CustomersView from './components/views/CustomersView';
import SettingsView from './components/views/SettingsView';
import LoginView from './components/views/LoginView';
import { initialTransactions, monthlyData } from './data/mockData';
import { Wallet, TrendingUp, TrendingDown } from 'lucide-react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentRole, setCurrentRole] = useState('Admin');
  const [currentView, setCurrentView] = useState('Dashboard');
  const [transactions, setTransactions] = useState(initialTransactions);

  // Calculate Summaries for Dashboard
  const { totalIncome, totalExpense } = useMemo(() => {
    let income = 0;
    let expense = 0;
    transactions.forEach(tx => {
      if (tx.amount > 0) income += tx.amount;
      else expense += tx.amount;
    });
    return { totalIncome: income, totalExpense: expense * -1 };
  }, [transactions]);

  const totalBalance = totalIncome - totalExpense;

  const renderView = () => {
    switch(currentView) {
      case 'Transactions':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <header>
              <div>
                <h1>Transactions</h1>
                <p>View and manage your entire financial history.</p>
              </div>
            </header>
            <TransactionTable 
              transactions={transactions} 
              setTransactions={setTransactions} 
              currentRole={currentRole} 
            />
          </div>
        );
      case 'Analytics':
        return <AnalyticsView />;
      case 'Customers':
        return <CustomersView />;
      case 'Settings':
        return <SettingsView />;
      case 'Dashboard':
      default:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <header>
              <div>
                <h1>Dashboard Overview</h1>
                <p>Welcome back! Here's what's happening with your finances today.</p>
              </div>
            </header>

            <section className="summary-grid">
              <SummaryCard 
                title="Total Balance" 
                amount={totalBalance} 
                type="neutral"
                icon={Wallet}
              />
              <SummaryCard 
                title="Total Income" 
                amount={totalIncome} 
                type="income"
                icon={TrendingUp}
              />
              <SummaryCard 
                title="Total Expenses" 
                amount={totalExpense} 
                type="expense"
                icon={TrendingDown}
              />
            </section>

            <DashboardChart data={monthlyData} />

            <TransactionTable 
              transactions={transactions.slice(0, 4)} 
              setTransactions={setTransactions} 
              currentRole={currentRole} 
            />
          </div>
        );
    }
  };

  if (!isAuthenticated) {
    return <LoginView onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="app-container">
      <Sidebar 
        currentRole={currentRole} 
        setCurrentRole={setCurrentRole}
        currentView={currentView}
        setCurrentView={setCurrentView}
        onLogout={() => setIsAuthenticated(false)}
      />
      
      <main className="main-content">
        {renderView()}
      </main>
    </div>
  );
}

export default App;
