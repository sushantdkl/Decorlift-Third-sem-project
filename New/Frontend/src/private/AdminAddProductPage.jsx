import { useState } from "react"
import { Upload } from "lucide-react"
import { userapi } from "../services/userapi.js"

export default function AddProductPage() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")
  const [category, setCategory] = useState("")
  const [image, setImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(file)
      setImagePreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = async () => {
    const formData = new FormData()
    formData.append("name", name)
    formData.append("description", description)
    formData.append("price", price)
    formData.append("stock", stock)
    formData.append("category", category)
    if (image) {
      formData.append("image", image)
    }

    try {
      const response = await userapi.post("/api/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      alert(response.data.message)
      setName("")
      setDescription("")
      setPrice("")
      setStock("")
      setCategory("")
      setImage(null)
      setImagePreview(null)
    } catch (error) {
      console.error("Failed to add product", error)
      alert("Failed to add product. Please try again.")
    }
  }

  return (
    <div className="flex-1 p-10">
      <h1 className="text-2xl font-bold mb-6">Add Product</h1>

      <div className="flex gap-10">
        {/* Image Upload */}
        <div className="w-[300px] h-[250px] bg-gray-200 rounded flex items-center justify-center relative">
          {imagePreview ? (
            <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded" />
          ) : (
            <label className="flex flex-col items-center cursor-pointer text-gray-500">
              <Upload className="w-6 h-6 mb-2" />
              Upload Image
              <input type="file" className="hidden" onChange={handleImageUpload} />
            </label>
          )}
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4 w-full max-w-md">
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 rounded h-24"
          />
          <div className="flex gap-4">
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border p-2 rounded w-1/2"
            />
            <input
              type="number"
              placeholder="In stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              className="border p-2 rounded w-1/2"
            />
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">Select Category</option>
            <option value="architecture">Architecture</option>
            <option value="office-chair">Office Chair</option>
            <option value="dining-chair">Dining Chair</option>
            <option value="sofa-set">Sofa Set</option>
            <option value="shop">Shop</option>
          </select>
          <button
            onClick={handleSubmit}
            className="bg-emerald-700 text-white py-2 rounded hover:bg-emerald-800 transition"
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  )
}
