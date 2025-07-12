<<<<<<< HEAD
"use client"

import { Link, useNavigate } from "react-router-dom"
import { User, Bath, Sofa, Armchair, Bed, Facebook, Twitter, Instagram, ArrowUp } from "lucide-react"

const AboutPage = () => {
  const navigate = useNavigate()

  return (
    <div className="font-sans text-black">
<<<<<<< HEAD
      {/* Hero Section with Navigation */}
       <div className="font-sans text-black">
      {/* Banner + Navbar */}
      <div
        className="relative h-[28vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('src/public/pexels-pixabay-276528.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        <div className="relative z-10 flex items-center justify-between px-10 py-6 bg-black bg-opacity-30">
          <img
            src="src/public/aayush_logo.png"
            alt="Logo"
            className="w-[30px] cursor-pointer"
            onClick={() => navigate("/")}
          />

          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-white uppercase hover:text-teal-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white uppercase border-b-2 border-teal-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="text-white uppercase hover:text-teal-500">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-white uppercase hover:text-teal-500">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white uppercase hover:text-teal-500">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-white uppercase hover:text-teal-500">
                Login
              </Link>
            </li>
          </ul>

          <button
            onClick={() => navigate("/profile")}
            className="border-2 border-white text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white hover:text-black text-sm transition"
          >
            <User className="w-4 h-4" /> Profile
          </button>
        </div>
      </div>
</div>
=======
>>>>>>> d17139aa86b154f6c2784353bed1549301db0d12
      {/* About Us Title */}
      <div className="w-[78%] mx-auto mt-16 text-center">
        <h1 className="text-6xl font-bold drop-shadow">About us</h1>
      </div>

      {/* Products Grid */}
      <div className="w-[78%] mx-auto grid grid-cols-4 gap-10 my-20">
        <div>
          <h1 className="text-[#186b63] text-xl font-bold drop-shadow">DINING CHAIR</h1>
          <hr className="w-[100px] border-[3px] border-[#186b63] my-2" />
          <p className="text-gray-700">
            It can make a room, it can bring style and substance to the interior design theme of your room and that is
            why it is worth
            <button
              className="ml-3 px-5 py-3 border border-black bg-white hover:bg-gray-300 text-sm"
              onClick={() => navigate("/dining-chairs")}
            >
              View All Dining Chairs
            </button>
          </p>
        </div>
        <img src="src/public/1.jpg" className="rounded-lg w-full" alt="Dining Chair" />

        <img src="src/public/8.jpg" className="rounded-lg w-full" alt="Architecture" />
        <div>
          <h1 className="text-[#186b63] text-xl font-bold drop-shadow">ARCHITECTURE</h1>
          <hr className="w-[100px] border-[3px] border-[#186b63] my-2" />
          <p className="text-gray-700">
            Furniture designed to match or to accord with the architectural features of the rooms for which it
            <button
              className="ml-3 px-5 py-3 border border-black bg-white hover:bg-gray-300 text-sm"
              onClick={() => navigate("/architecture")}
            >
              View All Architecture
            </button>
          </p>
        </div>

        <img src="src/public/9.jpg" className="rounded-lg w-full" alt="Office Chair" />
        <div>
          <h1 className="text-[#186b63] text-xl font-bold drop-shadow">OFFICE CHAIR</h1>
          <hr className="w-[100px] border-[3px] border-[#186b63] my-2" />
          <p className="text-gray-700">
            Best high tech CEO executive wooden office manager desk set modern organizer furniture supplies for home
            office
            <button
              className="ml-3 px-5 py-3 border border-black bg-white hover:bg-gray-300 text-sm"
              onClick={() => navigate("/office-chairs")}
            >
              View All Office Chair
            </button>
          </p>
        </div>

        <div>
          <h1 className="text-[#186b63] text-xl font-bold drop-shadow">Sofa Sets</h1>
          <hr className="w-[100px] border-[3px] border-[#186b63] my-2" />
          <p className="text-gray-700">
            Finnish-american architect and designer Eero Sarinen famously hated the sight of many table and chair legs
            in a room.
            <button
              className="ml-3 px-5 py-3 border border-black bg-white hover:bg-gray-300 text-sm"
              onClick={() => navigate("/sofa-sets")}
            >
              View All Sofa Sets
            </button>
          </p>
        </div>
        <img src="src/public/11.jpg" className="rounded-lg w-full" alt="Sofa" />
      </div>

      {/* Stats Section */}
<<<<<<< HEAD
      <div className="min-h-[500px] bg-fixed bg-center bg-no-repeat bg-cover bg-[url('src/public/pexels-pixabay-276528.jpg')] bg-black/60 bg-blend-overlay text-white">
=======
      <div className="min-h-[500px] bg-fixed bg-center bg-no-repeat bg-cover bg-[url('src/image/pexels-pixabay-276528.jpg')] bg-black/60 bg-blend-overlay text-white">
>>>>>>> d17139aa86b154f6c2784353bed1549301db0d12
        <h1 className="text-center text-5xl font-bold py-10">Our Stats</h1>
        <div className="grid grid-cols-4 text-center w-1/2 mx-auto gap-5">
          <Bath className="text-4xl mx-auto" />
          <Sofa className="text-4xl mx-auto" />
          <Armchair className="text-4xl mx-auto" />
          <Bed className="text-4xl mx-auto" />
          <p className="border-2 p-1 text-xl">3000</p>
          <p className="border-2 p-1 text-xl">3000</p>
          <p className="border-2 p-1 text-xl">3000</p>
          <p className="border-2 p-1 text-xl">3000</p>
        </div>
      </div>

      {/* History Section */}
      <h1 className="w-[78%] mx-auto text-[70px] mt-20 text-center text-black/70 font-bold">History of us</h1>
      <div className="w-[78%] mx-auto grid grid-cols-3 gap-10 my-10">
        <div>
          <h1 className="text-red-600 text-xl font-bold drop-shadow">FUTURE OF INTERIOR ARCHITECTURES</h1>
          <p className="text-lg text-gray-600 mt-4">
            People are appreciating their interior spaces more now and we will make better use of their space...
          </p>
        </div>

        <div className="flex justify-center items-center">
          <img
            src="src/public/OvalMirror.png"
            alt="DecorLift History"
            className="rounded-full w-[300px] h-[300px] object-cover border-4 border-teal-200 shadow-lg"
          />
        </div>

        <div>
          <p className="text-lg text-gray-600 mt-4">
            As our world becomes more automated, people want to enjoy being at home...
          </p>
        </div>
      </div>

<<<<<<< HEAD
      {/* Footer */}
      <div className="bg-[#F6F0EB] w-full text-center py-12">
        <div className="w-[94%] mx-auto border border-gray-400 p-12">
          <div className="text-[#032437] text-4xl font-bold border py-4 mb-6">DECORLIFT</div>

          <div className="flex justify-center gap-6 text-2xl text-[#032437] mb-8">
            <Facebook className="hover:text-[#3b7da2] cursor-pointer" />
            <Twitter className="hover:text-[#3b7da2] cursor-pointer" />
            <Instagram className="hover:text-[#3b7da2] cursor-pointer" />
            <div className="hover:text-[#3b7da2] cursor-pointer text-2xl">G</div>
          </div>

          <ul className="flex justify-center gap-8 text-[#032437] uppercase text-sm">
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
            <li className="flex items-center gap-2">
              <ArrowUp className="w-4 h-4" />
              <a href="#top">Back to top</a>
            </li>
          </ul>
        </div>
      </div>
=======
    
     
>>>>>>> d17139aa86b154f6c2784353bed1549301db0d12
    </div>
  )
}

