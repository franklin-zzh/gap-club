import { useState, useEffect } from 'react';
import { products as productsApi, articles as articlesApi } from '@/api/entityApi';
import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import ProductGallery from '@/components/landing/ProductGallery';
import TechSection from '@/components/landing/TechSection';
import KnowledgeBase from '@/components/landing/KnowledgeBase';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [prods, arts] = await Promise.all([
        productsApi.list().catch(() => []),
        articlesApi.list().catch(() => []),
      ]);
      setProducts(prods);
      setArticles(arts);
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
      <KnowledgeBase articles={articles} loading={loading} />
      <CTASection />
      <Footer />
    </div>
  );
}
