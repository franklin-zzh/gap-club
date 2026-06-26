import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const DEFAULT_PRODUCTS = [
  { name: '儿童成长包', subtitle: 'Growth', description: '专为3-12岁儿童设计，支持骨骼发育与免疫系统建设，奠定一生健康基础。', target_audience: '3-12岁儿童', bio_markers: ['钙吸收', '维生素D', '锌', '益生菌'], category: 'growth', order: 1 },
  { name: '青少年活力包', subtitle: 'Vitality', description: '针对青春期快速发育需求，支持体能提升、脑力发育与情绪平衡。', target_audience: '13-18岁青少年', bio_markers: ['蛋白质', 'Omega-3', 'B族维生素', '铁'], category: 'vitality', order: 2 },
  { name: '女性平衡包', subtitle: 'Balance', description: '调节女性内分泌平衡，支持肌肤、骨骼与心血管健康，贯穿全生命周期。', target_audience: '成年女性', bio_markers: ['铁', '叶酸', '胶原蛋白', '植物雌激素'], category: 'balance', order: 3 },
  { name: '男性能量包', subtitle: 'Energy', description: '提升男性体能与代谢效率，支持心血管健康与压力管理，保持巅峰状态。', target_audience: '成年男性', bio_markers: ['锌', '镁', '精氨酸', 'B族维生素'], category: 'energy', order: 4 },
  { name: '孕产营养包', subtitle: 'Maternal', description: '覆盖备孕、孕期、产后全阶段，精准支持胎儿发育与母体恢复。', target_audience: '备孕及孕产期女性', bio_markers: ['叶酸', 'DHA', '铁', '钙', '维生素D'], category: 'maternal', order: 5 },
  { name: '银发健康包', subtitle: 'Senior', description: '针对50+人群，强化骨骼密度、认知功能与心血管保护，延缓衰老进程。', target_audience: '50岁以上中老年', bio_markers: ['钙', '维生素D', '辅酶Q10', 'Omega-3'], category: 'senior', order: 6 },
  { name: '运动恢复包', subtitle: 'Recovery', description: '加速运动后肌肉修复与能量补充，优化体能表现与恢复效率。', target_audience: '运动健身人群', bio_markers: ['BCAA', '肌酸', '电解质', '抗氧化剂'], category: 'recovery', order: 7 },
  { name: '肠道微生态包', subtitle: 'Gut', description: '重建肠道菌群平衡，改善消化吸收，增强免疫屏障功能。', target_audience: '消化功能不佳人群', bio_markers: ['益生菌', '益生元', '膳食纤维', '谷氨酰胺'], category: 'gut', order: 8 },
  { name: '免疫守护包', subtitle: 'Immune', description: '系统性增强免疫防线，提升机体抗病能力，适合易感体质人群。', target_audience: '免疫力低下人群', bio_markers: ['维生素C', '维生素D', '锌', '硒', 'β-葡聚糖'], category: 'immune', order: 9 },
  { name: '安神助眠包', subtitle: 'Sleep', description: '调节神经递质平衡，改善睡眠质量，缓解焦虑与压力，恢复身心节律。', target_audience: '睡眠障碍及高压人群', bio_markers: ['褪黑素', '镁', 'GABA', '茶氨酸'], category: 'sleep', order: 10 },
];

export default function ProductGallery({ products, loading }) {
  const displayProducts = products && products.length > 0 ? products : DEFAULT_PRODUCTS;

  return (
    <section id="products" className="relative py-32 md:py-40" style={{ background: '#FDFBF7' }}>
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs tracking-[0.2em] uppercase font-light" style={{ color: '#6B705C' }}>
            Nutrition Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-5 mb-6" style={{ color: '#2C2C2C' }}>
            十款营养包 · 全人群覆盖
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#5C5C5C' }}>
            从儿童成长到银发健康，从运动恢复到肠道微生态——每一款营养包都基于循证科学，精准对应特定人群的核心健康需求。
          </p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {displayProducts.map((product, idx) => (
            <ProductCard key={product.id || idx} product={product} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}