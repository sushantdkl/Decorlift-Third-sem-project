"use client"

import React from "react"

import { Link, useNavigate } from "react-router-dom"
import { User, Bath, Bed, Armchair, Sofa, Facebook, Twitter, Instagram, ArrowUp } from "lucide-react"

const ServicesPage = () => {
  const navigate = useNavigate()

  const services = [
    {
      title: "PREMIUM GRADE QUALITY",
      desc: "For premium brands, the price and quality of a product often align, certainly in the consumer's mind, as the high price is often associated with high quality.",
    },
    {
      title: "HANDMADE COLLECTIONS",
      desc: "Buying handmade products must be a conscious act: it means to choose products made by hand processes, which aren't industrial or mass-produced.",
    },
    {
      title: "SOFT FURNITURE",
      desc: "Textiles, frequently referred to as soft furnishings, are fabrics used in the home. They include items frequently classified as linens, such as bath and dish towels.",
    },
    {
      title: "COMFORTABLE CHAIRS",
      desc: "Adding a cushion can make your office chair more comfortable. A well-designed cushion will stabilize your pelvis, relieve pressure in your coccyx area.",
    },
    {
      title: "OUTDOOR FURNITURE",
      desc: "It can be left outside in nearly any weather, as wet and cold conditions won't affect it. The one weather condition you may need to be wary.",
    },
    {
      title: "OFFICE FURNITURE",
      desc: "Furniture and fixtures are larger items of movable equipment that are used to furnish an office. Examples are bookcases, chairs, desks.",
    },
  ]

  const designs = [
    {
      icon: Bath,
      title: "BEDROOM DESIGN",
      desc: "A modern bedroom can be so much more than that aesthetically. You should think of it more as having a sleek look replete with present-day comforts",
      img: "src/public/6.jpg",
      bg: "bg-indigo-600",
    },
    {
      icon: Bed,
      title: "KITCHEN DESIGN",
      desc: "Arguably the most versatile layout for any size of kitchen, a U-shaped floor plan surrounds the user on three sides.",
      img: "src/public/9.jpg",
      bg: "bg-blue-500",
    },
    {
      icon: Armchair,
      title: "HOME DESIGN",
      desc: "Modern design is an interior design style characterized by a monochromatic color palette, clean lines, minimalism, natural materials, and natural light.",
      img: "src/public/11.jpg",
      bg: "bg-red-500",
    },
    {
      icon: Sofa,
      title: "OFFICE DESIGN",
      desc: "The best office design layouts create a sense of collaboration and creativity by designing in large, open plan spaces.",
      img: "src/public/3.jpg",
      bg: "bg-teal-600",
    },
  ]

  return (
    <div className="font-sans text-[#000000a4]">
      {/* Banner */}
       <div className="font-sans text-black">
      {/* Banner + Navbar */}
      <div
        className="relative h-[28vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('src/public/pexels-pixabay-276528.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        <div className="relative z-10 flex items-center justify-between px-10 py-6 bg-black bg-opacity-30">
          <img
            src="src/assets/aayush_logo.png"
            alt="Logo"
            className="w-[30px] cursor-pointer"
            onClick={() => navigate("/")}
          />


          <ul className="flex gap-5">
            <li>
              <Link to="/" className="uppercase text-white hover:text-teal-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="uppercase text-white hover:text-teal-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="uppercase text-white hover:text-teal-400 transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/services" className="uppercase text-white border-b-2 border-teal-400">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="uppercase text-white hover:text-teal-400 transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/login" className="uppercase text-white hover:text-teal-400 transition">
                Login
              </Link>
            </li>
          </ul>

          <button
            onClick={() => navigate("/profile")}
            className="text-white border border-white rounded-full px-4 py-1 flex items-center gap-2 hover:bg-white hover:text-black transition"
          >
            <User className="w-4 h-4" /> Profile
          </button>
        </div>
      </div>
      </div>

      <h1 className="text-[60px] text-center mt-10 text-black/60 tracking-wide drop-shadow">Our Services</h1>

      {/* First Row of Services */}
      <div className="grid grid-cols-3 gap-12 px-[20%] mt-20">
        {services.slice(0, 3).map((item, i) => (
          <div key={i} className="text-center">
            <h1 className="text-[#d32f2386] text-xl tracking-wide drop-shadow mb-2">{item.title}</h1>
            <hr className="border-2 border-[#d32f2386] w-[90px] mx-auto" />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-6 gap-4 px-[20%] mt-10">
        {services.slice(0, 3).map((item, i) => (
          <React.Fragment key={i}>
            <div className="border-2 border-black rounded-full w-[80px] h-[80px] flex items-center justify-center text-xl font-bold">
              {i + 1}
            </div>
            <p>{item.desc}</p>
          </React.Fragment>
        ))}
      </div>

      {/* Second Row of Services */}
      <div className="grid grid-cols-3 gap-12 px-[20%] mt-20">
        {services.slice(3).map((item, i) => (
          <div key={i} className="text-center">
            <h1 className="text-[#d32f2386] text-xl tracking-wide drop-shadow mb-2">{item.title}</h1>
            <hr className="border-2 border-[#d32f2386] w-[90px] mx-auto" />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-6 gap-4 px-[20%] mt-10">
        {services.slice(3).map((item, i) => (
          <React.Fragment key={i}>
            <div className="border-2 border-black rounded-full w-[80px] h-[80px] flex items-center justify-center text-xl font-bold">
              {i + 4}
            </div>
            <p>{item.desc}</p>
          </React.Fragment>
        ))}
      </div>

      {/* Design Cards */}
      <div className="grid grid-cols-4 gap-6 mt-24 px-4">
        {designs.map((item, i) => {
          const IconComponent = item.icon
          return (
            <div key={i} className={`relative h-[270px] text-white ${item.bg} overflow-hidden p-4`}>
              <IconComponent className="text-[50px] mx-auto block mb-2" size={50} />
              <h2 className="text-center mt-2 tracking-wide">{item.title}</h2>
              <p className="text-center text-sm mt-4 px-2">{item.desc}</p>
              <img
                src={item.img || "/placeholder.svg"}
                alt="design"
                className="absolute bottom-0 left-0 w-full h-full opacity-0 hover:opacity-30 transition-all duration-300 ease-out"
              />
            </div>
          )
        })}
      </div>

      {/* Footer */}
      <footer className="bg-[#F6F0EB] mt-32 py-10 text-center">
        <div className="text-[#032437] text-3xl font-bold border w-fit mx-auto px-8 py-2">DECORLIFT</div>

        <div className="flex justify-center gap-6 my-4 text-xl text-[#032437]">
          <Facebook className="hover:text-[#3b7da2] cursor-pointer" />
          <Twitter className="hover:text-[#3b7da2] cursor-pointer" />
          <Instagram className="hover:text-[#3b7da2] cursor-pointer" />
          <div className="hover:text-[#3b7da2] cursor-pointer text-xl font-bold">G</div>
        </div>

        <ul className="flex justify-center gap-6 mt-4 text-[#032437] uppercase">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/services">Our Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <a href="#top" className="text-[#032437] flex items-center gap-1">
              <ArrowUp className="w-4 h-4" /> Back to top
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default ServicesPage
