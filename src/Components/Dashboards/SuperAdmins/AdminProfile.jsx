"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Mail, Shield, Calendar, Edit2, Save, X } from "lucide-react"

export default function AdminProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: "Oriade Yemi",
    email: "oriade.yemi@company.com",
    role: "Super Admin",
    department: "IT Administration",
    joinDate: "2022-01-15",
    lastLogin: "2024-01-20 14:30",
    phone: "09012345678",
    location: "Lagos, Nigeria",
  })

  const [editedProfile, setEditedProfile] = useState({ ...profile })

  const handleEdit = () => {
    setIsEditing(true)
    setEditedProfile({ ...profile })
  }

  const handleSave = () => {
    setProfile({ ...editedProfile })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditedProfile({ ...profile })
    setIsEditing(false)
  }

  const handleInputChange = (field, value) => {
    setEditedProfile((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Admin Profile</h1>
          <p className="text-gray-600 mt-2">Manage your administrative account settings</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Profile Card */}
          <Card className="md:col-span-2 shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Your personal and account details</CardDescription>
              </div>
              {!isEditing ? (
                <Button onClick={handleEdit} variant="outline" size="sm" className="border-0 shadow-md hover:shadow-lg">
                  <Edit2 className="w-4 h-4 mr-2" />
                  Edit
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button onClick={handleSave} size="sm" className="shadow-md hover:shadow-lg">
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                  <Button
                    onClick={handleCancel}
                    variant="outline"
                    size="sm"
                    className="border-0 shadow-md hover:shadow-lg"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                </div>
              )}
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar Section */}
              <div className="flex items-center space-x-4">
                <Avatar className="w-20 h-20 shadow-lg">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Profile" />
                  <AvatarFallback className="text-lg">
                    {profile.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{profile.name}</h3>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 shadow-sm">
                    <Shield className="w-3 h-3 mr-1" />
                    {profile.role}
                  </div>
                </div>
              </div>

              {/* Separator */}
              <div className="border-t border-gray-200"></div>

              {/* Profile Fields */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Full Name
                  </label>
                  {isEditing ? (
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border-0 shadow-sm bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 hover:shadow-md transition-shadow"
                      value={editedProfile.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                    />
                  ) : (
                    <div className="flex items-center space-x-2 p-2 rounded-md bg-gray-50">
                      <User className="w-4 h-4 text-gray-500" />
                      <span>{profile.name}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email Address
                  </label>
                  {isEditing ? (
                    <input
                      id="email"
                      className="flex h-10 w-full rounded-md border-0 shadow-sm bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 hover:shadow-md transition-shadow"
                      type="email"
                      value={editedProfile.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  ) : (
                    <div className="flex items-center space-x-2 p-2 rounded-md bg-gray-50">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span>{profile.email}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="department"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Department
                  </label>
                  {isEditing ? (
                    <input
                      id="department"
                      className="flex h-10 w-full rounded-md border-0 shadow-sm bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 hover:shadow-md transition-shadow"
                      value={editedProfile.department}
                      onChange={(e) => handleInputChange("department", e.target.value)}
                    />
                  ) : (
                    <div className="p-2 rounded-md bg-gray-50">
                      <span>{profile.department}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Phone Number
                  </label>
                  {isEditing ? (
                    <input
                      id="phone"
                      className="flex h-10 w-full rounded-md border-0 shadow-sm bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 hover:shadow-md transition-shadow"
                      value={editedProfile.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  ) : (
                    <div className="p-2 rounded-md bg-gray-50">
                      <span>{profile.phone}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="location"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Location
                  </label>
                  {isEditing ? (
                    <input
                      id="location"
                      className="flex h-10 w-full rounded-md border-0 shadow-sm bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 hover:shadow-md transition-shadow"
                      value={editedProfile.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                    />
                  ) : (
                    <div className="p-2 rounded-md bg-gray-50">
                      <span>{profile.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Account Info Card */}
          <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Account Details</CardTitle>
              <CardDescription>Account status and activity</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Account Status
                </label>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800 shadow-sm">
                  Active
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Join Date
                </label>
                <div className="flex items-center space-x-2 p-2 rounded-md bg-gray-50">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-sm">{new Date(profile.joinDate).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Last Login
                </label>
                <div className="p-2 rounded-md bg-gray-50">
                  <span className="text-sm text-gray-600">{profile.lastLogin}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4"></div>

              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Permissions
                </label>
                <div className="space-y-2">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-blue-50 text-blue-700 shadow-sm">
                    User Management
                  </div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-blue-50 text-blue-700 shadow-sm">
                    System Settings
                  </div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-blue-50 text-blue-700 shadow-sm">
                    Reports Access
                  </div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-blue-50 text-blue-700 shadow-sm">
                    Audit Logs
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Security Section */}
        <Card className="mt-6 shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Security Settings</CardTitle>
            <CardDescription>Manage your account security preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <Button variant="outline" className="justify-start border-0 shadow-md hover:shadow-lg transition-shadow">
                Change Password
              </Button>
              <Button variant="outline" className="justify-start border-0 shadow-md hover:shadow-lg transition-shadow">
                Login History
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
