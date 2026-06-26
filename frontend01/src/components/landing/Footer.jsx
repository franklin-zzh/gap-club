import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

export default function Footer() {
  const linkColumns = [
    { title: '产品', links: ['儿童成长包', '女性平衡包', '肠道微生态包', '免疫守护包'] },
    { title: '技术', links: ['知识库', 'AI模型', '个性化算法', '科研文献'] },
    { title: '关于', links: ['品牌故事', '技术白皮书', '案例研究', '联系我们'] },
  ];

  return (
    <footer className="relative overflow-hidden pt-20 pb-8" style={{ background: '#D4A373' }}>
      <div
        className="absolute -bottom-20 -right-20 text-[200px] font-bold opacity-[0.08] leading-none select-none pointer-events-none"
        style={{ color: '#FDFBF7' }}
      >
        FMT
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#FDFBF7' }}>
                <Leaf className="w-5 h-5" style={{ color: '#D4A373' }} />
              </div>
              <div className="leading-tight">
                <div className="text-base font-bold" style={{ color: '#FDFBF7' }}>FMT微生态</div>
                <div className="text-[10px] tracking-[0.15em] uppercase" style={{ color: '#FDFBF7', opacity: 0.7 }}>GAP营养小屋</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#FDFBF7', opacity: 0.8 }}>
              以自研知识库与AI个性化匹配模型，为每一位会员定制专属营养方案。精准营养，科学驱动。
            </p>
          </div>

          {linkColumns.map((col, idx) => (
            <div key={idx}>
              <h4 className="text-sm font-bold mb-5" style={{ color: '#FDFBF7' }}>{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-sm transition-opacity hover:opacity-100" style={{ color: '#FDFBF7', opacity: 0.7 }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: '1px solid rgba(253, 251, 247, 0.2)' }}>
          <p className="text-xs" style={{ color: '#FDFBF7', opacity: 0.6 }}>
            © 2026 FMT微生态 · GAP营养小屋. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs transition-opacity hover:opacity-100" style={{ color: '#FDFBF7', opacity: 0.6 }}>隐私政策</a>
            <a href="#" className="text-xs transition-opacity hover:opacity-100" style={{ color: '#FDFBF7', opacity: 0.6 }}>服务条款</a>
            <Link to="/login" className="text-xs transition-opacity hover:opacity-100" style={{ color: '#FDFBF7', opacity: 0.6 }}>会员登录</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}