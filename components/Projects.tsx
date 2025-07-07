'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import Link from 'next/link'

const videos = [
  { title: 'Addictive Eyes', description: 'Sir Musiz studio.', videoId: 'SkZWB3LDURk' },
  { title: 'Hanju(Official)', description: 'Official Music Visualizer.', videoId: 'puqYqs0tDPg' },
  { title: 'Missing You (Official Audio)', description: 'AD Rapstar', videoId: 'f5m5Nd50LZI' },
  { title: 'Heartstrings', description: '(Official Visualizer) - AD Rapstar.', videoId: 'iHpMRAJWRhQ' },
  { title: 'Feeling Lonely', description: 'Neel D X AD Rapstar.', videoId: 'QcOK7L9jopU' },
  { title: 'Cant See You', description: 'R Jxy x AD Rapstar.', videoId: 'Cqhd4om5kjk' },
]

// ✅ Fix: use easing array instead of string
const cardVar: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1], // equivalent to easeInOut
    },
  },
}

const gridVar: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function Projects() {
  const [active, setActive] = useState<null | typeof videos[0]>(null)

  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 px-6 flex flex-col items-center text-white scroll-mt-20"
    >
      {/* heading */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl sm:text-5xl text-black font-bold tracking-tight mb-2">
          Featured <span className="text-blue-400">Projects</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          A showcase of studio sessions, official releases, and creative demos.
        </p>
      </div>

      {/* video grid */}
      <motion.div
        variants={gridVar}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full"
      >
        {videos.map((v, idx) => (
          <motion.div
            key={v.videoId}
            variants={cardVar}
            onClick={() => setActive(v)}
            className="group cursor-pointer relative rounded-3xl overflow-hidden
                       border border-white/10 bg-black/25 backdrop-blur-sm shadow-xl"
          >
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${v.videoId}?rel=0&modestbranding=1`}
                title={`${v.title}-${idx}`} // ✅ unique title
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full pointer-events-none transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100
                            transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-lg font-bold">{v.title}</h3>
              <p className="text-sm text-gray-300 mt-1">{v.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* more button */}
      <Link
        href="/Projects"
        className="mt-12 inline-block px-8 py-3 rounded-full bg-blue-400 font-semibold
                   hover:bg-blue-600 transition-colors"
      >
        More projects →
      </Link>

      {/* modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: 'spring', stiffness: 100, damping: 18 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-[90vw] max-w-4xl aspect-video"
            >
              <iframe
                src={`https://www.youtube.com/embed/${active.videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={`modal-${active.title}`}
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                loading="lazy"
                className="w-full h-full rounded-xl"
              />
              <button
                onClick={() => setActive(null)}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-blue-400 text-white text-xl font-bold hover:bg-blue-600"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
