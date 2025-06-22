'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'   // ← icon

/* fade-in utility (unchanged) */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: 'easeOut' },
  }),
}

const TEAM = [
  { name: 'Ava Beats', role: 'Audio Engineer', img: '/team/member1.jpg' },
  { name: 'DJ Sonic', role: 'Mixing Artist',  img: '/team/member2.jpg' },
  { name: 'Luna Vox', role: 'Vocal Producer', img: '/team/member3.jpg' },
  { name: 'Echo Ray', role: 'Video Editor',   img: '/team/member4.jpg' },
]

export default function About() {
  /* like state keyed by index */
  const [likes, setLikes] = useState<Record<number, boolean>>({})

  const toggleLike = (idx: number) => {
    setLikes(prev => ({ ...prev, [idx]: !prev[idx] }))
    /* auto-revert after 3 s if turned on */
    if (!likes[idx]) {
      setTimeout(() => setLikes(prev => ({ ...prev, [idx]: true })), 3000)
    }
  }

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 overflow-hidden text-gray-800 bg-gradient-to-br from-teal-100 via-cyan-50 to-blue-50"
    >
      {/* ambient blobs (unchanged) */}
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
        {/* heading + intro (unchanged) */}
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

        <motion.p
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center text-lg sm:text-xl text-gray-700 leading-relaxed mb-16"
        >
          SiR Musiz is a creative haven where sonic innovation meets soulful storytelling. Our crew turns raw ideas into immersive audio-visual experiences.
        </motion.p>

        {/* ─── TEAM CAROUSEL ─── */}
        <div className="group relative w-full overflow-x-hidden py-4">
          <motion.div
            className="flex gap-12 animate-scroll select-none"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 15, ease: 'linear', repeat: Infinity }} 
          >
            {[...TEAM, ...TEAM].map((member, idx) => (
              <div
                key={idx}
                className="relative min-w-[240px] max-w-[240px] flex-shrink-0 bg-white/60 backdrop-blur-lg border border-white/70 rounded-3xl p-6 text-center transition-transform duration-300 hover:scale-105"
              >
                {/* profile */}
                <div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-white/70 shadow-lg">
                  <Image src={member.img} alt={member.name} fill sizes="144px" className="object-cover" />
                </div>
                <h4 className="font-semibold text-lg text-gray-900">{member.name}</h4>
                <p className="text-sm text-gray-700">{member.role}</p>

                {/* like button */}
                <button
                  onClick={() => toggleLike(idx)}
                  className="absolute top-4 right-4 text-xl text-teal-500 hover:text-pink-500 transition-colors"
                  aria-label="like profile"
                >
                  {likes[idx] ? <AiFillHeart /> : <AiOutlineHeart />}
                </button>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA (unchanged) */}
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

      {/* GLOBAL CSS (faster scroll, no side fades) */}
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll { animation: scroll 15s linear infinite; }
        .group:hover .animate-scroll { animation-play-state: paused; }
      `}</style>
    </section>
  )
}
