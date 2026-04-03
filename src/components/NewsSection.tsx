import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface NewsItem {
  id: string;
  title: string;
  description: string;
  created_at: string;
}

export default function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    try {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);

      if (error) throw error;
      setNews(data || []);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, news.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, news.length - 2)) % Math.max(1, news.length - 2));
  };

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">Loading news...</div>
        </div>
      </section>
    );
  }

  const visibleNews = news.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-600 mb-4">
            News and Announcement
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6">
            {visibleNews.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                  more+
                </button>
              </div>
            ))}
          </div>

          {news.length > 3 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-100 border-2 border-cyan-500 p-3 rounded-full transition-all shadow-lg"
                aria-label="Previous news"
              >
                <ChevronLeft className="w-6 h-6 text-cyan-500" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-100 border-2 border-cyan-500 p-3 rounded-full transition-all shadow-lg"
                aria-label="Next news"
              >
                <ChevronRight className="w-6 h-6 text-cyan-500" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
