import React, { useState, useEffect, useRef } from 'react'
import { Calendar, Clock, Users, Mail, User, Phone } from 'lucide-react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

const Reservation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const sectionRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const { error } = await supabase.from('reservations').insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          date: formData.date,
          time: formData.time,
          guests: parseInt(formData.guests),
        },
      ])

      if (error) throw error

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
      })
    } catch (error) {
      setSubmitStatus('error')
      console.error('Error submitting reservation:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="reservation" ref={sectionRef} className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Reserve Your <span className="text-amber-500">Table</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Secure your spot for an extraordinary dining experience
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className={`bg-black/80 backdrop-blur-md p-8 md:p-12 rounded-lg shadow-2xl border border-zinc-800 ${
              isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'
            }`}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div className="relative">
                <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5" />
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg py-4 pl-12 pr-4 text-white focus:outline-none focus:border-amber-500 transition-colors appearance-none"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5" />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg py-4 pl-12 pr-4 text-white focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div className="relative">
                <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5" />
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg py-4 pl-12 pr-4 text-white focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Confirm Reservation'}
            </button>

            {submitStatus === 'success' && (
              <div className="mt-6 p-4 bg-green-900/50 border border-green-500 rounded-lg text-green-300 text-center animate-fade-in">
                Reservation confirmed! We'll contact you shortly.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-6 p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-300 text-center animate-fade-in">
                Something went wrong. Please try again or call us directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Reservation
