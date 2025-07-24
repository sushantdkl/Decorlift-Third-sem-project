"use client"

import { Link } from "react-router-dom"
import { Instagram, Globe, Twitter, Facebook, ArrowUp } from "lucide-react"

// Footer component for the website
// Contains social links and navigation
// Project completion: All features implemented
const Footer = () => {
  // Function to scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#f5f1eb] p-6">
      <div className="border-4 border-gray-600 px-8 py-8 rounded-lg shadow-lg">
        <div className="text-center">
          {/* Logo */}
          <div className="inline-block border-4 border-black px-12 py-4 mb-12">
            <h3 className="text-3xl font-bold text-black tracking-[0.2em]">DECORLIFT</h3>
          </div>

          {/* Social Icons */}

          <div className="flex justify-center space-x-8 mb-16">
            <a
              href="https://www.instagram.com/_sushant_dhakal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700 transition-colors"
            >
              <Instagram className="w-8 h-8" />
            </a>
            <a
              href="http://localhost:5174/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700 transition-colors"
            >
              <Globe className="w-8 h-8" />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700 transition-colors"
            >
              <Twitter className="w-8 h-8" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700 transition-colors"
            >
              <Facebook className="w-8 h-8" />
            </a>
          </div>

          {/* Navigation Links with Back to Top */}

          <div className="flex justify-center items-center space-x-12 text-black text-lg font-medium">
            <Link to="/" className="hover:text-gray-700 transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-700 transition-colors">
              About Us
            </Link>
            <Link to="/Gallery" className="hover:text-gray-700 transition-colors">
              Gallery
            </Link>
            <Link to="/services" className="hover:text-gray-700 transition-colors">
              Our Services
            </Link>
            <Link to="/contact" className="hover:text-gray-700 transition-colors">
              Contact Us
            </Link>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 hover:text-gray-700 transition-colors ml-8"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
