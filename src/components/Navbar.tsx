import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Utensils } from 'lucide-react'

interface NavbarProps {
  scrolled: boolean
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Experience', path: '/experience' },
    { name: 'Reserve', path: '/reservation' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 group"
        >
          <Utensils className="w-8 h-8 text-amber-500 group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-2xl font-serif font-bold tracking-wider">
            Aurum <span className="text-amber-500">Bistro</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-sm tracking-wide hover:text-amber-500 transition-colors duration-300 group ${
                location.pathname === link.path ? 'text-amber-500' : ''
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-amber-500 transition-all duration-300 ${
                location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white hover:text-amber-500 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black/98 backdrop-blur-md mt-4 py-6 px-6 space-y-4 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-lg hover:text-amber-500 transition-colors duration-300 ${
                location.pathname === link.path ? 'text-amber-500' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
