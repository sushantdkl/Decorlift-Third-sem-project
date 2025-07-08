"use client"
import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { User, Star, Instagram, Globe, Twitter, Facebook } from "lucide-react"
 
// You'll need to install these UI components or create them
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
 
// Simple Button component (if you don't have shadcn/ui)
const Button = ({ children, className, size, onClick, ...props }) => (
  <button className={`px-4 py-2 rounded font-medium transition-colors ${className}`} onClick={onClick} {...props}>
    {children}
  </button>
)
 
// Simple Card components (if you don't have shadcn/ui)
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
<<<<<<< HEAD
          backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('src/public/pexels-pixabay-276528.jpg')`,
        }}
      >
        {/* Navbar */}
        <nav className="w-11/12 mx-auto flex items-center justify-between py-8 bg-black bg-opacity-30">
          <img
            src="src/public/Newlogo.jpg.png"
            alt="Logo"
            className="w-28 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <ul className="flex space-x-8 uppercase text-white font-semibold tracking-wide">
            <li>
              <Link
                to="/"
                className="relative after:absolute after:left-0 after:bottom-[-10px] after:h-[3px] after:w-full after:bg-teal-600 after:transition-all after:duration-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="relative hover:after:absolute hover:after:left-0 hover:after:bottom-[-10px] hover:after:h-[3px] hover:after:w-full hover:after:bg-teal-600 hover:after:transition-all hover:after:duration-500"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="relative hover:after:absolute hover:after:left-0 hover:after:bottom-[-10px] hover:after:h-[3px] hover:after:w-full hover:after:bg-teal-600 hover:after:transition-all hover:after:duration-500"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="relative hover:after:absolute hover:after:left-0 hover:after:bottom-[-10px] hover:after:h-[3px] hover:after:w-full hover:after:bg-teal-600 hover:after:transition-all hover:after:duration-500"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="relative hover:after:absolute hover:after:left-0 hover:after:bottom-[-10px] hover:after:h-[3px] hover:after:w-full hover:after:bg-teal-600 hover:after:transition-all hover:after:duration-500"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="relative hover:after:absolute hover:after:left-0 hover:after:bottom-[-10px] hover:after:h-[3px] hover:after:w-full hover:after:bg-teal-600 hover:after:transition-all hover:after:duration-500"
              >
                Login
              </Link>
            </li>
          </ul>
          <button
            onClick={() => navigate("/profile")}
            className="flex items-center gap-2 border-2 border-white text-white rounded-full px-5 py-2 text-sm hover:bg-white hover:text-black transition"
          >
            <User className="w-4 h-4" />
            Profile
          </button>
        </nav>
=======
          backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('src/image/pexels-pixabay-276528.jpg')`,
        }}
      >
        
>>>>>>> d17139aa86b154f6c2784353bed1549301db0d12
 
        {/* Content Section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-4 text-center text-white">
          <h1 className="text-6xl font-bold leading-tight">DESIGN YOUR HOUSE</h1>
          <p className="mt-6 text-lg max-w-xl mx-auto">
            Buy Furniture Online from our extensive collection of wooden furniture units to give your home an elegant
            touch at affordable prices.
          </p>
          <div className="mt-8 flex justify-center gap-6">
            <button
              onClick={() => navigate("/shop")}
              className="relative overflow-hidden rounded-full border-2 border-teal-600 px-10 py-3 font-bold text-white transition hover:bg-teal-600"
            >
              Visit Our Store
            </button>
            <a href="mailto:sushantdhakal18@gmail.com" className="inline-block">
              <button className="relative overflow-hidden rounded-full border-2 border-teal-600 px-10 py-3 font-bold text-white transition hover:bg-teal-600">
                Email us
              </button>
            </a>
          </div>
        </div>
 
        {/* Clock */}
        <div className="fixed bottom-6 right-6 bg-black bg-opacity-50 rounded-md px-5 py-2 font-mono text-white text-3xl select-none shadow-lg z-50">
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
                <div className="aspect-square relative">
                  <img
                    src={product.image || "/placeholder.svg"}
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
 
      {/* Customer Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">What Our Customers Say</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Read stories from homeowners around the world who have brought timeless elegance and comfort into their
            spaces with our furniture.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
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
 
<<<<<<< HEAD
      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-block border-2 border-gray-800 px-8 py-2 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 tracking-wider">DECORLIFT</h3>
            </div>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                <Globe className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          <nav className="flex flex-wrap justify-center space-x-8 text-gray-600">
            <Link to="/" className="hover:text-gray-800 transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-800 transition-colors">
              About Us
            </Link>
            <Link to="/gallery" className="hover:text-gray-800 transition-colors">
              Gallery
            </Link>
            <Link to="/services" className="hover:text-gray-800 transition-colors">
              Our Services
            </Link>
            <Link to="/contact" className="hover:text-gray-800 transition-colors">
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
=======
>>>>>>> d17139aa86b154f6c2784353bed1549301db0d12
    </div>
  )
}
 
export default HomePage;
 
 