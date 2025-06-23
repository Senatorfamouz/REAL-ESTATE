"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, MapPin, Home, DollarSign, Bed, Bath, Square, Car } from "lucide-react"

const AddPropertyPage = () => {
  const [formData, setFormData] = useState({
    propertyTitle: "",
    propertyType: "",
    propertyPrice: "",
    propertyAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    bedrooms: "",
    bathrooms: "",
    squareFootage: "",
    lotSize: "",
    yearBuilt: "",
    garage: "",
    propertyDescription: "",
    amenities: [],
    propertyStatus: "For Sale",
    agentName: "",
    agentEmail: "",
    agentPhone: "",
  })

  const [dragActive, setDragActive] = useState(false)
  const [uploadedImages, setUploadedImages] = useState([])

  const propertyTypes = [
    "Single Family Home",
    "Townhouse",
    "Condominium",
    "Apartment",
    "Villa",
    "Duplex",
    "Commercial",
    "Land",
  ]

  const amenitiesList = [
    "Swimming Pool",
    "Gym/Fitness Center",
    "Parking",
    "Garden",
    "Balcony",
    "Air Conditioning",
    "Heating",
    "Fireplace",
    "Walk-in Closet",
    "Laundry Room",
    "Security System",
    "Elevator",
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleAmenityChange = (amenity) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
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

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const files = Array.from(e.dataTransfer.files)
      files.forEach((file) => {
        if (file.type.startsWith("image/")) {
          const reader = new FileReader()
          reader.onload = (e) => {
            setUploadedImages((prev) => [...prev, e.target.result])
          }
          reader.readAsDataURL(file)
        }
      })
    }
  }

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files)
      files.forEach((file) => {
        if (file.type.startsWith("image/")) {
          const reader = new FileReader()
          reader.onload = (e) => {
            setUploadedImages((prev) => [...prev, e.target.result])
          }
          reader.readAsDataURL(file)
        }
      })
    }
  }

  const removeImage = (index) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Property data:", formData)
    console.log("Images:", uploadedImages)
    // Handle form submission
  }

  const handleCancel = () => {
    // Handle cancel action
    console.log("Cancel add property")
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold">Add Property</h1>
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <span>Real Estate</span>
          <span>•</span>
          <span>Add Property</span>
        </div>
      </div>

      <div className="flex">
        {/* Left Sidebar - Property Preview */}
        <div className="w-80 p-6 border-r border-slate-700">
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              {/* Property Image */}
              <div className="mb-4">
                <div className="w-full h-48 rounded-lg bg-slate-600 flex items-center justify-center overflow-hidden">
                  {uploadedImages.length > 0 ? (
                    <img
                      src={uploadedImages[0] || "/placeholder.svg"}
                      alt="Property"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Home className="w-16 h-16 text-slate-400" />
                  )}
                </div>
                {uploadedImages.length > 1 && (
                  <div className="flex gap-2 mt-2">
                    {uploadedImages.slice(1, 4).map((img, index) => (
                      <div key={index} className="w-12 h-12 rounded bg-slate-600 overflow-hidden">
                        <img
                          src={img || "/placeholder.svg"}
                          alt={`Property ${index + 2}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    {uploadedImages.length > 4 && (
                      <div className="w-12 h-12 rounded bg-slate-600 flex items-center justify-center text-xs">
                        +{uploadedImages.length - 4}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Property Info */}
              <div className="space-y-3">
                <h3 className="font-semibold text-white text-lg">
                  {formData.propertyTitle || "Beautiful Family Home"}
                </h3>
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">
                    {formData.propertyAddress || "123 Main Street"}, {formData.city || "New York"}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-400" />
                  <span className="text-xl font-bold text-green-400">
                    {formData.propertyPrice ? `$${formData.propertyPrice}` : "$450,000"}
                  </span>
                </div>

                {/* Property Details */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Bed className="w-4 h-4 text-slate-400" />
                    <span>{formData.bedrooms || "3"} Beds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-4 h-4 text-slate-400" />
                    <span>{formData.bathrooms || "2"} Baths</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="w-4 h-4 text-slate-400" />
                    <span>{formData.squareFootage || "2,500"} sqft</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-slate-400" />
                    <span>{formData.garage || "2"} Garage</span>
                  </div>
                </div>

                {/* Property Type & Status */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">Type:</span>
                    <span className="text-sm font-medium">{formData.propertyType || "Single Family Home"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">Status:</span>
                    <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">
                      {formData.propertyStatus}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6">
                <Button onClick={handleSubmit} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                  Add Property
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
            {/* Property Images Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Property Images</h2>
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
                  multiple
                  onChange={handleFileSelect}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-slate-700 rounded-lg flex items-center justify-center">
                    <Upload className="w-8 h-8 text-slate-400" />
                  </div>
                  <div>
                    <p className="text-lg text-white mb-2">Drop your property images here, or click to browse</p>
                    <p className="text-sm text-slate-400">
                      1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are allowed. Multiple images supported.
                    </p>
                  </div>
                </div>
              </div>

              {/* Uploaded Images Preview */}
              {uploadedImages.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-slate-300 mb-2">Uploaded Images ({uploadedImages.length})</h3>
                  <div className="grid grid-cols-4 gap-4">
                    {uploadedImages.map((img, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={img || "/placeholder.svg"}
                          alt={`Property ${index + 1}`}
                          className="w-full h-24 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 text-white rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Basic Property Information */}
            <div>
              <h2 className="text-xl font-semibold mb-6">Basic Information</h2>
              <div className="space-y-6">
                {/* Property Title and Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Property Title</label>
                    <input
                      type="text"
                      name="propertyTitle"
                      value={formData.propertyTitle}
                      onChange={handleInputChange}
                      placeholder="Enter property title"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Property Type</label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Property Type</option>
                      {propertyTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Price and Status */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Property Price ($)</label>
                    <input
                      type="number"
                      name="propertyPrice"
                      value={formData.propertyPrice}
                      onChange={handleInputChange}
                      placeholder="Enter price"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Property Status</label>
                    <select
                      name="propertyStatus"
                      value={formData.propertyStatus}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="For Sale">For Sale</option>
                      <option value="For Rent">For Rent</option>
                      <option value="Sold">Sold</option>
                      <option value="Rented">Rented</option>
                      <option value="Off Market">Off Market</option>
                    </select>
                  </div>
                </div>

                {/* Property Description */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Property Description</label>
                  <textarea
                    name="propertyDescription"
                    value={formData.propertyDescription}
                    onChange={handleInputChange}
                    placeholder="Describe the property..."
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Location Information */}
            <div>
              <h2 className="text-xl font-semibold mb-6">Location Details</h2>
              <div className="space-y-6">
                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Property Address</label>
                  <input
                    type="text"
                    name="propertyAddress"
                    value={formData.propertyAddress}
                    onChange={handleInputChange}
                    placeholder="Enter full address"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* City, State, Zip, Country */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    <label className="block text-sm font-medium text-slate-300 mb-2">State</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="State"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
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
              </div>
            </div>

            {/* Property Details */}
            <div>
              <h2 className="text-xl font-semibold mb-6">Property Details</h2>
              <div className="space-y-6">
                {/* Bedrooms, Bathrooms, Square Footage, Lot Size */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Bedrooms</label>
                    <input
                      type="number"
                      name="bedrooms"
                      value={formData.bedrooms}
                      onChange={handleInputChange}
                      placeholder="Number of bedrooms"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Bathrooms</label>
                    <input
                      type="number"
                      step="0.5"
                      name="bathrooms"
                      value={formData.bathrooms}
                      onChange={handleInputChange}
                      placeholder="Number of bathrooms"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Square Footage</label>
                    <input
                      type="number"
                      name="squareFootage"
                      value={formData.squareFootage}
                      onChange={handleInputChange}
                      placeholder="Square feet"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Lot Size</label>
                    <input
                      type="text"
                      name="lotSize"
                      value={formData.lotSize}
                      onChange={handleInputChange}
                      placeholder="Lot size (e.g., 0.25 acres)"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Year Built and Garage */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Year Built</label>
                    <input
                      type="number"
                      name="yearBuilt"
                      value={formData.yearBuilt}
                      onChange={handleInputChange}
                      placeholder="Year built"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Garage Spaces</label>
                    <input
                      type="number"
                      name="garage"
                      value={formData.garage}
                      onChange={handleInputChange}
                      placeholder="Number of garage spaces"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="text-xl font-semibold mb-6">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {amenitiesList.map((amenity) => (
                  <label key={amenity} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.amenities.includes(amenity)}
                      onChange={() => handleAmenityChange(amenity)}
                      className="w-4 h-4 text-blue-600 bg-slate-800 border-slate-600 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <span className="text-sm text-slate-300">{amenity}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Agent Information */}
            <div>
              <h2 className="text-xl font-semibold mb-6">Agent Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Agent Name</label>
                  <input
                    type="text"
                    name="agentName"
                    value={formData.agentName}
                    onChange={handleInputChange}
                    placeholder="Agent name"
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
                    placeholder="Agent email"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Agent Phone</label>
                  <input
                    type="tel"
                    name="agentPhone"
                    value={formData.agentPhone}
                    onChange={handleInputChange}
                    placeholder="Agent phone"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 pt-6">
              <Button type="submit" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white">
                Create Property
              </Button>
              <Button type="button" onClick={handleCancel} className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white">
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddPropertyPage
