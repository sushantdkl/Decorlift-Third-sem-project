"use client"

import { useState } from "react"
import { Search } from "lucide-react"

const OfficeChairsPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [showAll, setShowAll] = useState(false)

  const products = [
    { id: 1, title: "Executive Chair", description: "Elegant executive chair options for your office", price: "Rs. 24,000", image: "src/image/executive_chair.jpg" },
    { id: 2, title: "Ergonomic Chair", description: "Comfortable ergonomic chair for long hours", price: "Rs. 24,000", image: "src/image/ergonomic_chair.jpg" },
    { id: 3, title: "Conference Chair", description: "Professional chair for meeting rooms", price: "Rs. 34,000", image: "src/image/conference_chair.jpg" },
    { id: 4, title: "Gaming Chair", description: "High-performance chair for gaming", price: "Rs. 54,000", image: "src/image/gaming_chair.jpg" },
    { id: 5, title: "Reception Chair", description: "Stylish chair for reception areas", price: "Rs. 45,000", image: "src/image/reception_chair.jpg" },
    { id: 6, title: "Task Chair", description: "Versatile task chair for office work", price: "Rs. 32,000", image: "src/image/task_chair.jpg" },
    { id: 7, title: "Swivel Chair", description: "Comfortable swivel chair with adjustable height", price: "Rs. 28,000", image: "src/image/swivel_chair.jpg" },
    { id: 8, title: "Mesh Chair", description: "Breathable mesh chair for better comfort", price: "Rs. 38,000", image: "src/image/mesh_chair.jpg" },
    { id: 9, title: "Leather Office Chair", description: "Premium leather office chair with durable finish", price: "Rs. 22,000", image: "src/image/leather_office_chair.jpg" },
  ]

  // Filter based on search input
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Limit display to first 4 unless showAll is true
  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 4)

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 mt-10 flex justify-between items-center flex-wrap gap-4">
        <h1 className="text-3xl font-bold">Office Chairs</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search chairs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 rounded-full border border-gray-300 pr-10"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedProducts.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">No products found.</p>
        ) : (
          displayedProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              <p className="text-blue-600 font-semibold">{product.price}</p>
            </div>
          ))
        )}
      </div>

      {/* View All Button */}
      {filteredProducts.length > 4 && !showAll && (
        <div className="text-center my-10">
          <button
            onClick={() => setShowAll(true)}
            className="inline-block px-6 py-2 border border-gray-700 rounded hover:bg-gray-800 hover:text-white transition text-sm font-medium"
          >
            View All Products
          </button>
        </div>
      )}
      <div className="py-10"></div>
    </div>
  )
}

export default OfficeChairsPage
