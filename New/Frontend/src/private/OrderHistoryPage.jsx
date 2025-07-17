"use client"
 
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ProfileLayout from "../components/ProfileLayout"
import { userapi } from "../services/userapi.js"
 
const OrderHistoryPage = () => {
  const navigate = useNavigate()
  const [orders, setOrders] = useState([])
 
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await userapi.get("/api/orders")
        setOrders(response.data.data)
      } catch (error) {
        console.error("Failed to fetch orders", error)
      }
    }
    fetchOrders()
  }, [])
 
  const handleReturnRefund = (order) => {
    navigate("/return-refund", { state: { order } })
  }
 
  return (
    <ProfileLayout>
      <div className="p-10 bg-gray-50 min-h-screen">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Order History</h1>
        </div>
 
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex gap-6">
                {/* Product Image */}
                <div className="flex-shrink-0">
                  <img
                    src={order.Product.image || "/placeholder.svg"}
                    alt={order.Product.name}
                    className="w-32 h-32 object-cover rounded-lg border"
                  />
                </div>
 
                {/* Product Details */}
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{order.Product.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">{order.address}</p>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span>Purchased on: {new Date(order.createdAt).toLocaleDateString()}</span>
                      <span>Purchase For: Rs {order.subTotal}</span>
                    </div>
                    <p className="text-sm text-green-600 font-medium mt-1">{order.status}</p>
                  </div>
 
                  {/* Action Button */}
                  {order.status === "Delivered" && (
                    <div className="flex justify-end">
                      <button
                        onClick={() => handleReturnRefund(order)}
                        className="text-teal-600 hover:text-teal-700 font-medium text-sm underline"
                      >
                        Refund/Return
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProfileLayout>
  )
}
 
export default OrderHistoryPage
 
 