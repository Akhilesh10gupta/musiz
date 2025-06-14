'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.15,
      ease: 'easeOut',
    },
  }),
}

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 overflow-hidden"
    >
      {/* Decorative Animated Blobs */}
      <motion.div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-400/30 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-teal-300/30 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.2, 1], rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />

      {/* Content Wrapper to keep text above blobs */}
      <div className="relative z-10 max-w-5xl w-full">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4"
        >
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400">Us</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-700 max-w-3xl text-lg sm:text-xl mx-auto mb-12 leading-relaxed"
        >
          SiR Musiz is not just a studio – it's where music, dreams, and visual creativity collide. With a passion for originality and emotion, we deliver a wide spectrum of audio‑visual experiences. From official releases to underground demos, every project echoes our relentless devotion to sonic storytelling.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Text Column */}
          <div className="space-y-8 text-left">
            {[
              {
                title: '🎵 Our Mission',
                body: 'To empower emerging artists, elevate unique voices, and craft professional‑quality sound and visuals that resonate deeply with audiences.',
              },
              {
                title: '🚀 What We Offer',
                list: [
                  'Music Production & Mixing',
                  'Studio Sessions',
                  'Visualizer Creation',
                  'YouTube Video Launches',
                  'Collaboration with New Artists',
                ],
              },
              {
                title: '📍 Based In',
                body: 'XYZ, India',
              },
            ].map((section, i) => (
              <motion.div key={i} variants={fadeUp} custom={i + 3}>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {section.title}
                </h3>
                {section.list ? (
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    {section.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700">{section.body}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Image / Visual Column */}
          <motion.div
            variants={fadeUp}
            custom={6}
            className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/logo.png"
              alt="Studio Visual"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Founder Section */}
        <motion.div
          className="mt-24 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={8}
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Founder</h3>
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/founder.jpg"
                alt="Founder"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-600">XYZ </h4>
              <p className="text-gray-600 max-w-md">The creative mind behind SiR Musiz. With a vision to blend sound and story, he leads every project with passion, innovation, and deep musical intuition.</p>
            </div>
          </div>
        </motion.div>

        {/* Call‑To‑Action */}
        <div className="flex justify-center mt-16">
          <motion.a
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
            variants={fadeUp}
            custom={9}
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
    </section>
  )
}

export default About
