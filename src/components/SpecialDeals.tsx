import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface Deal {
  id: string;
  title: string;
  description: string;
  duration_days: number;
  duration_nights: number;
  original_price: number;
  discounted_price: number;
  discount_percentage: number;
  image_url: string;
}

export default function SpecialDeals() {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDeals();
  }, []);

  async function fetchDeals() {
    try {
      const { data, error } = await supabase
        .from('deals')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(4);

      if (error) throw error;
      setDeals(data || []);
    } catch (error) {
      console.error('Error fetching deals:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <section id="deals" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">Loading deals...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="deals" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-600 mb-4">
            Special Travel Deals
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">
            Grab the best offers before they're gone
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={deal.image_url}
                  alt={deal.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-bold">
                    {deal.discount_percentage}% OFF
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{deal.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {deal.duration_days} day{deal.duration_days > 1 ? 's' : ''} / {deal.duration_nights} Night{deal.duration_nights > 1 ? 's' : ''}
                </p>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-3xl font-bold text-cyan-600">
                    {deal.discounted_price.toLocaleString()}
                  </span>
                  <span className="text-lg text-gray-400 line-through mb-1">
                    {deal.original_price.toLocaleString()}
                  </span>
                </div>
                <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3 rounded-full transition-all">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
