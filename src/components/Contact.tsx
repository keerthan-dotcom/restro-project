import React, { useEffect, useRef, useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      details: '123 Gourmet Avenue, Downtown District, NY 10001',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: 'reservations@aurumbistro.com',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Hours',
      details: 'Tue-Sun: 5:30 PM - 11:00 PM | Closed Mondays',
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Visit <span className="text-amber-500">Us</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We're located in the heart of the city, ready to welcome you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors duration-300"
              >
                <div className="text-amber-500 mt-1">{info.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                  <p className="text-gray-400">{info.details}</p>
                </div>
              </div>
            ))}

            <div className="mt-12">
              <h3 className="text-2xl font-serif font-bold mb-6">Connect With Us</h3>
              <div className="flex space-x-4">
                {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all duration-300 transform hover:scale-110"
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="bg-zinc-900 rounded-lg overflow-hidden h-96 lg:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6173427959107!2d-73.98823492346368!3d40.74844097138682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1698234567890!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
