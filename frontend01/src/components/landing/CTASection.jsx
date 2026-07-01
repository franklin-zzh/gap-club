import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden" style={{ background: '#FDFBF7' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative py-14 md:py-16 px-8 text-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #B2B8A3 0%, #D4A373 100%)',
          }}
        >
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full opacity-30" style={{ background: 'radial-gradient(circle, #FDFBF7, transparent 70%)', filter: 'blur(40px)' }} />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #6B705C, transparent 70%)', filter: 'blur(50px)' }} />

          <div className="relative z-10">
            <span className="text-xs tracking-[0.2em] uppercase font-light text-white opacity-80">
              Join FMT Micro-Ecology
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-5 mb-6 text-white leading-tight">
              加入会员
              <br />
              获取专属营养方案
            </h2>
            <p className="text-lg max-w-xl mx-auto mb-10 text-white opacity-90 leading-relaxed">
              完成健康档案，提交个人数据，AI模型为您匹配最精准的营养方案。从今天开始，让科学守护您的健康。
            </p>
            <Link
              to="/member/init"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium transition-all hover:scale-105"
              style={{ background: '#FDFBF7', color: '#2C2C2C' }}
            >
              初始化您的数字化档案 <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}