"use client"

import type React from "react"
import { useState } from "react"

const QuickTransfer: React.FC = () => {
  const [amount, setAmount] = useState("")

  const contacts = [
    { id: 1, name: "Alice Johnson", role: "Friend", avatar: "https://i.pravatar.cc/100?img=1" },
    { id: 2, name: "Bob Smith", role: "Colleague", avatar: "https://i.pravatar.cc/100?img=2" },
    { id: 3, name: "Carol Williams", role: "Family", avatar: "https://i.pravatar.cc/100?img=3" },
  ]

  const handleSend = () => {
    // Implement send functionality here
    console.log("Sending", amount)
    setAmount("")
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Quick Transfer</h2>
      <div className="flex space-x-4 mb-4">
        {contacts.map((contact) => (
          <div key={contact.id} className="text-center">
            <img
              src={contact.avatar || "/placeholder.svg"}
              alt={contact.name}
              className="w-12 h-12 rounded-full mx-auto"
            />
            <div className="text-sm mt-1">{contact.name}</div>
            <div className="text-xs text-gray-500">{contact.role}</div>
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="flex-grow p-2 border rounded"
          aria-label="Transfer amount"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-label="Send transfer"
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default QuickTransfer

