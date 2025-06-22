'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

/* --------------------------------------------------
 * About Section — Light Teal‑Cyan‑Blue Theme
 * --------------------------------------------------
 * • Glassy team carousel that pauses on hover
 * • Text & elements tuned for light gradient background
 * -------------------------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: 'easeOut' },
  }),
}

const TEAM = [
  { name: 'Ava Beats', role: 'Audio Engineer', img: '/team/member1.jpg' },
  { name: 'DJ Sonic', role: 'Mixing Artist', img: '/team/member2.jpg' },
  { name: 'Luna Vox', role: 'Vocal Producer', img: '/team/member3.jpg' },
  { name: 'Echo Ray', role: 'Video Editor', img: '/team/member4.jpg' },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 overflow-hidden text-gray-800 bg-gradient-to-br from-teal-100 via-cyan-50 to-blue-50"
    >
      {/* Ambient Blobs */}
      <motion.div
        className="absolute -top-48 -left-48 w-[680px] h-[680px] bg-teal-300/40 rounded-full blur-[140px]"
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-52 -right-52 w-[680px] h-[680px] bg-blue-300/40 rounded-full blur-[140px]"
        animate={{ rotate: 360, scale: [1, 1.15, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 max-w-6xl w-full">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-4xl sm:text-5xl font-extrabold mb-6"
        >
          Meet Our{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyan-400 to-blue-500">
            Creative Force
          </span>
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center text-lg sm:text-xl text-gray-700 leading-relaxed mb-16"
        >
          SiR Musiz is a creative haven where sonic innovation meets soulful storytelling. Our crew turns raw ideas into immersive audio‑visual experiences.
        </motion.p>

        {/* ─── Team Carousel ─── */}
        <div className="group relative w-full overflow-x-hidden py-4">
          <motion.div
            className="flex gap-12 animate-scroll select-none"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
          >
            {[...TEAM, ...TEAM].map((member, idx) => (
              <div
                key={idx}
                className="min-w-[240px] max-w-[240px] flex-shrink-0 bg-white/60 backdrop-blur-lg border border-white/70 rounded-3xl p-6 text-center shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover: shadow-[0_8px_40px_rgba(0,150,255,0.25)] hover:scale-105 transition-transform duration-300"
              >
                <div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-white/70 shadow-lg">
                  <Image src={member.img} alt={member.name} fill sizes="144px" className="object-cover" />
                </div>
                <h4 className="font-semibold text-lg text-gray-900">
                  {member.name}
                </h4>
                <p className="text-sm text-gray-700">
                  {member.role}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Gradient fade edges */}
          <span className="pointer-events-none absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-blue-50 via-white/80 to-transparent" />
          <span className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-blue-50 via-white/80 to-transparent" />
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-20">
          <motion.a
            href="/contact"
            className="inline-block bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 text-white px-10 py-3 rounded-full font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-cyan-200 transition-transform duration-300"
            variants={fadeUp}
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.08 }}
          >
            Get in Touch
          </motion.a>
        </div>
      </div>

      {/* ─── Local CSS for scroll & pause ─── */}
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll { animation: scroll 30s linear infinite; }
        .group:hover .animate-scroll { animation-play-state: paused; }
      `}</style>
    </section>
  )
}
