'use client'
import React from 'react'
import { motion } from 'framer-motion'
import {
  MdTv,
  MdLibraryMusic,
  MdTrendingUp,
  MdVideoLibrary,
  MdBusiness,
  MdStarRate,
} from 'react-icons/md'
import Image from 'next/image'

/* smoother spring animation */
const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 14 },
  },
}

/* stagger container */
const container = {
  show: { transition: { staggerChildren: 0.15 } },
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
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{
      y: -4,
      transition: { duration: 0.25, ease: 'easeInOut' },
    }}
    className="group rounded-3xl border border-white/10 bg-black/25 backdrop-blur-sm
               p-8 flex flex-col items-center text-center gap-4 cursor-pointer
               transition-colors duration-300 hover:bg-blue-400"
  >
    <Icon
      size={42}
      className="text-blue-400 mb-2 transition-colors duration-300 group-hover:text-white"
    />
    <h3 className="text-lg font-semibold tracking-wide text-white">{title}</h3>
    <p className="text-sm leading-relaxed text-white ">{desc}</p>
  </motion.div>
)

export default function Services() {
  const services: Service[] = [
    {
      title: 'Video Production',
      desc: 'Craft impactful videos that captivate audiences and leave a lasting mark.',
      Icon: MdTv,
    },
    {
      title: 'Music Production',
      desc: 'Shape your sound with precision—melodies that move, inspire, and connect.',
      Icon: MdLibraryMusic,
    },
    {
      title: 'Creation & Designs',
      desc: 'Turn bold ideas into striking visuals that engage, persuade, and convert.',
      Icon: MdTrendingUp,
    },
    {
      title: 'Photography & Videography',
      desc: 'Capture powerful moments and product stories with stunning visual detail.',
      Icon: MdVideoLibrary,
    },
    {
      title: 'Animation & Motion Graphics',
      desc: 'Add life to your message with bold, dynamic motion and storytelling.',
      Icon: MdBusiness,
    },
    {
      title: 'Distribution',
      desc: 'Share your story across the right channels to build trust and drive value',
      Icon: MdStarRate,
    },
  ]

  return (
    <section
      id="services"
      className="relative min-h-screen flex flex-col items-center justify-center
                 py-20 px-6 text-center overflow-hidden"
    >
      {/* centered logo */}
      <div className="relative z-10 mb-4">
        <Image src="/logo.png" alt="Logo" width={80} height={80} className="mx-auto" />
      </div>

      <h2 className="relative z-10 text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-wider mb-14">
        Explore&nbsp;<span className="text-blue-400">Our Services</span>
      </h2>

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
