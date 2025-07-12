"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import ProfileLayout from "../components/ProfileLayout"

const ManageAddressesPage = () => {
  const [showAddForm, setShowAddForm] = useState(false)
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Customer Name",
      address: "375 udyog vihar phase 2, Gurgaon, Haryana - 122015",
      phone: "98xxxxxxxx",
    },
  ])

  const [newAddress, setNewAddress] = useState({
    name: "",
    mobile: "",
    address: "",
    city: "",
    alternatePhone: "",
    landmark: "",
  })

  const handleInputChange = (field, value) => {
    setNewAddress((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSave = () => {
    if (newAddress.name && newAddress.mobile && newAddress.address && newAddress.city) {
      const address = {
        id: addresses.length + 1,
        name: newAddress.name,
        address: `${newAddress.address}, ${newAddress.city}`,
        phone: newAddress.mobile,
      }
      setAddresses((prev) => [...prev, address])
      setNewAddress({
        name: "",
        mobile: "",
        address: "",
        city: "",
        alternatePhone: "",
        landmark: "",
      })
      setShowAddForm(false)
    }
  }

  const handleDelete = (id) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id))
  }

  const handleEdit = (id) => {
    // You can implement edit functionality here
    console.log("Edit address with id:", id)
  }

  return (
    <ProfileLayout>
      <div className="p-10">
        <section className="space-y-6">
          <div className="flex justify-between max-w-6xl mb-4">
            <h2 className="text-xl font-bold text-gray-800">Manage Addresses</h2>
            <h2 className="text-lg font-semibold text-gray-700">Saved Addresses</h2>
          </div>

          <div className="flex gap-8 max-w-6xl">
            {/* Form Section */}
            <div className="flex-1 max-w-md">
              {!showAddForm ? (
                <button
                  type="button"
                  onClick={() => setShowAddForm(true)}
                  className="flex items-center gap-2 border border-teal-600 text-teal-600 font-semibold px-4 py-2 rounded hover:bg-teal-600 hover:text-white w-full justify-center"
                >
                  <Plus className="w-4 h-4" /> ADD A NEW ADDRESS
                </button>
              ) : (
                <form className="space-y-6">
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="Name"
                      value={newAddress.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="flex-1 p-3 border rounded bg-gray-100 text-sm text-gray-700 focus:outline-none focus:border-teal-500"
                    />
                    <input
                      type="tel"
                      placeholder="10-Digit mobile number"
                      value={newAddress.mobile}
                      onChange={(e) => handleInputChange("mobile", e.target.value)}
                      className="flex-1 p-3 border rounded bg-gray-100 text-sm text-gray-700 focus:outline-none focus:border-teal-500"
                    />
                  </div>

                  <textarea
                    placeholder="Address ( Area / Street )"
                    value={newAddress.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    className="w-full p-3 border rounded bg-gray-100 text-sm text-gray-700 min-h-[80px] resize-y focus:outline-none focus:border-teal-500"
                  />

                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="City / District / Town"
                      value={newAddress.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      className="flex-1 p-3 border rounded bg-gray-100 text-sm text-gray-700 focus:outline-none focus:border-teal-500"
                    />
                    <input
                      type="tel"
                      placeholder="Alternate Phone (Optional)"
                      value={newAddress.alternatePhone}
                      onChange={(e) => handleInputChange("alternatePhone", e.target.value)}
                      className="flex-1 p-3 border rounded bg-gray-100 text-sm text-gray-700 focus:outline-none focus:border-teal-500"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Landmark (Optional)"
                    value={newAddress.landmark}
                    onChange={(e) => handleInputChange("landmark", e.target.value)}
                    className="w-full p-3 border rounded bg-gray-100 text-sm text-gray-700 focus:outline-none focus:border-teal-500"
                  />

                  <div className="flex justify-center gap-4">
                    <button
                      type="button"
                      onClick={handleSave}
                      className="bg-teal-600 text-white px-8 py-2 rounded font-semibold hover:bg-teal-700"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowAddForm(false)}
                      className="bg-gray-600 text-white px-6 py-2 rounded font-semibold hover:bg-gray-700"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Saved Addresses Section */}
            <div className="flex-1 max-w-md">
              <div className="space-y-4">
                {addresses.map((address) => (
                  <div key={address.id} className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                    <p className="font-medium text-gray-900 mb-1">{address.name}</p>
                    <p className="text-sm text-gray-600 mb-2">{address.address}</p>
                    <p className="text-sm text-gray-600">Number: {address.phone}</p>
                    <div className="flex space-x-2 mt-3">
                      <button
                        onClick={() => handleEdit(address.id)}
                        className="text-xs text-teal-600 hover:text-teal-700 font-medium"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(address.id)}
                        className="text-xs text-red-600 hover:text-red-700 font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </ProfileLayout>
  )
}

export default ManageAddressesPage
