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
            It can make a room, it can bring style and substance to the interior design theme of your room and that is why it is worth it.
            <button
              className="ml-3 px-5 py-3 border border-black bg-white hover:bg-gray-300 text-sm"
              onClick={() => navigate("/dining-chairs")}
            >
              Browse Dining Chairs
            </button>
          </p>
        </div>
        <img src="src/image/1.jpg" className="rounded-lg w-full" alt="Dining Chair" />

        <img src="src/image/8.jpg" className="rounded-lg w-full" alt="Architecture" />
        <div>
          <h1 className="text-[#186b63] text-xl font-bold drop-shadow">ARCHITECTURE</h1>
          <hr className="w-[100px] border-[3px] border-[#186b63] my-2" />
          <p className="text-gray-700">
            Furniture designed to match or to accord with the architectural features of the room for which we got you covered.
            <button
              className="ml-3 px-5 py-3 border border-black bg-white hover:bg-gray-300 text-sm"
              onClick={() => navigate("/architecture")}
            >
              Browse Architecture
            </button>
          </p>
        </div>

        <img src="src/image/9.jpg" className="rounded-lg w-full" alt="Office Chair" />
        <div>
          <h1 className="text-[#186b63] text-xl font-bold drop-shadow">OFFICE CHAIR</h1>
          <hr className="w-[100px] border-[3px] border-[#186b63] my-2" />
          <p className="text-gray-700">
           Best high tech CEO executive wooden office manager desk set , modern organizer furniture supplies for home office.
            <button
              className="ml-3 px-5 py-3 border border-black bg-white hover:bg-gray-300 text-sm"
              onClick={() => navigate("/office-chairs")}
            >
              Browse Office Chair
            </button>
          </p>
        </div>

        <div>
          <h1 className="text-[#186b63] text-xl font-bold drop-shadow">Sofa Sets</h1>
          <hr className="w-[100px] border-[3px] border-[#186b63] my-2" />
          <p className="text-gray-700">
           Finnish-american architect and designer Eero Sarinem famously hated the sight of many table and chair legs in a room .
            <button
              className="ml-3 px-5 py-3 border border-black bg-white hover:bg-gray-300 text-sm"
              onClick={() => navigate("/sofa-sets")}
            >
             Browse Sofa Sets
            </button>
          </p>
        </div>
        <img src="src/image/11.jpg" className="rounded-lg w-full" alt="Sofa" />
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
           People are appreciating their interior spaces more now and we will make better use of their space. We are more aware of the importance of their own homes. I see a lot of bright, lipstick pops emerging from Europe which is exciting in the sea of neutral palettes. In any design, its important to add the unexpected surprises to the products. 
          </p>
        </div>

        <div className="flex justify-center items-center">
          <img
            src="src/image/OvalMirror.png"
            alt="DecorLift History"
            className="rounded-full w-[300px] h-[300px] object-cover border-4 border-teal-200 shadow-lg"
          />
        </div>

        <div>
          <p className="text-lg text-gray-600 mt-4">
           As our world becomes more automated, people want to enjoy being at home and are looking for ways to enhance the aesthetics of the insides of their home. We are seeing interior design becoming a more personalized process individual to each client.
          </p>
        </div>
      </div>
      <div className="py-10"></div>

    
     
    </div>
  )
}

export default AboutPage
