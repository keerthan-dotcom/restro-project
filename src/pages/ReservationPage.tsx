import React from 'react'
import Reservation from '../components/Reservation'
import Footer from '../components/Footer'

const ReservationPage: React.FC = () => {
  return (
    <div className="bg-black text-white pt-20">
      <Reservation />
      <Footer />
    </div>
  )
}

export default ReservationPage
