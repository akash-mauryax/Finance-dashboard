import React from 'react';
import { LayoutDashboard, Receipt, PieChart, Users, Settings, LogOut, Wallet } from 'lucide-react';

const Sidebar = ({ currentRole, setCurrentRole, currentView, setCurrentView, onLogout }) => {
  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { icon: <Receipt size={20} />, label: 'Transactions' },
    { icon: <PieChart size={20} />, label: 'Analytics' },
    { icon: <Users size={20} />, label: 'Customers' },
    { icon: <Settings size={20} />, label: 'Settings' },
  ];

  return (
    <div className="sidebar">
      <div className="logo-container">
        <Wallet className="logo-icon" size={28} />
        <span className="logo-text">FinDash</span>
      </div>

      <nav className="nav-links">
        {navItems.map((item, index) => (
          <div 
            key={index} 
            className={`nav-item ${currentView === item.label ? 'active' : ''}`}
            onClick={() => setCurrentView(item.label)}
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="role-section">
        <button 
          className="role-switcher-btn"
          onClick={() => setCurrentRole(currentRole === 'Admin' ? 'Viewer' : 'Admin')}
        >
          <span>Role Switcher</span>
          <span className={`role-badge ${currentRole === 'Viewer' ? 'viewer' : ''}`}>
            {currentRole}
          </span>
        </button>
      </div>

      <div className="nav-links" style={{ marginTop: 'auto', flexGrow: 0 }}>
        <button className="nav-item" onClick={onLogout} style={{ background: 'transparent', width: '100%', textAlign: 'left' }}>
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
