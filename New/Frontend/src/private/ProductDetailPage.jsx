"use client"

import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getProductById, getProducts } from "../services/productService"

const ProductDetailPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const [product, setProduct] = useState(null)
  const [relatedItems, setRelatedItems] = useState([])

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(id)
        console.log(response)
        setProduct(response.data)
      } catch (error) {
        console.error("Failed to fetch product:", error)
      }
    }

    const fetchRelatedItems = async () => {
      try {
        const response = await getProducts()
        // Filter out the current product and take the first 3
        const related = response.data
          .filter((p) => p.id !== parseInt(id))
          .slice(0, 3)
        setRelatedItems(related)
      } catch (error) {
        console.error("Failed to fetch related items:", error)
      }
    }

    fetchProduct()
    fetchRelatedItems()
  }, [id])

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change
    if (product && newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity)
    }
  }

  const handleBuyNow = () => {
    const query = new URLSearchParams({
      productId: product.id.toString(),
      quantity: quantity.toString(),
      totalCost: (product.price * quantity).toString(),
      productTitle: product.name,
    })

    navigate(`/checkout?${query.toString()}`)
  }

  const handleRelatedItemClick = (item) => {
    // Navigate to the product detail page of the clicked item
    navigate(`/product/${item.id}`)
  }

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.image ? (product.image.startsWith('/uploads/') ? `http://localhost:4000${product.image}` : `http://localhost:4000/uploads/${product.image}`) : "src/image/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-start space-y-6">
            {/* Product Title */}
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            
            {/* Subtitle */}
            <p className="text-gray-600 text-sm">{product.description || "Combination of wood and wool"}</p>
            
            {/* Description */}
            <p className="text-gray-700 leading-relaxed">
              {product.description || "Finnish-american architect and designer Eero Saarinen famously hated the sight of many table and chair legs in a room."}
            </p>
            
            {/* Stock Info */}
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-green-600 font-medium">In Stock:</span>
              <span className="text-gray-700">{product.stock}</span>
            </div>
            
            {/* Price */}
            <div className="text-3xl font-bold text-gray-900">
              Rs. {product.price?.toLocaleString()}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
                className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                readOnly
                className="w-16 h-10 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                onClick={() => handleQuantityChange(1)}
                disabled={quantity >= product.stock}
                className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            {/* Buy Now Button */}
            <button
              onClick={handleBuyNow}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200"
            >
              Buy Now
            </button>
          </div>
        </div>
      </main>

      {/* Related Items */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => handleRelatedItemClick(item)}
            >
              <div className="aspect-square bg-gray-100 overflow-hidden">
                <img
                  src={item.image ? (item.image.startsWith('/uploads/') ? `http://localhost:4000${item.image}` : `http://localhost:4000/uploads/${item.image}`) : "src/image/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">{item.category || "Decoration"}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description || "Combination of wood and wool"}</p>
                <div className="text-lg font-bold text-gray-900">
                  Rs. {item.price?.toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductDetailPage
