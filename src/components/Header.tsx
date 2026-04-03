import { Menu, X, Plane } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center">
                <Plane className="w-6 h-6 text-white transform -rotate-45" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">flytrip</h1>
              <p className="text-xs text-gray-600">explore the world</p>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-800 hover:bg-white/20 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden md:block">
            <ul className="flex gap-8 items-center">
              <li><a href="#home" className="text-gray-800 hover:text-cyan-600 transition-colors font-medium">Home</a></li>
              <li><a href="#destinations" className="text-gray-800 hover:text-cyan-600 transition-colors font-medium">Destinations</a></li>
              <li><a href="#deals" className="text-gray-800 hover:text-cyan-600 transition-colors font-medium">Deals</a></li>
              <li><a href="#about" className="text-gray-800 hover:text-cyan-600 transition-colors font-medium">About</a></li>
              <li><a href="#contact" className="text-gray-800 hover:text-cyan-600 transition-colors font-medium">Contact</a></li>
            </ul>
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col gap-4">
              <li><a href="#home" className="text-gray-800 hover:text-cyan-600 transition-colors font-medium block">Home</a></li>
              <li><a href="#destinations" className="text-gray-800 hover:text-cyan-600 transition-colors font-medium block">Destinations</a></li>
              <li><a href="#deals" className="text-gray-800 hover:text-cyan-600 transition-colors font-medium block">Deals</a></li>
              <li><a href="#about" className="text-gray-800 hover:text-cyan-600 transition-colors font-medium block">About</a></li>
              <li><a href="#contact" className="text-gray-800 hover:text-cyan-600 transition-colors font-medium block">Contact</a></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
