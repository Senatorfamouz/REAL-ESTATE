"use client"

import { useState } from "react"
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bed, Bath, Square, MapPin, Heart, Search } from 'lucide-react'
import a from "../../../assets/4-bedroom-fully-detached-duplex-in-a-mini-estate-rdOqItT0rYnz1AvJfIcj.jpeg"
import b from "../../../assets/download.jpeg"
import c from "../../../assets/lekki-luxury-tastefully-finished-duplex-fy1GQ9tXdFvEhxXJhg14.png"
import d from "../../../assets/FDee.jpg"

export default function List() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("")
  const [favorites, setFavorites] = useState([])

  // Sample property data array
  const properties = [
    {
      id: 1,
      name: "Luxury 4-Bedroom Duplex in Lekki Phase 1",
      images: [a, b, c, d],
      price: "₦85,000,000",
      priceType: "For Sale",
      size: "2,800 sq ft",
      propertyType: "Duplex",
      bedrooms: 4,
      bathrooms: 3,
      location: "Lekki Phase 1, Lagos State, Nigeria",
      status: "Available",
      dateAdded: "2024-01-15"
    },
    {
      id: 2,
      name: "Modern 3-Bedroom Apartment in Victoria Island",
      images: [b, a, d, c],
      price: "₦65,000,000",
      priceType: "For Sale",
      size: "1,800 sq ft",
      propertyType: "Apartment",
      bedrooms: 3,
      bathrooms: 2,
      location: "Victoria Island, Lagos",
      status: "Available",
      dateAdded: "2024-02-10"
    },
    {
      id: 3,
      name: "5-Bedroom Executive Mansion in Banana Island",
      images: [c, d, a, b],
      price: "₦250,000,000",
      priceType: "For Sale",
      size: "5,500 sq ft",
      propertyType: "Mansion",
      bedrooms: 5,
      bathrooms: 4,
      location: "Banana Island, Lagos",
      status: "Available",
      dateAdded: "2024-01-05"
    },
    {
      id: 4,
      name: "Cozy 2-Bedroom Flat in Ikeja GRA",
      images: [d, c, b, a],
      price: "₦45,000,000",
      priceType: "For Sale",
      size: "1,200 sq ft",
      propertyType: "Flat",
      bedrooms: 2,
      bathrooms: 2,
      location: "Ikeja GRA, Lagos",
      status: "Sold",
      dateAdded: "2023-12-20"
    }
  ]

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    )
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

  const filteredProperties = properties.filter(property =>
    property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Search and Filter Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-6">Available Properties</h1>
          
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search properties by name or location..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline">Filter</Button>
              <Button variant="outline">Sort</Button>
            </div>
          </div>
        </div>

        {/* Property List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <Card 
              key={property.id} 
              className="shadow-md hover:shadow-lg transition-shadow cursor-pointer border-none"
              onClick={() => navigate(`/PropertyDetails`)}
            >
              <CardContent className="p-0">
                {/* Property Image */}
                <div className="relative">
                  <img
                    src={property.images[0]}
                    alt={property.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFavorite(property.id)
                    }}
                    className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md"
                  >
                    <Heart 
                      className={`w-4 h-4 ${favorites.includes(property.id) ? "fill-red-500 text-red-500" : ""}`} 
                    />
                  </button>
                  <div className="absolute bottom-3 left-3">
                    {getStatusBadge(property.status)}
                  </div>
                </div>

                {/* Property Details */}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg line-clamp-1">{property.name}</h3>
                    <div className="text-right">
                      <div className="font-bold text-blue-600">{property.price}</div>
                      {getPriceTypeBadge(property.priceType)}
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="line-clamp-1">{property.location}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center border-t pt-3">
                    <div>
                      <Bed className="w-5 h-5 mx-auto text-gray-600" />
                      <span className="text-sm font-medium">{property.bedrooms} beds</span>
                    </div>
                    <div>
                      <Bath className="w-5 h-5 mx-auto text-gray-600" />
                      <span className="text-sm font-medium">{property.bathrooms} baths</span>
                    </div>
                    <div>
                      <Square className="w-5 h-5 mx-auto text-gray-600" />
                      <span className="text-sm font-medium">{property.size}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No properties found</h3>
            <p className="text-gray-500">
              {searchTerm ? "Try adjusting your search or filter" : "No properties available at the moment"}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}