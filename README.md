# Premium Finance Dashboard

A stunning, responsive, and fully-featured Finance Dashboard built with React and Vite. This application provides a modern, "glassmorphism" aesthetic with a custom-engineered dark mode built entirely utilizing raw CSS Variables—eschewing heavy styling frameworks for precision and speed.

## 🚀 Key Features

### 🔐 Mock Authentication Flow
- The application begins at a beautifully styled **Sign In** screen.
- A seamless authentication state manager restricts access to the internal dashboard until a successful login event.

### 📊 Dynamic Data Visualization
- **Dashboard View**: Features an interactive dual-layered Area Chart (Income vs. Expenses) plotting temporal data using `recharts`.
- **Analytics View**: Dive deeper with a multi-colored animated Pie Chart breaking down spending habits by expense category.
- **Summary Cards**: Dynamic metric cards with sleek entry hover states and customized color accent bars indicating financial status.

### 💰 Transaction Management
- **Role-Based Access**: Toggle between `Admin` and `Viewer` states. Only administrators can delete or add new transactions via the sleek Transaction Modal.
- **Interactive Data Table**: Real-time searching functionality and dynamic column-based sorting ensures data is always queryable instantly.

### 👥 Customer Records
- Contains a dedicated view for Customer Management.
- **Inline Editing**: Allows administrators to explicitly edit Customer details (Name, Email, Status, Lifetime Value) via a popup modal, seamlessly updating the inline state without page reloads.

### ⚙️ Extensible Interface
- Fast, state-based view switching via the Sidebar ensures zero page reloads while navigating.
- Dedicated **Settings** view featuring mock profile information and toggleable notification preferences.
- Simple, scalable mock data structure in `src/data/mockData.js`.

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: React 19 + Vite
- **Styling**: Vanilla CSS3 using modern CSS Variables & Glassmorphism design system.
- **Icons**: `lucide-react` for a premium, lightweight vector icon set.
- **Charts**: `recharts` for highly customized, responsive data visualizations.

---

## 💻 Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/akash-mauryax/Finance-dashboard.git
   cd Finance-dashboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   ```bash
   npm run dev
   ```

4. View the application instantly in your browser at the provided https://akash-mauryax.github.io/Finance-dashboard/ link!
