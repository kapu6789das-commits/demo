import { MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface Destination {
  id: string;
  name: string;
  country: string;
  image_url: string;
  price_from: number;
}

export default function PopularDestinations() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDestinations();
  }, []);

  async function fetchDestinations() {
    try {
      const { data, error } = await supabase
        .from('destinations')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(6);

      if (error) throw error;
      setDestinations(data || []);
    } catch (error) {
      console.error('Error fetching destinations:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <section id="destinations" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">Loading destinations...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-600 mb-4">
            Popular Destinations
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">
            Discover the world's most sought-after travel destinations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={destination.image_url}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute top-4 right-4">
                <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  From {destination.price_from.toLocaleString()}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{destination.country}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
}
