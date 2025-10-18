import React, { useEffect, useRef, useState } from 'react'
import { Music, Sparkles, Wine } from 'lucide-react'

const Experience: React.FC = () => {
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

  const experiences = [
    {
      icon: <Music className="w-10 h-10" />,
      title: 'Live Music',
      description: 'Enjoy live jazz performances every Friday and Saturday evening',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: 'Private Events',
      description: 'Host unforgettable celebrations in our exclusive private dining room',
      image: 'https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: <Wine className="w-10 h-10" />,
      title: 'Wine Pairing',
      description: 'Curated wine selections from our extensive cellar of rare vintages',
      image: 'https://images.pexels.com/photos/1827518/pexels-photo-1827518.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ]

  return (
    <section id="experience" ref={sectionRef} className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            The <span className="text-amber-500">Experience</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            More than just a meal, it's a journey of the senses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg h-96 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-amber-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {exp.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-amber-500 transition-colors">
                  {exp.title}
                </h3>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-20 bg-zinc-900 rounded-lg p-12 text-center ${isVisible ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'}`}>
          <h3 className="text-3xl font-serif font-bold mb-6">
            What Our <span className="text-amber-500">Guests</span> Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                text: 'An unforgettable culinary experience. Every dish was a work of art.',
                author: 'Sarah Mitchell',
              },
              {
                text: 'The ambiance, service, and food exceeded all expectations. Simply perfect.',
                author: 'James Anderson',
              },
              {
                text: 'The best dining experience in the city. We will definitely return.',
                author: 'Emma Williams',
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-black/50 p-6 rounded-lg">
                <p className="text-gray-300 italic mb-4">"{testimonial.text}"</p>
                <p className="text-amber-500 font-semibold">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
