"use client";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Upload } from "lucide-react";
import ProfileLayout from "../components/ProfileLayout";
import { userapi } from "../services/userapi.js";

const ReturnRefundPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [showSuccess, setShowSuccess] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    action: "refund", // exchange or refund
    reason: "",
    photo: null,
  });

  // Get order data from navigation state or fallback
  const order = location.state?.order || {
    id: "dummy-id",
    Product: {
      name: "White Aesthetic Chair",
      description:
        "Finnish-american architect and designer Eero Saarinen famously hated the sight of many table and chair legs in a room.",
      image: "/placeholder.svg?height=300&width=400",
    },
    createdAt: new Date().toISOString(),
    subTotal: "24,000",
  };

  // Images for carousel: main product image + placeholders
  const productImages = [
    order.Product.image,
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) setFormData((prev) => ({ ...prev, photo: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = new FormData();
      postData.append("orderId", order.id);
      postData.append("action", formData.action);
      postData.append("reason", formData.reason);
      if (formData.photo) postData.append("photo", formData.photo);

      await userapi.post("/api/returns", postData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        navigate("/order-history");
      }, 3000);
    } catch (error) {
      console.error("Failed to submit return request:", error);
      alert("Failed to submit return/refund request. Please try again.");
    }
  };

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev === productImages.length - 1 ? 0 : prev + 1));

  const prevImage = () =>
    setCurrentImageIndex((prev) => (prev === 0 ? productImages.length - 1 : prev - 1));

  return (
    <ProfileLayout>
      <div className="p-10 bg-gray-50 min-h-screen">
        {/* Success popup */}
        {showSuccess && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-25 z-40"></div>
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 z-50 border">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <p className="text-lg font-semibold text-gray-900">
                  Request sent successfully!!!
                </p>
              </div>
            </div>
          </>
        )}

        <h1 className="text-2xl font-bold text-gray-900 mb-8">Return / Refund</h1>

        <div className="flex gap-8 max-w-6xl">
          {/* Product Image Carousel */}
          <div className="flex-1 max-w-md bg-white rounded-lg p-4 shadow-sm border">
            <div className="relative mb-4">
              <img
                src={productImages[currentImageIndex]}
                alt="Product"
                className="w-full h-80 object-cover rounded-lg"
              />
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="flex gap-2 justify-center">
              {productImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImageIndex(i)}
                  className={`w-16 h-16 rounded border-2 overflow-hidden ${
                    currentImageIndex === i ? "border-teal-500" : "border-gray-200"
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Form Section */}
          <div className="flex-1 max-w-md bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{order.Product.name}</h2>
            <p className="text-sm text-gray-600 mb-6">{order.Product.description}</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Purchase Info */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Purchase on:</span>
                  <p className="font-medium">{new Date(order.createdAt).toLocaleDateString()}</p>
                </div>
                <div>
                  <span className="text-gray-600">Purchase For:</span>
                  <p className="font-medium">Rs {order.subTotal}</p>
                </div>
              </div>

              {/* Action Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  What do you want to do?
                </label>
                <div className="flex gap-6">
                  {["exchange", "refund"].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        name="action"
                        value={option}
                        checked={formData.action === option}
                        onChange={(e) => handleInputChange("action", e.target.value)}
                        className="mr-2 text-teal-600 focus:ring-teal-500"
                      />
                      <span className="text-gray-700 capitalize">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Reason */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Reason:</label>
                <textarea
                  value={formData.reason}
                  onChange={(e) => handleInputChange("reason", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md text-sm text-gray-700 min-h-[100px] resize-y focus:outline-none focus:border-teal-500"
                  placeholder="Please explain the reason for return/refund..."
                />
              </div>

              {/* Photo Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload a Photo:</label>
                <div className="flex items-center gap-3">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                    id="photo-upload"
                  />
                  <label
                    htmlFor="photo-upload"
                    className="flex items-center justify-center w-12 h-12 bg-black text-white rounded cursor-pointer hover:bg-gray-800"
                  >
                    <Upload className="w-5 h-5" />
                  </label>
                  {formData.photo && (
                    <span className="text-sm text-gray-600">{formData.photo.name}</span>
                  )}
                </div>
              </div>

              {/* Submit */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="bg-teal-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-teal-700 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default ReturnRefundPage;
