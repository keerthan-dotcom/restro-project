import React from 'react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const MenuPage: React.FC = () => {
  return (
    <div className="bg-black text-white pt-20">
      <Menu />
      <Footer />
    </div>
  )
}

export default MenuPage
