import { useState } from "react"
 
const AdminEditProductPage = ({ product, onBack, onLogout, showModal, confirmLogout, cancelLogout }) => {
  const [formData, setFormData] = useState({
    title: product?.title || "",
    description: product?.subtitle || "",
    price: product?.price || "",
    discount: product?.discount || "",
  })
 
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
 
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Product updated successfully!")
    // Here you would typically save the data
    console.log("Updated product data:", formData)
    onBack() // Go back to product list
  }
 
  return (
    <div className="flex min-h-screen bg-[#f3efeb]">
      {/* Sidebar */}
      <nav className="w-52 fixed top-0 left-0 h-full bg-[#f3efeb] border-r-2 border-gray-300 pt-20">
        <a href="#" className="flex items-center px-5 py-4 border-b border-gray-300 text-gray-700">
          <span>Admin</span>
        </a>
        <button onClick={onBack} className="flex items-center px-5 py-4 bg-[#7a9b8e] text-white w-full text-left">
          <span>Products</span>
        </button>
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
          <button onClick={onLogout} className="text-gray-600 font-medium">
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
        {/* Back Button */}
        <button onClick={onBack} className="ml-4 text-gray-600 hover:text-gray-800 font-medium">
          ← Back to Products
        </button>
      </header>
 
      {/* Main Content */}
      <main className="ml-52 pt-24 px-6 flex-1">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">
          {product?.id === "new" ? "Add New Product" : "Edit Product"}
        </h1>
        <div className="bg-white rounded-xl shadow-md p-6 flex gap-6">
          {/* Image Section */}
          <div className="flex-1 max-w-md">
            <div className="w-full h-72 bg-gray-200 rounded mb-4 overflow-hidden">
              <img
                src={product?.image || "/placeholder.svg?height=300&width=300"}
                alt="Main"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-gray-300 flex items-center justify-center rounded cursor-pointer">
                ‹
              </div>
              <div className="flex gap-2 flex-1 justify-center">
                {(product?.thumbnails || []).map((img, i) => (
                  <div
                    key={i}
                    className="w-14 h-14 rounded overflow-hidden border-2 border-transparent hover:border-[#7a9b8e] cursor-pointer"
                  >
                    <img src={img || "/placeholder.svg"} alt={`thumb-${i}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="w-8 h-8 border border-gray-300 flex items-center justify-center rounded cursor-pointer">
                ›
              </div>
            </div>
          </div>
 
          {/* Form Section */}
          <div className="flex-1 max-w-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block font-semibold text-gray-700 mb-1">Title:</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full border-2 border-gray-200 rounded px-4 py-2 focus:outline-none focus:border-[#7a9b8e]"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold text-gray-700 mb-1">Description:</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full border-2 border-gray-200 rounded px-4 py-2 h-24 resize-vertical focus:outline-none focus:border-[#7a9b8e]"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block font-semibold text-gray-700 mb-1">Price:</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="0.00"
                    className="w-full border-2 border-gray-200 rounded px-4 py-2 focus:outline-none focus:border-[#7a9b8e]"
                  />
                </div>
                <div className="flex-1">
                  <label className="block font-semibold text-gray-700 mb-1">Discount:</label>
                  <input
                    type="number"
                    name="discount"
                    value={formData.discount}
                    onChange={handleInputChange}
                    placeholder="0%"
                    className="w-full border-2 border-gray-200 rounded px-4 py-2 focus:outline-none focus:border-[#7a9b8e]"
                  />
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <button
                  type="submit"
                  className="bg-[#7a9b8e] text-white px-6 py-2 rounded font-semibold hover:bg-[#6a8b7e]"
                >
                  {product?.id === "new" ? "Add Product" : "Update"}
                </button>
                <button
                  type="button"
                  onClick={onBack}
                  className="bg-gray-500 text-white px-6 py-2 rounded font-semibold hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
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
 
export default AdminEditProductPage