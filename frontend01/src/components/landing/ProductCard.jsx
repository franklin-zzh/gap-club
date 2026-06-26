import { motion } from 'framer-motion';
import { Sprout, Heart, Zap, Baby, Shield, Brain, Dumbbell, Leaf, Moon, Activity } from 'lucide-react';

const CATEGORY_CONFIG = {
  growth: { icon: Sprout, gradient: 'linear-gradient(135deg, #B2B8A3, #C7C8B6)' },
  vitality: { icon: Zap, gradient: 'linear-gradient(135deg, #D4A373, #E8D5B7)' },
  balance: { icon: Heart, gradient: 'linear-gradient(135deg, #B2B8A3, #E8D5B7)' },
  energy: { icon: Activity, gradient: 'linear-gradient(135deg, #6B705C, #B2B8A3)' },
  maternal: { icon: Baby, gradient: 'linear-gradient(135deg, #D4A373, #B2B8A3)' },
  senior: { icon: Shield, gradient: 'linear-gradient(135deg, #6B705C, #D4A373)' },
  recovery: { icon: Dumbbell, gradient: 'linear-gradient(135deg, #B2B8A3, #6B705C)' },
  gut: { icon: Leaf, gradient: 'linear-gradient(135deg, #C7C8B6, #B2B8A3)' },
  immune: { icon: Brain, gradient: 'linear-gradient(135deg, #D4A373, #6B705C)' },
  sleep: { icon: Moon, gradient: 'linear-gradient(135deg, #E8D5B7, #D4A373)' },
};

export default function ProductCard({ product, index }) {
  const config = CATEGORY_CONFIG[product.category] || CATEGORY_CONFIG.balance;
  const Icon = config.icon;
  const isOffset = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
      whileHover={{ y: -8 }}
      className={`group relative rounded-[32px] overflow-hidden transition-all duration-500 ${isOffset ? 'md:mt-12' : ''}`}
      style={{
        background: '#FFFFFF',
        border: '1px solid #E8D5B7',
        boxShadow: '0 4px 24px rgba(108, 112, 92, 0.06)',
      }}
    >
      <div
        className="absolute -inset-1 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(178, 184, 163, 0.15), transparent 70%)' }}
      />

      <div className="relative h-56 overflow-hidden" style={{ background: config.gradient }}>
        {product.image_url ? (
          <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3">
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.3)', backdropFilter: 'blur(10px)' }}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <span className="text-xs tracking-[0.15em] uppercase text-white opacity-70">Product Image</span>
          </div>
        )}
      </div>

      <div className="p-7">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold" style={{ color: '#2C2C2C' }}>{product.name}</h3>
          {product.subtitle && (
            <span className="text-[10px] tracking-[0.15em] uppercase font-light" style={{ color: '#6B705C' }}>
              {product.subtitle}
            </span>
          )}
        </div>
        <p className="text-sm leading-relaxed mb-5" style={{ color: '#5C5C5C' }}>
          {product.description}
        </p>
        {product.target_audience && (
          <div className="mb-4 text-xs font-medium" style={{ color: '#6B705C' }}>
            适用人群 · {product.target_audience}
          </div>
        )}
        {product.bio_markers && product.bio_markers.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {product.bio_markers.map((marker, i) => (
              <span
                key={i}
                className="text-[11px] px-3 py-1 rounded-full"
                style={{ background: 'rgba(178, 184, 163, 0.15)', color: '#6B705C' }}
              >
                {marker}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}