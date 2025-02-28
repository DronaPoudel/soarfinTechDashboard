import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  RefreshCw,
  Users,
  TrendingUp,
  CreditCard,
  DollarSign,
  Grid,
  Award,
  Settings
} from 'react-feather';

const Sidebar = () => {
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
    <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-600" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <span className="text-xl font-bold text-[#2B3674]">Soar Task</span>
        </div>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-6 py-3 text-sm ${
              location.pathname === item.path
                ? 'bg-[#4318FF] text-white'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.text}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;