export default AboutPage
=======
"use client"

import { Link, useNavigate } from "react-router-dom"
import { User, Bath, Sofa, Armchair, Bed, Facebook, Twitter, Instagram, ArrowUp } from "lucide-react"

const AboutPage = () => {
  const navigate = useNavigate()

  return (
    <div className="font-sans text-black">
      {/* About Us Title */}
      <div className="w-[78%] mx-auto mt-16 text-center">
        <h1 className="text-6xl font-bold drop-shadow">About us</h1>
      </div>

      {/* Products Grid */}
      <div className="w-[78%] mx-auto grid grid-cols-4 gap-10 my-20">
        <div>
          <h1 className="text-[#186b63] text-xl font-bold drop-shadow">DINING CHAIR</h1>
          <hr className="w-[100px] border-[3px] border-[#186b63] my-2" />
          <p className="text-gray-700">
            It can make a room, it can bring style and substance to the interior design theme of your room and that is
            why it is worth
            <button
              className="ml-3 px-5 py-3 border border-black bg-white hover:bg-gray-300 text-sm"
              onClick={() => navigate("/dining-chairs")}
            >
              View All Dining Chairs
            </button>
          </p>
        </div>
        <img src="src/public/1.jpg" className="rounded-lg w-full" alt="Dining Chair" />

        <img src="src/public/8.jpg" className="rounded-lg w-full" alt="Architecture" />
        <div>
          <h1 className="text-[#186b63] text-xl font-bold drop-shadow">ARCHITECTURE</h1>
          <hr className="w-[100px] border-[3px] border-[#186b63] my-2" />
          <p className="text-gray-700">
            Furniture designed to match or to accord with the architectural features of the rooms for which it
            <button
              className="ml-3 px-5 py-3 border border-black bg-white hover:bg-gray-300 text-sm"
              onClick={() => navigate("/architecture")}
            >
              View All Architecture
            </button>
          </p>
        </div>

        <img src="src/public/9.jpg" className="rounded-lg w-full" alt="Office Chair" />
        <div>
          <h1 className="text-[#186b63] text-xl font-bold drop-shadow">OFFICE CHAIR</h1>
          <hr className="w-[100px] border-[3px] border-[#186b63] my-2" />
          <p className="text-gray-700">
            Best high tech CEO executive wooden office manager desk set modern organizer furniture supplies for home
            office
            <button
              className="ml-3 px-5 py-3 border border-black bg-white hover:bg-gray-300 text-sm"
              onClick={() => navigate("/office-chairs")}
            >
              View All Office Chair
            </button>
          </p>
        </div>

        <div>
          <h1 className="text-[#186b63] text-xl font-bold drop-shadow">Sofa Sets</h1>
          <hr className="w-[100px] border-[3px] border-[#186b63] my-2" />
          <p className="text-gray-700">
            Finnish-american architect and designer Eero Sarinen famously hated the sight of many table and chair legs
            in a room.
            <button
              className="ml-3 px-5 py-3 border border-black bg-white hover:bg-gray-300 text-sm"
              onClick={() => navigate("/sofa-sets")}
            >
              View All Sofa Sets
            </button>
          </p>
        </div>
        <img src="src/public/11.jpg" className="rounded-lg w-full" alt="Sofa" />
      </div>

      {/* Stats Section */}
      <div className="min-h-[500px] bg-fixed bg-center bg-no-repeat bg-cover bg-[url('src/image/pexels-pixabay-276528.jpg')] bg-black/60 bg-blend-overlay text-white">
        <h1 className="text-center text-5xl font-bold py-10">Our Stats</h1>
        <div className="grid grid-cols-4 text-center w-1/2 mx-auto gap-5">
          <Bath className="text-4xl mx-auto" />
          <Sofa className="text-4xl mx-auto" />
          <Armchair className="text-4xl mx-auto" />
          <Bed className="text-4xl mx-auto" />
          <p className="border-2 p-1 text-xl">3000</p>
          <p className="border-2 p-1 text-xl">3000</p>
          <p className="border-2 p-1 text-xl">3000</p>
          <p className="border-2 p-1 text-xl">3000</p>
        </div>
      </div>

      {/* History Section */}
      <h1 className="w-[78%] mx-auto text-[70px] mt-20 text-center text-black/70 font-bold">History of us</h1>
      <div className="w-[78%] mx-auto grid grid-cols-3 gap-10 my-10">
        <div>
          <h1 className="text-red-600 text-xl font-bold drop-shadow">FUTURE OF INTERIOR ARCHITECTURES</h1>
          <p className="text-lg text-gray-600 mt-4">
            People are appreciating their interior spaces more now and we will make better use of their space...
          </p>
        </div>

        <div className="flex justify-center items-center">
          <img
            src="src/public/OvalMirror.png"
            alt="DecorLift History"
            className="rounded-full w-[300px] h-[300px] object-cover border-4 border-teal-200 shadow-lg"
          />
        </div>

        <div>
          <p className="text-lg text-gray-600 mt-4">
            As our world becomes more automated, people want to enjoy being at home...
          </p>
        </div>
      </div>

    
     
    </div>
  )
}

export default AboutPage
>>>>>>> 870caabfc862db6c31f275a100a811a424e06bb2
