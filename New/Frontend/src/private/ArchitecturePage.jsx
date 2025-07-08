"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { User, Search, Facebook, Twitter, Instagram, ArrowUp } from "lucide-react"

const ArchitecturePage = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")

  const architectureProjects = [
    {
      id: 1,
      title: "Modern Living Room",
      description: "Contemporary design with elegant furniture and lighting",
      price: "Rs. 2,50,000",
      image: "src/public/10.jpg",
    },
    {
      id: 2,
      title: "Luxury Bedroom",
      description: "Premium bedroom design with modern amenities",
      price: "Rs. 1,80,000",
      image: "src/public/10.jpg",
    },
    {
      id: 3,
      title: "Classic Kitchen",
      description: "Traditional kitchen with modern functionality",
      price: "Rs. 3,20,000",
      image: "src/public/10.jpg",
    },
    {
      id: 4,
      title: "Minimalist Office",
      description: "Clean and productive workspace design",
      price: "Rs. 1,50,000",
      image: "src/public/10.jpg",
    },
    {
      id: 5,
      title: "Elegant Dining Room",
      description: "Sophisticated dining space for family gatherings",
      price: "Rs. 2,00,000",
      image: "src/public/10.jpg",
    },
    {
      id: 6,
      title: "Contemporary Bathroom",
      description: "Modern bathroom with luxury fixtures",
      price: "Rs. 1,20,000",
      image: "src/public/10.jpg",
    },
    {
      id: 7,
      title: "Cozy Study Room",
      description: "Perfect reading and study environment",
      price: "Rs. 90,000",
      image: "src/public/10.jpg",
    },
    {
      id: 8,
      title: "Outdoor Terrace",
      description: "Beautiful outdoor living space design",
      price: "Rs. 1,75,000",
      image: "src/public/10.jpg",
    },
    {
      id: 9,
      title: "Reception Area",
      description: "Professional and welcoming entrance design",
      price: "Rs. 2,80,000",
      image: "src/public/10.jpg",
    },
    {
      id: 10,
      title: "Modern Conference Room",
      description: "Professional meeting space with cutting-edge design",
      price: "Rs. 2,20,000",
      image: "src/public/10.jpg",
    },
    {
      id: 11,
      title: "Luxury Lounge",
      description: "Elegant relaxation space for premium comfort",
      price: "Rs. 3,50,000",
      image: "src/public/10.jpg",
    },
    {
      id: 12,
      title: "Creative Workspace",
      description: "Inspiring environment for creative professionals",
      price: "Rs. 1,90,000",
      image: "src/public/10.jpg",
    },
  ]

  return (
    <div className="text-gray-800 bg-gray-100">
      {/* Banner and Navbar */}
      <div
        className="w-full h-[28vh] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)), url('src/image/pexels-pixabay-276528.jpg')",
        }}
      >
        <div className="w-11/12 mx-auto py-8 px-4 flex justify-between items-center bg-black bg-opacity-30">
          <img
            src="src/image/aayush_logo.png"
            alt="Logo"
            className="w-32 cursor-pointer"
            onClick={() => navigate("/")}
          />

          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-white uppercase hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white uppercase hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="text-white uppercase hover:underline">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-white uppercase hover:underline">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white uppercase hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-white uppercase hover:underline">
                Login
              </Link>
            </li>
          </ul>

          <button
            onClick={() => navigate("/profile")}
            className="text-white border border-white rounded-full px-4 py-2 flex items-center hover:bg-white hover:text-black transition text-sm"
          >
            <User className="w-4 h-4 mr-2" /> Profile
          </button>
        </div>
      </div>

      {/* Page Header */}
      <div className="max-w-7xl mx-auto my-10 px-4 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold">Architecture</h1>
        <div className="relative mt-4 md:mt-0">
          <input
            type="text"
            className="pl-4 pr-10 py-2 border-2 border-gray-300 rounded-full w-64 focus:outline-none focus:border-blue-500"
            placeholder="Search architecture..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        </div>
      </div>

      {/* Product Gallery */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 pb-10">
        {architectureProjects.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transform hover:-translate-y-1 transition cursor-pointer"
          >
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="p-4">
              <div className="font-semibold text-lg text-gray-800 mb-1">{item.title}</div>
              <div className="text-sm text-gray-600 mb-2">{item.description}</div>
              <div className="text-blue-500 font-semibold">{item.price}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mb-20">
        <button className="inline-block border-2 border-gray-800 px-6 py-2 rounded hover:bg-gray-800 hover:text-white transition">
          View All Projects
        </button>
      </div>

      {/* Footer */}
      <div className="bg-[#F6F0EB] py-10">
        <div className="max-w-6xl mx-auto px-4 border border-gray-300 p-6">
          <div className="text-center text-4xl font-bold text-[#032437] tracking-wider mb-6">DECORLIFT</div>
          <div className="flex justify-center space-x-6 mb-6 text-[#032437] text-xl">
            <Facebook className="hover:text-blue-600 cursor-pointer" />
            <Twitter className="hover:text-blue-600 cursor-pointer" />
            <Instagram className="hover:text-blue-600 cursor-pointer" />
            <div className="hover:text-blue-600 cursor-pointer text-xl font-bold">G</div>
          </div>
          <div className="flex flex-wrap justify-center space-x-6">
            <Link to="/" className="text-[#032437] uppercase hover:underline">
              Home
            </Link>
            <Link to="/about" className="text-[#032437] uppercase hover:underline">
              About Us
            </Link>
            <Link to="/gallery" className="text-[#032437] uppercase hover:underline">
              Gallery
            </Link>
            <Link to="/services" className="text-[#032437] uppercase hover:underline">
              Our Services
            </Link>
            <Link to="/contact" className="text-[#032437] uppercase hover:underline">
              Contact Us
            </Link>
            <a href="#top" className="text-[#032437] flex items-center gap-2 hover:underline">
              <ArrowUp className="w-4 h-4" /> Back to top
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArchitecturePage;
