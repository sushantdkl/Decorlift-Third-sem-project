"use client"

import { useState } from "react"
import { Search } from 'lucide-react'

const SofaSetsPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [showAll, setShowAll] = useState(false)

  const products = [
    {
      id: 1,
      title: "Classic Sofa",
      description: "Elegant classic sofa for your living room",
      price: "Rs. 24,000",
      image: "src/image/classic sofa.jpg",
    },
    {
      id: 2,
      title: "Modern Sofa",
      description: "Modern design sofa with sleek lines",
      price: "Rs. 24,999",
      image: "src/image/modern sofa.jpg",
    },
    {
      id: 3,
      title: "L-Shape Sofa",
      description: "Premium L-shaped sofa set for spacious living rooms",
      price: "Rs. 24,999",
      image: "src/image/L-shapesofa.jpg",
    },
    {
      id: 4,
      title: "Recliner Sofa",
      description: "Luxury recliner sofa with premium leather finish",
      price: "Rs. 24,999",
      image: "src/image/69.jpg",
    },
    {
      id: 5,
      title: "Sectional Sofa",
      description: "Large sectional sofa perfect for family gatherings",
      price: "Rs. 85,000",
      image: "src/image/96.jpg",
    },
    {
      id: 6,
      title: "Fabric Sofa Set",
      description: "Stylish fabric sofa set with matching cushions",
      price: "Rs. 65,000",
      image: "src/image/669.jpg",
    },
    {
      id: 7,
      title: "Leather Sofa",
      description: "Premium leather sofa with durable finish",
      price: "Rs. 95,000",
      image: "src/image/leather sofa.jpg",
    },
    {
      id: 8,
      title: "Compact Sofa",
      description: "Compact sofa perfect for small spaces",
      price: "Rs. 120,000",
      image: "src/image/compact sofa.jpg",
    },
    {
      id: 9,
      title: "Luxury Sofa",
      description: "Luxury sofa with elegant design",
      price: "Rs. 75,000",
      image: "src/image/luxury_sofa.jpg",
    },
  ]

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const displayedProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 4)

  return (
    <div className="font-sans bg-gray-100 text-gray-800 min-h-screen">
      {/* Page Header */}
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center my-10 flex-wrap gap-4">
        <h1 className="text-3xl font-bold">Sofa Sets</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search sofa sets..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setShowAll(false) // Reset view to limited on new search
            }}
            className="pl-4 pr-10 py-2 rounded-full border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
        </div>
      </div>

      {/* Product Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 pb-16">
        {displayedProducts.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">No products found.</p>
        ) : (
          displayedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition"
            >
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                className="h-48 w-full object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{product.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                <p className="text-blue-600 font-semibold">{product.price}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* View All Button */}
      {filteredProducts.length > 4 && !showAll && (
        <div className="text-center mb-20">
          <button
            onClick={() => setShowAll(true)}
            className="inline-block border-2 border-gray-800 px-6 py-3 rounded hover:bg-gray-800 hover:text-white transition text-sm font-medium"
          >
            View All Products
          </button>
        </div>
      )}
    </div>
  )
}

export default SofaSetsPage
