import type React from "react"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const WeeklyActivityChart: React.FC = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Deposits",
        data: [1000, 1500, 800, 1200, 2000, 500, 700],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Withdrawals",
        data: [500, 700, 600, 800, 1000, 400, 300],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  }

  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Weekly Activity</h2>
      <Bar data={data} options={options} />
    </div>
  )
}

export default WeeklyActivityChart

