import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { expenseCategories } from '../../data/mockData';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#ff3d00'];

const AnalyticsView = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <header>
        <div>
          <h1>Analytics</h1>
          <p>Deep dive into your financial data and spending breakdown.</p>
        </div>
      </header>

      <div className="glass-panel dashboard-section">
        <div className="section-header">
          <h2 className="section-title">Expense Breakdown by Category</h2>
        </div>
        <div style={{ height: '400px', width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={expenseCategories}
                cx="50%"
                cy="50%"
                innerRadius={100}
                outerRadius={140}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {expenseCategories.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: 'var(--bg-panel)', borderColor: 'var(--border-color)', borderRadius: '8px' }} 
                itemStyle={{ color: 'var(--text-primary)' }}
              />
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsView;
