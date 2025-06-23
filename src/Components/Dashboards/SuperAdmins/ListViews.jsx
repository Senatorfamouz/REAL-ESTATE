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
  Phone,
  Mail,
  MapPin,
  Shield,
  Users,
  Settings,
  Plus,
  UserCheck,
  UserX,
  Clock,
  Building,
} from "lucide-react"

const SubAdminListPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterRole, setFilterRole] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const [viewMode, setViewMode] = useState("grid") // grid or list

  // Sample sub admin data
  const [subAdmins, setSubAdmins] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice.johnson@realestate.com",
      phone: "+1 (555) 123-4567",
      role: "Regional Manager",
      department: "Sales Department",
      permissions: ["Manage Agents", "View Reports", "Edit Properties"],
      status: "Active",
      lastLogin: "2 hours ago",
      joinDate: "Jan 15, 2023",
      managedAgents: 12,
      managedProperties: 45,
      location: "Philadelphia, PA",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Robert Chen",
      email: "robert.chen@realestate.com",
      phone: "+1 (555) 234-5678",
      role: "Property Manager",
      department: "Property Management",
      permissions: ["Manage Properties", "View Analytics", "Handle Inquiries"],
      status: "Active",
      lastLogin: "1 hour ago",
      joinDate: "Mar 22, 2023",
      managedAgents: 8,
      managedProperties: 67,
      location: "Pittsburgh, PA",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "Sarah Williams",
      email: "sarah.williams@realestate.com",
      phone: "+1 (555) 345-6789",
      role: "Marketing Manager",
      department: "Marketing Department",
      permissions: ["Manage Marketing", "View Reports", "Edit Content"],
      status: "Inactive",
      lastLogin: "3 days ago",
      joinDate: "Aug 10, 2022",
      managedAgents: 15,
      managedProperties: 23,
      location: "Harrisburg, PA",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 4,
      name: "Michael Rodriguez",
      email: "michael.rodriguez@realestate.com",
      phone: "+1 (555) 456-7890",
      role: "Operations Manager",
      department: "Operations",
      permissions: ["Full Access", "Manage Users", "System Settings"],
      status: "Active",
      lastLogin: "30 minutes ago",
      joinDate: "Dec 5, 2021",
      managedAgents: 25,
      managedProperties: 89,
      location: "Allentown, PA",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 5,
      name: "Emily Davis",
      email: "emily.davis@realestate.com",
      phone: "+1 (555) 567-8901",
      role: "Customer Support Manager",
      department: "Customer Service",
      permissions: ["Handle Support", "View Customer Data", "Manage Tickets"],
      status: "Active",
      lastLogin: "5 hours ago",
      joinDate: "May 18, 2023",
      managedAgents: 6,
      managedProperties: 12,
      location: "Erie, PA",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 6,
      name: "David Thompson",
      email: "david.thompson@realestate.com",
      phone: "+1 (555) 678-9012",
      role: "Finance Manager",
      department: "Finance Department",
      permissions: ["View Financial Reports", "Manage Transactions", "Audit Access"],
      status: "Suspended",
      lastLogin: "1 week ago",
      joinDate: "Sep 30, 2022",
      managedAgents: 3,
      managedProperties: 8,
      location: "Reading, PA",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ])

  const roles = [
    "Regional Manager",
    "Property Manager",
    "Marketing Manager",
    "Operations Manager",
    "Customer Support Manager",
    "Finance Manager",
  ]

  // Filter and search logic
  const filteredSubAdmins = subAdmins.filter((admin) => {
    const matchesSearch =
      admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.department.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || admin.status.toLowerCase() === filterStatus.toLowerCase()
    const matchesRole = filterRole === "all" || admin.role === filterRole
    return matchesSearch && matchesStatus && matchesRole
  })

  // Sort logic
  const sortedSubAdmins = [...filteredSubAdmins].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name)
      case "role":
        return a.role.localeCompare(b.role)
      case "agents":
        return b.managedAgents - a.managedAgents
      case "properties":
        return b.managedProperties - a.managedProperties
      case "joinDate":
        return new Date(b.joinDate) - new Date(a.joinDate)
      default:
        return 0
    }
  })

  const handleViewSubAdmin = (adminId) => {
    console.log("View sub admin:", adminId)
  }

  const handleEditSubAdmin = (adminId) => {
    console.log("Edit sub admin:", adminId)
  }

  const handleDeleteSubAdmin = (adminId) => {
    if (window.confirm("Are you sure you want to delete this sub admin?")) {
      setSubAdmins(subAdmins.filter((admin) => admin.id !== adminId))
    }
  }

  const handleToggleStatus = (adminId) => {
    setSubAdmins(
      subAdmins.map((admin) =>
        admin.id === adminId
          ? {
              ...admin,
              status: admin.status === "Active" ? "Inactive" : "Active",
            }
          : admin,
      ),
    )
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Inactive":
        return "bg-gray-100 text-gray-800"
      case "Suspended":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "Active":
        return <UserCheck className="w-4 h-4" />
      case "Inactive":
        return <Clock className="w-4 h-4" />
      case "Suspended":
        return <UserX className="w-4 h-4" />
      default:
        return <Users className="w-4 h-4" />
    }
  }

  const getRoleIcon = (role) => {
    switch (role) {
      case "Regional Manager":
        return <Building className="w-4 h-4 text-blue-600" />
      case "Property Manager":
        return <Building className="w-4 h-4 text-green-600" />
      case "Marketing Manager":
        return <Users className="w-4 h-4 text-purple-600" />
      case "Operations Manager":
        return <Settings className="w-4 h-4 text-orange-600" />
      case "Customer Support Manager":
        return <Users className="w-4 h-4 text-pink-600" />
      case "Finance Manager":
        return <Shield className="w-4 h-4 text-red-600" />
      default:
        return <Shield className="w-4 h-4 text-gray-600" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Sub Administrators</h1>
            <p className="text-gray-600">Manage your sub-admin team and their permissions</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add New Sub Admin
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Sub Admins</p>
                  <p className="text-3xl font-bold text-gray-900">{subAdmins.length}</p>
                </div>
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {subAdmins.filter((a) => a.status === "Active").length}
                  </p>
                </div>
                <UserCheck className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Agents Managed</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {subAdmins.reduce((sum, admin) => sum + admin.managedAgents, 0)}
                  </p>
                </div>
                <Users className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Properties Managed</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {subAdmins.reduce((sum, admin) => sum + admin.managedProperties, 0)}
                  </p>
                </div>
                <Building className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search sub admins..."
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
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="suspended">Suspended</option>
                </select>

                {/* Role Filter */}
                <select
                  value={filterRole}
                  onChange={(e) => setFilterRole(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Roles</option>
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>

                {/* Sort By */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="name">Sort by Name</option>
                  <option value="role">Sort by Role</option>
                  <option value="agents">Sort by Agents</option>
                  <option value="properties">Sort by Properties</option>
                  <option value="joinDate">Sort by Join Date</option>
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

        {/* Sub Admins Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedSubAdmins.map((admin) => (
              <Card key={admin.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {admin.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{admin.name}</h3>
                        <div className="flex items-center gap-2">
                          {getRoleIcon(admin.role)}
                          <span className="text-sm text-gray-600">{admin.role}</span>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span className="truncate">{admin.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>{admin.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{admin.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Building className="w-4 h-4" />
                      <span>{admin.department}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{admin.managedAgents}</p>
                      <p className="text-xs text-gray-600">Agents</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">{admin.managedProperties}</p>
                      <p className="text-xs text-gray-600">Properties</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(admin.status)}
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(admin.status)}`}
                      >
                        {admin.status}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">{admin.lastLogin}</span>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">Permissions:</p>
                    <div className="flex flex-wrap gap-1">
                      {admin.permissions.slice(0, 2).map((permission, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800"
                        >
                          {permission}
                        </span>
                      ))}
                      {admin.permissions.length > 2 && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-600">
                          +{admin.permissions.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1" onClick={() => handleViewSubAdmin(admin.id)}>
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1" onClick={() => handleEditSubAdmin(admin.id)}>
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
                        Sub Admin
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Role & Department
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Contact
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Managed
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Login
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {sortedSubAdmins.map((admin) => (
                      <tr key={admin.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {admin.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{admin.name}</div>
                              <div className="text-sm text-gray-500">{admin.joinDate}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            {getRoleIcon(admin.role)}
                            <div>
                              <div className="text-sm font-medium text-gray-900">{admin.role}</div>
                              <div className="text-sm text-gray-500">{admin.department}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{admin.email}</div>
                          <div className="text-sm text-gray-500">{admin.phone}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <div>{admin.managedAgents} Agents</div>
                          <div>{admin.managedProperties} Properties</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            {getStatusIcon(admin.status)}
                            <span
                              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(admin.status)}`}
                            >
                              {admin.status}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{admin.lastLogin}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm" onClick={() => handleViewSubAdmin(admin.id)}>
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => handleEditSubAdmin(admin.id)}>
                              <Edit3 className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleToggleStatus(admin.id)}
                              className={admin.status === "Active" ? "text-red-600" : "text-green-600"}
                            >
                              {admin.status === "Active" ? (
                                <UserX className="w-4 h-4" />
                              ) : (
                                <UserCheck className="w-4 h-4" />
                              )}
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeleteSubAdmin(admin.id)}
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
        {sortedSubAdmins.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <Shield className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No sub administrators found</h3>
              <p className="text-gray-600 mb-4">
                {searchTerm || filterStatus !== "all" || filterRole !== "all"
                  ? "Try adjusting your search or filter criteria."
                  : "Get started by adding your first sub administrator."}
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Add New Sub Admin
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

export default SubAdminListPage
