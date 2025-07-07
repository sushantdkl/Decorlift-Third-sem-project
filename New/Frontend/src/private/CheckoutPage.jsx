"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { User, Instagram, Facebook, Twitter } from "lucide-react"

const CheckoutPage = () => {
  const navigate = useNavigate()
  const [deliveryMethod, setDeliveryMethod] = useState("standard")
  const [shippingDetails, setShippingDetails] = useState({
    customerName: "",
    address: "375 udyog vihar phase 2, Gurgaon, Haryana - 122015",
    phone: "98xxxxxxx",
  })

  // Sample order data - this would typically come from cart/state management
  const orderSummary = {
    totalItems: 3,
    totalCost: 89999,
    shippingCost: 500,
    estimatedTax: 4500,
  }

  const subTotal = orderSummary.totalCost + orderSummary.shippingCost + orderSummary.estimatedTax

  const handleConfirm = () => {
    // Handle order confirmation
    console.log("Order confirmed:", { shippingDetails, deliveryMethod, orderSummary })
    // Navigate to success page or show confirmation
    navigate("/order-success")
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-gray-300 p-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src="src/image/Newlogo.jpg.png"
            alt="DECORLIFT Logo"
            className="w-16 h-16 object-contain cursor-pointer"
            onClick={() => navigate("/")}
          />
          <h1 className="text-3xl font-bold text-gray-800">DECORLIFT</h1>
        </div>
        <nav>
          <ul className="flex gap-8 text-gray-900 font-semibold items-center">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/project" className="hover:underline">
                Project
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <button onClick={() => navigate("/profile")} className="p-1">
                <User className="w-6 h-6 text-gray-900" />
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Check-out</h1>

        {/* Checkout Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Shipping Details */}
          <div className="bg-white rounded-lg border border-gray-300 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Shipping Details</h2>

            <div className="space-y-4">
              {/* Customer Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name.</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 text-sm"
                  rows={3}
                  value={`${shippingDetails.address}\nNumber: ${shippingDetails.phone}`}
                  onChange={(e) => {
                    const lines = e.target.value.split("\n")
                    setShippingDetails({
                      ...shippingDetails,
                      address: lines[0] || "",
                      phone: lines[1]?.replace("Number: ", "") || "",
                    })
                  }}
                />
              </div>

              {/* Additional Customer Info */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name.</label>
                <div className="text-sm text-gray-600">
                  <p>{shippingDetails.address}</p>
                  <p>Number: {shippingDetails.phone}</p>
                </div>
              </div>

              {/* Delivery Options */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Delivery:</label>
                <div className="flex space-x-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="delivery"
                      value="standard"
                      checked={deliveryMethod === "standard"}
                      onChange={(e) => setDeliveryMethod(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm">Standard</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="delivery"
                      value="dulex"
                      checked={deliveryMethod === "dulex"}
                      onChange={(e) => setDeliveryMethod(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm">Dulex</span>
                  </label>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="mt-6 p-3 bg-gray-50 rounded text-xs text-gray-600">
                <p>
                  Returns are only accepted for items that arrive damaged or are incorrect. To request a return, you
                  must contact us within 7 days of delivery with proof of damage or error. All returns must be in
                  original packaging and condition. Customers are responsible for return shipping costs unless the error
                  is ours. We reserve the right to reject returns that do not meet these conditions.
                </p>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg border border-gray-300 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>Total Items:</span>
                <span>{orderSummary.totalItems}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Total Cost:</span>
                <span>Rs. {orderSummary.totalCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping Cost:</span>
                <span>Rs. {orderSummary.shippingCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Estimated Tax:</span>
                <span>Rs. {orderSummary.estimatedTax.toLocaleString()}</span>
              </div>

              <hr className="border-gray-300" />

              <div className="flex justify-between font-semibold text-lg">
                <span>Sub Total:</span>
                <span>Rs. {subTotal.toLocaleString()}</span>
              </div>

              <button
                onClick={handleConfirm}
                className="w-full mt-6 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-300 py-12 text-center text-gray-800">
        <h2 className="text-3xl font-bold mb-6 inline-block border-2 border-gray-800 px-6 py-2">DECORLIFT</h2>
        <div className="flex justify-center gap-8 mb-10">
          <a
            href="#"
            aria-label="Instagram"
            className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
          >
            <Instagram className="w-6 h-6 text-white" />
          </a>
          <a
            href="#"
            aria-label="Google"
            className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
          >
            <div className="w-6 h-6 flex items-center justify-center font-bold text-lg text-white">G</div>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
          >
            <Twitter className="w-6 h-6 text-white" />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
          >
            <Facebook className="w-6 h-6 text-white" />
          </a>
        </div>

        <nav>
          <ul className="flex justify-center gap-10 text-gray-900 font-semibold">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/project" className="hover:underline">
                Project
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}

export default CheckoutPage
