"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Mail,
  Phone,
  MapPin,
  Edit3,
  Save,
  X,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  Building,
  Star,
  TrendingUp,
  Eye,
  Heart,
  Share2,
  MoreVertical,
  ArrowLeft,
} from "lucide-react"

const AgentDetail = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [agentData, setAgentData] = useState({
    agentName: "Michael A. Miner",
    agentEmail: "michaelminer@dabyagent.com",
    agentNumber: "+1 (555) 123-4567",
    propertiesNumber: "243",
    agentAddress: "123 Lincoln Drive, Harrisburg, PA 17101, United States",
    zipCode: "17101",
    city: "Harrisburg",
    country: "United States",
    facebookUrl: "https://facebook.com/michaelaminer",
    instagramUrl: "https://instagram.com/michaelaminer",
    twitterUrl: "https://twitter.com/michaelaminer",
    joinDate: "January 15, 2022",
    lastActive: "2 hours ago",
    status: "Active",
    rating: "4.8",
    totalSales: "$12.5M",
    avgPrice: "$485K",
    profileImage: "/placeholder.svg?height=120&width=120",
  })

  const [editData, setEditData] = useState(agentData)

  const handleEdit = () => {
    setIsEditing(true)
    setEditData(agentData)
  }

  const handleSave = () => {
    setAgentData(editData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditData(agentData)
    setIsEditing(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleGoBack = () => {
    console.log("Navigate back to agents list")
  }

  const stats = [
    { label: "Total Properties", value: agentData.propertiesNumber, icon: Building, color: "text-blue-600" },
    { label: "Total Sales", value: agentData.totalSales, icon: TrendingUp, color: "text-green-600" },
    { label: "Average Price", value: agentData.avgPrice, icon: Star, color: "text-purple-600" },
    { label: "Client Rating", value: agentData.rating, icon: Star, color: "text-yellow-600" },
  ]

  const recentProperties = [
    {
      id: 1,
      title: "Modern Family Home",
      price: "$650,000",
      location: "Downtown Harrisburg",
      status: "Sold",
      image: "/placeholder.svg?height=80&width=120",
      date: "2 days ago",
    },
    {
      id: 2,
      title: "Luxury Apartment",
      price: "$420,000",
      location: "Midtown District",
      status: "Active",
      image: "/placeholder.svg?height=80&width=120",
      date: "1 week ago",
    },
    {
      id: 3,
      title: "Suburban Villa",
      price: "$780,000",
      location: "West End",
      status: "Pending",
      image: "/placeholder.svg?height=80&width=120",
      date: "2 weeks ago",
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Sold":
        return "bg-green-100 text-green-800"
      case "Active":
        return "bg-blue-100 text-blue-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" onClick={handleGoBack}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Agent Details</h1>
              <p className="text-gray-600">Complete agent profile and performance overview</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Agent Profile */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  {/* Profile Picture */}
                  <div className="relative mx-auto mb-4">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold overflow-hidden">
                      {agentData.profileImage ? (
                        <img
                          src={agentData.profileImage || "/placeholder.svg"}
                          alt={agentData.agentName}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        agentData.agentName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                      )}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 border-4 border-white rounded-full"></div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-1">{agentData.agentName}</h2>
                  <p className="text-gray-600 mb-2">Real Estate Agent</p>
                  <div className="flex items-center justify-center gap-1 mb-4">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{agentData.rating}</span>
                    <span className="text-sm text-gray-500">(127 reviews)</span>
                  </div>

                  {/* Status Badge */}
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-4">
                    {agentData.status}
                  </span>

                  {/* Contact Info */}
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{agentData.agentEmail}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{agentData.agentNumber}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                      <span className="text-sm text-gray-600">{agentData.agentAddress}</span>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="mt-6">
                    <p className="text-sm font-medium text-gray-700 mb-3">Social Media</p>
                    <div className="flex justify-center gap-3">
                      {agentData.facebookUrl && (
                        <a
                          href={agentData.facebookUrl}
                          className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                        >
                          <Facebook className="w-5 h-5" />
                        </a>
                      )}
                      {agentData.instagramUrl && (
                        <a
                          href={agentData.instagramUrl}
                          className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                      )}
                      {agentData.twitterUrl && (
                        <a
                          href={agentData.twitterUrl}
                          className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white hover:bg-green-700 transition-colors cursor-pointer">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 space-y-2">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contact Agent
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Heart className="w-4 h-4 mr-2" />
                      Add to Favorites
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Joined</span>
                  <span className="text-sm font-medium">{agentData.joinDate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Last Active</span>
                  <span className="text-sm font-medium">{agentData.lastActive}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Location</span>
                  <span className="text-sm font-medium">{agentData.city}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Specialization</span>
                  <span className="text-sm font-medium">Residential</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Details and Performance */}
          <div className="lg:col-span-2 space-y-6">
            {/* Performance Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Agent Information */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Agent Information</CardTitle>
                {!isEditing ? (
                  <Button onClick={handleEdit} variant="outline" size="sm">
                    <Edit3 className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button onClick={handleSave} size="sm">
                      <Save className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                    <Button onClick={handleCancel} variant="outline" size="sm">
                      <X className="h-4 w-4 mr-2" />
                      Cancel
                    </Button>
                  </div>
                )}
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Agent Name</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="agentName"
                        value={editData.agentName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <p className="px-3 py-2 bg-gray-50 rounded-lg">{agentData.agentName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Agent Email</label>
                    {isEditing ? (
                      <input
                        type="email"
                        name="agentEmail"
                        value={editData.agentEmail}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <p className="px-3 py-2 bg-gray-50 rounded-lg">{agentData.agentEmail}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Agent Number</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="agentNumber"
                        value={editData.agentNumber}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <p className="px-3 py-2 bg-gray-50 rounded-lg">{agentData.agentNumber}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Properties Number</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="propertiesNumber"
                        value={editData.propertiesNumber}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <p className="px-3 py-2 bg-gray-50 rounded-lg">{agentData.propertiesNumber}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Agent Address</label>
                  {isEditing ? (
                    <textarea
                      name="agentAddress"
                      value={editData.agentAddress}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  ) : (
                    <p className="px-3 py-2 bg-gray-50 rounded-lg">{agentData.agentAddress}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Zip Code</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="zipCode"
                        value={editData.zipCode}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <p className="px-3 py-2 bg-gray-50 rounded-lg">{agentData.zipCode}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="city"
                        value={editData.city}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <p className="px-3 py-2 bg-gray-50 rounded-lg">{agentData.city}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="country"
                        value={editData.country}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <p className="px-3 py-2 bg-gray-50 rounded-lg">{agentData.country}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Facebook URL</label>
                    {isEditing ? (
                      <input
                        type="url"
                        name="facebookUrl"
                        value={editData.facebookUrl}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <p className="px-3 py-2 bg-gray-50 rounded-lg text-sm truncate">{agentData.facebookUrl}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Instagram URL</label>
                    {isEditing ? (
                      <input
                        type="url"
                        name="instagramUrl"
                        value={editData.instagramUrl}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <p className="px-3 py-2 bg-gray-50 rounded-lg text-sm truncate">{agentData.instagramUrl}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Twitter URL</label>
                    {isEditing ? (
                      <input
                        type="url"
                        name="twitterUrl"
                        value={editData.twitterUrl}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <p className="px-3 py-2 bg-gray-50 rounded-lg text-sm truncate">{agentData.twitterUrl}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Properties */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Recent Properties
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentProperties.map((property) => (
                    <div
                      key={property.id}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <img
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        className="w-20 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{property.title}</h4>
                        <p className="text-sm text-gray-600">{property.location}</p>
                        <p className="text-sm text-gray-500">{property.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{property.price}</p>
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(property.status)}`}
                        >
                          {property.status}
                        </span>
                      </div>
                      <Button variant="outline" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Button variant="outline">View All Properties</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgentDetail
