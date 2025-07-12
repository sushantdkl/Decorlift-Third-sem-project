"use client"
 
import { useState } from "react"
 
const AdminProductPage = () => {
  const [showModal, setShowModal] = useState(false)
 
  const handleLogout = () => {
    setShowModal(true)
  }
 
  const confirmLogout = () => {
    alert("Logging out...")
    setShowModal(false)
    // window.location.href = "/login";
  }
 
  const cancelLogout = () => {
    setShowModal(false)
  }
 
  const products = [
    {
      id: 1,
      title: "Decoration",
      subtitle: "Elegant sitting chair options for you living room",
      price: "Rs. 24,999",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      title: "Decoration",
      subtitle: "Elegant sitting chair options for you living room",
      price: "Rs. 24,999",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      title: "Chair",
      subtitle: "Elegant sitting chair options for you living room",
      price: "Rs. 24,999",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      title: "Sofa",
      subtitle: "Elegant sitting chair options for you living room",
      price: "Rs. 24,999",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 5,
      title: "Decoration",
      subtitle: "Elegant sitting chair options for you living room",
      price: "Rs. 24,999",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 6,
      title: "Decoration",
      subtitle: "Elegant sitting chair options for you living room",
      price: "Rs. 24,999",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 7,
      title: "Chair",
      subtitle: "Elegant sitting chair options for you living room",
      price: "Rs. 24,999",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]
 
  const handleAddProduct = () => {
    // Navigate to add product page
    console.log("Add new product")
  }
 
  const handleEditProduct = (productId) => {
    // Navigate to edit product page
    console.log("Edit product:", productId)
  }
 
  return (
    <div className="flex min-h-screen bg-[#f3efeb]">
      {/* Sidebar */}
      <nav className="w-52 fixed top-0 left-0 h-full bg-[#f3efeb] border-r-2 border-gray-300 pt-20">
        <a href="#" className="flex items-center px-5 py-4 border-b border-gray-300 text-gray-700">
          <span>Admin</span>
        </a>
        <a href="#" className="flex items-center px-5 py-4 bg-[#7a9b8e] text-white">
          <span>Products</span>
        </a>
        <a href="#" className="flex items-center px-5 py-4 border-b border-gray-300 text-gray-700">
          <span>Manage Users</span>
        </a>
        <a href="#" className="flex items-center px-5 py-4 border-b border-gray-300 text-gray-700">
          <span>Manage Inventory</span>
        </a>
        <a href="#" className="flex items-center px-5 py-4 border-b border-gray-300 text-gray-700">
          <span>Requests</span>
        </a>
        <div className="absolute bottom-5 w-full text-center">
          <button onClick={handleLogout} className="text-gray-600 font-medium">
            Logout
          </button>
        </div>
      </nav>
 
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-20 bg-[#e8e2e2] border-b-2 border-gray-300 flex items-center px-6 z-10">
        <div className="w-24 h-24 flex items-center justify-center font-bold text-xl">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-sm font-bold">
            DL
          </div>
        </div>
      </header>
 
      {/* Main Content */}
      <main className="ml-52 pt-24 px-6 flex-1">
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleEditProduct(product.id)}
            >
              <div className="aspect-square bg-gray-100">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1">{product.title}</h3>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.subtitle}</p>
                <p className="font-bold text-[#7a9b8e]">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
 
        {/* Add Product Button */}
        <div className="fixed bottom-6 right-6">
          <button
            onClick={handleAddProduct}
            className="w-14 h-14 bg-gray-500 hover:bg-gray-600 text-white rounded-full flex items-center justify-center text-2xl font-light shadow-lg transition-colors"
          >
            +
          </button>
        </div>
      </main>
 
      {/* Logout Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-80 text-center shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Are you sure you want to Log out?</h3>
            <div className="flex justify-center gap-4">
              <button onClick={confirmLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Yes
              </button>
              <button onClick={cancelLogout} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700">
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
 
export default AdminProductPage
 
 