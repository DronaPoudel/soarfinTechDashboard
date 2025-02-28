"use client"

import type React from "react"
import { useState } from "react"
import { Tabs, TabList, Tab, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [formData, setFormData] = useState({
    name: "John Doe",
    username: "johndoe",
    email: "john@example.com",
    password: "",
    dateOfBirth: "1990-01-01",
    presentAddress: "123 Main St",
    permanentAddress: "456 Oak Ave",
    city: "New York",
    postalCode: "10001",
    country: "USA",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement form submission logic here
    console.log("Form submitted:", formData)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
        <TabList className="flex mb-4">
          <Tab className="mr-4 px-4 py-2 bg-gray-200 rounded cursor-pointer">Edit Profile</Tab>
          <Tab className="mr-4 px-4 py-2 bg-gray-200 rounded cursor-pointer">Preference</Tab>
          <Tab className="px-4 py-2 bg-gray-200 rounded cursor-pointer">Security</Tab>
        </TabList>

        <TabPanel>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="username" className="block mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            {/* Add more form fields here */}
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Save
            </button>
          </form>
        </TabPanel>

        <TabPanel>
          <h2 className="text-xl font-semibold mb-4">Preferences</h2>
          {/* Add preference settings here */}
        </TabPanel>

        <TabPanel>
          <h2 className="text-xl font-semibold mb-4">Security</h2>
          {/* Add security settings here */}
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default Settings

