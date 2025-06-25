"use client"

import { useState } from "react"
import { Card } from "../../ui/card"
import { CardContent } from "../../../Components/Static/Ui/CardContent"
// import { Button } from "../../ui/button"
import { Upload, Facebook, Instagram, Twitter, MessageCircle, Mail, MapPin, User } from "lucide-react"

const AddAdminPage = () => {
  const [formData, setFormData] = useState({
    agentName: "",
    agentEmail: "",
    agentNumber: "",
    propertiesNumber: "",
    agentAddress: "",
    zipCode: "",
    city: "",
    country: "",
    facebookUrl: "",
    instagramUrl: "",
    twitterUrl: "",
  })

  const [dragActive, setDragActive] = useState(false)
  const [uploadedImage, setUploadedImage] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      if (file.type.startsWith("image/")) {
        const reader = new FileReader()
        reader.onload = (e) => setUploadedImage(e.target.result)
        reader.readAsDataURL(file)
      }
    }
  }

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      if (file.type.startsWith("image/")) {
        const reader = new FileReader()
        reader.onload = (e) => setUploadedImage(e.target.result)
        reader.readAsDataURL(file)
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Agent data:", formData)
    // Handle form submission
  }

  const handleCancel = () => {
    // Handle cancel action
    console.log("Cancel add agent")
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold">Add Agent</h1>
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <span>Real Estate</span>
          <span>•</span>
          <span>Add Agent</span>
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
                {/* <Button onClick={handleSubmit} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                  Add Agent
                </Button>
                <Button
                  onClick={handleCancel}
                  variant="outline"
                  className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  Cancel
                </Button> */}
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
                    <p className="text-lg text-white mb-2">Drop your images here, or click to browse</p>
                    <p className="text-sm text-slate-400">
                      1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are allowed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Agent Information Section */}
            <div>
              <h2 className="text-xl font-semibold mb-6">Agent Information</h2>
              <div className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Agent Name</label>
                    <input
                      type="text"
                      name="agentName"
                      value={formData.agentName}
                      onChange={handleInputChange}
                      placeholder="Full Name"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Agent Email</label>
                    <input
                      type="email"
                      name="agentEmail"
                      value={formData.agentEmail}
                      onChange={handleInputChange}
                      placeholder="Enter Email"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Agent Number and Properties Number Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Agent Number</label>
                    <input
                      type="text"
                      name="agentNumber"
                      value={formData.agentNumber}
                      onChange={handleInputChange}
                      placeholder="Enter Number"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Properties Number</label>
                    <input
                      type="number"
                      name="propertiesNumber"
                      value={formData.propertiesNumber}
                      onChange={handleInputChange}
                      placeholder="Enter Properties Number"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Agent Address</label>
                  <textarea
                    name="agentAddress"
                    value={formData.agentAddress}
                    onChange={handleInputChange}
                    placeholder="Enter address"
                    rows={3}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>

                {/* Zip Code, City, Country Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Zip Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="Zip Code"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="City"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Country</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AU">Australia</option>
                    </select>
                  </div>
                </div>

                {/* Social Media URLs Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Facebook URL</label>
                    <input
                      type="url"
                      name="facebookUrl"
                      value={formData.facebookUrl}
                      onChange={handleInputChange}
                      placeholder="Enter URL"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Instagram URL</label>
                    <input
                      type="url"
                      name="instagramUrl"
                      value={formData.instagramUrl}
                      onChange={handleInputChange}
                      placeholder="Enter URL"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Twitter URL</label>
                    <input
                      type="url"
                      name="twitterUrl"
                      value={formData.twitterUrl}
                      onChange={handleInputChange}
                      placeholder="Enter URL"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-4 pt-6">
                  {/* <Button type="submit" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white">
                    Create Agent
                  </Button>
                  <Button
                    type="button"
                    onClick={handleCancel}
                    className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white"
                  >
                    Cancel
                  </Button> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddAdminPage
