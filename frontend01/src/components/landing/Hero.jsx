import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HERO_IMG = 'https://media.base44.com/images/public/6a3ceb81f16bfca94f3c8790/c77404615_generated_image.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#FDFBF7' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, #B2B8A3, transparent 70%)', filter: 'blur(60px)' }}
        />
        <div
          className="absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, #D4A373, transparent 70%)', filter: 'blur(80px)' }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-25"
          style={{ background: 'radial-gradient(circle, #E8D5B7, transparent 70%)', filter: 'blur(50px)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="text-xs tracking-[0.2em] uppercase font-light" style={{ color: '#6B705C' }}>
              FMT Micro-Ecology · Personalized Nutrition
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mt-6 mb-8" style={{ color: '#2C2C2C' }}>
              精准营养
              <br />
              <span style={{ color: '#6B705C' }}>科学驱动</span>
            </h1>
            <p className="text-lg leading-relaxed mb-10 max-w-md" style={{ color: '#5C5C5C' }}>
              FMT微生态 · GAP营养小屋 — 以自研知识库与AI个性化匹配模型，为每一位会员定制专属营养方案。
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all hover:bg-opacity-5"
                style={{ border: '1.5px solid #6B705C', color: '#2C2C2C' }}
              >
                立即了解
              </a>
              <Link
                to="/register"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-white transition-all hover:opacity-90"
                style={{ background: '#6B705C' }}
              >
                成为会员 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="relative flex justify-center items-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <img
                src={HERO_IMG}
                alt="FMT微生态系统"
                className="w-full max-w-md rounded-[40px] shadow-2xl"
                style={{ boxShadow: '0 20px 60px rgba(108, 112, 92, 0.15)' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs tracking-[0.2em] uppercase" style={{ color: '#6B705C' }}>Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" style={{ color: '#6B705C' }} />
      </div>
    </section>
  );
}