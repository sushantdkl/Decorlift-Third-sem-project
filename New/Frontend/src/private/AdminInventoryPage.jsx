import { useState, useEffect } from "react";
import { Search, Edit, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { userapi } from "../services/userapi.js";

export default function AdminInventoryPage() {
  const [inventoryData, setInventoryData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const response = await userapi.get("/api/products");
      const products = response.data.data.map((product) => ({
        id: product.id,
        name: product.name,
        category: product.category || "Uncategorized",
        price: product.price.toLocaleString(),
        stock: product.stock || 0,
        status: getProductStatus(product.stock || 0),
        image: product.image || "/placeholder.svg",
        raw: product, // preserve full product object
      }));
      setInventoryData(products);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch inventory");
      setLoading(false);
      console.error("Error fetching inventory:", err);
    }
  };

  const getProductStatus = (stock) => {
    if (stock === 0) return "Out of Stock";
    if (stock <= 10) return "Low Stock";
    return "In Stock";
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "In Stock":
        return "bg-green-100 text-green-800";
      case "Low Stock":
        return "bg-yellow-100 text-yellow-800";
      case "Out of Stock":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredInventory = inventoryData.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === "All" || item.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleEdit = (product) => {
    navigate(`/admin/edit-product/${product.id}`, { state: { product } });
  };

  const handleDelete = async (productId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    try {
      await userapi.delete(`/api/products/${productId}`);
      setInventoryData((prev) => prev.filter((item) => item.id !== productId));
      alert("Product deleted successfully!");
    } catch (err) {
      console.error("Failed to delete product:", err);
      alert("Failed to delete product");
    }
  };

  if (loading) {
    return <div className="flex min-h-screen items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="flex min-h-screen items-center justify-center text-red-600">{error}</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Manage Inventory</h2>

      {/* Filters */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 text-sm focus:ring-2 focus:ring-teal-500"
        >
          <option value="All">All Status</option>
          <option value="In Stock">In Stock</option>
          <option value="Low Stock">Low Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-gray-200 rounded-md shadow-sm">
        <table className="w-full table-auto text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3 border">ID</th>
              <th className="px-4 py-3 border">Image</th>
              <th className="px-4 py-3 border">Name</th>
              <th className="px-4 py-3 border">Category</th>
              <th className="px-4 py-3 border">Price (Rs.)</th>
              <th className="px-4 py-3 border">Stock</th>
              <th className="px-4 py-3 border">Status</th>
              <th className="px-4 py-3 border text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredInventory.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-6 text-gray-500">
                  No inventory items found.
                </td>
              </tr>
            ) : (
              filteredInventory.map((item, index) => (
                <tr
                  key={item.id}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-4 py-3 border">{item.id}</td>
                  <td className="px-4 py-3 border">
                    <img
                      src={`../../uploads/${item.image}`}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded border"
                    />
                  </td>
                  <td className="px-4 py-3 border">{item.name}</td>
                  <td className="px-4 py-3 border">{item.category}</td>
                  <td className="px-4 py-3 border">{item.price}</td>
                  <td className="px-4 py-3 border text-center">{item.stock}</td>
                  <td className="px-4 py-3 border">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 border text-center">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => handleEdit(item.raw)}
                        className="text-teal-600 hover:underline flex items-center gap-1"
                      >
                        <Edit className="w-4 h-4" />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-600 hover:underline flex items-center gap-1"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="mt-4 flex justify-between text-sm text-gray-600 flex-wrap gap-3">
        <span>
          Showing {filteredInventory.length} of {inventoryData.length} items
        </span>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-100" />
            In Stock: {inventoryData.filter((i) => i.status === "In Stock").length}
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-100" />
            Low Stock: {inventoryData.filter((i) => i.status === "Low Stock").length}
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-100" />
            Out of Stock: {inventoryData.filter((i) => i.status === "Out of Stock").length}
          </div>
        </div>
      </div>
    </div>
  );
}
