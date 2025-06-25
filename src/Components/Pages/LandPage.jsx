"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Heart, Share2, Eye, Bed, Bath, Square, MapPin, Clock, ArrowRight, } from "lucide-react"
// import Header from "../Static/Header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function FeaturedListings() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const listings = [
    {
      id: 1,
      image: "/placeholder.svg?height=300&width=400",
      status: "FEATURED",
      statusType: "featured",
      price: "₦85,000,000",
      pricePerSqFt: "₦42,000/sq ft",
      title: "Luxury Duplex in Lekki",
      location: "Lekki Phase 1, Lagos State, Nigeria",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2800,
      propertyType: "DUPLEX",
      agent: {
        name: "Adebayo Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        timeAgo: "2 weeks ago",
      },
    },
    {
      id: 2,
      image: "/placeholder.svg?height=300&width=400",
      status: "FOR RENT",
      statusType: "rent",
      price: "₦2,500,000/year",
      pricePerSqFt: "",
      title: "Modern Apartment in Victoria Island",
      location: "Victoria Island, Lagos State, Nigeria",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1500,
      propertyType: "APARTMENT",
      agent: {
        name: "Fatima Abdullahi",
        avatar: "/placeholder.svg?height=40&width=40",
        timeAgo: "1 week ago",
      },
    },
    {
      id: 3,
      image: "/placeholder.svg?height=300&width=400",
      status: "FOR SALE",
      statusType: "sale",
      price: "₦45,000,000",
      pricePerSqFt: "₦28,000/sq ft",
      title: "Executive Bungalow",
      location: "Gwarinpa, Abuja, FCT, Nigeria",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1600,
      propertyType: "BUNGALOW",
      agent: {
        name: "Chinedu Okafor",
        avatar: "/placeholder.svg?height=40&width=40",
        timeAgo: "3 days ago",
      },
    },
    {
      id: 4,
      image: "/placeholder.svg?height=300&width=400",
      status: "FOR RENT",
      statusType: "rent",
      price: "₦1,800,000/year",
      pricePerSqFt: "",
      title: "Serviced Apartment in Ikoyi",
      location: "Ikoyi, Lagos State, Nigeria",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      propertyType: "APARTMENT",
      agent: {
        name: "Kemi Adebisi",
        avatar: "/placeholder.svg?height=40&width=40",
        timeAgo: "5 days ago",
      },
    },
    {
      id: 5,
      image: "/placeholder.svg?height=300&width=400",
      status: "FEATURED",
      statusType: "featured",
      price: "₦120,000,000",
      pricePerSqFt: "₦48,000/sq ft",
      title: "Luxury Villa in Banana Island",
      location: "Banana Island, Lagos State, Nigeria",
      bedrooms: 5,
      bathrooms: 4,
      sqft: 3500,
      propertyType: "VILLA",
      agent: {
        name: "Ibrahim Musa",
        avatar: "/placeholder.svg?height=40&width=40",
        timeAgo: "1 day ago",
      },
    },
    {
      id: 6,
      image: "/placeholder.svg?height=300&width=400",
      status: "FOR SALE",
      statusType: "sale",
      price: "₦32,000,000",
      pricePerSqFt: "₦25,000/sq ft",
      title: "Family Home in Magodo",
      location: "Magodo GRA, Lagos State, Nigeria",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2200,
      propertyType: "DETACHED",
      agent: {
        name: "Aisha Mohammed",
        avatar: "/placeholder.svg?height=40&width=40",
        timeAgo: "1 week ago",
      },
    },
  ]

  const itemsPerSlide = 3
  const totalSlides = Math.ceil(listings.length / itemsPerSlide)

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 5000) // 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, totalSlides])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
    setIsAutoPlaying(false) // Stop auto-play when user manually navigates
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume after 10 seconds
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    setIsAutoPlaying(false) // Stop auto-play when user manually navigates
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume after 10 seconds
  }

  const getStatusBadgeColor = (statusType) => {
    switch (statusType) {
      case "featured":
        return "bg-green-500 text-white"
      case "rent":
        return "bg-blue-600 text-white"
      case "sale":
        return "bg-orange-600 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const getCurrentSlideListings = () => {
    const startIndex = currentSlide * itemsPerSlide
    return listings.slice(startIndex, startIndex + itemsPerSlide)
  }

  return (
    <section className="py-16 px-4 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Discover Our Featured Properties</h2>
              <p className="text-gray-600 text-lg">Premium properties across Nigeria's major cities</p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex space-x-2 ml-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                className="w-10 h-10 p-0 rounded-md border-gray-300 hover:bg-gray-100"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                className="w-10 h-10 p-0 rounded-md border-gray-300 hover:bg-gray-100"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {listings.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((listing) => (
                    <div
                      key={listing.id}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      {/* Property Image */}
                      <div className="relative">
                        <img
                          src={listing.image || "/placeholder.svg"}
                          alt={listing.title}
                          className="w-full h-64 object-cover"
                        />

                        {/* Status Badge */}
                        <div className="absolute top-4 left-4">
                          <Badge className={`${getStatusBadgeColor(listing.statusType)} px-3 py-1 text-xs font-medium`}>
                            {listing.status}
                          </Badge>
                        </div>

                        {/* Action Icons */}
                        <div className="absolute bottom-4 right-4 flex space-x-2">
                          <button className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
                            <Eye className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
                            <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                          </button>
                          <button className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
                            <Share2 className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>

                        {/* Price Overlay */}
                        <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-2 rounded">
                          <div className="font-bold text-lg">{listing.price}</div>
                          {listing.pricePerSqFt && <div className="text-sm opacity-90">{listing.pricePerSqFt}</div>}
                        </div>
                      </div>

                      {/* Property Details */}
                      <div className="p-6">
                        {/* Title */}
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer transition-colors">
                          {listing.title}
                        </h3>

                        {/* Location */}
                        <div className="flex items-center text-gray-600 mb-4">
                          <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                          <span className="text-sm">{listing.location}</span>
                        </div>

                        {/* Property Features */}
                        <div className="flex items-center space-x-4 mb-4 text-gray-600">
                          <div className="flex items-center">
                            <Bed className="w-4 h-4 mr-1 text-blue-500" />
                            <span className="text-sm font-medium">{listing.bedrooms}</span>
                          </div>
                          <div className="flex items-center">
                            <Bath className="w-4 h-4 mr-1 text-blue-500" />
                            <span className="text-sm font-medium">{listing.bathrooms}</span>
                          </div>
                          <div className="flex items-center">
                            <Square className="w-4 h-4 mr-1 text-blue-500" />
                            <span className="text-sm font-medium">{listing.sqft} Sq Ft</span>
                          </div>
                        </div>

                        {/* Property Type */}
                        <div className="mb-4">
                          <Badge variant="outline" className="text-xs font-medium border-blue-200 text-blue-700">
                            {listing.propertyType}
                          </Badge>
                        </div>

                        {/* Agent Info */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <div className="flex items-center">
                            <img
                              src={listing.agent.avatar || "/placeholder.svg"}
                              alt={listing.agent.name}
                              className="w-8 h-8 rounded-full mr-3 border-2 border-blue-100"
                            />
                            <span className="text-sm font-medium text-gray-900">{listing.agent.name}</span>
                          </div>
                          <div className="flex items-center text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            <span className="text-xs">{listing.agent.timeAgo}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index)
                setIsAutoPlaying(false)
                setTimeout(() => setIsAutoPlaying(true), 10000)
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function PropertyCategories() {
  const categories = [
    {
      id: 1,
      name: "Studio",
      count: 7,
      image: "/placeholder.svg?height=200&width=300",
      type: "residential",
    },
    {
      id: 2,
      name: "Single Family Home",
      count: 12,
      image: "/placeholder.svg?height=200&width=300",
      type: "residential",
    },
    {
      id: 3,
      name: "Apartment",
      count: 23,
      image: "/placeholder.svg?height=200&width=300",
      type: "residential",
    },
    {
      id: 4,
      name: "Villa",
      count: 18,
      image: "/placeholder.svg?height=200&width=300",
      type: "residential",
    },
    {
      id: 5,
      name: "Office",
      count: 3,
      image: "/placeholder.svg?height=200&width=300",
      type: "commercial",
    },
    {
      id: 6,
      name: "Shop",
      count: 3,
      image: "/placeholder.svg?height=200&width=300",
      type: "commercial",
    },
  ]

  const residentialCategories = categories.filter((cat) => cat.type === "residential")
  const commercialCategories = categories.filter((cat) => cat.type === "commercial")

  return (
    <section className="py-16 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Category Descriptions */}
          <div className="space-y-16">
            {/* Residential Section */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Residential</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <div className="w-16 h-1 bg-blue-600"></div>
            </div>

            {/* Commercial Section */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Commercial</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <div className="w-16 h-1 bg-blue-600"></div>
            </div>
          </div>

          {/* Right Side - Property Categories Grid */}
          <div className="space-y-8">
            {/* Residential Properties */}
            <div className="grid grid-cols-2 gap-4">
              {residentialCategories.map((category) => (
                <div
                  key={category.id}
                  className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  {/* Background Image */}
                  <div
                    className="h-48 bg-cover bg-center relative"
                    style={{
                      backgroundImage: `url(${category.image})`,
                    }}
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>

                    {/* Property Count */}
                    <div className="absolute top-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded text-sm">
                      {category.count} Properties
                    </div>

                    {/* Property Name */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white text-xl lg:text-2xl font-bold text-center px-4">{category.name}</h3>
                    </div>

                    {/* More Details Button */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <Button
                        size="sm"
                        className="bg-white bg-opacity-90 text-gray-900 hover:bg-white hover:bg-opacity-100 text-xs font-medium"
                      >
                        MORE DETAILS
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Commercial Properties */}
            <div className="grid grid-cols-2 gap-4">
              {commercialCategories.map((category) => (
                <div
                  key={category.id}
                  className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  {/* Background Image */}
                  <div
                    className="h-48 bg-cover bg-center relative"
                    style={{
                      backgroundImage: `url(${category.image})`,
                    }}
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>

                    {/* Property Count */}
                    <div className="absolute top-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded text-sm">
                      {category.count} Properties
                    </div>

                    {/* Property Name */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white text-xl lg:text-2xl font-bold text-center px-4">{category.name}</h3>
                    </div>

                    {/* More Details Button */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <Button
                        size="sm"
                        className="bg-white bg-opacity-90 text-gray-900 hover:bg-white hover:bg-opacity-100 text-xs font-medium"
                      >
                        MORE DETAILS
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default function WhyChooseUs() {
  const [formData, setFormData] = useState({
    inquiryType: "",
    information: "",
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    zipCode: "",
    propertyType: "",
    maxPrice: "",
    minSize: "",
    beds: "",
    baths: "",
    consent: false,
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <section className="relative py-16 px-4 lg:px-8 min-h-screen">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/why-choose-bg.png')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Why Choose Us */}
          <div className="text-white space-y-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Why Houzez Is The Perfect Choice?</h2>

            {/* Feature 1 */}
            <div className="space-y-4">
              <div className="text-4xl font-bold text-blue-300">01.</div>
              <h3 className="text-xl font-semibold">Suitable For Agents And Agencies</h3>
              <p className="text-blue-100 leading-relaxed">
                Never miss a lead! It's never been easier to turn leads into real customers.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4">
              <div className="text-4xl font-bold text-blue-300">02.</div>
              <h3 className="text-xl font-semibold">Design Custom Leads Capture Forms</h3>
              <p className="text-blue-100 leading-relaxed">
                Keep track of your leads without having to pay for an external CRM.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4">
              <div className="text-4xl font-bold text-blue-300">03.</div>
              <h3 className="text-xl font-semibold">Highly Customizable Theme</h3>
              <p className="text-blue-100 leading-relaxed">
                Customize your website according to your expectations and requirements.
              </p>
            </div>
          </div>

          {/* Right Side - Inquiry Form */}
          <div className="bg-white rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Real Estate Inquiry Form</h3>
            <p className="text-gray-600 mb-6">Design custom lead capture forms that integrate with the Houzez CRM</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Inquiry Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.inquiryType}
                  onChange={(e) => handleInputChange("inquiryType", e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="buy">Buy Property</option>
                  <option value="rent">Rent Property</option>
                  <option value="sell">Sell Property</option>
                </select>
              </div>

              {/* Information */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Information</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                  placeholder="I'm a..."
                  value={formData.information}
                  onChange={(e) => handleInputChange("information", e.target.value)}
                />
              </div>

              {/* First Name & Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>

              {/* Location & Zip Code */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Zip Code</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.zipCode}
                    onChange={(e) => handleInputChange("zipCode", e.target.value)}
                  />
                </div>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Property</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.propertyType}
                  onChange={(e) => handleInputChange("propertyType", e.target.value)}
                >
                  <option value="">Select type</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="villa">Villa</option>
                  <option value="studio">Studio</option>
                </select>
              </div>

              {/* Max Price & Min Size */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Max price</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.maxPrice}
                    onChange={(e) => handleInputChange("maxPrice", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Minimum size (Sq Ft)</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.minSize}
                    onChange={(e) => handleInputChange("minSize", e.target.value)}
                  />
                </div>
              </div>

              {/* Number of Beds & Baths */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of beds</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.beds}
                    onChange={(e) => handleInputChange("beds", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of baths</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.baths}
                    onChange={(e) => handleInputChange("baths", e.target.value)}
                  />
                </div>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="consent"
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  checked={formData.consent}
                  onChange={(e) => handleInputChange("consent", e.target.checked)}
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  I consent to having this website store my submitted information
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 text-lg font-medium"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
export default function PropertyGallery() {
  const [visibleProperties, setVisibleProperties] = useState(6) // Initially show 6 properties

  const allProperties = [
    // Initial 6 properties
    {
      id: 1,
      image: "/placeholder.svg?height=300&width=400",
      status: "FEATURED",
      statusType: "featured",
      title: "Light and Modern Apartment",
      bedrooms: 4,
      bathrooms: 2,
      sqft: 1200,
      propertyType: "APARTMENT",
      price: "₦4,500,000/mo",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=300&width=400",
      status: "FOR RENT",
      statusType: "rent",
      title: "New Apartment Nice View",
      bedrooms: 3,
      bathrooms: 1,
      sqft: 1789,
      propertyType: "APARTMENT",
      price: "₦11,000,000/mo",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=300&width=400",
      status: "FOR RENT",
      statusType: "rent",
      title: "Duplex",
      bedrooms: 5,
      bathrooms: 3,
      sqft: 3450,
      propertyType: "APARTMENT",
      price: "₦35,600,000/mo",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=300&width=400",
      status: "FOR RENT",
      statusType: "rent",
      title: "Green View Designer",
      bedrooms: 1,
      bathrooms: 1,
      sqft: 1740,
      propertyType: "APARTMENT",
      price: "₦3,500,000/mo",
    },
    {
      id: 5,
      image: "/placeholder.svg?height=300&width=400",
      status: "FOR RENT",
      statusType: "rent",
      title: "Modern Loft Apartment",
      bedrooms: 1,
      bathrooms: 1,
      sqft: 1678,
      propertyType: "APARTMENT",
      price: "₦3,750,000/mo",
    },
    {
      id: 6,
      image: "/placeholder.svg?height=300&width=400",
      status: "FOR RENT",
      statusType: "rent",
      title: "Renovated Kitchen Apartment",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1320,
      propertyType: "APARTMENT",
      price: "�N1,890,000/mo",
    },
    // Additional properties that will show when "Load More" is clicked
    {
      id: 7,
      image: "/placeholder.svg?height=300&width=400",
      status: "FEATURED",
      statusType: "featured",
      title: "Luxury Penthouse",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2800,
      propertyType: "PENTHOUSE",
      price: "₦25,000,000/mo",
    },
    {
      id: 8,
      image: "/placeholder.svg?height=300&width=400",
      status: "FOR RENT",
      statusType: "rent",
      title: "Cozy Studio Apartment",
      bedrooms: 1,
      bathrooms: 1,
      sqft: 850,
      propertyType: "STUDIO",
      price: "₦2,200,000/mo",
    },
    {
      id: 9,
      image: "/placeholder.svg?height=300&width=400",
      status: "FOR RENT",
      statusType: "rent",
      title: "Family Townhouse",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1950,
      propertyType: "TOWNHOUSE",
      price: "₦8,500,000/mo",
    },
    {
      id: 10,
      image: "/placeholder.svg?height=300&width=400",
      status: "FEATURED",
      statusType: "featured",
      title: "Executive Villa",
      bedrooms: 5,
      bathrooms: 4,
      sqft: 4200,
      propertyType: "VILLA",
      price: "₦45,000,000/mo",
    },
    {
      id: 11,
      image: "/placeholder.svg?height=300&width=400",
      status: "FOR RENT",
      statusType: "rent",
      title: "Modern Condo",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1400,
      propertyType: "CONDO",
      price: "₦6,800,000/mo",
    },
    {
      id: 12,
      image: "/placeholder.svg?height=300&width=400",
      status: "FOR RENT",
      statusType: "rent",
      title: "Spacious Loft",
      bedrooms: 2,
      bathrooms: 1,
      sqft: 1600,
      propertyType: "LOFT",
      price: "₦4,200,000/mo",
    },
  ]

  const loadMoreProperties = () => {
    setVisibleProperties((prev) => Math.min(prev + 4, allProperties.length))
  }

  const getStatusBadgeColor = (statusType) => {
    switch (statusType) {
      case "featured":
        return "bg-green-500 text-white"
      case "rent":
        return "bg-gray-600 text-white"
      case "sale":
        return "bg-orange-600 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const displayedProperties = allProperties.slice(0, visibleProperties)
  const hasMoreProperties = visibleProperties < allProperties.length

  return (
    <section className="py-16 px-4 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Check Our Selection Of Finest Properties
          </h2>
          <p className="text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProperties.map((property) => (
            <div
              key={property.id}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Property Image */}
              <div
                className="h-64 bg-cover bg-center relative"
                style={{
                  backgroundImage: `url(${property.image})`,
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className={`${getStatusBadgeColor(property.statusType)} px-3 py-1 text-xs font-medium`}>
                    {property.status}
                  </Badge>
                </div>

                {/* Property Title */}
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                  <h3 className="text-white text-xl font-bold mb-2">{property.title}</h3>
                </div>

                {/* Property Details */}
                <div className="absolute bottom-4 left-4 right-4">
                  {/* Property Features */}
                  <div className="flex items-center space-x-4 mb-2 text-white">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.sqft} Sq Ft</span>
                    </div>
                  </div>

                  {/* Property Type and Price */}
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="text-xs font-medium bg-white text-gray-900">
                      {property.propertyType}
                    </Badge>
                    <div className="text-white font-bold text-lg">{property.price}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMoreProperties && (
          <div className="text-center">
            <Button
              onClick={loadMoreProperties}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg font-medium rounded-md"
            >
              Load More
            </Button>
          </div>
        )}

        {/* Show total count */}
        <div className="text-center mt-6 text-gray-600">
          Showing {visibleProperties} of {allProperties.length} properties
        </div>
      </div>
    </section>
  )
}

