import { useEffect, useState } from "react"
import { User, Star } from "lucide-react"

const HomePage = () => {
  const [time, setTime] = useState({
    hrs: "00",
    min: "00",
    sec: "00",
    session: "AM",
  })

  const navigate = (path) => {
    // Mock navigation function
    console.log(`Navigating to: ${path}`)
  }

  const Link = ({ to, children, className }) => (
    <a href={to} className={className} onClick={(e) => { e.preventDefault(); navigate(to); }}>
      {children}
    </a>
  )

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

  // Featured Products Data
  const featuredProducts = [
    {
      id: 1,
      name: "Bamboo Desk set",
      price: "$80.00",
      image: "src/public/bamboo_chair.webp",
      rating: 5
    },
    {
      id: 2,
      name: "Relax Lounge Sofa",
      price: "$120.00",
      image: "src/public/whitesofa.png",
      rating: 4
    },
    {
      id: 3,
      name: "Wooden Desk",
      price: "$75.00",
      image: "src/public/wodenset.png",
      rating: 5
    },
    {
      id: 4,
      name: "Bamboo Desk set",
      price: "$80.00",
      image: "src/public/bamboo_chair.webp",
      rating: 5
    }
  ]

  // Customer Testimonials Data
  const testimonials = [
    {
      id: 1,
      name: "Jenny Wilson",
      role: "UI/UX Designer",
      text: "The site offers basic shopping but needs more detailed product information and improved navigation for better user experience.",
      rating: 5,
      avatar: "/api/placeholder/50/50"
    },
    {
      id: 2,
      name: "Devon Lane",
      role: "UI/UX Designer",
      text: "The website looks nice and clean! The website looks great with good user experience. I loved the website and the quality.",
      rating: 4,
      avatar: "/api/placeholder/50/50"
    },
    {
      id: 3,
      name: "Guy Hawkins",
      role: "Marketing Coordinator",
      text: "The layout could be improved. The website is nice and clean but some parts seem too basic. Great pricing though!",
      rating: 5,
      avatar: "/api/placeholder/50/50"
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="w-full min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('src/public/pexels-pixabay-276528.jpg')`,
        }}
      >
        {/* Navbar */}
        <nav className="w-11/12 mx-auto flex items-center justify-between py-8 bg-black bg-opacity-30">
          {/* Logo */}
          <div
            className="w-28 h-12 bg-white rounded cursor-pointer flex items-center justify-center font-bold text-black"
            onClick={() => navigate("/")}
          >
            <img src="/aayush_logo.png" alt="Logo" className="h-10 object-contain" />
          </div>
          
          {/* Navigation Links */}
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

          {/* Profile Button */}
          <button
            onClick={() => navigate("/profile")}
            className="flex items-center gap-2 border-2 border-white text-white rounded-full px-5 py-2 text-sm hover:bg-white hover:text-black transition"
          >
            <User className="w-4 h-4" />
            Profile
          </button>
        </nav>

        {/* Hero Content */}
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
              Visit Store
            </button>
            <a href="mailto:sushantdhakal18@gmail.com" className="inline-block">
              <button className="relative overflow-hidden rounded-full border-2 border-teal-600 px-10 py-3 font-bold text-white transition hover:bg-teal-600">
                Email us
              </button>
            </a>
          </div>
        </div>

        {/* Clock */}
        <div className="fixed bottom-6 right-6 bg-black bg-opacity-50 rounded-md px-5 py-2 font-mono text-white text-3xl select-none shadow-lg">
          {time.hrs}:{time.min}:{time.sec} <span className="text-lg">{time.session}</span>
        </div>
      </div>

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Featured Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    {renderStars(product.rating)}
                  </div>
                  <p className="text-xl font-bold text-teal-600">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Our Customers Say</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Great reviews from customers who have had their furniture delivered and installed.
            We take pride in providing excellent customer service and high-quality furniture.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">DECORLIFT</h3>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="hover:text-teal-400 transition">Home</a>
              <a href="#" className="hover:text-teal-400 transition">About Us</a>
              <a href="#" className="hover:text-teal-400 transition">Project</a>
              <a href="#" className="hover:text-teal-400 transition">Our Services</a>
              <a href="#" className="hover:text-teal-400 transition">Contact Us</a>
            </div>
            <div className="flex justify-center space-x-4">
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-teal-600 transition cursor-pointer">
                <span className="text-xs">G</span>
              </div>
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-teal-600 transition cursor-pointer">
                <span className="text-xs">T</span>
              </div>
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-teal-600 transition cursor-pointer">
                <span className="text-xs">F</span>
              </div>
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-teal-600 transition cursor-pointer">
                <span className="text-xs">P</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage;