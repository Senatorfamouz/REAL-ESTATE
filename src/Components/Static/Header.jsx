"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Phone, User, Search } from "lucide-react"

export default function Header() {
  const [activeTab, setActiveTab] = useState("All Status")

  const navigationItems = [
    { name: "HOME", hasDropdown: true },
    { name: "PROPERTIES", hasDropdown: true },
    { name: "PROPERTY", hasDropdown: true },
    { name: "REALTOR", hasDropdown: true },
    { name: "OTHERS", hasDropdown: true },
  ]

  const searchTabs = ["All Status", "For Rent", "For Sale"]

  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation Bar */}
        <nav className="bg-transparent py-4 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-white text-2xl font-bold flex items-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                </div>
                houzez
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button className="text-white hover:text-blue-200 flex items-center space-x-1 py-2">
                    <span className="font-medium">{item.name}</span>
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              {/* Phone Number */}
              <div className="hidden md:flex items-center text-white space-x-2">
                <Phone className="w-4 h-4" />
                <span>(800) 987 6543</span>
              </div>

              {/* User Icon */}
              <button className="text-white hover:text-blue-200">
                <User className="w-5 h-5" />
              </button>

              {/* Create Listing Button */}
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
              >
                CREATE A LISTING
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center px-4 py-20 lg:py-32">
          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold text-white text-center mb-6">Welcome To Houzez</h1>

          {/* Description */}
          <p className="text-lg lg:text-xl text-white text-center max-w-4xl mb-16 leading-relaxed">
            Houzez is an innovative real estate WordPress theme that helps to ensure your
            <br />
            website's success in this super-competitive market.
          </p>

          {/* Search Form */}
          <div className="w-full max-w-6xl">
            {/* Search Tabs */}
            <div className="flex mb-0">
              {searchTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 font-medium rounded-t-lg ${
                    activeTab === tab ? "bg-white text-gray-900" : "bg-blue-800 text-white hover:bg-blue-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Form */}
            <div className="bg-white rounded-lg rounded-tl-none p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* Looking For */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 uppercase tracking-wide">LOOKING FOR</label>
                  <select className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Property Type</option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Condo</option>
                    <option>Villa</option>
                  </select>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 uppercase tracking-wide">LOCATION</label>
                  <select className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Cities</option>
                    <option>New York</option>
                    <option>Los Angeles</option>
                    <option>Chicago</option>
                    <option>Miami</option>
                  </select>
                </div>

                {/* Property Size */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 uppercase tracking-wide">PROPERTY SIZE</label>
                  <select className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Bedrooms</option>
                    <option>1 Bedroom</option>
                    <option>2 Bedrooms</option>
                    <option>3 Bedrooms</option>
                    <option>4+ Bedrooms</option>
                  </select>
                </div>

                {/* Your Budget */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 uppercase tracking-wide">YOUR BUDGET</label>
                  <select className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Max. Price</option>
                    <option>$100,000</option>
                    <option>$250,000</option>
                    <option>$500,000</option>
                    <option>$1,000,000+</option>
                  </select>
                </div>

                {/* Search Button */}
                <div className="flex items-end">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md font-medium flex items-center justify-center space-x-2">
                    <Search className="w-5 h-5" />
                    <span>Search</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
