import { ChevronLeft, ChevronRight, Quote, Star, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface Testimonial {
  id: string;
  author_name: string;
  author_role: string;
  content: string;
  rating: number;
}

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  async function fetchTestimonials() {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, testimonials.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, testimonials.length - 2)) % Math.max(1, testimonials.length - 2));
  };

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">Loading testimonials...</div>
        </div>
      </section>
    );
  }

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-600 mb-4">
            What Our Travelers Say
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">
            Real reviews from our happy customers
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Quote className="w-12 h-12 text-cyan-400 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 line-clamp-4">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.author_name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.author_name}</h4>
                    <div className="flex items-center gap-1 text-sm text-cyan-600">
                      <MapPin className="w-3 h-3" />
                      <span>{testimonial.author_role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {testimonials.length > 3 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-100 border-2 border-cyan-500 p-3 rounded-full transition-all shadow-lg"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-cyan-500" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-100 border-2 border-cyan-500 p-3 rounded-full transition-all shadow-lg"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-cyan-500" />
              </button>
            </>
          )}

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-cyan-500' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
