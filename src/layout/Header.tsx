import React, { useState } from 'react';
import { Search, Settings, Bell, Menu, User } from 'react-feather';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <div className="bg-white w-full px-4 py-4 md:px-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between mb-4 md:mb-0">
          <div className="flex items-center">
            <button onClick={toggleSidebar} className="mr-4">
              <Menu className="w-6 h-6 text-[#2B3674]" />
            </button>
            <h1 className="text-xl font-bold text-[#2B3674]">Overview</h1>
          </div>
          <div className="md:hidden relative">
            <button onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)} className="flex items-center">
              <img
                src="/placeholder.svg"
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-gray-200"
              />
            </button>
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                  <Settings className="w-4 h-4 inline-block mr-2" />
                  Settings
                </button>
                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                  <Bell className="w-4 h-4 inline-block mr-2" />
                  Notifications
                </button>
                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                  <User className="w-4 h-4 inline-block mr-2" />
                  Profile
                </button>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex-1 max-w-xl mx-auto mb-4 md:mb-0">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for something"
              className="w-full pl-10 pr-4 py-2 bg-[#F4F7FE] rounded-full text-sm focus:outline-none"
            />
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          <img
            src="/placeholder.svg"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-gray-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;