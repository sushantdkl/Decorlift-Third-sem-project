"use client"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Star } from "lucide-react"

// Basic UI components
const Button = ({ children, className = "", ...props }) => (
  <button className={`px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 ${className}`} {...props}>
    {children}
  </button>
)

const Card = ({ children, className = "", ...props }) => (
  <div className={`bg-white rounded shadow-md ${className}`} {...props}>
    {children}
  </div>
)

const CardContent = ({ children, className = "", ...props }) => (
  <div className={`p-4 ${className}`} {...props}>
    {children}
  </div>
)

export default function HomePage() {
  const [time, setTime] = useState({ hrs: "00", min: "00", sec: "00", session: "AM" })
  const [featuredProducts, setFeaturedProducts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products?category=featured-product")
        setFeaturedProducts(res.data)
      } catch (err) {
        console.error("Error loading featured products:", err)
      }
    }
    fetchFeatured()
  }, [])

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      let hrs = now.getHours()
      const min = now.getMinutes()
      const sec = now.getSeconds()
      const session = hrs >= 12 ? "PM" : "AM"
      hrs = hrs % 12 || 12
      setTime({
        hrs: hrs.toString().padStart(2, "0"),
        min: min.toString().padStart(2, "0"),
        sec: sec.toString().padStart(2, "0"),
        session,
      })
    }

    updateClock()
    const interval = setInterval(updateClock, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="w-full min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('src/image/pexels-pixabay-276528.jpg')`,
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-4 text-center text-white">
          <h1 className="text-6xl font-bold leading-tight">DESIGN YOUR HOUSE</h1>
          <p className="mt-6 text-lg max-w-xl mx-auto">
            Buy Furniture Online from our extensive collection of wooden furniture units.
          </p>
          <div className="mt-8 flex justify-center gap-6">
            <Button onClick={() => navigate("/shop")}>Visit Our Store</Button>
            <a href="mailto:sushantdhakal18@gmail.com">
              <Button>Contact Us</Button>
            </a>
          </div>
        </div>

        {/* Live Clock */}
        <div className="fixed bottom-6 right-6 bg-black bg-opacity-60 text-white px-5 py-2 rounded text-3xl font-mono z-50">
          {time.hrs}:{time.min}:{time.sec} <span className="text-lg">{time.session}</span>
        </div>
      </div>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Featured Products</h2>
          {featuredProducts.length === 0 ? (
            <p className="text-center text-gray-500">No featured products found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <Card key={product._id} className="overflow-hidden">
                  <div className="aspect-square">
                    <img
                      src={`http://localhost:5000${product.image}`}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent>
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-600 mb-3">Rs. {product.price}</p>
                    <Button onClick={() => navigate(`/product/${product._id}`)}>View Product</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Reviews/Testimonial Section - left untouched */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent>
                <p className="text-gray-700 mb-4">"The quality is amazing and delivery was prompt!"</p>
                <div className="flex items-center gap-2 text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="mt-2 text-gray-800 font-medium">- Sita Sharma</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="text-gray-700 mb-4">"Very elegant and premium furniture for my office!"</p>
                <div className="flex items-center gap-2 text-yellow-500">
                  {[...Array(4)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="mt-2 text-gray-800 font-medium">- Ram Thapa</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="text-gray-700 mb-4">"Completely satisfied with the craftsmanship!"</p>
                <div className="flex items-center gap-2 text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="mt-2 text-gray-800 font-medium">- Anju Lama</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
