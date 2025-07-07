"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { User, Search, Facebook, Twitter, Instagram, ArrowUp } from "lucide-react"

const ShopPage = () => {
  const navigate = useNavigate()
  const [viewAll, setViewAll] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const products = [
    // Initial 8 products
    {
      id: 1,
      title: "Dining Chair",
      description: "Elegant sitting chair options for your living room",
      price: 24000,
      image: "/image/7.jpg",
    },
    {
      id: 2,
      title: "Decoration",
      description: "Elegant sitting chair options for your living room",
      price: 24999,
      image: "/image/7.jpg",
    },
    {
      id: 3,
      title: "Chair",
      description: "Elegant sitting chair options for your living room",
      price: 24999,
      image: "/image/7.jpg",
    },
    {
      id: 4,
      title: "Sofa",
      description: "Elegant sitting chair options for your living room",
      price: 24999,
      image: "/image/7.jpg",
    },
    {
      id: 5,
      title: "Decoration",
      description: "Elegant sitting chair options for your living room",
      price: 24999,
      image: "/image/7.jpg",
    },
    {
      id: 6,
      title: "Decoration",
      description: "Elegant sitting chair options for your living room",
      price: 24999,
      image: "/image/7.jpg",
    },
    {
      id: 7,
      title: "Chair",
      description: "Elegant sitting chair options for your living room",
      price: 24999,
      image: "/image/7.jpg",
    },
    {
      id: 8,
      title: "L-Shape Sofa",
      description: "Premium L-shaped sofa set for spacious living rooms",
      price: 85000,
      image: "/image/7.jpg",
    },
    // Additional 10 products (initially hidden)
    {
      id: 9,
      title: "3-Seater Sofa",
      description: "Comfortable three-seater sofa with modern design",
      price: 65000,
      image: "/image/7.jpg",
    },
    {
      id: 10,
      title: "Recliner Sofa",
      description: "Luxury recliner sofa with premium leather finish",
      price: 95000,
      image: "/image/7.jpg",
    },
    {
      id: 11,
      title: "Sectional Sofa",
      description: "Large sectional sofa perfect for family gatherings",
      price: 120000,
      image: "/image/7.jpg",
    },
    {
      id: 12,
      title: "Fabric Sofa Set",
      description: "Stylish fabric sofa set with matching cushions",
      price: 75000,
      image: "/image/7.jpg",
    },
    {
      id: 13,
      title: "Modern Sofa",
      description: "Contemporary sofa with sleek design",
      price: 70000,
      image: "/image/7.jpg",
    },
    {
      id: 14,
      title: "Classic Sofa",
      description: "Traditional sofa with comfortable cushions",
      price: 68000,
      image: "/image/7.jpg",
    },
    {
      id: 15,
      title: "Leather Sofa",
      description: "Premium leather sofa with durable finish",
      price: 90000,
      image: "/image/7.jpg",
    },
    {
      id: 16,
      title: "Corner Sofa",
      description: "Spacious corner sofa with modern style",
      price: 83000,
      image: "/image/7.jpg",
    },
    {
      id: 17,
      title: "Outdoor Sofa",
      description: "Weather-resistant sofa for outdoor use",
      price: 54000,
      image: "/image/7.jpg",
    },
    {
      id: 18,
      title: "Compact Sofa",
      description: "Small-sized sofa for cozy spaces",
      price: 39000,
      image: "/image/7.jpg",
    },
  ]

  // Decide products to show based on viewAll
  const displayedProducts = products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()))

  // Show first 8 unless viewAll is true
  const productsToShow = viewAll ? displayedProducts : displayedProducts.slice(0, 8)

  const handleBuyNow = (id) => {
    const selectedProduct = products.find((product) => product.id === id)
    const quantity = 1
    const totalCost = selectedProduct.price * quantity

    // Navigate to product detail page with product information
    navigate(
      `/product/${id}?quantity=${quantity}&totalCost=${totalCost}&productTitle=${encodeURIComponent(selectedProduct.title)}`,
    )
  }

  return (
    
       <div className="font-sans text-black">
      {/* Banner + Navbar */}
      <div
        className="relative h-[28vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('src/public/pexels-pixabay-276528.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        <div className="relative z-10 flex items-center justify-between px-10 py-6 bg-black bg-opacity-30">
          <img
            src="src/assets/aayush_logo.png"
            alt="Logo"
            className="w-[30px] cursor-pointer"
            onClick={() => navigate("/")}
          />
        <nav className="w-11/12 max-w-7xl mx-auto flex items-center justify-between h-full px-6 bg-black bg-opacity-30">
          <img src className="w-32 cursor-pointer" onClick={() => navigate("/")} />
          <ul className="flex space-x-6 text-white uppercase text-sm font-semibold">
            <li>
              <Link to="/" className="hover:text-teal-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-teal-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-teal-500 transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-teal-500 transition">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-teal-500 transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-teal-500 transition">
                Login
              </Link>
            </li>
          </ul>
          <button
            onClick={() => navigate("/profile")}
            className="flex items-center gap-2 border-2 border-white text-white rounded-full py-2 px-4 hover:bg-white hover:text-gray-800 transition text-sm"
          >
            <User className="w-4 h-4" /> Profile
          </button>
        </nav>
      </div>
      </div>

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
            {/* Buy Now button on hover */}
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

      {/* Footer */}
      <footer className="mt-24 bg-[#F6F0EB] text-center font-sans py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-[#032437] text-4xl tracking-widest font-bold mb-8">DECORLIFT</div>
          <div className="flex justify-center space-x-6 text-[#032437] text-xl mb-8">
            <a href="#" className="hover:text-teal-700 transition">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-teal-700 transition">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-teal-700 transition">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-teal-700 transition">
              <div className="w-6 h-6 flex items-center justify-center font-bold text-lg">G</div>
            </a>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center gap-6 text-[#032437] uppercase font-semibold text-sm">
              <li>
                <Link to="/" className="hover:text-teal-700">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-teal-700">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-teal-700">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-teal-700">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-teal-700">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#top" className="hover:text-teal-700 flex items-center gap-1">
                  <ArrowUp className="w-4 h-4" /> Back to top
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default ShopPage
