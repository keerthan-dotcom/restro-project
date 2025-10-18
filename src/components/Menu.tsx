import React, { useState, useEffect, useRef } from 'react'

interface MenuItem {
  name: string
  description: string
  price: string
  category: string
}

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Starters')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
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

  const categories = ['Starters', 'Mains', 'Desserts', 'Drinks']

  const menuItems: MenuItem[] = [
    {
      name: 'Seared Foie Gras',
      description: 'Pan-seared foie gras with fig compote and toasted brioche',
      price: '42',
      category: 'Starters',
    },
    {
      name: 'Lobster Bisque',
      description: 'Rich lobster bisque with cognac and fresh herbs',
      price: '28',
      category: 'Starters',
    },
    {
      name: 'Oysters Rockefeller',
      description: 'Fresh oysters with spinach, herbs and parmesan crust',
      price: '36',
      category: 'Starters',
    },
    {
      name: 'Tuna Tartare',
      description: 'Yellowfin tuna with avocado, sesame and wasabi aioli',
      price: '32',
      category: 'Starters',
    },
    {
      name: 'Wagyu Beef Wellington',
      description: 'A5 Wagyu wrapped in puff pastry with mushroom duxelles',
      price: '125',
      category: 'Mains',
    },
    {
      name: 'Pan-Seared Sea Bass',
      description: 'Mediterranean sea bass with saffron risotto and beurre blanc',
      price: '68',
      category: 'Mains',
    },
    {
      name: 'Duck Confit',
      description: 'Slow-cooked duck leg with orange gastrique and roasted vegetables',
      price: '54',
      category: 'Mains',
    },
    {
      name: 'Rack of Lamb',
      description: 'Herb-crusted lamb with rosemary jus and truffle pomme purée',
      price: '82',
      category: 'Mains',
    },
    {
      name: 'Chocolate Soufflé',
      description: 'Dark chocolate soufflé with vanilla bean ice cream',
      price: '22',
      category: 'Desserts',
    },
    {
      name: 'Crème Brûlée',
      description: 'Classic vanilla custard with caramelized sugar crust',
      price: '18',
      category: 'Desserts',
    },
    {
      name: 'Tarte Tatin',
      description: 'Caramelized apple tart with crème fraîche',
      price: '20',
      category: 'Desserts',
    },
    {
      name: 'Tiramisu',
      description: 'Classic Italian dessert with espresso and mascarpone',
      price: '19',
      category: 'Desserts',
    },
    {
      name: 'Dom Pérignon 2012',
      description: 'Vintage champagne, perfectly aged',
      price: '450',
      category: 'Drinks',
    },
    {
      name: 'Château Margaux 2015',
      description: 'Premier Grand Cru Classé, Bordeaux',
      price: '850',
      category: 'Drinks',
    },
    {
      name: 'Whiskey Selection',
      description: 'Curated selection of rare single malts',
      price: '35',
      category: 'Drinks',
    },
    {
      name: 'Signature Cocktails',
      description: 'Handcrafted by our master mixologist',
      price: '18',
      category: 'Drinks',
    },
  ]

  const filteredItems = menuItems.filter((item) => item.category === activeCategory)

  return (
    <section id="menu" ref={sectionRef} className="py-24 bg-black">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Our <span className="text-amber-500">Menu</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Each dish is a masterpiece, crafted with passion and precision
          </p>
        </div>

        <div className={`flex justify-center border-b border-zinc-800 mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-4 font-semibold tracking-wider text-sm uppercase transition-all duration-300 relative ${
                activeCategory === category
                  ? 'text-amber-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {category}
              {activeCategory === category && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"></span>
              )}
            </button>
          ))}
        </div>

        <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group pb-8 border-b border-zinc-900 last:border-0 hover:border-zinc-800 transition-colors"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-serif font-semibold group-hover:text-amber-500 transition-colors">
                  {item.name}
                </h3>
                <div className="flex items-center">
                  <span className="text-amber-500 text-xl font-semibold">${item.price}</span>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-3xl">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Prices are in USD. Please inform your server of any dietary restrictions.
          </p>
          <a
            href="#reservation"
            onClick={(e) => {
              e.preventDefault()
              const element = document.querySelector('#reservation')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-block px-8 py-3 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black transition-all duration-300 font-semibold"
          >
            Make a Reservation
          </a>
        </div>
      </div>
    </section>
  )
}

export default Menu
