import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import GalleryPage from './pages/GalleryPage'
import ExperiencePage from './pages/ExperiencePage'
import ReservationPage from './pages/ReservationPage'
import ContactPage from './pages/ContactPage'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Router>
      <div className="bg-black text-white">
        <Navbar scrolled={scrolled} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
