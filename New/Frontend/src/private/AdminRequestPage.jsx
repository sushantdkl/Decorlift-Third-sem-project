"use client"

import { useState } from "react"
import { ArrowLeft, CheckCircle, XCircle } from "lucide-react"

const sampleRequests = [
  {
    id: "1",
    productName: "White Aesthetic Chair",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Finnish-american architect and designer Eero Saarinen famously hated the sight of many table and chair legs in a room.",
    address: "375 taking chair phase 2, Gurgaon, Haryana - 122015",
    purchasedFor: "Rs. 24,000",
    deliveredOn: "2024-01-15",
    remarks: "Customer satisfied with delivery",
    purchaseBy: "",
    purchaseOn: "",
    purchaseFor: "",
    reason: "",
    customerWants: "",
    status: "pending",
  },
  {
    id: "2",
    productName: "Modern Sofa Set",
    image: "/placeholder.svg?height=200&width=200",
    description: "Comfortable modern sofa set perfect for living rooms.",
    address: "456 Oak Avenue, Delhi - 110001",
    purchasedFor: "Rs. 45,000",
    deliveredOn: "2024-01-12",
    remarks: "Delivery completed successfully",
    purchaseBy: "",
    purchaseOn: "",
    purchaseFor: "",
    reason: "",
    customerWants: "",
    status: "approved",
  },
]

export default function ProductRequestsPage() {
  const [activeView, setActiveView] = useState("list")
  const [selectedRequest, setSelectedRequest] = useState(null)

  const handleRequestClick = (request) => {
    setSelectedRequest(request)
    setActiveView("details")
  }

  const handleBackToList = () => {
    setActiveView("list")
    setSelectedRequest(null)
  }

  const handleApprove = () => {
    console.log("Request approved")
    alert("Request approved")
    handleBackToList()
  }

  const handleDecline = () => {
    console.log("Request declined")
    alert("Request declined")
    handleBackToList()
  }

  return (
    <div className="p-6">
      {activeView === "list" ? (
        <>
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Product Requests</h1>
          <div className="space-y-4">
            {sampleRequests.map((request) => (
              <div
                key={request.id}
                onClick={() => handleRequestClick(request)}
                className="cursor-pointer border border-gray-200 rounded-lg p-6 flex space-x-4 hover:shadow-md transition-shadow"
              >
                <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={request.image || "/placeholder.svg"}
                    alt={request.productName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{request.productName}</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      <strong>Address:</strong> {request.address}
                    </p>
                    <p>
                      <strong>Purchased for:</strong> {request.purchasedFor}
                    </p>
                    <p>
                      <strong>Delivered on:</strong> {request.deliveredOn}
                    </p>
                    <p>
                      <strong>Remarks:</strong> {request.remarks}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center mb-6">
            <button
              onClick={handleBackToList}
              className="mr-4 flex items-center text-teal-700 hover:text-teal-900"
            >
              <ArrowLeft className="w-5 h-5 mr-1" />
              Back
            </button>
            <h1 className="text-2xl font-semibold text-gray-900">Product Request Details</h1>
          </div>

          {selectedRequest && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="border border-gray-200 rounded-lg p-6 flex items-center justify-center h-80 bg-gray-200 mb-4">
                  <div className="text-center text-gray-500">
                    <div className="text-sm">Image uploaded by</div>
                    <div className="text-sm font-medium">customer</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedRequest.productName}</h2>
                  <p className="text-gray-600">{selectedRequest.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="purchaseBy" className="block text-sm font-medium text-gray-700 mb-1">
                      Purchase By:
                    </label>
                    <input
                      id="purchaseBy"
                      type="text"
                      className="h-10 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Enter purchaser name"
                    />
                  </div>
                  <div>
                    <label htmlFor="purchaseFor" className="block text-sm font-medium text-gray-700 mb-1">
                      Purchase For:
                    </label>
                    <input
                      id="purchaseFor"
                      type="text"
                      className="h-10 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Enter purchase purpose"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="purchaseOn" className="block text-sm font-medium text-gray-700 mb-1">
                    Purchase on:
                  </label>
                  <input
                    id="purchaseOn"
                    type="date"
                    className="h-10 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                    Reason:
                  </label>
                  <textarea
                    id="reason"
                    placeholder="Enter reason..."
                    className="w-full min-h-[100px] border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label htmlFor="customerWants" className="block text-sm font-medium text-gray-700 mb-1">
                    Customer wants:
                  </label>
                  <input
                    id="customerWants"
                    type="text"
                    className="h-10 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Specify customer's desired action"
                  />
                </div>

                <div className="flex space-x-4 pt-4">
                  <button
                    onClick={handleApprove}
                    className="flex items-center px-8 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Approve
                  </button>
                  <button
                    onClick={handleDecline}
                    className="flex items-center px-8 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
                  >
                    <XCircle className="w-4 h-4 mr-2" />
                    Decline
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
