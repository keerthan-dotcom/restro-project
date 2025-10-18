import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Footer from '../components/Footer'

const HomePage: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <Hero />
      <About />
      <Footer />
    </div>
  )
}

export default HomePage
