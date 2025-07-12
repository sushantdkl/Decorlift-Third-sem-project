import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, Edit } from "lucide-react"
 
const inventoryData = [
  {
    id: 1,
    name: "White Aesthetic Chair",
    category: "Chair",
    price: "24,999",
    stock: 15,
    status: "In Stock",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Modern Decoration Piece",
    category: "Decoration",
    price: "24,999",
    stock: 8,
    status: "Low Stock",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Comfort Chair",
    category: "Chair",
    price: "24,999",
    stock: 22,
    status: "In Stock",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 4,
    name: "Luxury Sofa",
    category: "Sofa",
    price: "24,999",
    stock: 5,
    status: "Low Stock",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 5,
    name: "Wall Decoration",
    category: "Decoration",
    price: "24,999",
    stock: 0,
    status: "Out of Stock",
    image: "/placeholder.svg?height=60&width=60",
  },
]
 
export default function InventoryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("All")
 
  const filteredInventory = inventoryData.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
 
    const matchesStatus = filterStatus === "All" || item.status === filterStatus
 
    return matchesSearch && matchesStatus
  })
 
  const getStatusVariant = (status) => {
    switch (status) {
      case "In Stock":
        return "default"
      case "Low Stock":
        return "secondary"
      case "Out of Stock":
        return "destructive"
      default:
        return "outline"
    }
  }
 
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Manage Inventory</h1>
 
      <div className="flex justify-between items-center mb-6 gap-4">
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Status</SelectItem>
            <SelectItem value="In Stock">In Stock</SelectItem>
            <SelectItem value="Low Stock">Low Stock</SelectItem>
            <SelectItem value="Out of Stock">Out of Stock</SelectItem>
          </SelectContent>
        </Select>
 
        <div className="relative w-60">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 rounded-full border-2 focus:border-[#7a9b8e]"
          />
        </div>
      </div>
 
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-3 py-3 text-left font-semibold w-16">ID</th>
                  <th className="border border-gray-300 px-3 py-3 text-left font-semibold w-20">Image</th>
                  <th className="border border-gray-300 px-3 py-3 text-left font-semibold">Product Name</th>
                  <th className="border border-gray-300 px-3 py-3 text-left font-semibold">Category</th>
                  <th className="border border-gray-300 px-3 py-3 text-left font-semibold">Price (Rs.)</th>
                  <th className="border border-gray-300 px-3 py-3 text-left font-semibold">Stock</th>
                  <th className="border border-gray-300 px-3 py-3 text-left font-semibold">Status</th>
                  <th className="border border-gray-300 px-3 py-3 text-center font-semibold w-24">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInventory.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="text-center py-8 text-gray-600 border border-gray-300">
                      No inventory items found.
                    </td>
                  </tr>
                ) : (
                  filteredInventory.map((item, idx) => (
                    <tr key={item.id} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="border border-gray-300 px-3 py-3 font-medium">{item.id}</td>
                      <td className="border border-gray-300 px-3 py-3">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded border"
                        />
                      </td>
                      <td className="border border-gray-300 px-3 py-3 font-medium">{item.name}</td>
                      <td className="border border-gray-300 px-3 py-3">{item.category}</td>
                      <td className="border border-gray-300 px-3 py-3 font-medium">{item.price}</td>
                      <td className="border border-gray-300 px-3 py-3 text-center font-medium">{item.stock}</td>
                      <td className="border border-gray-300 px-3 py-3">
                        <Badge variant={getStatusVariant(item.status)}>{item.status}</Badge>
                      </td>
                      <td className="border border-gray-300 px-3 py-3 text-center">
                        <Button variant="ghost" size="sm" onClick={() => console.log("Edit inventory:", item.id)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
 
      <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
        <span>
          Showing {filteredInventory.length} of {inventoryData.length} items
        </span>
        <div className="flex gap-4 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-green-100 rounded"></div>
            In Stock: {inventoryData.filter((item) => item.status === "In Stock").length}
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-yellow-100 rounded"></div>
            Low Stock: {inventoryData.filter((item) => item.status === "Low Stock").length}
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-red-100 rounded"></div>
            Out of Stock: {inventoryData.filter((item) => item.status === "Out of Stock").length}
          </div>
        </div>
      </div>
    </div>
  )
}