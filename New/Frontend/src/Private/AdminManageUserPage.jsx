"use client"
 
import { useState } from "react"
 
const usersData = [
  // Sample data, you can replace with real user data
  { id: 1, name: "John Doe", email: "john@example.com", address: "123, Elm Street" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", address: "456, Oak Avenue" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", address: "789, Pine Lane" },
  { id: 4, name: "Bob Brown", email: "bob@example.com", address: "101, Maple Road" },
  { id: 5, name: "Charlie Davis", email: "charlie@example.com", address: "202, Cedar Boulevard" },
  { id: 6, name: "Emma Wilson", email: "emma@example.com", address: "303, Birch Street" },
  { id: 7, name: "David Miller", email: "david@example.com", address: "404, Spruce Avenue" },
  { id: 8, name: "Sarah Garcia", email: "sarah@example.com", address: "505, Willow Lane" },
]
 
const AdminManageUserPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
 
  const handleLogout = () => {
    alert("Logging out...")
    setShowModal(false)
    // Redirect or logout logic here
  }
 
  // Filter users based on search term
  const filteredUsers = usersData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.address.toLowerCase().includes(searchQuery.toLowerCase()),
  )
 
  return (
    <div className="flex min-h-screen bg-[#f3efeb]">
      {/* Sidebar */}
      <nav className="w-52 fixed top-0 left-0 h-full bg-[#f3efeb] border-r-2 border-gray-300 pt-20">
        <a href="#" className="flex items-center px-5 py-4 border-b border-gray-300 text-gray-700">
          <span>Admin</span>
        </a>
        <a href="#" className="flex items-center px-5 py-4 border-b border-gray-300 text-gray-700 hover:bg-gray-200">
          <span>Products</span>
        </a>
        <a href="#" className="flex items-center px-5 py-4 bg-[#7a9b8e] text-white">
          <span>Manage Users</span>
        </a>
        <a href="#" className="flex items-center px-5 py-4 border-b border-gray-300 text-gray-700 hover:bg-gray-200">
          <span>Manage Inventory</span>
        </a>
        <a href="#" className="flex items-center px-5 py-4 border-b border-gray-300 text-gray-700 hover:bg-gray-200">
          <span>Requests</span>
        </a>
        <div className="absolute bottom-5 w-full text-center">
          <button
            onClick={() => setShowModal(true)}
            className="text-gray-600 font-medium hover:text-red-600 flex items-center justify-center gap-2 w-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Logout
          </button>
        </div>
      </nav>
 
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-20 bg-[#e8e2e2] border-b-2 border-gray-300 flex items-center px-6 z-10">
        <div className="w-24 h-24 flex items-center justify-center font-bold text-xl">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-sm font-bold border-2 border-gray-600">
            DL
          </div>
        </div>
        <span className="ml-3 text-xl font-bold text-gray-800">DECORLIFT</span>
      </header>
 
      {/* Main Content */}
      <main className="flex-1 ml-52 pt-24 p-6">
        {/* Search Bar */}
        <div className="flex justify-end mb-6">
          <input
            type="text"
            placeholder="Search...."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border-2 border-gray-300 rounded-full w-60 focus:outline-none focus:border-[#7a9b8e] text-sm"
          />
        </div>
 
        {/* Users Table */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-white">
                <th className="border border-black px-3 py-2 text-left font-bold w-16">S\N</th>
                <th className="border border-black px-3 py-2 text-left font-bold">Name</th>
                <th className="border border-black px-3 py-2 text-left font-bold">E-mail</th>
                <th className="border border-black px-3 py-2 text-left font-bold">Address</th>
                <th className="border border-black px-3 py-2 w-16">{/* Actions column */}</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-8 text-gray-600 border border-black">
                    No users found.
                  </td>
                </tr>
              )}
              {filteredUsers.map((user, idx) => (
                <tr key={user.id} className={idx % 2 === 0 ? "bg-gray-200 bg-opacity-50" : "bg-white"}>
                  <td className="border border-black px-3 py-2">{idx + 1}</td>
                  <td className="border border-black px-3 py-2 font-medium">{user.name}</td>
                  <td className="border border-black px-3 py-2">{user.email}</td>
                  <td className="border border-black px-3 py-2">{user.address}</td>
                  <td className="border border-black px-3 py-2">
                    {/* You can add action buttons here like Edit/Delete */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
 
        {/* Results count */}
        {searchQuery && (
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredUsers.length} of {usersData.length} users
          </div>
        )}
      </main>
 
      {/* Logout Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-80 text-center shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Are you sure you want to Log out?</h3>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 font-medium"
              >
                Yes
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 font-medium"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
 
export default AdminManageUserPage
 
 