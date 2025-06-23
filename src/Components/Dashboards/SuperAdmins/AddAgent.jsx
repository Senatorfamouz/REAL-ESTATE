"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Separator } from "@/components/ui/separator"
// import { Checkbox } from "@/components/ui/checkbox"
import { Shield, Save, X, UserPlus, AlertCircle, CheckCircle } from "lucide-react"

export default function AddAdmin() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Admin",
    department: "",
    phone: "",
    location: "",
    permissions: {
      userManagement: false,
      systemSettings: false,
      reportsAccess: false,
      auditLogs: false,
      contentManagement: false,
      billingAccess: false,
    },
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const roles = [
    { value: "Super Admin", label: "Super Admin", description: "Full system access" },
    { value: "Admin", label: "Admin", description: "Standard admin privileges" },
    { value: "Moderator", label: "Moderator", description: "Content and user moderation" },
    { value: "Support", label: "Support", description: "Customer support access" },
  ]

  const permissionsList = [
    { key: "userManagement", label: "User Management", description: "Create, edit, and delete users" },
    { key: "systemSettings", label: "System Settings", description: "Modify system configuration" },
    { key: "reportsAccess", label: "Reports Access", description: "View and generate reports" },
    { key: "auditLogs", label: "Audit Logs", description: "Access system audit logs" },
    { key: "contentManagement", label: "Content Management", description: "Manage site content" },
    { key: "billingAccess", label: "Billing Access", description: "Access billing information" },
  ]

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }))
    }
  }

  const handlePermissionChange = (permission, checked) => {
    setFormData((prev) => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [permission]: checked,
      },
    }))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.department.trim()) {
      newErrors.department = "Department is required"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required"
    }

    // Check if at least one permission is selected
    const hasPermissions = Object.values(formData.permissions).some((permission) => permission)
    if (!hasPermissions) {
      newErrors.permissions = "Please select at least one permission"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simulate success
      setSubmitStatus("success")

      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          role: "Admin",
          department: "",
          phone: "",
          location: "",
          permissions: {
            userManagement: false,
            systemSettings: false,
            reportsAccess: false,
            auditLogs: false,
            contentManagement: false,
            billingAccess: false,
          },
        })
        setSubmitStatus(null)
      }, 3000)
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      role: "Admin",
      department: "",
      phone: "",
      location: "",
      permissions: {
        userManagement: false,
        systemSettings: false,
        reportsAccess: false,
        auditLogs: false,
        contentManagement: false,
        billingAccess: false,
      },
    })
    setErrors({})
    setSubmitStatus(null)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <UserPlus className="w-8 h-8" />
            Add New Admin
          </h1>
          <p className="text-gray-600 mt-2">Create a new administrator account with specific permissions</p>
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-800">
            <CheckCircle className="w-5 h-5" />
            Admin account created successfully!
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-800">
            <AlertCircle className="w-5 h-5" />
            Failed to create admin account. Please try again.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Main Form */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Admin Information</CardTitle>
                <CardDescription>Enter the basic information for the new admin</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Avatar Preview */}
                <div className="flex items-center space-x-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="/placeholder.svg?height=80&width=80" alt="New Admin" />
                    <AvatarFallback className="text-lg">
                      {formData.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase() || "NA"}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">{formData.name || "New Admin"}</h3>
                    <Badge variant="secondary" className="mt-1">
                      <Shield className="w-3 h-3 mr-1" />
                      {formData.role}
                    </Badge>
                  </div>
                </div>

                <Separator />

                {/* Form Fields */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                        errors.name ? "border-red-500" : "border-input bg-background"
                      }`}
                      placeholder="Enter full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                        errors.email ? "border-red-500" : "border-input bg-background"
                      }`}
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="role"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Role *
                    </label>
                    <select
                      id="role"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={formData.role}
                      onChange={(e) => handleInputChange("role", e.target.value)}
                    >
                      {roles.map((role) => (
                        <option key={role.value} value={role.value}>
                          {role.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="department"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Department *
                    </label>
                    <input
                      id="department"
                      className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                        errors.department ? "border-red-500" : "border-input bg-background"
                      }`}
                      placeholder="Enter department"
                      value={formData.department}
                      onChange={(e) => handleInputChange("department", e.target.value)}
                    />
                    {errors.department && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.department}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                        errors.phone ? "border-red-500" : "border-input bg-background"
                      }`}
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="location"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Location *
                    </label>
                    <input
                      id="location"
                      className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                        errors.location ? "border-red-500" : "border-input bg-background"
                      }`}
                      placeholder="Enter location"
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                    />
                    {errors.location && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.location}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Permissions Card */}
            <Card>
              <CardHeader>
                <CardTitle>Permissions</CardTitle>
                <CardDescription>Select admin permissions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {permissionsList.map((permission) => (
                  <div key={permission.key} className="flex items-start space-x-3">
                    <Checkbox
                      id={permission.key}
                      checked={formData.permissions[permission.key]}
                      onCheckedChange={(checked) => handlePermissionChange(permission.key, checked)}
                    />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor={permission.key}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {permission.label}
                      </label>
                      <p className="text-xs text-muted-foreground">{permission.description}</p>
                    </div>
                  </div>
                ))}
                {errors.permissions && (
                  <p className="text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.permissions}
                  </p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <Card className="mt-6">
            <CardContent className="pt-6">
              <div className="flex gap-4 justify-end">
                <Button type="button" variant="outline" onClick={handleReset} disabled={isSubmitting}>
                  <X className="w-4 h-4 mr-2" />
                  Reset Form
                </Button>
                <Button type="submit" disabled={isSubmitting} className="min-w-[120px]">
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Creating...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4 mr-2" />
                      Create Admin
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  )
}
