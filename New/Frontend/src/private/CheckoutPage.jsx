"use client"

import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { userapi } from "../services/userapi.js"

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
    address: "",
    phone: "",
  })
  const [loading, setLoading] = useState(true)
  const [userAddresses, setUserAddresses] = useState([])

  // Fetch current user and their addresses
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true)
        
        // Get current user info
        const userResponse = await userapi.get("/api/auth/init")
        const currentUser = userResponse.data.data
        
        // Get user's addresses (current user's addresses only)
        const addressResponse = await userapi.get("/api/addresses")
        const addresses = addressResponse.data.data || []
        
        // Set default values
        setShippingDetails({
          customerName: currentUser.name || "",
          address: addresses.length > 0 ? addresses[0].address : "",
          phone: addresses.length > 0 ? addresses[0].mobile : "",
        })
        
        setUserAddresses(addresses)
        
      } catch (error) {
        console.error("Failed to fetch user data:", error)
        // If error, keep empty fields for manual entry
      } finally {
        setLoading(false)
      }
    }

    fetchUserData()
  }, [])

  const handleConfirm = async () => {
    try {
      await userapi.post("/api/orders", {
        productId,
        quantity,
        totalCost,
        shippingCost,
        estimatedTax,
        subTotal,
        customerName: shippingDetails.customerName,
        address: shippingDetails.address,
        phone: shippingDetails.phone,
        deliveryMethod,
      })
      alert("product ordered successfully")
      navigate("/order-history")
    } catch (error) {
      console.error("Failed to confirm order", error)
      alert("Failed to confirm order. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Check-out</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Shipping Details */}
          <div className="bg-white rounded-lg border border-gray-300 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Shipping Details</h2>

            {loading ? (
              <div className="flex items-center justify-center py-8">
                <div className="text-gray-500">Loading your information...</div>
              </div>
            ) : (
              <div className="space-y-4">
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
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Address Selector (if user has saved addresses) */}
                {userAddresses.length > 0 && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Select Saved Address</label>
                    <select
                      className="w-full p-3 border border-gray-300 rounded-md text-sm"
                      onChange={(e) => {
                        const selectedAddress = userAddresses.find(addr => addr.id === parseInt(e.target.value))
                        if (selectedAddress) {
                          setShippingDetails({
                            ...shippingDetails,
                            address: selectedAddress.address,
                            phone: selectedAddress.mobile,
                          })
                        }
                      }}
                    >
                      <option value="">Choose an address...</option>
                      {userAddresses.map((address) => (
                        <option key={address.id} value={address.id}>
                          {address.address.substring(0, 50)}...
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-md text-sm"
                    rows={3}
                    value={shippingDetails.address}
                    onChange={(e) =>
                      setShippingDetails({ ...shippingDetails, address: e.target.value })
                    }
                    placeholder="Enter your full address"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full p-3 border border-gray-300 rounded-md text-sm"
                    value={shippingDetails.phone}
                    onChange={(e) =>
                      setShippingDetails({ ...shippingDetails, phone: e.target.value })
                    }
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Delivery Options */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Delivery Method:</label>
                  <div className="flex space-x-6">
                    <label className="flex items-center cursor-pointer">
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
                  </div>
                </div>

                {/* Return Policy */}
                <div className="mt-6 p-3 bg-gray-50 rounded text-xs text-gray-600">
                  Returns are only accepted for items that arrive damaged or are incorrect. Contact us within 7 days of
                  delivery. All returns must be in original packaging. Customer pays return shipping unless it's our error.
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg border border-gray-300 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>

            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Product:</span>
                <span className="font-medium">{productTitle}</span>
              </div>
              <div className="flex justify-between">
                <span>Quantity:</span>
                <span>{quantity}</span>
              </div>
              <div className="flex justify-between">
                <span>Product Cost:</span>
                <span>Rs. {totalCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>Rs. {shippingCost}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax:</span>
                <span>Rs. {estimatedTax}</span>
              </div>
              <hr className="border-gray-300" />
              <div className="flex justify-between text-lg font-bold text-gray-900">
                <span>Total:</span>
                <span>Rs. {subTotal.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={handleConfirm}
              disabled={loading || !shippingDetails.customerName || !shippingDetails.address || !shippingDetails.phone}
              className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-medium transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? "Loading..." : "Confirm Order"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
