"use client"
 
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle, XCircle, Search } from "lucide-react"
 
const refundExchangeRequests = [
  {
    id: "1",
    productName: "White Aesthetic Chair",
    image: "/placeholder.svg?height=200&width=200",
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
    image: "/placeholder.svg?height=200&width=200",
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
    console.log("Request approved")
    alert("Request approved successfully!")
    handleBackToList()
  }
 
  const handleDecline = () => {
    console.log("Request declined")
    alert("Request declined!")
    handleBackToList()
  }
 
  const getStatusVariant = (status) => {
    switch (status) {
      case "pending":
        return "secondary"
      case "approved":
        return "default"
      case "declined":
        return "destructive"
      default:
        return "outline"
    }
  }
 
  const getTypeVariant = (type) => {
    return type === "refund" ? "destructive" : "default"
  }
 
  return (
    <div className="p-6">
      {activeView === "list" ? (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">Refund / Exchange</h1>
            <div className="flex gap-4 items-center">
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Types</SelectItem>
                  <SelectItem value="refund">Refund</SelectItem>
                  <SelectItem value="exchange">Exchange</SelectItem>
                </SelectContent>
              </Select>
 
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="declined">Declined</SelectItem>
                </SelectContent>
              </Select>
 
              <div className="relative w-60">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search requests..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 rounded-full border-2 focus:border-[#7a9b8e]"
                />
              </div>
            </div>
          </div>
 
          <div className="space-y-4">
            {filteredRequests.map((request) => (
              <Card
                key={request.id}
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleRequestClick(request)}
              >
                <CardContent className="p-6">
                  <div className="flex space-x-4">
                    <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                      <img
                        src={request.image || "/placeholder.svg"}
                        alt={request.productName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-lg text-gray-900">{request.productName}</h3>
                        <Badge variant={getTypeVariant(request.requestType)}>{request.requestType.toUpperCase()}</Badge>
                        <Badge variant={getStatusVariant(request.status)}>{request.status.toUpperCase()}</Badge>
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center mb-6">
            <Button variant="ghost" onClick={handleBackToList} className="mr-4 text-[#7a9b8e] hover:text-[#6a8b7e]">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-semibold text-gray-900">
              {selectedRequest?.requestType === "refund" ? "Refund" : "Exchange"} Request Details
            </h1>
          </div>
 
          {selectedRequest && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <Card>
                  <CardContent className="p-6">
                    <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                      <img
                        src={selectedRequest.image || "/placeholder.svg"}
                        alt={selectedRequest.productName}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-lg">{selectedRequest.productName}</h3>
                      <p className="text-gray-600">{selectedRequest.amount}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
 
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name:</label>
                        <Input value={selectedRequest.customerName} readOnly className="bg-gray-50" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
                        <Input value={selectedRequest.email} readOnly className="bg-gray-50" />
                      </div>
                    </div>
 
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone:</label>
                      <Input value={selectedRequest.phone} readOnly className="bg-gray-50" />
                    </div>
 
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Address:</label>
                      <Textarea value={selectedRequest.address} readOnly className="bg-gray-50" />
                    </div>
 
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Order Date:</label>
                        <Input value={selectedRequest.orderDate} readOnly className="bg-gray-50" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Request Date:</label>
                        <Input value={selectedRequest.requestDate} readOnly className="bg-gray-50" />
                      </div>
                    </div>
 
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Reason:</label>
                      <Textarea value={selectedRequest.reason} readOnly className="bg-gray-50 min-h-[100px]" />
                    </div>
 
                    <div className="flex space-x-4 pt-4">
                      <Button onClick={handleApprove} className="bg-[#7a9b8e] hover:bg-[#6a8b7e] text-white px-8">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Approve
                      </Button>
                      <Button onClick={handleDecline} variant="outline" className="px-8 bg-transparent">
                        <XCircle className="w-4 h-4 mr-2" />
                        Decline
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
 
 