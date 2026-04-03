import { Facebook, Twitter, Instagram, Linkedin, Send, ArrowUp } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Ajanabee Travel</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Your trusted partner for unforgettable travel experiences. We make your dream vacation a reality.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-gray-800 hover:bg-cyan-600 p-3 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-cyan-600 p-3 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-cyan-600 p-3 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-cyan-600 p-3 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  FAQ's
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#faq" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  FAQ's
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#help" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Help
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to get special offers and updates</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 p-2 rounded-lg transition-colors"
                aria-label="Subscribe"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Ajanabee Travel. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-cyan-500 hover:bg-cyan-600 p-3 rounded-full transition-all transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
