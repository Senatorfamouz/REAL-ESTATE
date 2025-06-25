"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Search,
  MoreVertical,
  Eye,
  Edit3,
  Trash2,
  Download,
  DollarSign,
  Building,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Plus,
  FileText,
  TrendingUp,
  Package,
} from "lucide-react"

const AllOrdersListPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterType, setFilterType] = useState("all")
  const [filterAgent, setFilterAgent] = useState("all")
  const [sortBy, setSortBy] = useState("date")
  const [viewMode, setViewMode] = useState("list")
  const [dateRange, setDateRange] = useState("all")

  // Sample orders data
  const [orders, setOrders] = useState([
    {
      id: "ORD-2024-001",
      orderNumber: "ORD-2024-001",
      type: "Property Sale",
      propertyTitle: "Modern Family Home",
      propertyAddress: "123 Oak Street, Philadelphia, PA",
      clientName: "John Smith",
      clientEmail: "john.smith@email.com",
      clientPhone: "+1 (555) 123-4567",
      agentName: "Michael A. Miner",
      agentEmail: "michael@realestate.com",
      orderValue: 650000,
      commission: 32500,
      status: "Completed",
      priority: "High",
      orderDate: "2024-01-15",
      completionDate: "2024-01-20",
      paymentStatus: "Paid",
      documents: ["Contract", "Deed", "Inspection Report"],
      notes: "Smooth transaction, client very satisfied",
    },
    {
      id: "ORD-2024-002",
      orderNumber: "ORD-2024-002",
      type: "Property Rental",
      propertyTitle: "Downtown Luxury Condo",
      propertyAddress: "456 Pine Avenue, Pittsburgh, PA",
      clientName: "Sarah Johnson",
      clientEmail: "sarah.j@email.com",
      clientPhone: "+1 (555) 234-5678",
      agentName: "Sarah Williams",
      agentEmail: "sarah@realestate.com",
      orderValue: 2800,
      commission: 280,
      status: "In Progress",
      priority: "Medium",
      orderDate: "2024-01-18",
      completionDate: null,
      paymentStatus: "Pending",
      documents: ["Lease Agreement", "Background Check"],
      notes: "Waiting for final approval from landlord",
    },
    {
      id: "ORD-2024-003",
      orderNumber: "ORD-2024-003",
      type: "Property Sale",
      propertyTitle: "Suburban Villa",
      propertyAddress: "789 Maple Drive, Harrisburg, PA",
      clientName: "Robert Chen",
      clientEmail: "robert.chen@email.com",
      clientPhone: "+1 (555) 345-6789",
      agentName: "David Chen",
      agentEmail: "david@realestate.com",
      orderValue: 780000,
      commission: 39000,
      status: "Pending",
      priority: "High",
      orderDate: "2024-01-20",
      completionDate: null,
      paymentStatus: "Not Started",
      documents: ["Initial Contract"],
      notes: "Buyer financing in progress",
    },
    {
      id: "ORD-2024-004",
      orderNumber: "ORD-2024-004",
      type: "Property Consultation",
      propertyTitle: "Commercial Building Assessment",
      propertyAddress: "321 Business District, Allentown, PA",
      clientName: "Emily Davis",
      clientEmail: "emily.davis@business.com",
      clientPhone: "+1 (555) 456-7890",
      agentName: "Emily Rodriguez",
      agentEmail: "emily@realestate.com",
      orderValue: 5000,
      commission: 1500,
      status: "Completed",
      priority: "Low",
      orderDate: "2024-01-10",
      completionDate: "2024-01-12",
      paymentStatus: "Paid",
      documents: ["Assessment Report", "Valuation"],
      notes: "Comprehensive commercial property analysis completed",
    },
    {
      id: "ORD-2024-005",
      orderNumber: "ORD-2024-005",
      type: "Property Sale",
      propertyTitle: "Waterfront Apartment",
      propertyAddress: "654 River View, Erie, PA",
      clientName: "Michael Wilson",
      clientEmail: "m.wilson@email.com",
      clientPhone: "+1 (555) 567-8901",
      agentName: "Robert Wilson",
      agentEmail: "robert@realestate.com",
      orderValue: 420000,
      commission: 21000,
      status: "Cancelled",
      priority: "Medium",
      orderDate: "2024-01-08",
      completionDate: null,
      paymentStatus: "Refunded",
      documents: ["Cancelled Contract"],
      notes: "Client decided not to proceed with purchase",
    },
    {
      id: "ORD-2024-006",
      orderNumber: "ORD-2024-006",
      type: "Property Rental",
      propertyTitle: "Historic Duplex",
      propertyAddress: "987 Elm Street, Reading, PA",
      clientName: "Lisa Thompson",
      clientEmail: "lisa.t@email.com",
      clientPhone: "+1 (555) 678-9012",
      agentName: "Lisa Thompson",
      agentEmail: "lisa@realestate.com",
      orderValue: 1800,
      commission: 180,
      status: "In Progress",
      priority: "Low",
      orderDate: "2024-01-22",
      completionDate: null,
      paymentStatus: "Pending",
      documents: ["Application", "Credit Check"],
      notes: "Tenant screening in progress",
    },
  ])

  const orderTypes = ["Property Sale", "Property Rental", "Property Consultation", "Property Management"]
  const agents = [
    "All Agents",
    "Michael A. Miner",
    "Sarah Williams",
    "David Chen",
    "Emily Rodriguez",
    "Robert Wilson",
    "Lisa Thompson",
  ]

  // Filter and search logic
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.propertyTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.agentName.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus =
      filterStatus === "all" || order.status.toLowerCase().replace(" ", "") === filterStatus.toLowerCase()
    const matchesType = filterType === "all" || order.type === filterType
    const matchesAgent = filterAgent === "all" || filterAgent === "All Agents" || order.agentName === filterAgent

    let matchesDate = true
    if (dateRange !== "all") {
      const orderDate = new Date(order.orderDate)
      const now = new Date()
      switch (dateRange) {
        case "today":
          matchesDate = orderDate.toDateString() === now.toDateString()
          break
        case "week":
          const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
          matchesDate = orderDate >= weekAgo
          break
        case "month":
          const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
          matchesDate = orderDate >= monthAgo
          break
      }
    }

    return matchesSearch && matchesStatus && matchesType && matchesAgent && matchesDate
  })

  // Sort logic
  const sortedOrders = [...filteredOrders].sort((a, b) => {
    switch (sortBy) {
      case "date":
        return new Date(b.orderDate) - new Date(a.orderDate)
      case "value":
        return b.orderValue - a.orderValue
      case "status":
        return a.status.localeCompare(b.status)
      case "client":
        return a.clientName.localeCompare(b.clientName)
      case "agent":
        return a.agentName.localeCompare(b.agentName)
      default:
        return 0
    }
  })

  const handleViewOrder = (orderId) => {
    console.log("View order:", orderId)
  }

  const handleEditOrder = (orderId) => {
    console.log("Edit order:", orderId)
  }

  const handleDeleteOrder = (orderId) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      setOrders(orders.filter((order) => order.id !== orderId))
    }
  }

  const handleExportOrders = () => {
    console.log("Export orders to CSV")
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "In Progress":
        return "bg-blue-100 text-blue-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="w-4 h-4" />
      case "In Progress":
        return <Clock className="w-4 h-4" />
      case "Pending":
        return <AlertCircle className="w-4 h-4" />
      case "Cancelled":
        return <XCircle className="w-4 h-4" />
      default:
        return <Package className="w-4 h-4" />
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPaymentStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Not Started":
        return "bg-gray-100 text-gray-800"
      case "Refunded":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  // Calculate statistics
  const totalOrders = orders.length
  const completedOrders = orders.filter((o) => o.status === "Completed").length
  const totalValue = orders.reduce((sum, order) => sum + order.orderValue, 0)
  const totalCommission = orders.reduce((sum, order) => sum + order.commission, 0)

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">All Orders</h1>
            <p className="text-gray-600">Manage all real estate transactions and orders</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleExportOrders}>
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              New Order
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Orders</p>
                  <p className="text-3xl font-bold text-gray-900">{totalOrders}</p>
                </div>
                <Package className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-3xl font-bold text-gray-900">{completedOrders}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Value</p>
                  <p className="text-3xl font-bold text-gray-900">{formatCurrency(totalValue)}</p>
                </div>
                <DollarSign className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Commission</p>
                  <p className="text-3xl font-bold text-gray-900">{formatCurrency(totalCommission)}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col md:flex-row gap-4 items-center flex-wrap">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search orders..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                  />
                </div>

                {/* Status Filter */}
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Status</option>
                  <option value="completed">Completed</option>
                  <option value="inprogress">In Progress</option>
                  <option value="pending">Pending</option>
                  <option value="cancelled">Cancelled</option>
                </select>

                {/* Type Filter */}
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Types</option>
                  {orderTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>

                {/* Agent Filter */}
                <select
                  value={filterAgent}
                  onChange={(e) => setFilterAgent(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {agents.map((agent) => (
                    <option key={agent} value={agent}>
                      {agent}
                    </option>
                  ))}
                </select>

                {/* Date Range Filter */}
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Time</option>
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                </select>

                {/* Sort By */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="date">Sort by Date</option>
                  <option value="value">Sort by Value</option>
                  <option value="status">Sort by Status</option>
                  <option value="client">Sort by Client</option>
                  <option value="agent">Sort by Agent</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  Grid
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  List
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Orders Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedOrders.map((order) => (
              <Card key={order.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{order.orderNumber}</h3>
                      <p className="text-sm text-gray-600">{order.type}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(order.priority)}`}
                      >
                        {order.priority}
                      </span>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="font-medium text-gray-900">{order.propertyTitle}</p>
                      <p className="text-sm text-gray-600 flex items-center gap-1">
                        <Building className="w-4 h-4" />
                        {order.propertyAddress}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Client</p>
                        <p className="font-medium">{order.clientName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Agent</p>
                        <p className="font-medium">{order.agentName}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Order Value</p>
                        <p className="font-bold text-green-600">{formatCurrency(order.orderValue)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Commission</p>
                        <p className="font-bold text-blue-600">{formatCurrency(order.commission)}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(order.status)}
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}
                        >
                          {order.status}
                        </span>
                      </div>
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPaymentStatusColor(order.paymentStatus)}`}
                      >
                        {order.paymentStatus}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Order Date: {formatDate(order.orderDate)}</span>
                      {order.completionDate && <span>Completed: {formatDate(order.completionDate)}</span>}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1" onClick={() => handleViewOrder(order.id)}>
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1" onClick={() => handleEditOrder(order.id)}>
                      <Edit3 className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Order Details
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Property
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Client
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Agent
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Value
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Payment
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {sortedOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{order.orderNumber}</div>
                            <div className="text-sm text-gray-500">{order.type}</div>
                            <div className="text-sm text-gray-500">{formatDate(order.orderDate)}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="max-w-xs">
                            <div className="text-sm font-medium text-gray-900 truncate">{order.propertyTitle}</div>
                            <div className="text-sm text-gray-500 truncate">{order.propertyAddress}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{order.clientName}</div>
                          <div className="text-sm text-gray-500">{order.clientEmail}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{order.agentName}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{formatCurrency(order.orderValue)}</div>
                          <div className="text-sm text-gray-500">Commission: {formatCurrency(order.commission)}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            {getStatusIcon(order.status)}
                            <span
                              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}
                            >
                              {order.status}
                            </span>
                          </div>
                          <div className="mt-1">
                            <span
                              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(order.priority)}`}
                            >
                              {order.priority} Priority
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPaymentStatusColor(order.paymentStatus)}`}
                          >
                            {order.paymentStatus}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm" onClick={() => handleViewOrder(order.id)}>
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => handleEditOrder(order.id)}>
                              <Edit3 className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <FileText className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeleteOrder(order.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Empty State */}
        {sortedOrders.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No orders found</h3>
              <p className="text-gray-600 mb-4">
                {searchTerm || filterStatus !== "all" || filterType !== "all" || filterAgent !== "all"
                  ? "Try adjusting your search or filter criteria."
                  : "Get started by creating your first order."}
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                New Order
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

export default AllOrdersListPage
// This code defines a React component for displaying a list of all orders in a real estate application.
// It includes features such as filtering, searching, sorting, and viewing order details.