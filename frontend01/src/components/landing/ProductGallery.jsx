import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard, { ProductDetailModal } from './ProductCard';
import { ArrowRight } from 'lucide-react';

const DEFAULT_PRODUCTS = [
  { name: '儿童成长包', subtitle: 'Growth', description: '专为3-12岁儿童设计，支持骨骼发育与免疫系统建设。', target_audience: '3-12岁儿童', bio_markers: ['钙吸收', '维生素D', '锌', '益生菌'], category: 'growth', order: 1 },
  { name: '青少年活力包', subtitle: 'Vitality', description: '针对青春期快速发育需求，支持体能、脑力与情绪平衡。', target_audience: '13-18岁青少年', bio_markers: ['蛋白质', 'Omega-3', 'B族维生素', '铁'], category: 'vitality', order: 2 },
  { name: '女性平衡包', subtitle: 'Balance', description: '调节女性内分泌平衡，支持肌肤、骨骼与心血管健康。', target_audience: '成年女性', bio_markers: ['铁', '叶酸', '胶原蛋白', '植物雌激素'], category: 'balance', order: 3 },
  { name: '男性能量包', subtitle: 'Energy', description: '提升男性体能与代谢效率，支持心血管健康与压力管理。', target_audience: '成年男性', bio_markers: ['锌', '镁', '精氨酸', 'B族维生素'], category: 'energy', order: 4 },
  { name: '孕产营养包', subtitle: 'Maternal', description: '覆盖备孕、孕期、产后全阶段，精准支持胎儿发育与母体恢复。', target_audience: '备孕及孕产期女性', bio_markers: ['叶酸', 'DHA', '铁', '钙', '维生素D'], category: 'maternal', order: 5 },
  { name: '银发健康包', subtitle: 'Senior', description: '针对50+人群，强化骨骼密度、认知功能与心血管保护。', target_audience: '50岁以上中老年', bio_markers: ['钙', '维生素D', '辅酶Q10', 'Omega-3'], category: 'senior', order: 6 },
  { name: '运动恢复包', subtitle: 'Recovery', description: '加速运动后肌肉修复与能量补充，优化体能表现与恢复效率。', target_audience: '运动健身人群', bio_markers: ['BCAA', '肌酸', '电解质', '抗氧化剂'], category: 'recovery', order: 7 },
  { name: '肠道微生态包', subtitle: 'Gut', description: '重建肠道菌群平衡，改善消化吸收，增强免疫屏障功能。', target_audience: '消化功能不佳人群', bio_markers: ['益生菌', '益生元', '膳食纤维', '谷氨酰胺'], category: 'gut', order: 8 },
  { name: '免疫守护包', subtitle: 'Immune', description: '系统性增强免疫防线，提升机体抗病能力，适合易感体质人群。', target_audience: '免疫力低下人群', bio_markers: ['维生素C', '维生素D', '锌', '硒', 'β-葡聚糖'], category: 'immune', order: 9 },
  { name: '安神助眠包', subtitle: 'Sleep', description: '调节神经递质平衡，改善睡眠质量，缓解焦虑与压力。', target_audience: '睡眠障碍及高压人群', bio_markers: ['褪黑素', '镁', 'GABA', '茶氨酸'], category: 'sleep', order: 10 },
];

const TABS = [
  {
    key: 'work',
    label: '职场活力',
    products: ['vitality', 'energy', 'recovery'],
  },
  {
    key: 'senior',
    label: '银发健康',
    products: ['senior', 'immune', 'gut'],
  },
  {
    key: 'lifecycle',
    label: '专属周期',
    products: ['growth', 'balance', 'maternal'],
  },
];

export default function ProductGallery({ products, loading }) {
  const [activeTab, setActiveTab] = useState('work');
  const [detailProduct, setDetailProduct] = useState(null);

  const catalog = Array.isArray(products) && products.length > 0
    ? products.map(p => ({
        ...p,
        target_audience: p.target_audience || p.target_group || '',
        bio_markers: p.bio_markers || p.tags || [],
        category: p.category || 'growth',
        order: p.order ?? p.order_index ?? 0,
      }))
    : DEFAULT_PRODUCTS;

  const currentTab = TABS.find(t => t.key === activeTab);
  const tabProducts = catalog.filter(p => currentTab?.products.includes(p.category));
  const otherCount = catalog.length - tabProducts.length;

  return (
    <section id="products" className="relative py-20 md:py-28" style={{ background: '#FDFBF7' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.2em] uppercase font-light" style={{ color: '#6B705C' }}>
            Nutrition Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-5 mb-6" style={{ color: '#2C2C2C' }}>
            十款营养包 · 全人群覆盖
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#5C5C5C' }}>
            精选匹配你的健康需求
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
                style={{
                  background: isActive ? '#6B705C' : 'transparent',
                  color: isActive ? '#fff' : '#2C2C2C',
                  border: `1px solid ${isActive ? '#6B705C' : '#E8D5B7'}`,
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Product cards row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 mb-8">
          {tabProducts.map((product, idx) => (
            <ProductCard
              key={product.id || idx}
              product={product}
              index={idx}
              onShowDetail={setDetailProduct}
            />
          ))}

          {/* Ghost card — "+X 款更多人群定制" */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden flex flex-col items-center justify-center text-center cursor-default"
            style={{
              background: 'rgba(245, 242, 235, 0.5)',
              border: '1px dashed #E8D5B7',
              backdropFilter: 'blur(4px)',
              minHeight: '180px',
            }}
          >
            <div className="text-2xl font-bold mb-1" style={{ color: '#B2B8A3' }}>+{otherCount}</div>
            <div className="text-sm font-medium" style={{ color: '#6B705C' }}>更多人群定制</div>
            <div className="text-[10px] mt-1 px-4" style={{ color: '#B2B8A3' }}>
              儿童·女性·助眠等
            </div>
          </motion.div>
        </div>

        {/* Global CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={() => setDetailProduct(catalog[0])}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium transition-all hover:opacity-80"
            style={{ background: 'rgba(107,112,92,0.08)', color: '#6B705C' }}
          >
            探索全人群精准定制矩阵 <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {detailProduct && (
        <ProductDetailModal
          product={detailProduct}
          onClose={() => setDetailProduct(null)}
        />
      )}
    </section>
  );
}
