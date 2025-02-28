import React from 'react';
import { Link } from 'react-router-dom';
import { Send } from 'react-feather';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';
import RecentTransactions from '../components/RecentTransactions';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Dashboard = () => {
  // Weekly Activity Chart Data
  const weeklyActivityData = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Withdraw',
        data: [450, 400, 300, 400, 200, 400, 400],
        backgroundColor: '#2B3674',
      },
      {
        label: 'Deposit',
        data: [200, 100, 250, 350, 300, 250, 300],
        backgroundColor: '#4318FF',
      }
    ]
  };

  // Expense Statistics Data
  const expenseData = {
    labels: ['Entertainment', 'Bill Expense', 'Investment', 'Others'],
    datasets: [{
      data: [30, 15, 20, 35],
      backgroundColor: ['#2B3674', '#FF8B1A', '#4318FF', '#111111'],
    }]
  };

  // Balance History Data
  const balanceHistoryData = {
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    datasets: [{
      label: 'Balance',
      data: [200, 400, 600, 800, 600, 800, 600],
      fill: true,
      borderColor: '#4318FF',
      backgroundColor: 'rgba(67, 24, 255, 0.1)',
      tension: 0.4,
    }]
  };

  return (
    <div className="p-6">
      <div className="grid gap-6">
        {/* First Row */}
        <div className="grid grid-cols-12 gap-6">
          {/* My Cards Section */}
          <div className="col-span-8 bg-white rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[#2B3674] text-xl font-semibold">My Cards</h2>
              <Link to="/cards" className="text-[#4318FF] hover:underline">See All</Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[1, 2].map((card) => (
                <div key={card} className="bg-[#000] text-white p-6 rounded-2xl">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className="text-sm opacity-80">Balance</p>
                      <p className="text-2xl font-semibold">$5,756</p>
                    </div>
                    <div className="w-12 h-8 bg-white/10 rounded-lg" />
                  
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm opacity-80">CARD HOLDER</p>
                      <p>Eddy Cusuma</p>
                    </div>
                    <div className="flex justify-between items-end">
                      <p className="text-lg">3778 **** **** 1234</p>
                      <div className="flex space-x-1">
                        <div className="w-6 h-6 bg-white/20 rounded-full" />
                        <div className="w-6 h-6 bg-white/20 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="col-span-4 bg-white rounded-2xl">
            {/* <h2 className="text-[#2B3674] text-xl font-semibold mb-6">Recent Transaction</h2> */}
            {/* Transaction items */}
            <RecentTransactions />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-12 gap-6">
          {/* Weekly Activity */}
          <div className="col-span-8 bg-white rounded-2xl p-6">
            <h2 className="text-[#2B3674] text-xl font-semibold mb-6">Weekly Activity</h2>
            <Bar data={weeklyActivityData} options={{
              responsive: true,
              scales: {
                x: { stacked: true },
                y: { stacked: true }
              },
              plugins: { legend: { position: 'top' } }
            }} />
          </div>

          {/* Expense Statistics */}
          <div className="col-span-4 bg-white rounded-2xl p-6">
            <h2 className="text-[#2B3674] text-xl font-semibold mb-6">Expense Statistics</h2>
            <Pie data={expenseData} options={{
              plugins: { legend: { position: 'bottom' } }
            }} />
          </div>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-2 gap-6">
          {/* Quick Transfer */}
          <div className="bg-white rounded-2xl p-6">
            <h2 className="text-[#2B3674] text-xl font-semibold mb-6">Quick Transfer</h2>
            <div className="flex space-x-4 mb-6">
              {['Livia Bator', 'Randy Press', 'Workman'].map((name, index) => (
                <div key={name} className="text-center">
                  <img
                    src={`/placeholder.svg?text=${name}`}
                    alt={name}
                    className="w-16 h-16 rounded-full mb-2"
                  />
                  <p className="font-medium text-[#2B3674]">{name}</p>
                  <p className="text-sm text-gray-500">
                    {index === 0 ? 'CEO' : index === 1 ? 'Director' : 'Designer'}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Write Amount"
                className="flex-1 p-3 bg-[#F4F7FE] rounded-lg border border-gray-200"
              />
              <button className="bg-[#2B3674] text-white px-6 py-3 rounded-lg flex items-center">
                Send <Send className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Balance History */}
          <div className="bg-white rounded-2xl p-6">
            <h2 className="text-[#2B3674] text-xl font-semibold mb-6">Balance History</h2>
            <Line data={balanceHistoryData} options={{
              responsive: true,
              plugins: {
                legend: { display: false },
              },
              scales: {
                y: { beginAtZero: true }
              }
            }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;