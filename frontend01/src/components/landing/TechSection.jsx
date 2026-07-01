import { motion } from 'framer-motion';
import { BookOpen, Brain, Workflow, Microscope } from 'lucide-react';

const TECH_IMG = '/images/tech_procedure.png';

const TECH_BLOCKS = [
  {
    icon: BookOpen,
    title: '知识库',
    subtitle: 'Knowledge Base',
    description: '汇聚全球营养学前沿研究，构建系统化知识图谱，覆盖从基础营养学到微生态学的完整知识体系。',
  },
  {
    icon: Brain,
    title: 'AI模型',
    subtitle: 'AI Model',
    description: '基于会员个人资料与健康数据，智能匹配最适合的营养方案，持续学习优化推荐精度。',
  },
  {
    icon: Workflow,
    title: '个性化算法',
    subtitle: 'Personalization',
    description: '多维度数据分析，精准计算营养需求与产品匹配度，为每位会员生成独一无二的营养方案。',
  },
  {
    icon: Microscope,
    title: '科研文献',
    subtitle: 'Research',
    description: '严格引用同行评议文献，确保每一项推荐有据可依，所有配方均经过循证医学验证。',
  },
];

export default function TechSection() {
  return (
    <section id="technology" className="relative py-32 md:py-40 overflow-hidden" style={{ background: '#F5F2EB' }}>
      <div className="absolute top-20 -left-32 w-[400px] h-[400px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #B2B8A3, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-20 -right-32 w-[500px] h-[500px] rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #D4A373, transparent 70%)', filter: 'blur(70px)' }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.2em] uppercase font-light" style={{ color: '#6B705C' }}>
            Technology Core
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-5 mb-6" style={{ color: '#2C2C2C' }}>
            技术内核 · 科学驱动
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#5C5C5C' }}>
            四大技术支柱构建FMT微生态的核心竞争力，让精准营养从理念走向现实。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-[32px] overflow-hidden aspect-square"
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

          <div className="grid grid-cols-2 gap-6">
            {TECH_BLOCKS.map((block, idx) => {
              const Icon = block.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-[24px] p-6 flex flex-col"
                  style={{
                    background: 'rgba(253, 251, 247, 0.6)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid #E8D5B7',
                  }}
                >
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: '#6B705C' }}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-[10px] tracking-[0.15em] uppercase font-light mb-1" style={{ color: '#6B705C' }}>
                    {block.subtitle}
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#2C2C2C' }}>{block.title}</h3>
                  <p className="text-xs leading-relaxed flex-1" style={{ color: '#5C5C5C' }}>
                    {block.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[32px] p-10 md:p-14 text-center"
          style={{ background: 'rgba(178, 184, 163, 0.12)', border: '1px solid #E8D5B7' }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#2C2C2C' }}>
            从数据到方案 · 闭环精准
          </h3>
          <p className="text-base max-w-3xl mx-auto leading-relaxed" style={{ color: '#5C5C5C' }}>
            会员提交健康档案与数据样本 → AI模型多维度分析 → 知识库匹配循证方案 → 个性化算法生成推荐 → 持续追踪优化。每一步都有科学依据，每一份方案都独一无二。
          </p>
        </motion.div>
      </div>
    </section>
  );
}