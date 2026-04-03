import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PopularDestinations from './components/PopularDestinations';
import SpecialDeals from './components/SpecialDeals';
import WhyWorkWithUs from './components/WhyWorkWithUs';
import NewsSection from './components/NewsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <PopularDestinations />
        <SpecialDeals />
        <WhyWorkWithUs />
        <NewsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
