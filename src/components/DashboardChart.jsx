import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-panel" style={{ padding: '12px', border: '1px solid var(--border-color)' }}>
        <p style={{ fontWeight: 600, marginBottom: '8px' }}>{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color, fontSize: '14px' }}>
            {entry.name}: ${entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const DashboardChart = ({ data }) => {
  return (
    <div className="glass-panel dashboard-section">
      <div className="section-header">
        <h2 className="section-title">Income vs Expenses</h2>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00c853" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#00c853" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff3d00" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#ff3d00" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#272c39" vertical={false} />
            <XAxis dataKey="name" stroke="#9aa0a6" axisLine={false} tickLine={false} />
            <YAxis stroke="#9aa0a6" axisLine={false} tickLine={false} tickFormatter={(value) => `$${value}`} />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#272c39', strokeWidth: 2 }} />
            <Area type="monotone" dataKey="income" name="Income" stroke="#00c853" fillOpacity={1} fill="url(#colorIncome)" />
            <Area type="monotone" dataKey="expense" name="Expense" stroke="#ff3d00" fillOpacity={1} fill="url(#colorExpense)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardChart;
