"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getUsers, deleteUser } from "../services/userService.js"

const AdminManageUserPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await getUsers()
      setUsers(response.data.data)
      setLoading(false)
    } catch (err) {
      setError("Failed to fetch users")
      setLoading(false)
      console.error("Error fetching users:", err)
    }
  }

  const handleDelete = async (userId) => {
    if (confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(userId)
        fetchUsers()
      } catch (err) {
        console.error("Failed to delete user", err)
        alert("Failed to delete user. Please try again.")
      }
    }
  }

  const handleLogout = () => {
    alert("Logging out...")
    setShowModal(false)
    localStorage.removeItem("token")
    navigate("/login")
  }

  const filteredUsers = (users || []).filter(
    (user) =>
      user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.address?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.gender?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.mobile?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div className="flex min-h-screen items-center justify-center">Loading...</div>
  }

  if (error) {
    return <div className="flex min-h-screen items-center justify-center text-red-600">{error}</div>
  }

  return (
    <div className="min-h-screen bg-[#f3efeb]">
      {/* Main Content */}
      <main className="flex-1 p-6">
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
                <th className="border border-black px-3 py-2 text-left font-bold">Gender</th>
                <th className="border border-black px-3 py-2 text-left font-bold">Mobile</th>
                <th className="border border-black px-3 py-2 w-32">{/* Actions */}</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-8 text-gray-600 border border-black">
                    No users found.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user, idx) => (
                  <tr key={user.id} className={idx % 2 === 0 ? "bg-gray-200 bg-opacity-50" : "bg-white"}>
                    <td className="border border-black px-3 py-2">{idx + 1}</td>
                    <td className="border border-black px-3 py-2 font-medium">{user.name}</td>
                    <td className="border border-black px-3 py-2">{user.email}</td>
                    <td className="border border-black px-3 py-2">{user.gender || "N/A"}</td>
                    <td className="border border-black px-3 py-2">{user.mobile || "N/A"}</td>
                    <td className="border border-black px-3 py-2 text-center">
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Results count */}
        {searchQuery && (
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredUsers.length} of {users.length} users
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
