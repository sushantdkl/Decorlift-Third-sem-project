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
        setProduct(response.data.data)
      } catch (error) {
        console.error("Failed to fetch product:", error)
      }
    }

    const fetchRelatedItems = async () => {
      try {
        const response = await getProducts()
        // Filter out the current product and take the first 3
        const related = response.data.data
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
      productTitle: product.title,
    })

    navigate(`/checkout?${query.toString()}`)
  }

  const handleRelatedItemClick = (item) => {
    const query = new URLSearchParams({
      productId: item.id.toString(),
      quantity: "1",
      totalCost: item.price.toString(),
      productTitle: item.title,
    })

    navigate(`/checkout?${query.toString()}`)
  }

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        {/* Product Image */}
        <div className="border-2 border-gray-300 rounded-lg overflow-hidden bg-white">
          <img
            src={product.image ? `src/image/${product.image}` : "src/image/placeholder.svg"}
            alt={product.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Product Details */}
        <section className="flex flex-col justify-start">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">{product.title}</h2>
          <p className="text-lg text-gray-500 mb-5">{product.subtitle}</p>
          <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>
          <div className="text-3xl font-bold text-gray-900 mb-8">
            Rs. {product.price.toLocaleString()}
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4 mb-10">
            <button
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity <= 1}
              className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              readOnly
              className="w-16 text-center border border-gray-300 rounded"
            />
            <button
              onClick={() => handleQuantityChange(1)}
              disabled={quantity >= product.stock}
              className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          {/* Buy Now Button */}
          <button
            onClick={handleBuyNow}
            className="bg-green-700 hover:bg-green-800 text-white px-10 py-4 rounded-lg font-semibold transition"
          >
            Buy Now
          </button>
        </section>
      </main>

      {/* Related Items */}
      <section className="max-w-6xl mx-auto p-6">
        <h3 className="text-3xl font-bold text-gray-800 mb-8">Related items</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {relatedItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow hover:-translate-y-1 transform transition overflow-hidden cursor-pointer"
              onClick={() => handleRelatedItemClick(item)}
            >
              <div className="h-48 flex items-center justify-center bg-gray-200 overflow-hidden">
                <img
                  src={item.image ? `src/image/${item.image}` : "src/image/placeholder.svg"}
                  alt={item.title}
                  className="object-contain h-full"
                />
              </div>
              <div className="p-5">
                <div className="text-xs text-gray-400 uppercase mb-1">{item.category}</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <p className="text-lg font-bold text-blue-600">
                  Rs. {item.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductDetailPage
