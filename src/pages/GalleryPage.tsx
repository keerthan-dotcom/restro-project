import React from 'react'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

const GalleryPage: React.FC = () => {
  return (
    <div className="bg-black text-white pt-20">
      <Gallery />
      <Footer />
    </div>
  )
}

export default GalleryPage
