import React, { useEffect, useRef, useState } from 'react'
import { Award, Users, ChefHat } from 'lucide-react'

const About: React.FC = () => {
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

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Michelin Worthy',
      description: 'Excellence in every dish',
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: 'Master Chefs',
      description: 'Culinary artists at work',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Premium Service',
      description: 'Personalized attention',
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              Our <span className="text-amber-500">Story</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Founded in 2015, Aurum Bistro has redefined fine dining by blending contemporary culinary
              techniques with timeless elegance. Our passion for perfection is reflected in every dish,
              crafted with the finest ingredients and presented as edible art.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Led by acclaimed Chef Alexandre Dubois, our kitchen transforms seasonal ingredients into
              extraordinary experiences. Each plate tells a story of innovation, tradition, and the
              relentless pursuit of culinary excellence.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-amber-500 mb-3 flex justify-center group-hover:rotate-12 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Chef at work"
                className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              <img
                src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Restaurant interior"
                className="rounded-lg shadow-2xl mt-8 hover:scale-105 transition-transform duration-500"
              />
              <img
                src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Plated dish"
                className="rounded-lg shadow-2xl -mt-8 hover:scale-105 transition-transform duration-500"
              />
              <img
                src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Fine dining"
                className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
