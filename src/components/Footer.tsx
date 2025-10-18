import React from 'react'
import { Utensils } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Utensils className="w-8 h-8 text-amber-500" />
            <span className="text-2xl font-serif font-bold tracking-wider">
              Aurum <span className="text-amber-500">Bistro</span>
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Careers'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Aurum Bistro. All rights reserved.</p>
          <p className="mt-2">Crafted with passion and precision</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
