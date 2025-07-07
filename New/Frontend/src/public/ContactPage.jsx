"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { User, MapPin, Phone, Building, Mail, Clock, Facebook, Twitter, Instagram, ArrowUp } from "lucide-react"

const ContactPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    email: "",
    phone: "",
    subject: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    // Handle form submission here
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
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


          <ul className="flex gap-5">
            <li>
              <Link to="/" className="uppercase text-white hover:border-b-2 border-teal-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="uppercase text-white hover:border-b-2 border-teal-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="uppercase text-white hover:border-b-2 border-teal-400 transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/services" className="uppercase text-white hover:border-b-2 border-teal-400 transition">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="uppercase text-white border-b-2 border-teal-400">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/login" className="uppercase text-white hover:border-b-2 border-teal-400 transition">
                Login
              </Link>
            </li>
          </ul>

          <button
            onClick={() => navigate("/profile")}
            className="text-white border border-white rounded-full px-4 py-1 flex items-center gap-2 hover:bg-white hover:text-black transition"
          >
            <User className="w-4 h-4" />
            Profile
          </button>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-[50px] mt-20 ml-[370px] text-gray-700 tracking-wider drop-shadow">Contact Us</h1>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="flex flex-col items-start gap-4 w-[25%] mx-[380px] mt-10">
        <input
          type="text"
          name="name"
          placeholder="Your name.."
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={6}
          value={formData.message}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border rounded"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone no"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border rounded"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border rounded"
          required
        />
        <input
          type="submit"
          value="Submit"
          className="bg-yellow-700 text-white px-6 py-2 rounded cursor-pointer hover:bg-yellow-800 transition"
        />
      </form>

      {/* Map & Address */}
      <div className="flex justify-between mt-16 w-[60%] ml-[380px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1510579767645"
          width="600"
          height="450"
          className="border rounded"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="bg-yellow-700 text-white p-6 w-full ml-6">
          <h1 className="text-2xl mb-4">Address</h1>
          <div className="grid grid-cols-[40px_auto] gap-y-2 mb-8">
            <MapPin className="w-5 h-5 mt-1" />
            <p>123 Street W, Seattle WA 99999 Paris, France.</p>
            <Phone className="w-5 h-5 mt-1" />
            <p>+12 345 567 7890</p>
            <Building className="w-5 h-5 mt-1" />
            <p>+12 345 567 7890</p>
            <Mail className="w-5 h-5 mt-1" />
            <p>mail@example.com</p>
          </div>

          <h1 className="text-2xl mb-2">OPENING HOURS</h1>
          <div className="grid grid-cols-[40px_auto] gap-y-2">
            <Clock className="w-5 h-5 mt-1" />
            <p>Monday - Friday: 9am - 6pm</p>
            <Clock className="w-5 h-5 mt-1" />
            <p>Saturday and Sunday: 10am - 4pm</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#F6F0EB] mt-24 py-10 text-center border-t">
        <div className="text-[#032437] text-3xl font-bold border w-fit mx-auto px-8 py-2">DECORLIFT</div>

        <div className="flex justify-center gap-6 my-4 text-xl text-[#032437]">
          <Facebook className="hover:text-[#3b7da2] cursor-pointer" />
          <Twitter className="hover:text-[#3b7da2] cursor-pointer" />
          <Instagram className="hover:text-[#3b7da2] cursor-pointer" />
          <div className="hover:text-[#3b7da2] cursor-pointer text-xl font-bold">G</div>
        </div>

        <ul className="flex justify-center gap-6 mt-4 text-[#032437] uppercase">
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
            <a href="#top" className="text-[#032437] flex items-center gap-1">
              <ArrowUp className="w-4 h-4" /> Back to top
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default ContactPage
