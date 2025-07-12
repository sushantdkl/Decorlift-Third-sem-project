"use client"

import { useState } from "react"
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
        <>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">Customer Queries</h1>
            <div className="relative w-60">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search queries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          <div className="space-y-4">
            {filteredQueries.length === 0 ? (
              <p className="text-center text-gray-500 py-10">No queries found.</p>
            ) : (
              filteredQueries.map((query) => (
                <div
                  key={query.id}
                  onClick={() => handleQueryClick(query)}
                  className="cursor-pointer border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="font-semibold text-lg text-gray-900">{query.subject}</h3>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            query.status === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {query.status}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 space-y-1 max-w-xl">
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
                </div>
              ))
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
            <h1 className="text-2xl font-semibold text-gray-900">Query Details</h1>
          </div>

          {selectedQuery && (
            <div className="border border-gray-200 rounded-lg p-6 shadow-sm bg-white space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email:</label>
                  <input
                    type="email"
                    readOnly
                    value={selectedQuery.email}
                    className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50 cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone no:</label>
                  <input
                    type="text"
                    readOnly
                    value={selectedQuery.phone}
                    className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50 cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name:</label>
                <input
                  type="text"
                  readOnly
                  value={selectedQuery.name}
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject:</label>
                <input
                  type="text"
                  readOnly
                  value={selectedQuery.subject}
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Details:</label>
                <textarea
                  readOnly
                  value={selectedQuery.details}
                  rows={5}
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50 cursor-not-allowed resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Reply:</label>
                <textarea
                  value={replyMessage}
                  onChange={(e) => setReplyMessage(e.target.value)}
                  placeholder="Automated message / typing"
                  rows={6}
                  className="w-full border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleSendReply}
                  className="flex items-center gap-2 px-8 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
                >
                  <Send className="w-4 h-4" />
                  Send
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
