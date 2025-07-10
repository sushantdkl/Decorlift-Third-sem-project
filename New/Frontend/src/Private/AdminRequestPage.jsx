"use client"
 
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
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
    handleBackToList()
  }
 
  const handleDecline = () => {
    console.log("Request declined")
    handleBackToList()
  }
 
  return (
    <div className="p-6">
      {activeView === "list" ? (
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Product Requests</h1>
          <div className="space-y-4">
            {sampleRequests.map((request) => (
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
            <h1 className="text-2xl font-semibold text-gray-900">Product Request Details</h1>
          </div>
 
          {selectedRequest && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <Card>
                  <CardContent className="p-6">
                    <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-center text-gray-500">
                        <div className="text-sm">Image uploaded by</div>
                        <div className="text-sm font-medium">customer</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
 
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedRequest.productName}</h2>
                  <p className="text-gray-600">{selectedRequest.description}</p>
                </div>
 
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Purchase By:</label>
                    <Input className="h-10" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Purchase For:</label>
                    <Input className="h-10" />
                  </div>
                </div>
 
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Purchase on:</label>
                  <Input type="date" className="h-10" />
                </div>
 
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Reason:</label>
                  <Textarea className="min-h-[100px]" placeholder="Enter reason..." />
                </div>
 
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Customer wants:</label>
                  <Input className="h-10" />
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
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
 
 