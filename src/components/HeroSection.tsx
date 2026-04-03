import { Bus, Brain as Train, Umbrella, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: Bus,
    title: 'Bus Booking',
    description: 'Comfortable inter-city bus travel',
    badge: 'On Time',
    bgColor: 'bg-blue-500/80'
  },
  {
    icon: Train,
    title: 'Train Booking',
    description: 'IRCTC linked train reservations',
    badge: 'IRCTC',
    bgColor: 'bg-blue-600/80'
  },
  {
    icon: Umbrella,
    title: 'Holiday Packages',
    description: 'Curated holiday packages for every budget',
    badge: 'Popular',
    bgColor: 'bg-blue-500/80'
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-pink-200 to-blue-300">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg')] bg-cover bg-center opacity-40"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent"></div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gray-800">Explore </span>
          <span className="text-cyan-400">the World </span>
          <span className="text-gray-800">with</span>
          <br />
          <span className="text-cyan-400">Ajanabee Adventures</span>
        </h1>
        <p className="text-xl md:text-2xl text-white mb-16 font-light">
          Your trusted travel partner for unforgettable journeys
        </p>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`${service.bgColor} backdrop-blur-sm rounded-2xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-white/20 p-4 rounded-full">
                      <service.icon className="w-10 h-10" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm mb-4 text-white/90">{service.description}</p>
                  <button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold px-6 py-2 rounded-full transition-colors">
                    {service.badge}
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide ? 'w-8 bg-cyan-400' : 'w-2 bg-white/40'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-3 rounded-full transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-3 rounded-full transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
