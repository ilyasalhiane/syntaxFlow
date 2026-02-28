'use client';

import { motion } from 'framer-motion';
import { services, trustBadges } from '@/lib/data';
import { BadgeCheck } from 'lucide-react';

export default function Services() {
  return (
    <section id='services' className='mx-auto w-full max-w-6xl px-4 py-16'>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className='mb-10'
      >
        <p className='text-xs uppercase tracking-[0.2em] text-cyan-300'>Core Services</p>
        <h2 className='mt-3 text-3xl font-semibold text-slate-100 md:text-4xl'>
          Infrastructure-grade engineering. Experience-level execution.
        </h2>
      </motion.div>

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
        }}
        className='grid gap-5 md:grid-cols-3'
      >
        {services.map((service) => (
          <motion.article
            key={service.id}
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ y: -8 }}
            className='rounded-2xl border border-cyan-200/15 bg-slate-900/45 p-6 backdrop-blur-xl'
          >
            <h3 className='text-lg font-semibold text-slate-100'>{service.title}</h3>
            <p className='mt-3 text-sm leading-relaxed text-slate-300'>{service.description}</p>
            <ul className='mt-5 flex flex-wrap gap-2'>
              {service.technologies.map((tech) => (
                <li
                  key={tech}
                  className='rounded-full border border-cyan-300/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-100'
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>

      <div className='mt-8 grid gap-4 md:grid-cols-2'>
        {trustBadges.map((badge) => (
          <div
            key={badge.id}
            className='flex items-start gap-3 rounded-xl border border-slate-700/70 bg-slate-900/40 p-4 backdrop-blur-lg'
          >
            <BadgeCheck className='mt-0.5 h-5 w-5 text-cyan-300' />
            <div>
              <p className='text-sm font-semibold text-slate-100'>{badge.label}</p>
              <p className='text-sm text-slate-400'>{badge.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
