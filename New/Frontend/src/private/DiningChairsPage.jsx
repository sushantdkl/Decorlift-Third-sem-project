"use client"

import { useState } from "react"
import { Search } from "lucide-react"

const DiningChairsPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [showAll, setShowAll] = useState(false)

  const products = [
    {
      id: 1,
      title: "Chair",
      price: "Rs. 24,999",
      description: "Elegant dining chair options for your living room",
      image: "src/image/dining chair.jpg",
    },
    {
      id: 2,
      title: "Wooden Chair",
      price: "Rs. 24,999",
      description: "Modern wooden design",
      image: "src/image/wooden chair.jpg",
    },
    {
      id: 3,
      title: "Luxury Chair",
      price: "Rs. 24,999",
      description: "Luxury chair with leather seat",
      image: "src/image/Luxury-Diningchair.jpg",
    },
    {
      id: 4,
      title: "Dining Chair",
      price: "Rs. 24,999",
      description: "Comfortable dining seating",
      image: "src/image/9.jpg",
    },
    {
      id: 5,
      title: "Stylish Chair",
      price: "Rs. 24,999",
      description: "Modern sleek design",
      image: "src/image/stylish chair.jpg",
    },
    {
      id: 6,
      title: "Minimalist Chair",
      price: "Rs. 24,999",
      description: "Minimal design perfect for small spaces",
      image: "src/image/minimalist chair.jpg",
    },
    {
      id: 7,
      title: "Fabric Chair",
      price: "Rs. 24,999",
      description: "Fabric-covered comfort seating",
      image: "src/image/fabric chair.jpg",
    },
  ]

  const filteredProducts = products.filter((product) =>
    showAll ? true : product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      {/* Page Header */}
      <div className="max-w-6xl mx-auto flex justify-between items-center py-12 px-4">
        <h1 className="text-4xl font-bold">Dining Chair</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search chairs..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setShowAll(false) // Disable showAll when searching
            }}
            className="px-4 py-2 border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500 w-64"
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        </div>
      </div>

      {/* Product Gallery */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 pb-20">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer"
            >
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                className="w-full h-52 object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
              />
              <div className="p-4">
                <div className="text-lg font-semibold">{product.title}</div>
                <div className="text-sm text-gray-500 mb-2">{product.description}</div>
                <div className="text-blue-600 font-bold">{product.price}</div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600 text-lg">No products found.</p>
        )}
      </div>

      {/* View All Button */}
      {!showAll && (
        <div className="text-center mb-20">
          <button
            className="inline-block px-6 py-3 border-2 border-gray-700 text-gray-700 rounded-md hover:bg-gray-700 hover:text-white transition font-medium"
            onClick={() => {
              setSearchTerm("")
              setShowAll(true)
            }}
          >
            View All Products
          </button>
        </div>
      )}
      <div className="py-10"></div>
    </div>
  )
}

export default DiningChairsPage
