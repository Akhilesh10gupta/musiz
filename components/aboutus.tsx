'use client'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - SiR Musiz Studios',
  description: 'Learn more about SiR Musiz Studios, our mission, and the creative minds behind our audio-visual productions.',
}

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import Slider from './SlickNoSSR' // 🔄 Dynamic import to fix SSR hydration issue
import Image from 'next/image'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'



// ✅ Type-safe animation variant
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: 'easeOut' },
  }),
}

const TEAM = [
  { name: 'Shivam Kumar Gupta', role: 'Founder & Head', img: '/team/shivam.jpg' },
  { name: 'Dilip Gupta', role: 'Manager & Finance Manager', img: '/team/male-avatar.jpg' },
  { name: 'Shobha Madheshiya', role: 'Creative & Finance Manager', img: '/team/female-avatar.jpg' },
  { name: 'R Jxy', role: 'Audio Engineer & Music Producer', img: '/team/male-avatar.jpg' },
  { name: 'AD Rapstar', role: 'Mixing Engineer', img: '/team/male-avatar.jpg' },
  { name: 'KRSH', role: 'Mixing Engineer', img: '/team/male-avatar.jpg' },
  { name: 'Adnan', role: 'Video Editor', img: '/team/male-avatar.jpg' },
  { name: 'Ayush', role: 'Graphics designer & Animator', img: '/team/male-avatar.jpg' },
  { name: 'Akhilesh Gupta', role: 'Web Design Manager', img: '/team/akhilesh.jpg' },
  { name: 'Himanshu', role: 'Customer Relationship', img: '/team/male-avatar.jpg' },
];

export default function About() {
  const [likes, setLikes] = useState<Record<number, boolean>>({})

  const toggleLike = (idx: number) => {
    setLikes(prev => ({ ...prev, [idx]: !prev[idx] }))
    if (!likes[idx]) {
      setTimeout(() => setLikes(prev => ({ ...prev, [idx]: true })), 3000)
    }
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 overflow-hidden text-gray-800 bg-gradient-to-br from-teal-100 via-cyan-50 to-blue-50"
    >
      {/* ambient blobs */}
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
        {/* heading */}
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
          SiR Musiz Studios is a creative haven where sonic innovation meets soulful storytelling.
          Our crew turns raw ideas into immersive audio-visual experiences.
        </motion.p>

        {/* carousel */}
        <div className="relative z-10">
          <Slider {...settings}>
            {TEAM.map((member, idx) => (
              <div key={idx} className="px-3">
                <div className="relative bg-white/60 backdrop-blur-lg border border-white/70 rounded-3xl p-6 text-center transition-transform duration-300 hover:scale-105">
                  <div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-white/70 shadow-lg">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      sizes="144px"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-700">{member.role}</p>
                  <button
                    onClick={() => toggleLike(idx)}
                    className="absolute top-4 right-4 text-xl text-teal-500 hover:text-pink-500 transition-colors"
                    aria-label="like profile"
                  >
                    {likes[idx] ? <AiFillHeart /> : <AiOutlineHeart />}
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* call to action */}
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

      {/* hide arrows on small screens */}
      <style jsx global>{`
        @media (max-width: 1023px) {
          .slick-prev,
          .slick-next {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}
