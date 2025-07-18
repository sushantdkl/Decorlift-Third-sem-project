<<<<<<< HEAD
"use client"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Star } from "lucide-react"

// Simple Button component
const Button = ({ children, className, onClick, ...props }) => (
  <button className={`px-4 py-2 rounded font-medium transition-colors ${className}`} onClick={onClick} {...props}>
    {children}
  </button>
)

// Simple Card components
const Card = ({ children, className, ...props }) => (
  <div className={`bg-white rounded-lg shadow-md ${className}`} {...props}>
    {children}
  </div>
)

const CardContent = ({ children, className, ...props }) => (
  <div className={`${className}`} {...props}>
    {children}
  </div>
)

const HomePage = () => {
  const [time, setTime] = useState({
    hrs: "00",
    min: "00",
    sec: "00",
    session: "AM",
  })

  const navigate = useNavigate()

  useEffect(() => {
    const displayTime = () => {
      const now = new Date()
      let hrs = now.getHours()
      const min = now.getMinutes()
      const sec = now.getSeconds()
      const session = hrs >= 12 ? "PM" : "AM"

      if (hrs > 12) hrs -= 12
      if (hrs === 0) hrs = 12

      setTime({
        hrs: hrs.toString().padStart(2, "0"),
        min: min.toString().padStart(2, "0"),
        sec: sec.toString().padStart(2, "0"),
        session,
      })
    }

    displayTime()
    const interval = setInterval(displayTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const featuredProducts = [
    {
      id: 1,
      name: "Bamboo chair set",
      price: "Rs.5,500",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop",
    },
    {
      id: 2,
      name: "White Luxury Sofa",
      price: "Rs.6,500",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=200&fit=crop",
    },
    {
      id: 3,
      name: "Wooden table",
      price: "Rs.5,500",
      image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=300&h=200&fit=crop",
    },
    {
      id: 4,
      name: "Bamboo chair set",
      price: "Rs.5,500",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop",
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Jessica Lee",
      location: "San Francisco, USA",
      rating: 5,
      text: "The oak dining table I ordered looks even more beautiful in person. The wood grain and finish are absolutely stunning. It's become the focal point of our family gatherings.",
      product: "Solid Oak Dining Table",
    },
    {
      id: 2,
      name: "David Miller",
      location: "Toronto, Canada",
      rating: 5,
      text: "Top-notch craftsmanship! The leather sofa is both stylish and incredibly comfortable. Delivery was smooth and the quality exceeded our expectations. Will definitely shop here again.",
      product: "Vintage Leather Sofa",
    },
    {
      id: 3,
      name: "Amelia Wright",
      location: "London, UK",
      rating: 5,
      text: "The handcrafted bookshelf fits perfectly in our study. The rustic look adds warmth and character to the room. Great service from start to finish!",
      product: "Rustic Wood Bookshelf",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="w-full min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('src/image/pexels-pixabay-276528.jpg')`,
        }}
      >
        {/* Content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-4 text-center text-white">
          <h1 className="text-6xl font-bold leading-tight">DESIGN YOUR HOUSE</h1>
          <p className="mt-6 text-lg max-w-xl mx-auto">
            Buy Furniture Online from our extensive collection of wooden furniture units to give your home an elegant touch at affordable prices.
          </p>
          <div className="mt-8 flex justify-center gap-6">
            <button
              onClick={() => navigate("/shop")}
              className="rounded-full border-2 border-teal-600 px-10 py-3 font-bold text-white transition hover:bg-teal-600"
            >
              Visit Our Store
            </button>
            <a href="mailto:sushantdhakal18@gmail.com">
              <button className="rounded-full border-2 border-teal-600 px-10 py-3 font-bold text-white transition hover:bg-teal-600">
                Email us
              </button>
            </a>
          </div>
        </div>

        {/* Clock */}
        <div className="fixed bottom-6 right-6 bg-black/60 rounded-md px-5 py-2 font-mono text-white text-3xl shadow-lg z-50">
          {time.hrs}:{time.min}:{time.sec} <span className="text-lg">{time.session}</span>
        </div>
      </div>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-3">{product.price}</p>
                  <Button
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    View
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">What Our Customers Say</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Read stories from homeowners around the world who have brought timeless elegance and comfort into their spaces with our furniture.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">Product: {testimonial.product}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
=======
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
>>>>>>> 49cd4cef27059ea0a48263253e45aefb36d634d8
