export const initialTransactions = [
  { id: '1', date: '2026-04-01', description: 'Web Hosting', amount: -45.00, category: 'Infrastructure', type: 'expense', status: 'completed' },
  { id: '2', date: '2026-04-02', description: 'Client Project Advance', amount: 2500.00, category: 'Income', type: 'income', status: 'completed' },
  { id: '3', date: '2026-04-02', description: 'Office Supplies', amount: -120.50, category: 'Operations', type: 'expense', status: 'completed' },
  { id: '4', date: '2026-04-03', description: 'Software Subscriptions', amount: -89.99, category: 'Software', type: 'expense', status: 'pending' },
  { id: '5', date: '2026-04-05', description: 'Consulting Fee', amount: 1200.00, category: 'Income', type: 'income', status: 'completed' },
];

export const monthlyData = [
  { name: 'Jan', income: 4000, expense: 2400 },
  { name: 'Feb', income: 3000, expense: 1398 },
  { name: 'Mar', income: 2000, expense: 9800 },
  { name: 'Apr', income: 2780, expense: 3908 },
  { name: 'May', income: 1890, expense: 4800 },
  { name: 'Jun', income: 2390, expense: 3800 },
  { name: 'Jul', income: 3490, expense: 4300 },
];

export const expenseCategories = [
  { name: 'Software', value: 400 },
  { name: 'Infrastructure', value: 300 },
  { name: 'Office', value: 300 },
  { name: 'Marketing', value: 200 },
  { name: 'Travel', value: 278 },
  { name: 'Other', value: 189 },
];

export const customersData = [
  { id: 'C101', name: 'Acme Corp', email: 'billing@acmecorp.dev', status: 'Active', totalSpent: 12450.00, lastOrder: '2026-03-15' },
  { id: 'C102', name: 'Globex Inc', email: 'finance@globex.net', status: 'Inactive', totalSpent: 8400.50, lastOrder: '2025-11-02' },
  { id: 'C103', name: 'Soylent Corp', email: 'accounts@soylent.com', status: 'Active', totalSpent: 30200.00, lastOrder: '2026-04-01' },
  { id: 'C104', name: 'Initech', email: 'hello@initech.io', status: 'Active', totalSpent: 450.00, lastOrder: '2026-02-28' },
  { id: 'C105', name: 'Umbrella Corporation', email: 'admin@umbrellacorp.com', status: 'Pending', totalSpent: 0.00, lastOrder: 'N/A' },
];
