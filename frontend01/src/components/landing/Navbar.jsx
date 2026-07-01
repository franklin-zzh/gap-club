import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: '产品', href: '#products', isRoute: false },
    { label: '技术', href: '#technology', isRoute: false },
    { label: '知识库', href: '/knowledge-base', isRoute: true },
  ];

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2.5rem)] max-w-5xl">
      <div
        className="flex items-center justify-between gap-6 px-5 py-3 rounded-full transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(250, 248, 243, 0.38)' : 'rgba(250, 248, 243, 0.4)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid #E8D5B7',
          boxShadow: scrolled ? '0 8px 32px rgba(108, 112, 92, 0.1)' : '0 2px 12px rgba(108, 112, 92, 0.04)',
        }}
      >
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: '#6B705C' }}>
            <Leaf className="w-4 h-4 text-white" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold" style={{ color: '#2C2C2C' }}>FMT微生态</div>
            <div className="text-[10px] tracking-[0.15em] uppercase" style={{ color: '#6B705C' }}>GAP营养小屋</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium transition-colors hover:opacity-60"
                style={{ color: '#2C2C2C' }}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:opacity-60"
                style={{ color: '#2C2C2C' }}
              >
                {link.label}
              </a>
            )
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            to="/register"
            className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium text-white transition-all hover:opacity-90"
            style={{ background: '#6B705C' }}
          >
            加入会员
          </Link>
        </div>

        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} style={{ color: '#2C2C2C' }}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden mt-2 p-5 rounded-3xl flex flex-col gap-4"
          style={{
            background: 'rgba(253, 251, 247, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid #E8D5B7',
          }}
        >
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium"
                style={{ color: '#2C2C2C' }}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium"
                style={{ color: '#2C2C2C' }}
              >
                {link.label}
              </a>
            )
          ))}
          <Link
            to="/register"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium text-white"
            style={{ background: '#6B705C' }}
          >
            加入会员
          </Link>
        </div>
      )}
    </nav>
  );
}