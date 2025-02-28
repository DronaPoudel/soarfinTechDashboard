import type React from "react"
import MyCards from "../components/MyCards"
import RecentTransactions from "../components/RecentTransactions"
import WeeklyActivityChart from "../components/WeeklyActivityChart"
import ExpenseStatistics from "../components/ExpenseStatistics"
import QuickTransfer from "../components/QuickTransfer"
import BalanceHistoryChart from "../components/BalanceHistoryChart"

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <MyCards />
        </div>
        <div className="lg:row-span-2">
          <RecentTransactions />
        </div>
        <div>
          <WeeklyActivityChart />
        </div>
        <div>
          <ExpenseStatistics />
        </div>
        <div>
          <QuickTransfer />
        </div>
        <div className="lg:col-span-2">
          <BalanceHistoryChart />
        </div>
      </div>
    </div>
  )
}

export default Dashboard

