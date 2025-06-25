"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Bed, Bath, Square, MapPin, Calendar, User, Phone, Mail, Heart, Share2, Eye, Car, Wifi, Tv, AirVent, Shield, ChevronLeft, ChevronRight } from 'lucide-react'
import a from "../../../assets/4-bedroom-fully-detached-duplex-in-a-mini-estate-rdOqItT0rYnz1AvJfIcj.jpeg"
import b from "../../../assets/download.jpeg"
import c from "../../../assets/lekki-luxury-tastefully-finished-duplex-fy1GQ9tXdFvEhxXJhg14.png"
import d from "../../../assets/FDee.jpg"


export default function PropertyDetail() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  // Sample property data
  const property = {
    id: 1,
    name: "Luxury 4-Bedroom Duplex in Lekki Phase 1",
    images: [
     a,
     b,
      c,
      d,
    ],
    price: "₦85,000,000",
    priceType: "For Sale",
    size: "2,800 sq ft",
    propertyType: "Duplex",
    bedrooms: 4,
    bathrooms: 3,
    location: "Lekki Phase 1, Lagos State, Nigeria",
    fullAddress: "Plot 123, Admiralty Way, Lekki Phase 1, Lagos State, Nigeria",
    description: `This stunning 4-bedroom duplex is located in the prestigious Lekki Phase 1 area of Lagos. 
    The property features modern architecture with high-quality finishes throughout. The spacious living areas 
    are perfect for both relaxation and entertainment, while the well-appointed bedrooms offer comfort and privacy. 
    The property includes a fully fitted kitchen, ample parking space, and is situated in a secure, gated community 
    with 24/7 security. Close to shopping centers, schools, and major business districts.`,
    features: [
      "24/7 Security",
      "Swimming Pool",
      "Gym/Fitness Center",
      "Parking Space",
      "Generator",
      "Air Conditioning",
      "Internet/WiFi",
      "Cable TV",
      "Balcony",
      "Garden",
    ],
    dateAdded: "2024-01-15",
    status: "Available",
    agent: {
      name: "Adebayo Johnson",
      phone: "+234 801 234 5678",
      email: "adebayo.johnson@company.com",
      avatar: "/placeholder.svg?height=60&width=60",
      role: "Senior Property Agent",
      propertiesListed: 45,
    },
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length)
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case "Available":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Available</Badge>
      case "Sold":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Sold</Badge>
      case "Rented":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Rented</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getPriceTypeBadge = (priceType) => {
    return priceType === "For Sale" ? (
      <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">For Sale</Badge>
    ) : (
      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">For Rent</Badge>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with Back Button */}
        <div className="mb-6 flex items-center justify-between">
          <Button variant="outline" className="border-0 shadow-md hover:shadow-lg">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Properties
          </Button>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="border-0 shadow-md hover:shadow-lg"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Heart className={`w-4 h-4 mr-2 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
              {isFavorite ? "Favorited" : "Add to Favorites"}
            </Button>
            <Button variant="outline" size="sm" className="border-0 shadow-md hover:shadow-lg">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Property Images */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={property.images[currentImageIndex] || "/placeholder.svg"}
                    alt={property.name}
                    className="w-full h-96 object-cover rounded-t-lg"
                  />
                  
                  {/* Image Navigation */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {property.images.length}
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    {getStatusBadge(property.status)}
                  </div>
                </div>

                {/* Thumbnail Images */}
                <div className="p-4">
                  <div className="flex space-x-2 overflow-x-auto">
                    {property.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 transition-all ${
                          index === currentImageIndex ? "border-blue-500" : "border-gray-200"
                        }`}
                      >
                        <img src={image || "/placeholder.svg"} alt={`Property ${index + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Property Information */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{property.name}</CardTitle>
                    <div className="flex items-center space-x-2 text-gray-600 mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>{property.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{property.price}</div>
                    {getPriceTypeBadge(property.priceType)}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Property Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Bed className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                    <div className="font-semibold">{property.bedrooms}</div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Bath className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                    <div className="font-semibold">{property.bathrooms}</div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Square className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                    <div className="font-semibold">{property.size}</div>
                    <div className="text-sm text-gray-600">Size</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 mx-auto mb-2 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                      P
                    </div>
                    <div className="font-semibold">{property.propertyType}</div>
                    <div className="text-sm text-gray-600">Type</div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Description</h3>
                  <p className="text-gray-700 leading-relaxed">{property.description}</p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Features & Amenities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Details */}
                <div className="border-t pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Property ID:</span>
                      <span className="font-medium">#{property.id.toString().padStart(6, "0")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date Added:</span>
                      <span className="font-medium">{new Date(property.dateAdded).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Full Address:</span>
                      <span className="font-medium text-right">{property.fullAddress}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Agent Information */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle>Property Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="h-16 w-16 shadow-md">
                    <AvatarImage src={property.agent.avatar || "/placeholder.svg"} alt={property.agent.name} />
                    <AvatarFallback>
                      {property.agent.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">{property.agent.name}</h3>
                    <p className="text-sm text-gray-600">{property.agent.role}</p>
                    <p className="text-xs text-gray-500">{property.agent.propertiesListed} properties listed</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">{property.agent.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">{property.agent.email}</span>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <Button className="w-full shadow-md hover:shadow-lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Agent
                  </Button>
                  <Button variant="outline" className="w-full shadow-md hover:shadow-lg">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Agent
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Schedule a Visit */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle>Schedule a Visit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">Available for viewings Monday-Friday, 9am-5pm</span>
                  </div>
                  <Button className="w-full shadow-md hover:shadow-lg bg-green-600 hover:bg-green-700">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Viewing
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}