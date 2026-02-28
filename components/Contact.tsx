'use client';

import { motion } from 'framer-motion';
import { SendHorizontal } from 'lucide-react';

export default function Contact() {
  return (
    <section id='contact' className='mx-auto w-full max-w-6xl px-4 py-16'>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className='grid gap-8 rounded-3xl border border-cyan-200/20 bg-slate-900/55 p-8 backdrop-blur-xl md:grid-cols-[1.1fr_1fr] md:p-10'
      >
        <div>
          <p className='text-xs uppercase tracking-[0.2em] text-cyan-300'>Let&apos;s Build</p>
          <h2 className='mt-3 text-3xl font-semibold text-slate-100 md:text-4xl'>
            Tell us what you need to scale.
          </h2>
          <p className='mt-4 max-w-md text-sm leading-relaxed text-slate-300'>
            From resilient cloud platforms to cinematic web experiences, SyntaxFlow delivers
            state-engineered systems designed to perform globally.
          </p>
        </div>

        <form className='space-y-4'>
          <div className='grid gap-4 md:grid-cols-2'>
            <input
              type='text'
              name='name'
              placeholder='Full name'
              className='w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none ring-cyan-300/40 transition focus:ring-2'
            />
            <input
              type='email'
              name='email'
              placeholder='Business email'
              className='w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none ring-cyan-300/40 transition focus:ring-2'
            />
          </div>
          <input
            type='text'
            name='company'
            placeholder='Company'
            className='w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none ring-cyan-300/40 transition focus:ring-2'
          />
          <textarea
            name='message'
            placeholder='Project scope, timeline, and goals'
            rows={5}
            className='w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none ring-cyan-300/40 transition focus:ring-2'
          />
          <button
            type='submit'
            className='inline-flex items-center gap-2 rounded-xl border border-cyan-200/45 bg-cyan-400/15 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-100 hover:bg-cyan-400/25'
          >
            Send Inquiry <SendHorizontal className='h-4 w-4' />
          </button>
        </form>
      </motion.div>
    </section>
  );
}
