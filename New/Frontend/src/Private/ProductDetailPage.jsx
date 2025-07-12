"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

const ProductDetailPage = () => {
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)

  const product = {
    id: 1,
    title: "White Aesthetic Chair",
    subtitle: "Combination of wood and wool",
    description:
      "Finnish-American architect and designer Eero Saarinen famously hated the sight of many table and chair legs in a room.",
    price: 4999,
    stock: 5,
    image: "/image/WhiteChair.png",
  }

  const relatedItems = [
    {
      id: 2,
      title: "Dining Chair",
      category: "Furniture",
      description: "Elegant sitting chair options for your living room",
      price: 24000,
      image: "/image/7.jpg",
    },
    {
      id: 8,
      title: "L-Shape Sofa",
      category: "Furniture",
      description: "Premium L-shaped sofa set for spacious living rooms",
      price: 85000,
      image: "/image/7.jpg",
    },
    {
      id: 10,
      title: "Recliner Sofa",
      category: "Furniture",
      description: "Luxury recliner sofa with premium leather finish",
      price: 95000,
      image: "/image/7.jpg",
    },
  ]

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1 && newQuantity <= product.stock) {
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

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        {/* Product Image */}
        <div className="border-2 border-gray-300 rounded-lg overflow-hidden bg-white">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Product Details */}
        <section className="flex flex-col justify-start">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">{product.title}</h2>
          <p className="text-lg text-gray-500 mb-5">{product.subtitle}</p>
          <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>
          <div className="text-3xl font-bold text-gray-900 mb-8">Rs. {product.price.toLocaleString()}</div>

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
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="object-contain h-full"
                />
              </div>
              <div className="p-5">
                <div className="text-xs text-gray-400 uppercase mb-1">{item.category}</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <p className="text-lg font-bold text-blue-600">Rs. {item.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductDetailPage
