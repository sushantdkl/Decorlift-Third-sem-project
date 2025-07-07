"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { User, Search, Facebook, Twitter, Instagram, ArrowUp } from "lucide-react"

const OfficeChairsPage = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")

  const products = [
    {
      id: 1,
      title: "Dining Chair",
      description: "Elegant sitting chair options for your living room",
      price: "Rs. 24,000",
      image: "src/public/11.jpg",
    },
    {
      id: 2,
      title: "Decoration",
      description: "Elegant sitting chair options for your living room",
      price: "Rs. 24,000",
      image: "src/public/11.jpg",
    },
    {
      id: 3,
      title: "Chair",
      description: "Elegant sitting chair options for your living room",
      price: "Rs. 34,000",
      image: "src/public/11.jpg",
    },
    {
      id: 4,
      title: "Sofa",
      description: "Elegant sitting chair options for your living room",
      price: "Rs. 54,000",
      image: "src/public/11.jpg",
    },
    {
      id: 5,
      title: "Executive Chair",
      description: "Premium executive chair with leather finish",
      price: "Rs. 45,000",
      image: "src/public/11.jpg",
    },
    {
      id: 6,
      title: "Ergonomic Chair",
      description: "Comfortable ergonomic design for long hours",
      price: "Rs. 32,000",
      image: "src/public/11.jpg",
    },
    {
      id: 7,
      title: "Conference Chair",
      description: "Professional chair for meeting rooms",
      price: "Rs. 28,000",
      image: "src/public/11.jpg",
    },
    {
      id: 8,
      title: "Gaming Chair",
      description: "High-performance chair for gaming",
      price: "Rs. 38,000",
      image: "src/public/11.jpg",
    },
    {
      id: 9,
      title: "Reception Chair",
      description: "Stylish chair for reception areas",
      price: "Rs. 22,000",
      image: "src/public/11.jpg",
    },
  ]

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Banner */}
      <div
        className="w-full h-[28vh] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('src/public/pexels-pixabay-276528.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* Navbar */}
        <div className="relative z-10 flex justify-between items-center px-10 py-6 bg-black bg-opacity-30">
          <img
            src="src/assets/aayush_logo.png"
            alt="Logo"
            className="w-28 cursor-pointer"
            onClick={() => navigate("/")}
          />

          <ul className="flex space-x-6 text-white uppercase text-sm">
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
            className="text-white border border-white px-4 py-1 rounded-full flex items-center gap-2 text-sm hover:bg-white hover:text-black transition"
          >
            <User className="w-4 h-4" /> Profile
          </button>
        </div>
      </div>

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

      {/* Products */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
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
        ))}
      </div>

      {/* View All */}
      <div className="text-center my-10">
        <button className="inline-block px-6 py-2 border border-gray-700 rounded hover:bg-gray-800 hover:text-white transition text-sm font-medium">
          View All Products
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-[#F6F0EB] py-10 border-t">
        <div className="text-center text-3xl font-bold text-[#032437] mb-4">DECORLIFT</div>
        <div className="flex justify-center space-x-6 mb-6 text-xl text-gray-700">
          <Facebook className="hover:text-blue-600 cursor-pointer" />
          <Twitter className="hover:text-blue-600 cursor-pointer" />
          <Instagram className="hover:text-blue-600 cursor-pointer" />
          <div className="hover:text-blue-600 cursor-pointer text-xl font-bold">G</div>
        </div>
        <ul className="flex justify-center space-x-6 text-sm text-[#032437] uppercase font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/services">Our Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="flex items-center gap-1">
            <ArrowUp className="w-4 h-4" />
            <a href="#top">Back to top</a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default OfficeChairsPage
