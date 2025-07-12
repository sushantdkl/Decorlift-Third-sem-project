"use client"

import { useState } from "react"
import ProfileLayout from "../components/ProfileLayout"

const ProfileInformationPage = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [userInfo, setUserInfo] = useState({
    firstName: "Rohit",
    lastName: "kardam",
    gender: "male",
    email: "rohit.kardam@example.com",
    mobile: "9876543210",
  })

  const handleEdit = () => {
    setIsEditing(!isEditing)
  }

  const handleSave = () => {
    setIsEditing(false)
    // Handle save logic here
    console.log("Profile updated:", userInfo)
  }

  const handleInputChange = (field, value) => {
    setUserInfo((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <ProfileLayout>
      <div className="p-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Personal Information</h1>
          <button
            onClick={isEditing ? handleSave : handleEdit}
            className="px-4 py-2 text-teal-600 hover:text-teal-700 font-medium"
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>

        <div className="space-y-6 max-w-2xl">
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                value={userInfo.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                disabled={!isEditing}
                className={`w-full p-3 border rounded text-sm text-gray-700 ${
                  isEditing
                    ? "border-gray-300 bg-white focus:border-teal-500 focus:outline-none"
                    : "border-gray-200 bg-gray-100"
                }`}
                placeholder="First Name"
              />
            </div>
            <div>
              <input
                type="text"
                value={userInfo.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                disabled={!isEditing}
                className={`w-full p-3 border rounded text-sm text-gray-700 ${
                  isEditing
                    ? "border-gray-300 bg-white focus:border-teal-500 focus:outline-none"
                    : "border-gray-200 bg-gray-100"
                }`}
                placeholder="Last Name"
              />
            </div>
          </div>

          {/* Gender Selection */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Your Gender</h3>
            <div className="flex space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={userInfo.gender === "male"}
                  onChange={(e) => handleInputChange("gender", e.target.value)}
                  disabled={!isEditing}
                  className="mr-2 text-teal-600 focus:ring-teal-500"
                />
                <span className="text-gray-700">Male</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={userInfo.gender === "female"}
                  onChange={(e) => handleInputChange("gender", e.target.value)}
                  disabled={!isEditing}
                  className="mr-2 text-teal-600 focus:ring-teal-500"
                />
                <span className="text-gray-700">Female</span>
              </label>
            </div>
          </div>

          {/* Email Address */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-medium text-gray-900">Email Address</h3>
              <div className="flex space-x-4">
                <button className="text-teal-600 hover:text-teal-700 font-medium">Edit</button>
                <button className="text-teal-600 hover:text-teal-700 font-medium">Change Password</button>
              </div>
            </div>
            <input
              type="email"
              value={userInfo.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              disabled={!isEditing}
              className={`w-full p-3 border rounded text-sm text-gray-700 ${
                isEditing
                  ? "border-gray-300 bg-white focus:border-teal-500 focus:outline-none"
                  : "border-gray-200 bg-gray-100"
              }`}
              placeholder="Email Address"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-medium text-gray-900">Mobile Number</h3>
              <button className="text-teal-600 hover:text-teal-700 font-medium">Edit</button>
            </div>
            <input
              type="tel"
              value={userInfo.mobile}
              onChange={(e) => handleInputChange("mobile", e.target.value)}
              disabled={!isEditing}
              className={`w-full p-3 border rounded text-sm text-gray-700 ${
                isEditing
                  ? "border-gray-300 bg-white focus:border-teal-500 focus:outline-none"
                  : "border-gray-200 bg-gray-100"
              }`}
              placeholder="Mobile Number"
            />
          </div>
        </div>
      </div>
    </ProfileLayout>
  )
}

export default ProfileInformationPage
