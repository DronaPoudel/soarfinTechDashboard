import { Suspense, lazy } from "react"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"

const Dashboard = lazy(() => import("./pages/Dashboard"))
const Settings = lazy(() => import("./pages/Settings"))

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-blue-600">
              Financial Dashboard
            </Link>
            <div>
              <Link to="/" className="mr-4 hover:text-blue-600">
                Dashboard
              </Link>
              <Link to="/settings" className="hover:text-blue-600">
                Settings
              </Link>
            </div>
          </div>
        </nav>
        <Suspense fallback={<div className="container mx-auto px-4 py-8">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}

export default App

