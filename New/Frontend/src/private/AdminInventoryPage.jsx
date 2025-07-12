import { useState } from "react";
import { Search, Edit } from "lucide-react";

const inventoryData = [
  {
    id: 1,
    name: "White Aesthetic Chair",
    category: "Chair",
    price: "24,999",
    stock: 15,
    status: "In Stock",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Modern Decoration Piece",
    category: "Decoration",
    price: "24,999",
    stock: 8,
    status: "Low Stock",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Comfort Chair",
    category: "Chair",
    price: "24,999",
    stock: 22,
    status: "In Stock",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Luxury Sofa",
    category: "Sofa",
    price: "24,999",
    stock: 5,
    status: "Low Stock",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Wall Decoration",
    category: "Decoration",
    price: "24,999",
    stock: 0,
    status: "Out of Stock",
    image: "/placeholder.svg",
  },
];

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

export default function AdminInventoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredInventory = inventoryData.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === "All" || item.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

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
                      src={item.image}
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
                    <button
                      onClick={() => console.log("Edit product:", item.id)}
                      className="text-teal-600 hover:underline flex items-center justify-center gap-1 text-sm"
                    >
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
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
