"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Shield, Save, X, UserPlus, AlertCircle, CheckCircle, ChevronDown } from "lucide-react"

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
  const [submitStatus, setSubmitStatus] = useState(null)

  const roles = [
    { value: "Super Admin", label: "Super Admin", description: "Full system access" },
    { value: "Admin", label: "Admin", description: "Standard admin privileges" },
    { value: "Moderator", label: "Moderator", description: "Content and user moderation" },
    { value: "Support", label: "Support", description: "Customer support access" },
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
    <div className="min-h-screen bg-gray-50/50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <UserPlus className="w-8 h-8 text-indigo-600" />
            Add New Admin
          </h1>
          <p className="text-gray-600 mt-2">Create a new administrator account with specific permissions</p>
        </div>
      </div>

      <div className="flex">
        {/* Left Sidebar - Agent Preview */}
        <div className="w-80 p-6 border-r border-slate-700">
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              {/* Profile Section */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-slate-600 flex items-center justify-center overflow-hidden">
                  {uploadedImage ? (
                    <img src={uploadedImage || "/placeholder.svg"} alt="Agent" className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-8 h-8 text-slate-400" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{formData.agentName || "Michael A. Miner"}</h3>
                  <p className="text-sm text-slate-400">{formData.agentEmail || "michaelminer@dabyagent.com"}</p>
                </div>
              </div>

              {/* Properties Info */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-white font-medium">{formData.propertiesNumber || "243"} Properties</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <MapPin className="w-4 h-4" />
                  <span>{formData.agentAddress || "Lincoln Drive Harrisburg, PA 17101 U.S.A"}</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="mb-6">
                <p className="text-sm text-slate-400 mb-3">Social Media :</p>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <Facebook className="w-4 h-4" />
                  </div>
                  <div className="w-8 h-8 bg-pink-600 rounded flex items-center justify-center">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center">
                    <Twitter className="w-4 h-4" />
                  </div>
                  <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button onClick={handleSubmit} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                  Add Agent
                </Button>
                <Button
                  onClick={handleCancel}
                  variant="outline"
                  className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Add Agent Photo Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Add Agent Photo</h2>
              <div
                className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
                  dragActive ? "border-blue-500 bg-blue-500/10" : "border-slate-600 hover:border-slate-500"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-slate-700 rounded-lg flex items-center justify-center">
                    <Upload className="w-8 h-8 text-slate-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{formData.name || "New Admin"}</h3>
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
                <div className="flex justify-end gap-4 pt-6">
                  <Button type="submit" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white">
                    Create Agent
                  </Button>
                  <Button
                    type="button"
                    onClick={handleCancel}
                    className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}