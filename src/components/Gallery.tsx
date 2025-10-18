import React, { useState, useEffect, useRef } from 'react'
import { X } from 'lucide-react'

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const images = [
    'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1284438/pexels-photo-1284438.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1247755/pexels-photo-1247755.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
  ]

  return (
    <section id="gallery" ref={sectionRef} className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Visual <span className="text-amber-500">Journey</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A glimpse into the world of Aurum Bistro
          </p>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden aspect-square"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-semibold tracking-wider uppercase">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 text-white hover:text-amber-500 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

export default Gallery
