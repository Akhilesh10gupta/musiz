'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'   // ← added AnimatePresence

interface Project {
  id: number
  title: string
  creator: string
  category: string
  description: string
  youtubeId: string
}

/* demo data — swap for real rows */
const projects: Project[] = [
  { id: 1, title: 'Studio Anthem', creator: 'SiR Musiz', category: 'Music Production', description: 'Atmospheric beat session.', youtubeId: 'SkZWB3LDURk' },
  { id: 2, title: 'Visualizer Drop', creator: 'AD Rapstar', category: 'Video Production', description: 'Official track visualizer.', youtubeId: 'puqYqs0tDPg' },
  { id: 3, title: 'Cartoon Bounce', creator: 'Neel D', category: 'Animation & Motion Graphics', description: 'Fun animated loop.', youtubeId: 'iHpMRAJWRhQ' },
  { id: 4, title: 'Insta Promo', creator: 'Art Dept.', category: 'Poster & Social Media Post', description: 'Promo graphic timelapse.', youtubeId: 'Cqhd4om5kjk' },
  { id: 5, title: 'AI Harmony', creator: 'Neon Nights', category: 'AI Content', description: 'AI-generated hook demo.', youtubeId: 'f5m5Nd50LZI' },
]

const categories = [
  'All',
  'Music Production',
  'Video Production',
  'Animation & Motion Graphics',
  'Poster & Social Media Post',
  'AI Content',
]

export default function ProjectsPage() {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')
  const [active, setActive]   = useState<Project | null>(null)   // ← new

  /* ------------ filter logic ------------ */
  const visible = projects.filter(p => {
    const cOK =
      category.trim().toLowerCase() === 'all' ||
      p.category.toLowerCase() === category.toLowerCase()
    const q = query.trim().toLowerCase()
    const qOK =
      q === '' ||
      p.title.toLowerCase().includes(q) ||
      p.creator.toLowerCase().includes(q)
    return cOK && qOK
  })

  /* ------------ ui ------------ */
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-cyan-50 to-blue-50 text-black px-4 py-24">
      <div className="max-w-6xl mx-auto">

        {/* headline */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">All Projects</h1>
          <p className="text-lg text-gray-600">
            Music, visuals, graphics & AI explorations from Sir Musiz.
          </p>
        </div>

        {/* ------------- FILTER BAR ------------- */}
        <div
          className="rounded-3xl border border-teal-200/60 bg-white/60 backdrop-blur-md shadow-inner
                     flex flex-wrap gap-4 items-center justify-between px-6 py-5 mb-14"
        >
          {/* search */}
          <input
            type="text"
            placeholder="Search title or creator…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="flex-grow min-w-[220px] lg:min-w-[260px] px-4 py-2 border border-gray-300
                       rounded-2xl placeholder-gray-400 focus:ring-2 focus:ring-blue-400/40
                       focus:outline-none bg-white/70"
          />

          {/* category pills */}
          <div className="flex flex-wrap gap-3">
            {categories.map(c => (
              <motion.button
                key={c}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setCategory(c)
                  // keep query
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${
                    category === c
                      ?  'bg-gradient-to-r from-blue-400 to-teal-400 text-white shadow-lg'
                    : 'bg-blue-200 text-gray-700 border-black hover:border-blue-400'
                  }`}
              >
                {c}
              </motion.button>
            ))}
          </div>
        </div>
        {/* ----------- END FILTER BAR ----------- */}

        {/* grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {visible.map(v => (
            <motion.div
              key={v.id}
              whileHover={{ scale: 1.03 }}
              onClick={() => setActive(v)}                    /* ← open modal */
              className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl overflow-hidden shadow-md group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${v.youtubeId}?rel=0&modestbranding=1`}
                  title={v.title}
                  className="w-full h-full transition-transform duration-300 group-hover:scale-105 pointer-events-none"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{v.title}</h3>
                <p className="text-sm text-purple-600">{v.creator}</p>
                <p className="text-sm text-gray-600 mt-1">{v.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* empty state */}
        {visible.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-xl font-semibold">No matching projects found</p>
          </div>
        )}
      </div>

      {/* ───────── FULLSCREEN MODAL ───────── */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-video"
            >
              <iframe
                src={`https://www.youtube.com/embed/${active.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={active.title}
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                className="w-full h-full rounded-xl"
              />
              <button
                onClick={() => setActive(null)}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white text-black font-bold text-xl shadow-md"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
