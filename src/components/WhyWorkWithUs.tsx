import { Shield, BadgeDollarSign, Headphones, Star, Clock, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Your safety is our top priority with verified partners',
    color: 'bg-orange-500'
  },
  {
    icon: BadgeDollarSign,
    title: 'Best Price Guarantee',
    description: 'We offer the most competitive prices in the market',
    color: 'bg-orange-500'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer support for all your needs',
    color: 'bg-orange-500'
  },
  {
    icon: Star,
    title: 'Expert Guides',
    description: 'Experienced local guides for authentic experiences',
    color: 'bg-orange-500'
  },
  {
    icon: Clock,
    title: 'Quick Booking',
    description: 'Fast and hassle-free booking process',
    color: 'bg-orange-500'
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: '2000+ partners across India and worldwide',
    color: 'bg-orange-500'
  }
];

export default function WhyWorkWithUs() {
  return (
    <section id="about" className="py-20 bg-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4549414/pexels-photo-4549414.jpeg')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why work with us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className={`${feature.color} p-4 rounded-xl flex-shrink-0`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
