import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TECH_IMG = '/images/tech_procedure02.png';

const TECH_ITEMS = [
  { label: '全基因组测序分析技术', text: '采用前沿测序技术深度解码肠道菌群，提供数据驱动、客观严谨的临床级评估。', color: '#4E594C', blobShape: '48% 52% 61% 39% / 42% 39% 61% 58%', link: '/technology', linkText: '了解全基因组测序流程' },
  { label: '万级微生态专属大数据库', text: '汇聚跨时空、多中心的长期真实世界数据，为匹配模型提供坚实的数据底座。', color: '#856253', blobShape: '58% 42% 40% 60% / 55% 45% 55% 45%', link: '/technology', linkText: '了解与数据库安全架构' },
  { label: '前沿医学科研文献证据库', text: '实时动态整合全球顶尖营养学与生物医药期刊，构建系统化知识图谱，覆盖从基础营养学到微生态学的完整知识体系。', color: '#A88E74', blobShape: '42% 58% 52% 48% / 60% 40% 60% 40%', link: '/knowledge-base', linkText: '进入核心知识库 查阅全部期刊文献' },
  { label: 'AI 智能化动态匹配模型', text: '基于自研多靶点匹配算法和会员个人健康数据，深度解析个体微生态特征，智能输出千人千面养护方案。', color: '#636E67', blobShape: '51% 49% 41% 59% / 41% 59% 41% 59%', link: '/ai-model', linkText: '深入了解 AI 个性化匹配算法内核' },
];

