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
  Upload,
  DollarSign,
  Building,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Plus,
  FileText,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownLeft,
  Receipt,
} from "lucide-react"

const TransactionPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterType, setFilterType] = useState("all")
  const [filterCategory, setFilterCategory] = useState("all")
  const [sortBy, setSortBy] = useState("date")
  const [viewMode, setViewMode] = useState("list")
  const [dateRange, setDateRange] = useState("all")

  // Sample transaction data
  const [transactions, setTransactions] = useState([
    {
      id: "TXN-2024-001",
      transactionId: "TXN-2024-001",
      type: "Income",
      category: "Commission",
      description: "Property Sale Commission - Modern Family Home",
      amount: 32500,
      currency: "USD",
      status: "Completed",
      paymentMethod: "Bank Transfer",
      propertyId: "PROP-001",
      propertyTitle: "Modern Family Home",
      clientName: "John Smith",
      agentName: "Michael A. Miner",
      orderId: "ORD-2024-001",
      date: "2024-01-20",
      dueDate: "2024-01-20",
      completedDate: "2024-01-20",
      reference: "REF-001-2024",
      notes: "Commission payment for successful property sale",
      attachments: ["invoice.pdf", "receipt.pdf"],
      tags: ["commission", "sale", "completed"],
    },
    {
      id: "TXN-2024-002",
      transactionId: "TXN-2024-002",
      type: "Expense",
      category: "Marketing",
      description: "Property Photography and Virtual Tour",
      amount: 850,
      currency: "USD",
      status: "Pending",
      paymentMethod: "Credit Card",
      propertyId: "PROP-002",
      propertyTitle: "Downtown Luxury Condo",
      clientName: "Sarah Johnson",
      agentName: "Sarah Williams",
      orderId: "ORD-2024-002",
      date: "2024-01-18",
      dueDate: "2024-01-25",
      completedDate: null,
      reference: "REF-002-2024",
      notes: "Professional photography for property listing",
      attachments: ["quote.pdf"],
      tags: ["marketing", "photography", "pending"],
    },
    {
      id: "TXN-2024-003",
      transactionId: "TXN-2024-003",
      type: "Income",
      category: "Rental",
      description: "Monthly Rental Income - Waterfront Apartment",
      amount: 2800,
      currency: "USD",
      status: "Completed",
      paymentMethod: "ACH Transfer",
      propertyId: "PROP-005",
      propertyTitle: "Waterfront Apartment",
      clientName: "Michael Wilson",
      agentName: "Robert Wilson",
      orderId: "ORD-2024-005",
      date: "2024-01-15",
      dueDate: "2024-01-15",
      completedDate: "2024-01-15",
      reference: "REF-003-2024",
      notes: "Monthly rental payment received",
      attachments: ["rental_receipt.pdf"],
      tags: ["rental", "monthly", "completed"],
    },
    {
      id: "TXN-2024-004",
      transactionId: "TXN-2024-004",
      type: "Expense",
      category: "Maintenance",
      description: "Property Maintenance - HVAC Repair",
      amount: 1200,
      currency: "USD",
      status: "Completed",
      paymentMethod: "Check",
      propertyId: "PROP-003",
      propertyTitle: "Suburban Villa",
      clientName: "Robert Chen",
      agentName: "David Chen",
      orderId: null,
      date: "2024-01-12",
      dueDate: "2024-01-12",
      completedDate: "2024-01-12",
      reference: "REF-004-2024",
      notes: "Emergency HVAC repair completed",
      attachments: ["invoice.pdf", "warranty.pdf"],
      tags: ["maintenance", "hvac", "emergency"],
    },
    {
      id: "TXN-2024-005",
      transactionId: "TXN-2024-005",
      type: "Income",
      category: "Consultation",
      description: "Property Valuation Consultation Fee",
      amount: 1500,
      currency: "USD",
      status: "Overdue",
      paymentMethod: "Invoice",
      propertyId: "PROP-004",
      propertyTitle: "Commercial Building",
      clientName: "Emily Davis",
      agentName: "Emily Rodriguez",
      orderId: "ORD-2024-004",
      date: "2024-01-10",
      dueDate: "2024-01-17",
      completedDate: null,
      reference: "REF-005-2024",
      notes: "Payment overdue - follow up required",
      attachments: ["invoice.pdf"],
      tags: ["consultation", "overdue", "follow-up"],
    },
    {
      id: "TXN-2024-006",
      transactionId: "TXN-2024-006",
      type: "Expense",
      category: "Legal",
      description: "Legal Fees - Contract Review",
      amount: 750,
      currency: "USD",
      status: "Pending",
      paymentMethod: "Bank Transfer",
      propertyId: "PROP-006",
      propertyTitle: "Historic Duplex",
      clientName: "Lisa Thompson",
      agentName: "Lisa Thompson",
      orderId: "ORD-2024-006",
      date: "2024-01-22",
      dueDate: "2024-01-29",
      completedDate: null,
      reference: "REF-006-2024",
      notes: "Legal review for complex property transaction",
      attachments: ["contract.pdf"],
      tags: ["legal", "contract", "review"],
    },
  ])

  const transactionTypes = ["Income", "Expense"]
  const transactionCategories = [
    "Commission",
    "Rental",
    "Consultation",
    "Marketing",
    "Maintenance",
    "Legal",
    "Insurance",
    "Utilities",
    "Office Expenses",
    "Travel",
  ]
  const paymentMethods = ["Bank Transfer", "Credit Card", "ACH Transfer", "Check", "Cash", "Wire Transfer", "Invoice"]

  // Filter and search logic
  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.transactionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.agentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.propertyTitle.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus =
      filterStatus === "all" || transaction.status.toLowerCase().replace(" ", "") === filterStatus.toLowerCase()
    const matchesType = filterType === "all" || transaction.type === filterType
    const matchesCategory = filterCategory === "all" || transaction.category === filterCategory

    let matchesDate = true
    if (dateRange !== "all") {
      const transactionDate = new Date(transaction.date)
      const now = new Date()
      switch (dateRange) {
        case "today":
          matchesDate = transactionDate.toDateString() === now.toDateString()
          break
        case "week":
          const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
          matchesDate = transactionDate >= weekAgo
          break
        case "month":
          const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
          matchesDate = transactionDate >= monthAgo
          break
      }
    }

    return matchesSearch && matchesStatus && matchesType && matchesCategory && matchesDate
  })

  // Sort logic
  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    switch (sortBy) {
      case "date":
        return new Date(b.date) - new Date(a.date)
      case "amount":
        return b.amount - a.amount
      case "status":
        return a.status.localeCompare(b.status)
      case "type":
        return a.type.localeCompare(b.type)
      case "category":
        return a.category.localeCompare(b.category)
      default:
        return 0
    }
  })

  const handleViewTransaction = (transactionId) => {
    console.log("View transaction:", transactionId)
  }

  const handleEditTransaction = (transactionId) => {
    console.log("Edit transaction:", transactionId)
  }

  const handleDeleteTransaction = (transactionId) => {
    if (window.confirm("Are you sure you want to delete this transaction?")) {
      setTransactions(transactions.filter((transaction) => transaction.id !== transactionId))
    }
  }

  const handleExportTransactions = () => {
    console.log("Export transactions to CSV")
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Overdue":
        return "bg-red-100 text-red-800"
      case "Cancelled":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="w-4 h-4" />
      case "Pending":
        return <Clock className="w-4 h-4" />
      case "Overdue":
        return <AlertCircle className="w-4 h-4" />
      case "Cancelled":
        return <XCircle className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  const getTypeColor = (type) => {
    return type === "Income" ? "text-green-600" : "text-red-600"
  }

  const getTypeIcon = (type) => {
    return type === "Income" ? (
      <ArrowUpRight className="w-4 h-4 text-green-600" />
    ) : (
      <ArrowDownLeft className="w-4 h-4 text-red-600" />
    )
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Commission":
        return <DollarSign className="w-4 h-4" />
      case "Rental":
        return <Building className="w-4 h-4" />
      case "Marketing":
        return <TrendingUp className="w-4 h-4" />
      case "Legal":
        return <FileText className="w-4 h-4" />
      case "Maintenance":
        return <Building className="w-4 h-4" />
      default:
        return <Receipt className="w-4 h-4" />
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
  const totalIncome = transactions
    .filter((t) => t.type === "Income" && t.status === "Completed")
    .reduce((sum, t) => sum + t.amount, 0)
  const totalExpenses = transactions
    .filter((t) => t.type === "Expense" && t.status === "Completed")
    .reduce((sum, t) => sum + t.amount, 0)
  const pendingAmount = transactions.filter((t) => t.status === "Pending").reduce((sum, t) => sum + t.amount, 0)
  const overdueAmount = transactions.filter((t) => t.status === "Overdue").reduce((sum, t) => sum + t.amount, 0)

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Transactions</h1>
            <p className="text-gray-600">Manage all financial transactions and payments</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleExportTransactions}>
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button variant="outline">
              <Upload className="w-4 h-4 mr-2" />
              Import
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              New Transaction
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Income</p>
                  <p className="text-3xl font-bold text-green-600">{formatCurrency(totalIncome)}</p>
                </div>
                <div className="p-3 bg-green-100 rounded-full">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Expenses</p>
                  <p className="text-3xl font-bold text-red-600">{formatCurrency(totalExpenses)}</p>
                </div>
                <div className="p-3 bg-red-100 rounded-full">
                  <TrendingDown className="h-6 w-6 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Net Profit</p>
                  <p className="text-3xl font-bold text-blue-600">{formatCurrency(totalIncome - totalExpenses)}</p>
                </div>
                <div className="p-3 bg-blue-100 rounded-full">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Amount</p>
                  <p className="text-3xl font-bold text-yellow-600">{formatCurrency(pendingAmount)}</p>
                </div>
                <div className="p-3 bg-yellow-100 rounded-full">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <ArrowUpRight className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Record Income</p>
                  <p className="text-sm text-gray-600">Add new income transaction</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <ArrowDownLeft className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Record Expense</p>
                  <p className="text-sm text-gray-600">Add new expense transaction</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Receipt className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Generate Invoice</p>
                  <p className="text-sm text-gray-600">Create client invoice</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <FileText className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Financial Report</p>
                  <p className="text-sm text-gray-600">View detailed reports</p>
                </div>
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
                    placeholder="Search transactions..."
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
                  <option value="pending">Pending</option>
                  <option value="overdue">Overdue</option>
                  <option value="cancelled">Cancelled</option>
                </select>

                {/* Type Filter */}
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Types</option>
                  {transactionTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>

                {/* Category Filter */}
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Categories</option>
                  {transactionCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
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
                  <option value="amount">Sort by Amount</option>
                  <option value="status">Sort by Status</option>
                  <option value="type">Sort by Type</option>
                  <option value="category">Sort by Category</option>
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

        {/* Transactions Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedTransactions.map((transaction) => (
              <Card key={transaction.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded-lg">{getCategoryIcon(transaction.category)}</div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{transaction.transactionId}</h3>
                        <p className="text-sm text-gray-600">{transaction.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getTypeIcon(transaction.type)}
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <p className="font-medium text-gray-900 line-clamp-2">{transaction.description}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Amount</span>
                      <span className={`font-bold text-lg ${getTypeColor(transaction.type)}`}>
                        {transaction.type === "Income" ? "+" : "-"}
                        {formatCurrency(transaction.amount)}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Property</span>
                        <p className="font-medium truncate">{transaction.propertyTitle}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Client</span>
                        <p className="font-medium truncate">{transaction.clientName}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Agent</span>
                        <p className="font-medium truncate">{transaction.agentName}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Payment Method</span>
                        <p className="font-medium">{transaction.paymentMethod}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(transaction.status)}
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}
                        >
                          {transaction.status}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">{formatDate(transaction.date)}</span>
                    </div>

                    {transaction.dueDate && transaction.status !== "Completed" && (
                      <div className="text-sm">
                        <span className="text-gray-600">Due Date: </span>
                        <span
                          className={
                            new Date(transaction.dueDate) < new Date() ? "text-red-600 font-medium" : "text-gray-900"
                          }
                        >
                          {formatDate(transaction.dueDate)}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => handleViewTransaction(transaction.id)}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => handleEditTransaction(transaction.id)}
                    >
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
                        Transaction
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Property
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Client/Agent
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {sortedTransactions.map((transaction) => (
                      <tr key={transaction.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-100 rounded-lg">{getCategoryIcon(transaction.category)}</div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">{transaction.transactionId}</div>
                              <div className="text-sm text-gray-500">{transaction.category}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="max-w-xs">
                            <div className="text-sm font-medium text-gray-900 truncate">{transaction.description}</div>
                            <div className="text-sm text-gray-500">{transaction.paymentMethod}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            {getTypeIcon(transaction.type)}
                            <span className={`font-bold ${getTypeColor(transaction.type)}`}>
                              {transaction.type === "Income" ? "+" : "-"}
                              {formatCurrency(transaction.amount)}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="max-w-xs">
                            <div className="text-sm font-medium text-gray-900 truncate">
                              {transaction.propertyTitle}
                            </div>
                            <div className="text-sm text-gray-500">ID: {transaction.propertyId}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{transaction.clientName}</div>
                          <div className="text-sm text-gray-500">{transaction.agentName}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            {getStatusIcon(transaction.status)}
                            <span
                              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}
                            >
                              {transaction.status}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{formatDate(transaction.date)}</div>
                          {transaction.dueDate && transaction.status !== "Completed" && (
                            <div className="text-sm text-gray-500">Due: {formatDate(transaction.dueDate)}</div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm" onClick={() => handleViewTransaction(transaction.id)}>
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => handleEditTransaction(transaction.id)}>
                              <Edit3 className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Receipt className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeleteTransaction(transaction.id)}
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
        {sortedTransactions.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <Receipt className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No transactions found</h3>
              <p className="text-gray-600 mb-4">
                {searchTerm ||
                filterStatus !== "all" ||
                filterType !== "all" ||
                filterCategory !== "all" ||
                dateRange !== "all"
                  ? "Try adjusting your search or filter criteria."
                  : "Get started by recording your first transaction."}
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                New Transaction
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

export default TransactionPage
