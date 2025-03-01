"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Link } from "react-router-dom"
import { Send, CreditCard, User, } from "react-feather"
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
  Filler,
} from "chart.js"
import { Bar, Line, Pie } from "react-chartjs-2"

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
  Filler,
)

const Dashboard = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const touchStart = useRef(0)
  const touchEnd = useRef(0)

  const cards = [
    {
      id: 1,
      balance: 5756,
      holder: "Eddy Cusuma",
      number: "3778 **** **** 1234",
      color: "bg-[#1B254B]",
      bottomColor: "bg-[#2B3674]",
      textColor: "text-white",
    },
    {
      id: 2,
      balance: 5756,
      holder: "Eddy Cusuma",
      number: "3778 **** **** 1234",
      color: "bg-white",
      bottomColor: "bg-gray-100",
      textColor: "text-[#2B3674]",
      borderColor: "border-t border-gray-200",
    },
  ]

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    const swipeThreshold = 50
    const diff = touchStart.current - touchEnd.current

    if (Math.abs(diff) > swipeThreshold) {
      setCurrentCardIndex((prev) => (prev === 0 ? 1 : 0))
    }
  }

  const weeklyActivityData = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Withdraw",
        data: [450, 400, 300, 500, 200, 400, 400],
        backgroundColor: "#1B254B",
        borderRadius: 5,
      },
      {
        label: "Deposit",
        data: [200, 100, 250, 350, 300, 250, 300],
        backgroundColor: "#4318FF",
        borderRadius: 5,
      },
    ],
  }

  const expenseData = {
    labels: ["Entertainment", "Bill Expense", "Investment", "Others"],
    datasets: [
      {
        data: [30, 15, 20, 35],
        backgroundColor: ["#4318FF", "#FF8B1A", "#2B3674", "#111111"],
      },
    ],
  }

  const balanceHistoryData = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        label: "Balance",
        data: [200, 400, 600, 800, 600, 800, 600],
        fill: true,
        borderColor: "#4318FF",
        backgroundColor: "rgba(67, 24, 255, 0.1)",
        tension: 0.4,
      },
    ],
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* My Cards Section */}
        <div className="md:col-span-8 bg-white rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[#2B3674] text-xl font-semibold">My Cards</h2>
            <Link to="/cards" className="text-[#4318FF] hover:underline">
              See All
            </Link>
          </div>
          <div
            className="flex overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-out w-full"
              style={{ transform: `translateX(-${currentCardIndex * 50}%)` }}
            >
              {cards.map((card) => (
                <div
                  key={card.id}
                  className={`w-1/2 flex-shrink-0 ${card.color} ${card.textColor} p-6 rounded-2xl shadow-lg relative overflow-hidden`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className="text-sm opacity-80">Balance</p>
                      <p className="text-2xl font-semibold">${card.balance}</p>
                    </div>
                    <div className="w-12 h-8 bg-white/10 rounded-lg" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm opacity-80">CARD HOLDER</p>
                      <p>{card.holder}</p>
                    </div>
                    <div
                      className={`flex justify-between items-end p-2 rounded-lg ${card.bottomColor} ${card.borderColor || ""}`}
                    >
                      <p className="text-lg">{card.number}</p>
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
        </div>

        {/* Recent Transactions */}
        <div className="md:col-span-4 bg-white rounded-2xl p-6">
          <h2 className="text-[#2B3674] text-xl font-semibold mb-6">Recent Transaction</h2>
          <div className="space-y-4">
            {[
              { icon: <CreditCard size={20} />, title: "Deposit from my Card", date: "28 January 2021", amount: -850 },
              { icon: <User size={20} />, title: "Deposit Paypal", date: "25 January 2021", amount: 2500 },
              { icon: <User size={20} />, title: "Jemi Wilson", date: "21 January 2021", amount: 5400 },
            ].map((transaction, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F4F7FE] flex items-center justify-center">
                    {transaction.icon}
                  </div>
                  <div>
                    <p className="font-medium">{transaction.title}</p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                </div>
                <span className={transaction.amount > 0 ? "text-green-500" : "text-red-500"}>
                  {transaction.amount > 0 ? "+" : ""}
                  {transaction.amount}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Activity */}
        <div className="md:col-span-8 bg-white rounded-2xl p-6">
          <h2 className="text-[#2B3674] text-xl font-semibold mb-6">Weekly Activity</h2>
          <Bar
            data={weeklyActivityData}
            options={{
              responsive: true,
              scales: {
                x: { stacked: false },
                y: {
                  stacked: false,
                  ticks: { stepSize: 100 },
                  max: 500,
                },
              },
              plugins: {
                legend: {
                  position: "top",
                  labels: {
                    usePointStyle: true,
                    pointStyle: "circle",
                    padding: 20,
                  },
                },
              },
              barThickness: 10,
            }}
          />
        </div>

        {/* Expense Statistics */}
        <div className="md:col-span-4 bg-white rounded-2xl p-6">
          <h2 className="text-[#2B3674] text-xl font-semibold mb-6">Expense Statistics</h2>
          <Pie
            data={expenseData}
            options={{
              plugins: {
                legend: {
                  position: "bottom",
                  labels: {
                    usePointStyle: true,
                    pointStyle: "circle",
                    padding: 20,
                  },
                },
              },
              cutout: "60%",
            }}
          />
        </div>

        {/* Quick Transfer */}
        <div className="md:col-span-6 bg-white rounded-2xl p-6">
          <h2 className="text-[#2B3674] text-xl font-semibold mb-6">Quick Transfer</h2>
          <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
            {[
              { name: "Livia Bator", role: "CEO", image: "https://i.pravatar.cc/100?img=1" },
              { name: "Randy Press", role: "Director", image: "https://i.pravatar.cc/100?img=2" },
              { name: "Workman", role: "Designer", image: "https://i.pravatar.cc/100?img=3" },
            ].map((person) => (
              <div key={person.name} className="text-center flex-shrink-0">
                <img
                  src={person.image || "/placeholder.svg"}
                  alt={person.name}
                  className="w-16 h-16 rounded-full mb-2"
                />
                <p className="font-medium text-[#2B3674]">{person.name}</p>
                <p className="text-sm text-gray-500">{person.role}</p>
              </div>
            ))}
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Write Amount"
              className="flex-1 p-3 bg-[#F4F7FE] rounded-lg border border-gray-200"
            />
            <button className="bg-[#1B254B] text-white px-6 py-3 rounded-lg flex items-center">
              Send <Send className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Balance History */}
        <div className="md:col-span-6 bg-white rounded-2xl p-6">
          <h2 className="text-[#2B3674] text-xl font-semibold mb-6">Balance History</h2>
          <Line
            data={balanceHistoryData}
            options={{
              responsive: true,
              plugins: {
                legend: { display: false },
              },
              scales: {
                y: { beginAtZero: true },
              },
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard

