import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './layout/Sidebar';
import Header from './layout/Header';

const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Settings = React.lazy(() => import('./pages/Settings'));

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-[#F4F7FE]">
        <Sidebar />
        <div className="flex-1 ml-64">
          <Header />
          <main className="p-6">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/setting" element={<Settings />} />
                {/* Add placeholder routes for other menu items */}
                <Route path="/transactions" element={<div>Transactions Page</div>} />
                <Route path="/accounts" element={<div>Accounts Page</div>} />
                <Route path="/investments" element={<div>Investments Page</div>} />
                <Route path="/credit-cards" element={<div>Credit Cards Page</div>} />
                <Route path="/loans" element={<div>Loans Page</div>} />
                <Route path="/services" element={<div>Services Page</div>} />
                <Route path="/privileges" element={<div>My Privileges Page</div>} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;