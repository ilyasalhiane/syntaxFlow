'use client';

import { useEffect, useState } from 'react';
import { Code2, Workflow } from 'lucide-react';
import { motion } from 'framer-motion';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className='sticky top-0 z-50 w-full px-4 pt-4'
    >
      <div
        className={`mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border px-5 py-3 transition-all duration-300 ${
          scrolled
            ? 'border-cyan-300/30 bg-slate-900/80 shadow-[0_12px_40px_-12px_rgba(34,211,238,0.45)] backdrop-blur-xl'
            : 'border-white/10 bg-slate-900/40 backdrop-blur-md'
        }`}
      >
        <a href='#top' className='group flex items-center gap-2 text-slate-100'>
          <div className='rounded-lg border border-cyan-300/30 bg-cyan-400/10 p-1.5'>
            <Workflow className='h-4 w-4 text-cyan-300' />
          </div>
          <span className='text-sm font-semibold tracking-wide'>SyntaxFlow</span>
          <Code2 className='h-4 w-4 text-cyan-200/80 transition-transform duration-300 group-hover:translate-x-0.5' />
        </a>

        <nav className='hidden items-center gap-6 md:flex'>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='text-sm text-slate-300 transition-colors hover:text-cyan-300'
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href='#contact'
          className='rounded-lg border border-cyan-300/40 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-cyan-200 transition hover:border-cyan-200/80 hover:bg-cyan-300/20'
        >
          Start Project
        </a>
      </div>
    </motion.header>
  );
}
