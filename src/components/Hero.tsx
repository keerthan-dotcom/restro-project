import React, { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const Hero: React.FC = () => {
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const newOpacity = Math.max(1 - scrolled / 600, 0)
      setOpacity(newOpacity)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          transform: `scale(${1 + window.scrollY * 0.0005})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      <div
        className="relative h-full flex flex-col items-center justify-center text-center px-6"
        style={{ opacity }}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 animate-fade-in-up">
          Where Elegance
          <br />
          <span className="text-amber-500">Meets Taste</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl animate-fade-in-up animation-delay-200">
          Experience the art of fine dining in an atmosphere of sophistication and warmth
        </p>
        <a
          href="#reservation"
          onClick={(e) => {
            e.preventDefault()
            const element = document.querySelector('#reservation')
            if (element) element.scrollIntoView({ behavior: 'smooth' })
          }}
          className="group relative px-10 py-4 bg-amber-500 text-black font-semibold tracking-wider overflow-hidden animate-fade-in-up animation-delay-400"
        >
          <span className="relative z-10">Reserve Your Table</span>
          <span className="absolute inset-0 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </a>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer hover:text-amber-500 transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  )
}

export default Hero
