"use client"

import { useState } from "react"
import { Search } from "lucide-react"

const ArchitecturePage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [showAll, setShowAll] = useState(false)

  const architectureProjects = [
    {
      id: 1,
      title: "Modern Living Room",
      description: "Contemporary design with elegant furniture and lighting",
      price: "Rs. 2,50,000",
      image: "src/public/10.jpg",
    },
    {
      id: 2,
      title: "Luxury Bedroom",
      description: "Premium bedroom design with modern amenities",
      price: "Rs. 1,80,000",
      image: "src/public/10.jpg",
    },
    {
      id: 3,
      title: "Classic Kitchen",
      description: "Traditional kitchen with modern functionality",
      price: "Rs. 3,20,000",
      image: "src/public/10.jpg",
    },
    {
      id: 4,
      title: "Minimalist Office",
      description: "Clean and productive workspace design",
      price: "Rs. 1,50,000",
      image: "src/public/10.jpg",
    },
    {
      id: 5,
      title: "Elegant Dining Room",
      description: "Sophisticated dining space for family gatherings",
      price: "Rs. 2,00,000",
      image: "src/public/10.jpg",
    },
    {
      id: 6,
      title: "Contemporary Bathroom",
      description: "Modern bathroom with luxury fixtures",
      price: "Rs. 1,20,000",
      image: "src/public/10.jpg",
    },
    {
      id: 7,
      title: "Cozy Study Room",
      description: "Perfect reading and study environment",
      price: "Rs. 90,000",
      image: "src/public/10.jpg",
    },
    {
      id: 8,
      title: "Outdoor Terrace",
      description: "Beautiful outdoor living space design",
      price: "Rs. 1,75,000",
      image: "src/public/10.jpg",
    },
    {
      id: 9,
      title: "Reception Area",
      description: "Professional and welcoming entrance design",
      price: "Rs. 2,80,000",
      image: "src/public/10.jpg",
    },
    {
      id: 10,
      title: "Modern Conference Room",
      description: "Professional meeting space with cutting-edge design",
      price: "Rs. 2,20,000",
      image: "src/public/10.jpg",
    },
    {
      id: 11,
      title: "Luxury Lounge",
      description: "Elegant relaxation space for premium comfort",
      price: "Rs. 3,50,000",
      image: "src/public/10.jpg",
    },
    {
      id: 12,
      title: "Creative Workspace",
      description: "Inspiring environment for creative professionals",
      price: "Rs. 1,90,000",
      image: "src/public/10.jpg",
    },
  ]

  const filteredProjects = architectureProjects.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4)

  return (
    <div className="text-gray-800 bg-gray-100">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto my-10 px-4 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold">Architecture</h1>
        <div className="relative mt-4 md:mt-0">
          <input
            type="text"
            className="pl-4 pr-10 py-2 border-2 border-gray-300 rounded-full w-64 focus:outline-none focus:border-blue-500"
            placeholder="Search architecture..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setShowAll(false) // Reset to limited view on new search
            }}
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        </div>
      </div>

      {/* Project Gallery */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 pb-10">
        {displayedProjects.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">No projects found.</p>
        ) : (
          displayedProjects.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transform hover:-translate-y-1 transition cursor-pointer"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-4">
                <div className="font-semibold text-lg text-gray-800 mb-1">{item.title}</div>
                <div className="text-sm text-gray-600 mb-2">{item.description}</div>
                <div className="text-blue-500 font-semibold">{item.price}</div>
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
<<<<<<< HEAD
=======
      <div className="py-10"></div>
>>>>>>> 6753375c8f9ed152eb0af56aff50f012cf48d746
    </div>
  )
}

export default ArchitecturePage
