import React from 'react';

const SettingsView = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <header>
        <div>
          <h1>Settings</h1>
          <p>Manage your account preferences and application settings.</p>
        </div>
      </header>

      <div className="glass-panel dashboard-section" style={{ maxWidth: '800px' }}>
        <h2 className="section-title" style={{ marginBottom: '24px' }}>Profile Information</h2>
        
        <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label>First Name</label>
              <input type="text" defaultValue="Admin" />
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label>Last Name</label>
              <input type="text" defaultValue="User" />
            </div>
          </div>
          
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label>Email Address</label>
            <input type="email" defaultValue="admin@financialdashboard.app" />
          </div>

          <div style={{ padding: '24px 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', margin: '12px 0' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '16px' }}>Preferences</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <input type="checkbox" id="notifications" defaultChecked style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
              <label htmlFor="notifications" style={{ cursor: 'pointer', color: 'var(--text-primary)' }}>Enable Email Notifications</label>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '16px' }}>
            <button type="submit" className="btn-primary">Save Changes</button>
            <button type="button" className="btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsView;
