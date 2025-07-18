"use client";

import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { userapi } from "../services/userapi.js";

const AdminProductPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showRequestOptions, setShowRequestOptions] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await userapi.get("/api/products");
      setProducts(response.data.data);
      console.log(response.data.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch products");
      setLoading(false);
      console.error("Error fetching products:", err);
    }
  };

  const handleLogout = () => {
    setShowModal(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const cancelLogout = () => {
    setShowModal(false);
  };

  const handleAddProduct = () => {
    navigate("/admin/add-product");
  };

  const handleEditProduct = (productId) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      navigate("/admineditproductpage", { state: { product } });
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#f3efeb] font-sans">
      {/* Main Content */}
      <main className="flex-1 p-8 bg-[#f9f9f9] min-h-screen">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Product Grid</h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => handleEditProduct(product.id)}
              className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden"
            >
              <div className="aspect-square bg-gray-100">
                <img
                  src={`../../uploads/${product.image}`}
                  alt={product.name || "Product Image"}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800">
                  {product.name || product.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {product.description || product.subtitle}
                </p>
                <p className="font-bold text-[#7a9b8e] mt-2">
                  Rs. {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Add Product Button */}
        <div className="fixed bottom-6 right-6">
          <button
            onClick={handleAddProduct}
            className="w-14 h-14 bg-teal-600 hover:bg-teal-700 text-white rounded-full flex items-center justify-center shadow-lg transition"
          >
            <Plus className="w-6 h-6" />
          </button>
        </div>
      </main>

      {/* Logout Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-80 text-center shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              Are you sure you want to Log out?
            </h3>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Yes
              </button>
              <button
                onClick={cancelLogout}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProductPage;
