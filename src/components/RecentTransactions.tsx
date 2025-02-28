import type React from "react"
import { ArrowUpCircle, ArrowDownCircle } from "react-feather"

const RecentTransactions: React.FC = () => {
  const transactions = [
    { id: 1, description: "Grocery Store", date: "2023-06-01", amount: -50 },
    { id: 2, description: "Salary Deposit", date: "2023-05-31", amount: 3000 },
    { id: 3, description: "Electric Bill", date: "2023-05-30", amount: -100 },
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between">
            <div className="flex items-center">
              {transaction.amount > 0 ? (
                <ArrowUpCircle className="text-green-500 mr-2" />
              ) : (
                <ArrowDownCircle className="text-red-500 mr-2" />
              )}
              <div>
                <div>{transaction.description}</div>
                <div className="text-sm text-gray-500">{transaction.date}</div>
              </div>
            </div>
            <div className={transaction.amount > 0 ? "text-green-500" : "text-red-500"}>
              ${Math.abs(transaction.amount).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentTransactions

