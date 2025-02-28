import type React from "react"
import { Link } from "react-router-dom"

const MyCards: React.FC = () => {
  const cards = [
    { id: 1, balance: 5000, name: "John Doe", number: "**** **** **** 1234" },
    { id: 2, balance: 3000, name: "John Doe", number: "**** **** **** 5678" },
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">My Cards</h2>
      <div className="space-y-4">
        {cards.map((card) => (
          <div key={card.id} className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg text-white">
            <div className="text-2xl font-bold">${card.balance.toLocaleString()}</div>
            <div>{card.name}</div>
            <div>{card.number}</div>
          </div>
        ))}
      </div>
      <Link to="/cards" className="mt-4 inline-block text-blue-500 hover:underline">
        See All
      </Link>
    </div>
  )
}

export default MyCards

