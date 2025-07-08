"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { User, Search, Facebook, Twitter, Instagram, ArrowUp } from "lucide-react"

const DiningChairsPage = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")

  const products = [
    {
      id: 1,
      title: "Chair",
      price: "Rs. 24,999",
      description: "Elegant dining chair options for your living room",
      image: "src/image/1.jpg",
    },
    {
      id: 2,
      title: "Chair",
      price: "Rs. 24,999",
      description: "Elegant dining chair options for your living room",
      image: "src/image/1.jpg",
    },
    {
      id: 3,
      title: "Chair",
      price: "Rs. 24,999",
      description: "Elegant dining chair options for your living room",
      image: "src/assets/1.jpg",
    },
    {
      id: 4,
      title: "Chair",
      price: "Rs. 24,999",
      description: "Elegant dining chair options for your living room",
      image: "src/assets/1.jpg",
    },
    {
      id: 5,
      title: "Chair",
      price: "Rs. 24,999",
      description: "Elegant dining chair options for your living room",
      image: "src/assets/1.jpg",
    },
    {
      id: 6,
      title: "Chair",
      price: "Rs. 24,999",
      description: "Elegant dining chair options for your living room",
      image: "src/assets/1.jpg",
    },
    {
      id: 7,
      title: "Chair",
      price: "Rs. 24,999",
      description: "Elegant dining chair options for your living room",
      image: "src/assets/1.jpg",
    },
  ]

  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      {/* Banner */}
     <div
        className="relative h-[28vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('src/image/pexels-pixabay-276528.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        <div className="relative z-10 flex items-center justify-between px-10 py-6 bg-black bg-opacity-30">
          <img
            src="src/image/aayush_logo.png"
            alt="Logo"
            className="w-[30px] cursor-pointer"
            onClick={() => navigate("/")}
          />

          <ul className="flex space-x-6 text-white uppercase">
            <li>
              <Link to="/" className="hover:border-b-2 border-teal-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:border-b-2 border-teal-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:border-b-2 border-teal-500 transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:border-b-2 border-teal-500 transition">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:border-b-2 border-teal-500 transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:border-b-2 border-teal-500 transition">
                Login
              </Link>
            </li>
          </ul>

          <button
            onClick={() => navigate("/profile")}
            className="border-2 border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition flex items-center gap-2 text-sm"
          >
            <User className="w-4 h-4" /> Profile
          </button>
        </div>
      </div>

      {/* Page Header */}
      <div className="max-w-6xl mx-auto flex justify-between items-center py-12 px-4">
        <h1 className="text-4xl font-bold">Dining Chair</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search chairs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500 w-64"
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        </div>
      </div>

      {/* Product Gallery */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 pb-20">
        {products.map((product) => (
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
        ))}
      </div>

      {/* View All */}
      <div className="text-center mb-20">
        <button className="inline-block px-6 py-3 border-2 border-gray-700 text-gray-700 rounded-md hover:bg-gray-700 hover:text-white transition font-medium">
          View All Products
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-[#F6F0EB] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 border p-6">
            <h1 className="text-4xl tracking-widest text-[#032437] font-bold">DECORLIFT</h1>
            <div className="flex justify-center space-x-6 mt-6 text-2xl text-gray-600">
              <Facebook className="hover:text-[#3b7da2] cursor-pointer" />
              <Twitter className="hover:text-[#3b7da2] cursor-pointer" />
              <Instagram className="hover:text-[#3b7da2] cursor-pointer" />
              <div className="hover:text-[#3b7da2] cursor-pointer text-2xl font-bold">G</div>
            </div>
            <ul className="flex flex-wrap justify-center space-x-4 mt-8 text-[#032437] font-medium">
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
              <li>
                <a href="#top" className="flex items-center gap-1 text-sm">
                  <ArrowUp className="w-4 h-4" /> Back to top
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default DiningChairsPage
