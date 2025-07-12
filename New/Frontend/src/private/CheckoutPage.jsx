"use client"

import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"

const CheckoutPage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // Extract query parameters
  const query = new URLSearchParams(location.search)
  const productId = query.get("productId")
  const quantity = parseInt(query.get("quantity")) || 1
  const totalCost = parseInt(query.get("totalCost")) || 0
  const productTitle = query.get("productTitle") || "Product"

  // Calculated costs
  const shippingCost = 500
  const estimatedTax = Math.floor(totalCost * 0.05)
  const subTotal = totalCost + shippingCost + estimatedTax

  const [deliveryMethod, setDeliveryMethod] = useState("standard")
  const [shippingDetails, setShippingDetails] = useState({
    customerName: "",
    address: "375 Udyog Vihar Phase 2, Gurgaon, Haryana - 122015",
    phone: "98xxxxxxx",
  })

  const handleConfirm = () => {
    console.log("Order confirmed:", {
      productId,
      quantity,
      productTitle,
      shippingDetails,
      deliveryMethod,
      totalCost,
      shippingCost,
      estimatedTax,
      subTotal,
    })
    navigate("/order-success")
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Check-out</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Shipping Details */}
          <div className="bg-white rounded-lg border border-gray-300 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Shipping Details</h2>

            <div className="space-y-4">
              {/* Address & Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address & Phone</label>
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

              {/* Customer Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md text-sm"
                  value={shippingDetails.customerName}
                  onChange={(e) =>
                    setShippingDetails({ ...shippingDetails, customerName: e.target.value })
                  }
                />
              </div>

              {/* Delivery Options */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Delivery Method:</label>
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

              {/* Return Policy */}
              <div className="mt-6 p-3 bg-gray-50 rounded text-xs text-gray-600">
                Returns are only accepted for items that arrive damaged or are incorrect. Contact us within 7 days of
                delivery. All returns must be in original packaging. Customer pays return shipping unless it’s our error.
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg border border-gray-300 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>

            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Product:</span>
                <span>{productTitle}</span>
              </div>
              <div className="flex justify-between">
                <span>Quantity:</span>
                <span>{quantity}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Cost:</span>
                <span>Rs. {totalCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>Rs. {shippingCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax:</span>
                <span>Rs. {estimatedTax.toLocaleString()}</span>
              </div>

              <hr className="border-gray-300" />

              <div className="flex justify-between font-semibold text-lg">
                <span>Subtotal:</span>
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
    </div>
  )
}

export default CheckoutPage
