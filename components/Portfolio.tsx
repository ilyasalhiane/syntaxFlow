'use client';

import { motion } from 'framer-motion';
import { portfolio } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  return (
    <section id='portfolio' className='mx-auto w-full max-w-6xl px-4 py-16'>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className='mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end'
      >
        <div>
          <p className='text-xs uppercase tracking-[0.2em] text-cyan-300'>Selected Work</p>
          <h2 className='mt-3 text-3xl font-semibold text-slate-100 md:text-4xl'>
            Built for measurable impact.
          </h2>
        </div>
      </motion.div>

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.14 } },
        }}
        className='grid gap-5 md:grid-cols-3'
      >
        {portfolio.map((item) => (
          <motion.article
            key={item.id}
            variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ y: -8 }}
            className='group flex h-full flex-col rounded-2xl border border-cyan-200/15 bg-slate-900/50 p-6 backdrop-blur-xl'
          >
            <div className='mb-4 inline-flex w-fit rounded-full border border-cyan-300/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-100'>
              {item.metric}
            </div>
            <h3 className='text-lg font-semibold text-slate-100'>{item.title}</h3>
            <p className='mt-3 flex-1 text-sm leading-relaxed text-slate-300'>{item.summary}</p>
            <ul className='mt-5 flex flex-wrap gap-2'>
              {item.tags.map((tag) => (
                <li
                  key={tag}
                  className='rounded-full border border-slate-600 bg-slate-800/60 px-3 py-1 text-xs text-slate-200'
                >
                  {tag}
                </li>
              ))}
            </ul>
            <a
              href='#contact'
              className='mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition group-hover:text-cyan-100'
            >
              Request Similar Project <ArrowUpRight className='h-4 w-4' />
            </a>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
