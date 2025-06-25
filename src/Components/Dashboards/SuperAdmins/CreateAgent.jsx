"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Shield, Save, X, UserPlus, AlertCircle, CheckCircle, ChevronDown } from "lucide-react"

export default function CreateAgent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Agent",
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
  const [submitStatus, setSubmitStatus] = useState(null)

  const roles = [
    { value: "Super Agent", label: "Super Agent", description: "Full system access" },
    { value: "Agent", label: "Agent", description: "Standard agent privileges" },
    { value: "Facility Manager", label: "Facility Manager", description: "Home management access" },
  ]

  

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }))
    }
  }


  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Full name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    if (!formData.department.trim()) newErrors.department = "Department is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.location.trim()) newErrors.location = "Location is required"
    if (!Object.values(formData.permissions).some(Boolean)) {
      newErrors.permissions = "Please select at least one permission"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          role: "AGENT",
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
    // eslint-disable-next-line no-unused-vars
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
      role: "AGENT",
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
    <div className="min-h-screen bg-gray-50/50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <UserPlus className="w-8 h-8 text-indigo-600" />
            Add New Agent
          </h1>
          <p className="text-gray-600 mt-2">Create a new agent account with specific permissions</p>
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="mb-6 p-4 bg-green-50/80 border border-green-100 rounded-lg shadow-sm flex items-center gap-3 text-green-800 backdrop-blur-sm">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span>Agent account created successfully!</span>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-6 p-4 bg-red-50/80 border border-red-100 rounded-lg shadow-sm flex items-center gap-3 text-red-800 backdrop-blur-sm">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <span>Failed to create agent account. Please try again.</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Main Form */}
            <Card className="md:col-span-2 shadow-sm border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Agent Information</CardTitle>
                <CardDescription>Enter the basic information for the new agent</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Avatar Preview */}
                <div className="flex items-center space-x-4 p-4 bg-gray-50/50 rounded-lg">
                  <Avatar className="w-20 h-20 border-2 border-white shadow">
                    <AvatarImage src="/placeholder.svg?height=80&width=80" alt="New Agent" />
                    <AvatarFallback className="text-lg bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-800">
                      {formData.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase() || "NA"}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{formData.name || "New Agent"}</h3>
                    <Badge variant="secondary" className="mt-1 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
                      <Shield className="w-3 h-3 mr-1" />
                      {formData.role}
                    </Badge>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      className={`flex h-10 w-full rounded-lg border px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 ${
                        errors.name ? "border-red-500" : "border-gray-200 bg-white"
                      }`}
                      placeholder="Enter full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`flex h-10 w-full rounded-lg border px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 ${
                        errors.email ? "border-red-500" : "border-gray-200 bg-white"
                      }`}
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="role" className="text-sm font-medium text-gray-700">
                      Role *
                    </label>
                    <div className="relative">
                      <select
                        id="role"
                        className="flex h-10 w-full appearance-none rounded-lg border border-gray-200 bg-white px-3 py-2 pl-3 pr-8 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
                        value={formData.role}
                        onChange={(e) => handleInputChange("role", e.target.value)}
                      >
                        {roles.map((role) => (
                          <option key={role.value} value={role.value}>
                            {role.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="department" className="text-sm font-medium text-gray-700">
                      Department *
                    </label>
                    <input
                      id="department"
                      className={`flex h-10 w-full rounded-lg border px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 ${
                        errors.department ? "border-red-500" : "border-gray-200 bg-white"
                      }`}
                      placeholder="Enter department"
                      value={formData.department}
                      onChange={(e) => handleInputChange("department", e.target.value)}
                    />
                    {errors.department && (
                      <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.department}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      className={`flex h-10 w-full rounded-lg border px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 ${
                        errors.phone ? "border-red-500" : "border-gray-200 bg-white"
                      }`}
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="location" className="text-sm font-medium text-gray-700">
                      Location *
                    </label>
                    <input
                      id="location"
                      className={`flex h-10 w-full rounded-lg border px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 ${
                        errors.location ? "border-red-500" : "border-gray-200 bg-white"
                      }`}
                      placeholder="Enter location"
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                    />
                    {errors.location && (
                      <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.location}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Permissions Card */}
            <Card className="shadow-sm border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Permissions</CardTitle>
                <CardDescription>Select admin access permissions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {errors.permissions && (
                  <div className="p-3 bg-red-50 rounded-lg text-red-600 text-sm flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{errors.permissions}</span>
                  </div>
                )}

               
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border-0">
            <div className="flex gap-3 justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={handleReset}
                disabled={isSubmitting}
                className="border-gray-300 hover:bg-gray-50"
              >
                <X className="w-4 h-4 mr-2" />
                Reset Form
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="min-w-[120px] bg-indigo-600 hover:bg-indigo-700 shadow-sm"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Creating...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Create Agent
                  </>
                )}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}