"use client"

import { useState } from "react"
import { ArrowLeft, CheckCircle, XCircle, Search, Edit } from "lucide-react"

const refundExchangeRequests = [
  {
    id: "1",
    productName: "White Aesthetic Chair",
    image: "/placeholder.svg",
    customerName: "John Doe",
    email: "john@example.com",
    phone: "+91 9876543210",
    address: "375 taking chair phase 2, Gurgaon, Haryana - 122015",
    requestType: "refund",
    reason: "Product damaged during delivery",
    orderDate: "2024-01-10",
    requestDate: "2024-01-15",
    status: "pending",
    amount: "Rs. 24,999",
  },
  {
    id: "2",
    productName: "Modern Decoration Piece",
    image: "/placeholder.svg",
    customerName: "Jane Smith",
    email: "jane@example.com",
    phone: "+91 9876543211",
    address: "456 Oak Avenue, Delhi - 110001",
    requestType: "exchange",
    reason: "Wrong color received",
    orderDate: "2024-01-08",
    requestDate: "2024-01-12",
    status: "approved",
    amount: "Rs. 18,999",
  },
]

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  approved: "bg-green-100 text-green-800",
  declined: "bg-red-100 text-red-800",
}

const typeColors = {
  refund: "bg-red-100 text-red-800",
  exchange: "bg-green-100 text-green-800",
}

export default function RefundExchangePage() {
  const [activeView, setActiveView] = useState("list")
  const [selectedRequest, setSelectedRequest] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("All")
  const [filterType, setFilterType] = useState("All")

  const filteredRequests = refundExchangeRequests.filter((request) => {
    const matchesSearch =
      request.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.email.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = filterStatus === "All" || request.status === filterStatus
    const matchesType = filterType === "All" || request.requestType === filterType

    return matchesSearch && matchesStatus && matchesType
  })

  const handleRequestClick = (request) => {
    setSelectedRequest(request)
    setActiveView("details")
  }

  const handleBackToList = () => {
    setActiveView("list")
    setSelectedRequest(null)
  }

  const handleApprove = () => {
    alert("Request approved successfully!")
    handleBackToList()
  }

  const handleDecline = () => {
    alert("Request declined!")
    handleBackToList()
  }

  return (
    <div className="p-6">
      {activeView === "list" ? (
        <>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <h1 className="text-2xl font-semibold text-gray-800">Refund / Exchange</h1>
            <div className="flex flex-wrap gap-4 items-center">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="All">All Types</option>
                <option value="refund">Refund</option>
                <option value="exchange">Exchange</option>
              </select>

              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="All">All Status</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="declined">Declined</option>
              </select>

              <div className="relative w-60">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search requests..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {filteredRequests.map((request) => (
              <div
                key={request.id}
                onClick={() => handleRequestClick(request)}
                className="cursor-pointer rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow flex gap-4"
              >
                <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={request.image}
                    alt={request.productName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="font-semibold text-lg text-gray-900">{request.productName}</h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${typeColors[request.requestType]}`}
                    >
                      {request.requestType.toUpperCase()}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[request.status]}`}
                    >
                      {request.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1 max-w-xl">
                    <p>
                      <strong>Customer:</strong> {request.customerName} ({request.email})
                    </p>
                    <p>
                      <strong>Address:</strong> {request.address}
                    </p>
                    <p>
                      <strong>Amount:</strong> {request.amount}
                    </p>
                    <p>
                      <strong>Reason:</strong> {request.reason}
                    </p>
                    <p>
                      <strong>Request Date:</strong> {request.requestDate}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {filteredRequests.length === 0 && (
              <p className="text-center text-gray-500 py-10">No requests found.</p>
            )}
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
            <h1 className="text-2xl font-semibold text-gray-900">
              {selectedRequest?.requestType === "refund" ? "Refund" : "Exchange"} Request Details
            </h1>
          </div>

          {selectedRequest && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="border border-gray-200 rounded-lg overflow-hidden mb-4 h-80 flex items-center justify-center bg-gray-100">
                  <img
                    src={selectedRequest.image}
                    alt={selectedRequest.productName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-lg">{selectedRequest.productName}</h3>
                  <p className="text-gray-600">{selectedRequest.amount}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4 border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name:</label>
                      <input
                        type="text"
                        readOnly
                        value={selectedRequest.customerName}
                        className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50 cursor-not-allowed"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
                      <input
                        type="email"
                        readOnly
                        value={selectedRequest.email}
                        className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50 cursor-not-allowed"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone:</label>
                    <input
                      type="text"
                      readOnly
                      value={selectedRequest.phone}
                      className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50 cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address:</label>
                    <textarea
                      readOnly
                      value={selectedRequest.address}
                      rows={4}
                      className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50 cursor-not-allowed resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Order Date:</label>
                      <input
                        type="text"
                        readOnly
                        value={selectedRequest.orderDate}
                        className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50 cursor-not-allowed"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Request Date:</label>
                      <input
                        type="text"
                        readOnly
                        value={selectedRequest.requestDate}
                        className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50 cursor-not-allowed"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Reason:</label>
                    <textarea
                      readOnly
                      value={selectedRequest.reason}
                      rows={5}
                      className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50 cursor-not-allowed resize-none"
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={handleApprove}
                      className="flex items-center gap-2 px-6 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
                    >
                      <CheckCircle className="w-5 h-5" />
                      Approve
                    </button>
                    <button
                      onClick={handleDecline}
                      className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
                    >
                      <XCircle className="w-5 h-5" />
                      Decline
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
