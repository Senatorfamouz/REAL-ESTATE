"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Users,
  UserX,
  UserCheck,
  Building,
  Search,
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Mail,
  Phone,
} from "lucide-react"

export default function AdminManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [roleFilter, setRoleFilter] = useState("all")

  // Sample admin data
  const admins = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@company.com",
      phone: "+234 801 234 5678",
      address: "123 Victoria Island, Lagos",
      role: "Super Admin",
      status: "active",
      dateAdded: "2023-01-15",
      propertiesManaged: 45,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.johnson@company.com",
      phone: "+234 802 345 6789",
      address: "456 Ikoyi, Lagos",
      role: "Admin",
      status: "active",
      dateAdded: "2023-02-20",
      propertiesManaged: 32,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael.brown@company.com",
      phone: "+234 803 456 7890",
      address: "789 Lekki Phase 1, Lagos",
      role: "Agent",
      status: "inactive",
      dateAdded: "2023-03-10",
      propertiesManaged: 18,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@company.com",
      phone: "+234 804 567 8901",
      address: "321 Abuja FCT",
      role: "Agent",
      status: "active",
      dateAdded: "2023-04-05",
      propertiesManaged: 27,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "David Wilson",
      email: "david.wilson@company.com",
      phone: "+234 805 678 9012",
      address: "654 Port Harcourt, Rivers",
      role: "Moderator",
      status: "deactivated",
      dateAdded: "2023-05-12",
      propertiesManaged: 12,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 6,
      name: "Lisa Anderson",
      email: "lisa.anderson@company.com",
      phone: "+234 806 789 0123",
      address: "987 Kano State",
      role: "Agent",
      status: "active",
      dateAdded: "2023-06-18",
      propertiesManaged: 35,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  // Calculate statistics
  const totalAdmins = admins.length
  const activeAdmins = admins.filter((admin) => admin.status === "active").length
  const deactivatedAdmins = admins.filter((admin) => admin.status === "deactivated").length
  const totalProperties = admins.reduce((sum, admin) => sum + admin.propertiesManaged, 0)

  // Filter admins based on search and filters
  const filteredAdmins = admins.filter((admin) => {
    const matchesSearch =
      admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.address.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || admin.status === statusFilter
    const matchesRole = roleFilter === "all" || admin.role === roleFilter

    return matchesSearch && matchesStatus && matchesRole
  })

  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
      case "inactive":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Inactive</Badge>
      case "deactivated":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Deactivated</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getRoleBadge = (role) => {
    const colors = {
      "Super Admin": "bg-purple-100 text-purple-800",
      Admin: "bg-blue-100 text-blue-800",
      Agent: "bg-green-100 text-green-800",
      Moderator: "bg-orange-100 text-orange-800",
    }
    return <Badge className={`${colors[role]} hover:${colors[role]}`}>{role}</Badge>
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Management</h1>
          <p className="text-gray-600 mt-2">Manage all administrators and their properties</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Admins</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{totalAdmins}</div>
              <p className="text-xs text-muted-foreground">All registered admins</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Admins</CardTitle>
              <UserCheck className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{activeAdmins}</div>
              <p className="text-xs text-muted-foreground">Currently active</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Deactivated Admins</CardTitle>
              <UserX className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{deactivatedAdmins}</div>
              <p className="text-xs text-muted-foreground">Inactive accounts</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
              <Building className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{totalProperties}</div>
              <p className="text-xs text-muted-foreground">Properties managed</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter Bar */}
        <Card className="shadow-lg border-0 mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search by name, email, or address..."
                  className="w-full pl-10 pr-4 py-2 border-0 shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-400" />
                <select
                  className="px-3 py-2 border-0 shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="deactivated">Deactivated</option>
                </select>
              </div>

              {/* Role Filter */}
              <div>
                <select
                  className="px-3 py-2 border-0 shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                >
                  <option value="all">All Roles</option>
                  <option value="Super Admin">Super Admin</option>
                  <option value="Admin">Admin</option>
                  <option value="Agent">Agent</option>
                  <option value="Moderator">Moderator</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Admin Table */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle>Admin List ({filteredAdmins.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Agent Photo & Name</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Address</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Email</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Contact</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Date Added</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAdmins.map((admin) => (
                    <tr key={admin.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      {/* Agent Photo & Name */}
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-10 w-10 shadow-md">
                            <AvatarImage src={admin.avatar || "/placeholder.svg"} alt={admin.name} />
                            <AvatarFallback>
                              {admin.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium text-gray-900">{admin.name}</div>
                            <div className="text-sm text-gray-500">{getRoleBadge(admin.role)}</div>
                          </div>
                        </div>
                      </td>

                      {/* Address */}
                      <td className="py-4 px-4">
                        <div className="text-sm text-gray-900">{admin.address}</div>
                      </td>

                      {/* Email */}
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-900">{admin.email}</span>
                        </div>
                      </td>

                      {/* Contact */}
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-900">{admin.phone}</span>
                        </div>
                      </td>

                      {/* Date Added */}
                      <td className="py-4 px-4">
                        <div className="text-sm text-gray-900">{new Date(admin.dateAdded).toLocaleDateString()}</div>
                        <div className="text-xs text-gray-500">{admin.propertiesManaged} properties</div>
                      </td>

                      {/* Status */}
                      <td className="py-4 px-4">{getStatusBadge(admin.status)}</td>

                      {/* Actions */}
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm" className="border-0 shadow-sm hover:shadow-md p-2">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="border-0 shadow-sm hover:shadow-md p-2">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-0 shadow-sm hover:shadow-md p-2 text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="border-0 shadow-sm hover:shadow-md p-2">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredAdmins.length === 0 && (
                <div className="text-center py-8 text-gray-500">No admins found matching your search criteria.</div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
