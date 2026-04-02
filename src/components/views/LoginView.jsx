import React, { useState } from 'react';
import { Wallet } from 'lucide-react';

const LoginView = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate a brief network request
    setTimeout(() => {
      onLogin(); // Proceed regardless of input for demonstration
    }, 800);
  };

  return (
    <div className="login-container">
      <div className="login-card glass-panel">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '32px' }}>
          <div style={{ background: 'var(--accent-cyan-dim)', padding: '16px', borderRadius: '50%', marginBottom: '16px' }}>
            <Wallet className="logo-icon" size={40} />
          </div>
          <h1 className="logo-text" style={{ fontSize: '28px', marginBottom: '8px' }}>FinDash</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Sign in to access your dashboard</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="admin@findash.app" 
              required 
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              required 
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          
          <button 
            type="submit" 
            className="btn-primary" 
            style={{ width: '100%', justifyContent: 'center', marginTop: '12px', padding: '14px' }}
            disabled={isLoading}
          >
            {isLoading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>
        
        <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: 'var(--text-muted)' }}>
          <p>For demo purposes, any credentials will work.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
