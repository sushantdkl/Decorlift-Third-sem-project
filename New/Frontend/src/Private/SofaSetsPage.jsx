"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { User, Search, Facebook, Twitter, Instagram, ArrowUp } from 'lucide-react'

const SofaSetsPage = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")

  const products = [
    {
      id: 1,
      title: "Dining Chair",
      description: "Elegant sitting chair options for your living room",
      price: "Rs. 24,000",
      image: "",
    },
    {
      id: 2,
      title: "Decoration",
      description: "Elegant sitting chair options for your living room",
      price: "Rs. 24,999",
      image: "src/public/7.jpg",
    },
    {
      id: 3,
      title: "Chair",
      description: "Elegant sitting chair options for your living room",
      price: "Rs. 24,999",
      image: "src/public/7.jpg",
    },
    {
      id: 4,
      title: "Sofa",
      description: "Elegant sitting chair options for your living room",
      price: "Rs. 24,999",
      image: "src/public/7.jpg",
    },
    {
      id: 5,
      title: "L-Shape Sofa",
      description: "Premium L-shaped sofa set for spacious living rooms",
      price: "Rs. 85,000",
      image: "src/public/7.jpg",
    },
    {
      id: 6,
      title: "3-Seater Sofa",
      description: "Comfortable three-seater sofa with modern design",
      price: "Rs. 65,000",
      image: "src/public/7.jpg",
    },
    {
      id: 7,
      title: "Recliner Sofa",
      description: "Luxury recliner sofa with premium leather finish",
      price: "Rs. 95,000",
      image: "src/public/7.jpg",
    },
    {
      id: 8,
      title: "Sectional Sofa",
      description: "Large sectional sofa perfect for family gatherings",
      price: "Rs. 120,000",
      image: "src/public/7.jpg",
    },
    {
      id: 9,
      title: "Fabric Sofa Set",
      description: "Stylish fabric sofa set with matching cushions",
      price: "Rs. 75,000",
      image: "src/public/7.jpg",
    },
  ]

  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      {/* Banner */}
     <div
        className="relative h-[28vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('src/public/pexels-pixabay-276528.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        <div className="relative z-10 flex items-center justify-between px-10 py-6 bg-black bg-opacity-30">
          <img
            src="src/public/aayush_logo.png"
            alt="Logo"
            className="w-[20px] cursor-pointer"
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
            className="flex items-center gap-2 border border-white px-4 py-1.5 rounded-full text-white text-sm hover:bg-white hover:text-black transition"
          >
            <User className="w-4 h-4" /> Profile
          </button>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center my-10 flex-wrap gap-4">
        <h1 className="text-3xl font-bold">Sofa Sets</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search sofa sets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-4 pr-10 py-2 rounded-full border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
        </div>
      </div>

      {/* Product Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 pb-16">
        {products.map((product) => (
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
        ))}
      </div>

      {/* View All */}
      <div className="text-center mb-20">
        <button className="inline-block border-2 border-gray-800 px-6 py-3 rounded hover:bg-gray-800 hover:text-white transition text-sm font-medium">
          View All Products
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-[#F6F0EB] py-10 border-t border-gray-300">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl text-[#032437] font-bold mb-4">DECORLIFT</h1>
          <div className="flex justify-center space-x-6 text-2xl text-gray-600 mb-6">
            <Facebook className="hover:text-blue-600 cursor-pointer" />
            <Twitter className="hover:text-blue-500 cursor-pointer" />
            <Instagram className="hover:text-pink-500 cursor-pointer" />
            <div className="hover:text-red-500 cursor-pointer text-2xl font-bold">G</div>
          </div>
          <ul className="flex flex-wrap justify-center gap-6 text-[#032437] uppercase text-sm font-semibold">
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
              <a href="#top" className="flex items-center gap-1 text-black hover:underline">
                <ArrowUp className="w-4 h-4" /> Back to top
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default SofaSetsPage
