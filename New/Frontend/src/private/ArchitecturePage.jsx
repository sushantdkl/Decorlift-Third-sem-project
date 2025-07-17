"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { useNavigate } from "react-router-dom"

const ArchitecturePage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [showAll, setShowAll] = useState(false)
  const navigate = useNavigate()

  const architectureProjects = [
    {
      id: 1,
      title: "Modern Living Room",
      description: "Contemporary design with elegant furniture and lighting",
      price: "Rs. 2,50,000",
      image: "src/image/modern living room.jpg",
    },
    {
      id: 2,
      title: "Luxury Bedroom",
      description: "Premium bedroom design with modern amenities",
      price: "Rs. 1,80,000",
      image: "src/image/luxury bed room.jpg",
    },
    {
      id: 3,
      title: "Classic Kitchen",
      description: "Traditional kitchen with modern functionality",
      price: "Rs. 3,20,000",
      image: "src/image/classic kitchen.jpg",
    },
    {
      id: 4,
      title: "Minimalist Office",
      description: "Clean and productive workspace design",
      price: "Rs. 1,50,000",
      image: "src/image/minimalist office.jpg",
    },
    {
      id: 5,
      title: "Elegant Dining Room",
      description: "Sophisticated dining space for family gatherings",
      price: "Rs. 2,00,000",
      image: "src/image/elegant_dining_room.jpg",
    },
    {
      id: 6,
      title: "Contemporary Bathroom",
      description: "Modern bathroom with luxury fixtures",
      price: "Rs. 1,20,000",
      image: "src/image/contemporary_bathroom.jpg",
    },
    {
      id: 7,
      title: "Cozy Study Room",
      description: "Perfect reading and study environment",
      price: "Rs. 90,000",
      image: "src/image/cozy_study_room.jpg",
    },
    {
      id: 8,
      title: "Outdoor Terrace",
      description: "Beautiful outdoor living space design",
      price: "Rs. 1,75,000",
      image: "src/image/outdoor_terrace.jpg",
    },
    {
      id: 9,
      title: "Reception Area",
      description: "Professional and welcoming entrance design",
      price: "Rs. 2,80,000",
      image: "src/image/reception_area.jpg",
    },
    {
      id: 10,
      title: "Modern Conference Room",
      description: "Professional meeting space with cutting-edge design",
      price: "Rs. 2,20,000",
      image: "src/image/conference_chair.jpg",
    },
    {
      id: 11,
      title: "Luxury Lounge",
      description: "Elegant relaxation space for premium comfort",
      price: "Rs. 3,50,000",
      image: "src/image/luxury_lounge.jpg",
    },
    {
      id: 12,
      title: "Creative Workspace",
      description: "Inspiring environment for creative professionals",
      price: "Rs. 1,90,000",
      image: "src/image/creative_workspace.jpg",
    },
  ]

  // Filter projects based on search term (case insensitive)
  const filteredProjects = architectureProjects.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Show limited projects unless "View All" is clicked
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4)

  // Navigate to product detail page on Buy Now click
  const handleBuyNow = (id) => {
    navigate(`/product/${id}`)
  }

  return (
    <div className="text-gray-800 bg-gray-100 min-h-screen">
      {/* Header and Search */}
      <div className="max-w-7xl mx-auto my-10 px-4 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold">Architecture</h1>
        <div className="relative mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Search architecture..."
            className="pl-4 pr-10 py-2 border-2 border-gray-300 rounded-full w-64 focus:outline-none focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setShowAll(false) // Reset view when searching
            }}
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 pb-10">
        {displayedProjects.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">No projects found.</p>
        ) : (
          displayedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transform hover:-translate-y-1 transition cursor-pointer"
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-4">
                <h2 className="font-semibold text-lg text-gray-800 mb-1">{project.title}</h2>
                <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                <p className="text-blue-500 font-semibold mb-4">{project.price}</p>
                <button
                  onClick={() => handleBuyNow(project.id)}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* View All Button */}
      {filteredProjects.length > 4 && !showAll && (
        <div className="text-center mb-20">
          <button
            onClick={() => setShowAll(true)}
            className="inline-block border-2 border-gray-800 px-6 py-2 rounded hover:bg-gray-800 hover:text-white transition"
          >
            View All Projects
          </button>
        </div>
      )}

      <div className="py-10"></div>
    </div>
  )
}

export default ArchitecturePage
