import React from 'react';

const SummaryCard = ({ title, amount, type, icon: Icon }) => {
  return (
    <div className={`glass-panel summary-card ${type}`}>
      <div className="card-header">
        <span>{title}</span>
        <div className="card-icon">
          <Icon size={20} />
        </div>
      </div>
      <div className="card-amount">
        ${amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
      </div>
    </div>
  );
};

export default SummaryCard;
