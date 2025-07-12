"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Search } from "lucide-react"

const ShopPage = () => {
  const navigate = useNavigate()
  const [viewAll, setViewAll] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const products = [
    { id: 1, title: "Dining Chair", description: "Elegant sitting chair options for your living room", price: 24000, image: "/image/7.jpg" },
    { id: 2, title: "Decoration", description: "Elegant sitting chair options for your living room", price: 24999, image: "/image/7.jpg" },
    { id: 3, title: "Chair", description: "Elegant sitting chair options for your living room", price: 24999, image: "/image/7.jpg" },
    { id: 4, title: "Sofa", description: "Elegant sitting chair options for your living room", price: 24999, image: "/image/7.jpg" },
    { id: 5, title: "Decoration", description: "Elegant sitting chair options for your living room", price: 24999, image: "/image/7.jpg" },
    { id: 6, title: "Decoration", description: "Elegant sitting chair options for your living room", price: 24999, image: "/image/7.jpg" },
    { id: 7, title: "Chair", description: "Elegant sitting chair options for your living room", price: 24999, image: "/image/7.jpg" },
    { id: 8, title: "L-Shape Sofa", description: "Premium L-shaped sofa set for spacious living rooms", price: 85000, image: "/image/7.jpg" },
    { id: 9, title: "3-Seater Sofa", description: "Comfortable three-seater sofa with modern design", price: 65000, image: "/image/7.jpg" },
    { id: 10, title: "Recliner Sofa", description: "Luxury recliner sofa with premium leather finish", price: 95000, image: "/image/7.jpg" },
    { id: 11, title: "Sectional Sofa", description: "Large sectional sofa perfect for family gatherings", price: 120000, image: "/image/7.jpg" },
    { id: 12, title: "Fabric Sofa Set", description: "Stylish fabric sofa set with matching cushions", price: 75000, image: "/image/7.jpg" },
    { id: 13, title: "Modern Sofa", description: "Contemporary sofa with sleek design", price: 70000, image: "/image/7.jpg" },
    { id: 14, title: "Classic Sofa", description: "Traditional sofa with comfortable cushions", price: 68000, image: "/image/7.jpg" },
    { id: 15, title: "Leather Sofa", description: "Premium leather sofa with durable finish", price: 90000, image: "/image/7.jpg" },
    { id: 16, title: "Corner Sofa", description: "Spacious corner sofa with modern style", price: 83000, image: "/image/7.jpg" },
    { id: 17, title: "Outdoor Sofa", description: "Weather-resistant sofa for outdoor use", price: 54000, image: "/image/7.jpg" },
    { id: 18, title: "Compact Sofa", description: "Small-sized sofa for cozy spaces", price: 39000, image: "/image/7.jpg" },
  ]

  const displayedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const productsToShow = viewAll ? displayedProducts : displayedProducts.slice(0, 8)

  const handleBuyNow = (id) => {
    const selectedProduct = products.find((product) => product.id === id)
    const quantity = 1
    const totalCost = selectedProduct.price * quantity
    navigate(
      `/product/${id}?quantity=${quantity}&totalCost=${totalCost}&productTitle=${encodeURIComponent(selectedProduct.title)}`
    )
  }

  return (
    <div className="font-sans text-black min-h-screen bg-[#fdfdfd]">
      {/* Page header */}
      <div className="max-w-7xl mx-auto mt-10 px-6 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-gray-900">Shop</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="pl-4 pr-10 py-2 border-2 border-gray-300 rounded-full text-sm focus:border-blue-600 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
        </div>
      </div>

      {/* Product gallery */}
      <div className="max-w-7xl mx-auto px-6 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsToShow.map(({ id, title, description, price, image }) => (
          <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group relative">
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg text-gray-900 mb-1">{title}</h2>
              <p className="text-sm text-gray-600 mb-3">{description}</p>
              <p className="font-bold text-blue-600 text-lg">Rs. {price.toLocaleString()}</p>
            </div>
            <button
              onClick={() => handleBuyNow(id)}
              className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex justify-center items-center text-white font-semibold text-lg transition-opacity"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {/* View All Products button */}
      {!viewAll && (
        <div className="max-w-7xl mx-auto px-6 mt-12 text-center">
          <button
            onClick={() => setViewAll(true)}
            className="inline-block border-2 border-gray-700 text-gray-700 px-8 py-3 rounded-md font-semibold hover:bg-gray-700 hover:text-white transition"
          >
            View All Products
          </button>
        </div>
      )}
      <div className="py-10"></div>
    </div>
  )
}

export default ShopPage
