<<<<<<< HEAD
"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";

// Import images (adjust paths as per your project structure)
import img1 from "../assets/images/10.jpg";
import img2 from "../assets/images/10.jpg";
import img3 from "../assets/images/10.jpg";
import img4 from "../assets/images/10.jpg";
import img5 from "../assets/images/10.jpg";
import img6 from "../assets/images/10.jpg";
import img7 from "../assets/images/10.jpg";
import img8 from "../assets/images/10.jpg";
import img9 from "../assets/images/10.jpg";
import img10 from "../assets/images/10.jpg";
import img11 from "../assets/images/10.jpg";
import img12 from "../assets/images/10.jpg";

// Debounce hook (optional for search optimization)
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

const ArchitecturePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);

  // Use debounced searchTerm to avoid filtering on every key press
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const architectureProjects = [
    {
      id: 1,
      title: "Modern Living Room",
      description: "Contemporary design with elegant furniture and lighting",
      price: "Rs. 2,50,000",
      image: img1,
    },
    {
      id: 2,
      title: "Luxury Bedroom",
      description: "Premium bedroom design with modern amenities",
      price: "Rs. 1,80,000",
      image: img2,
    },
    {
      id: 3,
      title: "Classic Kitchen",
      description: "Traditional kitchen with modern functionality",
      price: "Rs. 3,20,000",
      image: img3,
    },
    {
      id: 4,
      title: "Minimalist Office",
      description: "Clean and productive workspace design",
      price: "Rs. 1,50,000",
      image: img4,
    },
    {
      id: 5,
      title: "Elegant Dining Room",
      description: "Sophisticated dining space for family gatherings",
      price: "Rs. 2,00,000",
      image: img5,
    },
    {
      id: 6,
      title: "Contemporary Bathroom",
      description: "Modern bathroom with luxury fixtures",
      price: "Rs. 1,20,000",
      image: img6,
    },
    {
      id: 7,
      title: "Cozy Study Room",
      description: "Perfect reading and study environment",
      price: "Rs. 90,000",
      image: img7,
    },
    {
      id: 8,
      title: "Outdoor Terrace",
      description: "Beautiful outdoor living space design",
      price: "Rs. 1,75,000",
      image: img8,
    },
    {
      id: 9,
      title: "Reception Area",
      description: "Professional and welcoming entrance design",
      price: "Rs. 2,80,000",
      image: img9,
    },
    {
      id: 10,
      title: "Modern Conference Room",
      description: "Professional meeting space with cutting-edge design",
      price: "Rs. 2,20,000",
      image: img10,
    },
    {
      id: 11,
      title: "Luxury Lounge",
      description: "Elegant relaxation space for premium comfort",
      price: "Rs. 3,50,000",
      image: img11,
    },
    {
      id: 12,
      title: "Creative Workspace",
      description: "Inspiring environment for creative professionals",
      price: "Rs. 1,90,000",
      image: img12,
    },
  ];

  // Filter projects by title using debounced search term
  const filteredProjects = architectureProjects.filter((item) =>
    item.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  // Show all or just first 4 projects
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <div className="text-gray-800 bg-gray-100 min-h-screen">
      {/* Header with search bar */}
      <div className="max-w-7xl mx-auto my-10 px-4 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold">Architecture</h1>
        <div className="relative mt-4 md:mt-0">
          <input
            type="text"
            className="pl-4 pr-10 py-2 border-2 border-gray-300 rounded-full w-64 focus:outline-none focus:border-blue-500"
            placeholder="Search architecture..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowAll(false); // reset on new search
            }}
            aria-label="Search architecture projects"
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        </div>
      </div>

      {/* Projects Grid */}
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
            aria-label="View all architecture projects"
          >
            View All Projects
          </button>
        </div>
      )}

      <div className="py-10"></div>
    </div>
  );
};

=======
import ProductPage from "../components/ProductPage";

const ArchitecturePage = () => {
  return <ProductPage category="architecture" pageTitle="Architecture" />;
};

>>>>>>> 49cd4cef27059ea0a48263253e45aefb36d634d8
export default ArchitecturePage;
