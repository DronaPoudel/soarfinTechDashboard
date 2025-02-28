import React from 'react';
import { Search, Settings, Bell } from 'react-feather';

const Header = () => {
  return (
    <div className="bg-white w-full px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#2B3674]">Overview</h1>
        
        <div className="flex items-center space-x-4 flex-1 max-w-xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for something"
              className="w-full pl-10 pr-4 py-2 bg-[#F4F7FE] rounded-full text-sm focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
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