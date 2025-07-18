"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Send, Search } from "lucide-react";
import { userapi } from "../services/userapi";

export default function CustomerQueriesPage() {
  const [activeView, setActiveView] = useState("list");
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [replyMessage, setReplyMessage] = useState("");
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await userapi.get("/api/contact");
        setQueries(response.data.data || []);
      } catch (error) {
        console.error("Failed to fetch queries:", error);
      }
    };
    fetchQueries();
  }, []);

  const filteredQueries = queries.filter(
    (query) =>
      query.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      query.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      query.subject?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleQueryClick = (query) => {
    setSelectedQuery(query);
    setActiveView("details");
  };

  const handleBackToList = () => {
    setActiveView("list");
    setSelectedQuery(null);
    setReplyMessage("");
  };

  const handleSendReply = () => {
    if (replyMessage.trim()) {
      console.log("Reply to", selectedQuery.email, ":", replyMessage);
      alert("Reply sent successfully!");
      setReplyMessage("");
      handleBackToList();
    }
  };

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
                        <h3 className="font-semibold text-lg text-gray-900">{query.name}</h3>
                      </div>
                      <div className="text-sm text-gray-600 space-y-1 max-w-xl">
                        <p>
                          <strong>Email:</strong> {query.email}
                        </p>
                        <p>
                          <strong>Phone:</strong> {query.phone || "N/A"}
                        </p>
                        <p>
                          <strong>Subject:</strong> {query.subject}
                        </p>
                        <p className="truncate">
                          <strong>Message:</strong> {query.message}
                        </p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">{new Date(query.createdAt).toLocaleDateString() || "–"}</div>
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
                    value={selectedQuery.phone || ""}
                    className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50 cursor-not-allowed"
                  />
                </div>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Message:</label>
                <textarea
                  readOnly
                  value={selectedQuery.message}
                  rows={4}
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Reply:</label>
                <textarea
                  value={replyMessage}
                  onChange={(e) => setReplyMessage(e.target.value)}
                  placeholder="Type your reply..."
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
  );
}
