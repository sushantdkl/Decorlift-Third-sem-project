"use client"

import { useState } from "react"
import { MapPin, Phone, Building, Mail, Clock } from "lucide-react"

const ContactPage = () => {
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
    <div className="bg-white min-h-screen">

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Contact Us</h1>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Form Fields */}
            <div className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-gray-500"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-gray-500"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone no."
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-gray-500"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-gray-500"
                required
              />
            </div>

            {/* Right Column - Message and Submit */}
            <div className="space-y-6">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-gray-500 resize-none"
                required
              />

              <button
                type="submit"
                className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-none font-medium transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Map & Address */}
      <div className="flex justify-between mt-16 w-[60%] ml-[380px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d897.8714373236081!2d85.3304934148016!3d27.70582575909895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190a74aa1f23%3A0x74ebef82ad0e5c15!2sSoftwarica%20College%20of%20IT%20and%20E-Commerce!5e1!3m2!1sen!2snp!4v1745568691127!5m2!1sen!2snp"
          width="950"
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
            <p>Softwarica College of IT and E-Commerce</p>
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
      <div className="py-10"></div>
    </div>
  )
}

export default ContactPage
