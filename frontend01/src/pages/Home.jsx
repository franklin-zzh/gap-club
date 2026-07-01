import { useState, useEffect, useRef } from 'react';
import { products as productsApi } from '@/api/entityApi';
import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import ProductGallery from '@/components/landing/ProductGallery';
import TechSection from '@/components/landing/TechSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

const SCROLL_KEY = 'fmt_home_scroll';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const restored = useRef(false);

  useEffect(() => {
    loadData();
  }, []);

  // Restore scroll position when returning from secondary pages
  useEffect(() => {
    if (!restored.current) {
      const saved = sessionStorage.getItem(SCROLL_KEY);
      if (saved) {
        const y = parseInt(saved, 10);
        if (y > 0) {
          // Wait for content to render before scrolling
          requestAnimationFrame(() => {
            window.scrollTo({ top: y, behavior: 'instant' });
          });
        }
        sessionStorage.removeItem(SCROLL_KEY);
      }
      restored.current = true;
    }
  }, []);

  // Save scroll position before navigating away
  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem(SCROLL_KEY, window.scrollY);
    };
    // Use a passive scroll listener to save position continuously
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      // Save final position on unmount (when navigating away)
      sessionStorage.setItem(SCROLL_KEY, window.scrollY);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const loadData = async () => {
    try {
      const prods = await productsApi.list().catch(() => []);
      setProducts(prods);
    } catch (e) {
      console.error('Load error:', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ background: '#FDFBF7' }}>
      <Navbar />
      <Hero />
      <ProductGallery products={products} loading={loading} />
      <TechSection />
      <CTASection />
      <Footer />
    </div>
  );
}
