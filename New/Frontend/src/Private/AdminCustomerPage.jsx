 
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Send, Search } from "lucide-react"
 
const customerQueries = [
  {
    id: "1",
    subject: "Product Inquiry",
    email: "customer@example.com",
    phone: "+91 9876543210",
    name: "John Doe",
    details: "I would like to know more about the White Aesthetic Chair. Is it available in different colors?",
    status: "pending",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    subject: "Delivery Issue",
    email: "jane@example.com",
    phone: "+91 9876543211",
    name: "Jane Smith",
    details:
      "My order was supposed to be delivered yesterday but I haven't received it yet. Can you please check the status?",
    status: "pending",
    createdAt: "2024-01-14",
  },
  {
    id: "3",
    subject: "Product Quality",
    email: "bob@example.com",
    phone: "+91 9876543212",
    name: "Bob Johnson",
    details: "The chair I received has a small scratch on the armrest. Can this be replaced?",
    status: "resolved",
    createdAt: "2024-01-13",
  },
]
 
export default function CustomerQueriesPage() {
  const [activeView, setActiveView] = useState("list")
  const [selectedQuery, setSelectedQuery] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [replyMessage, setReplyMessage] = useState("")
 
  const filteredQueries = customerQueries.filter(
    (query) =>
      query.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      query.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      query.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )
 
  const handleQueryClick = (query) => {
    setSelectedQuery(query)
    setActiveView("details")
  }
 
  const handleBackToList = () => {
    setActiveView("list")
    setSelectedQuery(null)
    setReplyMessage("")
  }
 
  const handleSendReply = () => {
    if (replyMessage.trim()) {
      console.log("Sending reply:", replyMessage)
      alert("Reply sent successfully!")
      setReplyMessage("")
      handleBackToList()
    }
  }
 
  return (
    <div className="p-6">
      {activeView === "list" ? (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">Customer Queries</h1>
            <div className="relative w-60">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search queries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-full border-2 focus:border-[#7a9b8e]"
              />
            </div>
          </div>
 
          <div className="space-y-4">
            {filteredQueries.map((query) => (
              <Card
                key={query.id}
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleQueryClick(query)}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-lg text-gray-900">{query.subject}</h3>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            query.status === "pending" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"
                          }`}
                        >
                          {query.status}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>
                          <strong>From:</strong> {query.name} ({query.email})
                        </p>
                        <p>
                          <strong>Phone:</strong> {query.phone}
                        </p>
                        <p className="mt-2">{query.details}</p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">{query.createdAt}</div>
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
            <h1 className="text-2xl font-semibold text-gray-900">Query Details</h1>
          </div>
 
          {selectedQuery && (
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email:</label>
                      <Input value={selectedQuery.email} readOnly className="bg-gray-50" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone no:</label>
                      <Input value={selectedQuery.phone} readOnly className="bg-gray-50" />
                    </div>
                  </div>
 
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name:</label>
                    <Input value={selectedQuery.name} readOnly className="bg-gray-50" />
                  </div>
 
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject:</label>
                    <Input value={selectedQuery.subject} readOnly className="bg-gray-50" />
                  </div>
 
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Details:</label>
                    <Textarea value={selectedQuery.details} readOnly className="bg-gray-50 min-h-[100px]" />
                  </div>
 
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Reply:</label>
                    <Textarea
                      value={replyMessage}
                      onChange={(e) => setReplyMessage(e.target.value)}
                      placeholder="Automated message / typing"
                      className="min-h-[120px] border-2 focus:border-[#7a9b8e]"
                    />
                  </div>
 
                  <div className="flex justify-end">
                    <Button onClick={handleSendReply} className="bg-[#7a9b8e] hover:bg-[#6a8b7e] text-white px-8">
                      <Send className="w-4 h-4 mr-2" />
                      Send
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  )
}