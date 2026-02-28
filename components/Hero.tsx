'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CloudLightning, ShieldCheck } from 'lucide-react';

const headline = 'Architecting High-Performance Digital Solutions.';

export default function Hero() {
  return (
    <section id='top' className='mx-auto w-full max-w-6xl px-4 pb-20 pt-16 md:pt-20'>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              staggerChildren: 0.03,
            },
          },
        }}
        className='rounded-3xl border border-cyan-200/20 bg-slate-900/45 p-8 shadow-[0_30px_80px_-30px_rgba(34,211,238,0.45)] backdrop-blur-xl md:p-12'
      >
        <p className='mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-200'>
          <ShieldCheck className='h-3.5 w-3.5' />
          State-Engineered Excellence
        </p>

        <h1 className='max-w-4xl text-4xl font-semibold leading-tight text-slate-100 md:text-6xl'>
          {headline.split(' ').map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
              className='mr-3 inline-block bg-gradient-to-r from-slate-100 via-cyan-100 to-cyan-300 bg-clip-text text-transparent'
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
          className='mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg'
        >
          Founded by an <span className='font-semibold text-cyan-200'>Ingénieur d&apos;État</span>,
          SyntaxFlow merges rigorous cloud and networking architecture with premium Next.js
          frontend systems and motion-driven digital storytelling.
        </motion.p>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
          className='mt-10 flex flex-wrap gap-4'
        >
          <a
            href='#portfolio'
            className='group inline-flex items-center gap-2 rounded-xl border border-cyan-200/40 bg-cyan-400/15 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/20'
          >
            View Case Studies
            <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
          </a>
          <a
            href='#contact'
            className='inline-flex items-center gap-2 rounded-xl border border-slate-600 bg-slate-900/60 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/60 hover:text-cyan-100'
          >
            Book Discovery Call
            <CloudLightning className='h-4 w-4' />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
