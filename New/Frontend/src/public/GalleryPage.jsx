"use client"

import { useState } from "react"
import { createPortal } from "react-dom"
import { useNavigate } from "react-router-dom"
import { X } from "lucide-react"

const galleryItems = [
  { src: "src/public/1.jpg", title: "Nordic Moss" },
  { src: "src/public/2.jpg", title: "Study unit" },
  { src: "src/public/3.jpg", title: "Progetti" },
  { src: "src/public/4.jpg", title: "Decoration" },
  { src: "src/public/5.jpg", title: "Golden wall" },
  { src: "src/public/6.jpg", title: "Aurora" },
  { src: "src/public/7.jpg", title: "Sofa" },
  { src: "src/public/8.jpg", title: "Cunkie" },
  { src: "src/public/9.jpg", title: "Dining table" },
  { src: "src/public/10.jpg", title: "Portrait" },
  { src: "src/public/11.jpg", title: "Live space" },
  { src: "src/public/12.jpg", title: "Gwarnic" },
]

const ImageModal = ({ isOpen, onClose, imageSrc, imageTitle }) => {
  if (!isOpen) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose()
    }
  }

  return createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className="relative max-w-4xl max-h-full">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-8 h-8" />
        </button>
        <img
          src={imageSrc || "/placeholder.svg?height=600&width=800"}
          alt={imageTitle}
          className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 rounded-b-lg">
          <h3 className="text-xl font-semibold text-center">{imageTitle}</h3>
        </div>
      </div>
    </div>,
    document.body,
  )
}

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (imageSrc, imageTitle) => {
    setSelectedImage({ src: imageSrc, title: imageTitle })
    setIsModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
    document.body.style.overflow = "unset"
  }

  return (
    <div className="font-sans text-black bg-white min-h-screen">

      {/* Title */}
      <h1 className="text-[70px] text-center mt-10 text-black/70 font-bold">Gallery</h1>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-10 px-4">
        {galleryItems.map(({ src, title }, idx) => (
          <div
            key={idx}
            className="relative group rounded-lg overflow-hidden shadow-md cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={() => openModal(src, title)}
          >
            <img
              src={src || "/placeholder.svg?height=300&width=300"}
              alt={title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gray-700 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
              <p className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                {title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={selectedImage?.src}
        imageTitle={selectedImage?.title}
      />
    </div>
  )
}

export default GalleryPage
