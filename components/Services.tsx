'use client'
import React from 'react'
import { motion } from 'framer-motion'
import {
  MdTv,
  MdEditDocument,
  MdTrendingUp,
  MdVideoLibrary,
  MdBusiness,
  MdStarRate,
} from 'react-icons/md'

/* ---------- hero‑style card animation ---------- */
const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: 'easeOut' },
  },
}

/* ---------- stagger container ---------- */
const container = {
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

type Service = {
  title: string
  desc: string
  Icon: React.ComponentType<{ size?: number; className?: string }>
}

const ServiceCard: React.FC<Service> = ({ title, desc, Icon }) => (
  <motion.div
    variants={cardVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}   /* animate on first scroll‑in */

    /* hover lift only */
    whileHover={{
      y: -4,
      transition: { duration: 0.25, ease: 'easeInOut' },
    }}

    className="group rounded-3xl border border-white/ bg-black/25 backdrop-blur-sm
               p-8 flex flex-col gap-4 cursor-pointer"
  >
    <Icon size={42} className="text-blue-400 mb-2" />
    <h3 className="text-lg font-semibold tracking-wide text-white">{title}</h3>
    <p className="text-sm leading-relaxed text-gray-300">{desc}</p>
  </motion.div>
)

const Services = () => {
  const services: Service[] = [
    {
      title: 'Video Production',
      desc: 'Compelling ads that grab attention, tell your story, and leave a lasting impact.',
      Icon: MdTv,
    },
    {
      title: 'Music Production',
      desc: 'From brainstorming to scripting—craft stories that resonate and bring visions to life.',
      Icon: MdEditDocument,
    },
    {
      title: 'Creation & designes',
      desc: 'High‑performing ads designed to engage, convert, and drive measurable results.',
      Icon: MdTrendingUp,
    },
    {
      title: 'Photography & Videosgraphy',
      desc: 'Simplify complex product features into engaging videos that are impossible to resist.',
      Icon: MdVideoLibrary,
    },
    {
      title: 'Animation & Motion Graphics',
      desc: 'Showcase your company’s values and impact with powerful stories that matter.',
      Icon: MdBusiness,
    },
    {
      title: 'Distribution',
      desc: 'Turn real customer experiences into compelling stories that build trust and value.',
      Icon: MdStarRate,
    },
  ]

  return (
    <section
      id="services"
      className="relative min-h-screen flex flex-col items-center justify-center
                 py-20 px-6 text-center overflow-hidden"
    >
      {/* Section Heading */}
      <h2 className="relative z-10 text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-wider mb-14">
        Explore&nbsp;<span className="text-blue-400">Our Services</span>
      </h2>

      {/* Service Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full"
      >
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </motion.div>
    </section>
  )
}

export default Services