export default function TechSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [clickedIdx, setClickedIdx] = useState(null);

  const handleClick = (idx) => {
    setClickedIdx(idx);
    setTimeout(() => setClickedIdx(null), 600);
  };

  return (
    <section id="technology" className="relative py-20 md:py-24 overflow-hidden" style={{ background: '#F5F2EB' }}>
      <div className="absolute top-20 -left-32 w-[400px] h-[400px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #B2B8A3, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-20 -right-32 w-[500px] h-[500px] rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #D4A373, transparent 70%)', filter: 'blur(70px)' }} />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Minimal running header: thin line + section left + brand right */}
        <div className="mb-12 md:mb-16">
          <div style={{ height: '0.5px', width: '100%', background: '#D4A373' }} />
          <div className="flex items-center justify-between mt-2">
            <span className="text-[11px] tracking-[0.25em] uppercase font-light" style={{ color: '#8E9E8A' }}>
              02 / CORE TECH
            </span>
            <span className="text-[11px] tracking-[0.25em] uppercase font-light" style={{ color: '#8E9E8A' }}>
              FMT GAP CLUB
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-[32px] overflow-hidden md:col-span-3 aspect-square"
            style={{ border: '1px solid #E8D5B7' }}
          >
            <img src={TECH_IMG} alt="技术流程图" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-end p-8" style={{ background: 'linear-gradient(to top, rgba(44,44,44,0.6), transparent)' }}>
              <div>
                <div className="text-xs tracking-[0.2em] uppercase text-white opacity-80 mb-1">AI Neural Network</div>
                <div className="text-lg font-bold text-white">微生态智能匹配引擎</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Title + Interactive items */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2"
          >
            <span className="text-xs tracking-[0.2em] uppercase font-light" style={{ color: '#6B705C' }}>
              Tech Core
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-8" style={{ color: '#2C2C2C' }}>
              核心技术支撑
            </h2>
            <p className="font-sans text-[15px] font-normal leading-relaxed tracking-wide antialiased mb-10" style={{ color: '#3D423C' }}>
              我们汇聚全球前沿微生态科研成果，构建知识库中心和大数据平台。通过AI微生态匹配模型和个性化算法，为您定制科学、精准、可持续的营养解决方案。
            </p>

            <div className="space-y-10">
              {TECH_ITEMS.map((item, idx) => {
                const isHovered = hoveredIdx === idx;
                const isClicked = clickedIdx === idx;
                const isAnyHovered = hoveredIdx !== null;
                const isDimmed = isAnyHovered && !isHovered;

                return (
                  <div key={idx} className="relative">
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      className="group cursor-pointer"
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      onClick={() => handleClick(idx)}
                    >
                      <div className="flex items-start gap-4" style={{ transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)', opacity: isDimmed ? 0.6 : 1 }}>
                        {/* Organic pebble dot — unique shape + matte mineral color */}
                        <div className="relative mt-1 shrink-0">
                          <div
                            style={{
                              width: '18px',
                              height: '18px',
                              backgroundColor: item.color,
                              borderRadius: item.blobShape,
                              transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                              transform: isHovered ? 'scale(1.25) rotate(15deg)' : 'scale(1)',
                              boxShadow: isHovered ? `0 8px 20px ${item.color}33` : 'none',
                            }}
                          />
                        </div>

                        {/* Label + revealed description */}
                        <div className="flex-1">
                          <div className="text-sm font-bold transition-colors duration-300 flex items-center gap-2" style={{ color: isHovered ? '#8B5E3C' : '#2C2C2C' }}>
                            {item.label}
                            <ArrowRight className="w-3.5 h-3.5 transition-all duration-300" style={{ opacity: isHovered ? 1 : 0.25, transform: isHovered ? 'translateX(2px)' : 'translateX(0)' }} />
                          </div>

                          <AnimatePresence>
                            {isHovered && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                              >
                                <div className="text-xs leading-relaxed mt-1.5" style={{ color: '#8E9E8A' }}>
                                  {item.text}
                                </div>
                                {/* Secondary page gateway link */}
                                <div className="mt-2">
                                  <Link
                                    to={item.link}
                                    className="inline-flex items-center gap-1 text-[11px] font-medium transition-all hover:opacity-70"
                                    style={{ color: '#6B705C' }}
                                  >
                                    {item.linkText} <ArrowRight className="w-3 h-3" />
                                  </Link>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>

                    {/* Click ripple effect */}
                    <AnimatePresence>
                      {isClicked && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.6 }}
                          animate={{ opacity: 1, scale: 1.2 }}
                          exit={{ opacity: 0, scale: 1.4 }}
                          transition={{ duration: 0.6 }}
                          className="absolute -inset-3 pointer-events-none rounded-2xl"
                          style={{ background: `radial-gradient(circle at 50% 50%, ${item.color}1A, ${item.color}0D 60%, transparent 80%)` }}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* 5-step process timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mt-16 md:mt-20 pt-12 md:pt-16"
          style={{ borderTop: '0.5px solid rgba(212,163,115,0.25)' }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12" style={{ color: '#2C2C2C' }}>
            从数据到方案 · 闭环精准
          </h3>

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line behind dots */}
            <div className="absolute top-[11px] left-[8%] right-[8%]" style={{ height: '0.5px', background: 'rgba(212,163,115,0.2)' }} />

            {/* 5 steps */}
            <div className="grid grid-cols-5 gap-4">
              {[
                { num: '01', label: '采集', title: '数字化建档', sub: '生物样本输入' },
                { num: '02', label: '解码', title: 'AI 模型多维', sub: '深度解析' },
                { num: '03', label: '循证', title: '前沿知识库', sub: '科学匹配' },
                { num: '04', label: '转化', title: '动态算法', sub: '生成独属方案' },
                { num: '05', label: '迭代', title: '持续追踪', sub: '长期伴随优化' },
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + idx * 0.12, ease: 'backOut' }}
                    className="w-[5px] h-[5px] rounded-full mb-3 relative z-10"
                    style={{ background: '#4E594C', boxShadow: '0 0 0 3px rgba(78,89,76,0.12)' }}
                  />

                  {/* Step number + label */}
                  <div className="text-[10px] tracking-[0.2em] uppercase font-light mb-1.5" style={{ color: '#8E9E8A' }}>
                    {step.num} / {step.label}
                  </div>

                  {/* Title */}
                  <div className="text-xs font-bold leading-tight" style={{ color: '#2C2C2C' }}>
                    {step.title}
                  </div>

                  {/* Sub */}
                  <div className="text-[11px] leading-tight mt-0.5" style={{ color: '#8E9E8A' }}>
                    {step.sub}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom summary */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-xs leading-relaxed mt-10 max-w-xl mx-auto"
            style={{ color: '#8E9E8A' }}
          >
            让每一次微小的数据起伏，都有坚实的科研背书；始于严谨科学，归于生命个体。
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
