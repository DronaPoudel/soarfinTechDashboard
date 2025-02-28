import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './layout/Sidebar';
import Header from './layout/Header';

const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Settings = React.lazy(() => import('./pages/Settings'));

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="flex min-h-screen bg-[#F4F7FE]">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1 flex flex-col">
          <Header toggleSidebar={toggleSidebar} />
          <main className="flex-1 p-6 md:ml-64 transition-all duration-300 ease-in-out">
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