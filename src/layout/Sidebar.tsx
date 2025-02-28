import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, RefreshCw, Users, TrendingUp, CreditCard, DollarSign, Grid, Award, Settings, X } from 'react-feather';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  const menuItems = [
    { icon: Home, text: 'Dashboard', path: '/' },
    { icon: RefreshCw, text: 'Transactions', path: '/transactions' },
    { icon: Users, text: 'Accounts', path: '/accounts' },
    { icon: TrendingUp, text: 'Investments', path: '/investments' },
    { icon: CreditCard, text: 'Credit Cards', path: '/credit-cards' },
    { icon: DollarSign, text: 'Loans', path: '/loans' },
    { icon: Grid, text: 'Services', path: '/services' },
    { icon: Award, text: 'My Privileges', path: '/privileges' },
    { icon: Settings, text: 'Setting', path: '/setting' },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
        onClick={toggleSidebar}
      ></div>
      <aside
        className={`fixed top-0 left-0 z-30 w-64 h-full bg-white transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Link to="/" className="flex items-center space-x-2">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#4318FF]" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span className="text-xl font-bold text-[#2B3674]">Soar Task</span>
          </Link>
          <button onClick={toggleSidebar} className="md:hidden">
            <X className="w-6 h-6 text-[#2B3674]" />
          </button>
        </div>
        <nav className="mt-6">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-3 text-sm ${
                location.pathname === item.path
                  ? 'bg-[#4318FF] text-white'
                  : 'text-[#2B3674] hover:bg-gray-100'
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span>{item.text}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;