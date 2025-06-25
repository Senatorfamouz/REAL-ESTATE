"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Plus, Trash, Upload, ArrowLeft, Bed, Bath, Square, MapPin } from 'lucide-react'

export default function AddProperty() {
  const navigate = useNavigate();
  const [property, setProperty] = useState({
    name: "",
    images: [],
    price: "",
    priceType: "For Sale",
    size: "",
    propertyType: "Duplex",
    bedrooms: "",
    bathrooms: "",
    location: "",
    fullAddress: "",
    description: "",
    features: [],
    status: "Available",
  });

  const [newFeature, setNewFeature] = useState("")
  const [imageFiles, setImageFiles] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setProperty(prev => ({ ...prev, [name]: value }))
  }

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    const imageUrls = files.map(file => URL.createObjectURL(file))
    setImageFiles(files)
    setProperty(prev => ({ ...prev, images: [...prev.images, ...imageUrls] }))
  }

  const removeImage = (index) => {
    const newImages = [...property.images]
    newImages.splice(index, 1)
    setProperty(prev => ({ ...prev, images: newImages }))
    
    const newFiles = [...imageFiles]
    newFiles.splice(index, 1)
    setImageFiles(newFiles)
  }

  const addFeature = () => {
    if (newFeature.trim() && !property.features.includes(newFeature.trim())) {
      setProperty(prev => ({ ...prev, features: [...prev.features, newFeature.trim()] }))
      setNewFeature("")
    }
  }

  const removeFeature = (index) => {
    const newFeatures = [...property.features]
    newFeatures.splice(index, 1)
    setProperty(prev => ({ ...prev, features: newFeatures }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log("Submitting property:", property);
      await new Promise(resolve => setTimeout(resolve, 1500));
      navigate("/properties"); // Changed from router.push to navigate
    } catch (error) {
      console.error("Error submitting property:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with Back Button */}
        <div className="mb-6">
          <Button 
            variant="outline" 
            className="border-0 shadow-md hover:shadow-lg"
           onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Properties
          </Button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Property Images */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Property Images</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Image Upload Area */}
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Upload className="w-10 h-10 mx-auto text-gray-400 mb-4" />
                      <p className="text-sm text-gray-600 mb-2">Drag & drop property images here, or click to browse</p>
                      <input
                        type="file"
                        id="property-images"
                        className="hidden"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                      <label
                        htmlFor="property-images"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 cursor-pointer"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Images
                      </label>
                    </div>

                    {/* Image Previews */}
                    {property.images.length > 0 && (
                      <div>
                        <h3 className="text-sm font-medium mb-2">Uploaded Images ({property.images.length})</h3>
                        <div className="grid grid-cols-3 gap-2">
                          {property.images.map((image, index) => (
                            <div key={index} className="relative group">
                              <img
                                src={image}
                                alt={`Property ${index + 1}`}
                                className="w-full h-32 object-cover rounded-md"
                              />
                              <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <Trash className="w-3 h-3" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Property Information */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Property Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Property Title*
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={property.name}
                        onChange={handleChange}
                        placeholder="Luxury 4-Bedroom Duplex in Lekki Phase 1"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="price" className="block text-sm font-medium mb-1">
                        Price*
                      </label>
                      <Input
                        id="price"
                        name="price"
                        type="text"
                        value={property.price}
                        onChange={handleChange}
                        placeholder="₦85,000,000"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="priceType" className="block text-sm font-medium mb-1">
                        Price Type*
                      </label>
                      <Select 
                        name="priceType"
                        value={property.priceType}
                        onValueChange={(value) => setProperty(prev => ({ ...prev, priceType: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select price type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="For Sale">For Sale</SelectItem>
                          <SelectItem value="For Rent">For Rent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="propertyType" className="block text-sm font-medium mb-1">
                        Property Type*
                      </label>
                      <Select
                        name="propertyType"
                        value={property.propertyType}
                        onValueChange={(value) => setProperty(prev => ({ ...prev, propertyType: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Duplex">Duplex</SelectItem>
                          <SelectItem value="Apartment">Apartment</SelectItem>
                          <SelectItem value="Bungalow">Bungalow</SelectItem>
                          <SelectItem value="Commercial">Commercial</SelectItem>
                          <SelectItem value="Land">Land</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="bedrooms" className="block text-sm font-medium mb-1">
                        Bedrooms*
                      </label>
                      <Input
                        id="bedrooms"
                        name="bedrooms"
                        type="number"
                        min="0"
                        value={property.bedrooms}
                        onChange={handleChange}
                        placeholder="4"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="bathrooms" className="block text-sm font-medium mb-1">
                        Bathrooms*
                      </label>
                      <Input
                        id="bathrooms"
                        name="bathrooms"
                        type="number"
                        min="0"
                        value={property.bathrooms}
                        onChange={handleChange}
                        placeholder="3"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="size" className="block text-sm font-medium mb-1">
                        Size (sq ft)*
                      </label>
                      <Input
                        id="size"
                        name="size"
                        value={property.size}
                        onChange={handleChange}
                        placeholder="2,800"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="status" className="block text-sm font-medium mb-1">
                        Status*
                      </label>
                      <Select
                        name="status"
                        value={property.status}
                        onValueChange={(value) => setProperty(prev => ({ ...prev, status: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Available">Available</SelectItem>
                          <SelectItem value="Sold">Sold</SelectItem>
                          <SelectItem value="Rented">Rented</SelectItem>
                          <SelectItem value="Pending">Pending</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium mb-1">
                      Location (Area)*
                    </label>
                    <Input
                      id="location"
                      name="location"
                      value={property.location}
                      onChange={handleChange}
                      placeholder="Lekki Phase 1, Lagos State, Nigeria"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="fullAddress" className="block text-sm font-medium mb-1">
                      Full Address*
                    </label>
                    <Input
                      id="fullAddress"
                      name="fullAddress"
                      value={property.fullAddress}
                      onChange={handleChange}
                      placeholder="Plot 123, Admiralty Way, Lekki Phase 1, Lagos State, Nigeria"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium mb-1">
                      Description*
                    </label>
                    <Textarea
                      id="description"
                      name="description"
                      value={property.description}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Describe the property in detail..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Features & Amenities</label>
                    <div className="flex gap-2 mb-2">
                      <Input
                        value={newFeature}
                        onChange={(e) => setNewFeature(e.target.value)}
                        placeholder="Add feature (e.g. Swimming Pool)"
                        className="flex-1"
                      />
                      <Button
                        type="button"
                        onClick={addFeature}
                        variant="outline"
                        className="whitespace-nowrap"
                      >
                        <Plus className="w-4 h-4 mr-1" />
                        Add
                      </Button>
                    </div>
                    
                    {property.features.length > 0 ? (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {property.features.map((feature, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="flex items-center justify-between px-3 py-1"
                          >
                            <span>{feature}</span>
                            <button
                              type="button"
                              onClick={() => removeFeature(index)}
                              className="text-red-500 hover:text-red-700 ml-2"
                            >
                              <Trash className="w-3 h-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">No features added yet</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Summary & Submit */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Publish Property</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Images</span>
                      <span className="text-sm">
                        {property.images.length} {property.images.length === 1 ? "image" : "images"} uploaded
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Features</span>
                      <span className="text-sm">
                        {property.features.length} {property.features.length === 1 ? "feature" : "features"} added
                      </span>
                    </div>
                    <Button
                      type="submit"
                      className="w-full shadow-md hover:shadow-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Publishing..." : "Publish Property"}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Bed className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                      <div className="font-semibold">
                        {property.bedrooms || "0"}
                      </div>
                      <div className="text-sm text-gray-600">Bedrooms</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Bath className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                      <div className="font-semibold">
                        {property.bathrooms || "0"}
                      </div>
                      <div className="text-sm text-gray-600">Bathrooms</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Square className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                      <div className="font-semibold">
                        {property.size || "-"}
                      </div>
                      <div className="text-sm text-gray-600">Size</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <MapPin className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                      <div className="font-semibold">
                        {property.propertyType}
                      </div>
                      <div className="text-sm text-gray-600">Type</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}