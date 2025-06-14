'use client'

import React, { useRef, useState } from 'react'
import { motion, useCycle } from 'framer-motion'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import Image from 'next/image'

/**
 * Enhanced Hero section
 * --------------------------------------------------
 * - Larger, gradient headline
 * - Floating sparkles (subtle parallax)
 * - Vinyl has glow & gentle bob animation
 * - Play / pause SVG icons (react‑icons)
 * - Gradient CTA button
 * --------------------------------------------------
 */

export default function Hero() {
  const [isPlaying, toggle] = useCycle(false, true)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handleToggle = () => {
    if (!audioRef.current) return
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    toggle()
  }

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] pt-32 lg:pt-40 bg-gradient-to-br from-teal-100 via-cyan-50 to-blue-50
                 flex flex-col xl:flex-row items-center justify-center gap-16 xl:gap-32 px-6 pb-24 overflow-hidden"
    >
      {/* blurred blobs */}
      <div className="absolute -top-48 -left-48 w-[680px] h-[680px] bg-blue-800/20 rounded-full blur-[140px]" />
      <div className="absolute -bottom-48 -right-48 w-[560px] h-[560px] bg-indigo-600/20 rounded-full blur-[120px]" />

      {/* floating sparkles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-white rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
            y: [0, -40],
            x: [0, 20]
          }}
          transition={{ repeat: Infinity, duration: 6 + i, delay: i * 0.7, ease: 'easeInOut' }}
          style={{ top: `${20 + i * 10}%`, left: `${10 + i * 12}%` }}
        />
      ))}

      {/* hidden audio */}
      <audio ref={audioRef} src="/music.mp3" preload="auto" />

      {/* Text block */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="max-w-2xl text-center xl:text-left"
      >
        <h1 className="text-4xl sm:text-6xl xl:text-8xl font-extrabold leading-tight text-black">
          Your next big<br />
          project <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">awaits!</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-800/90">
          We’re on with your hustle journey, through our<br />comprehensive sound and music production services.
        </p>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-10 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500
                     text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
        >
          BOOK NOW
        </motion.a>
      </motion.div>

      {/* Vinyl player */}
      <motion.div
        initial={{ opacity: 0, x: 120, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.1, ease: 'easeOut', delay: 0.4 }}
        className="relative w-64 h-64 sm:w-80 sm:h-80 xl:w-[23rem] xl:h-[23rem]"
      >
        {/* glow ring */}
        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />

        {/* spinning vinyl */}
        <motion.img
          src="/vinyl.png"
          alt="Vinyl"
          animate={{ rotate: isPlaying ? 360 : 0, y: [0, -6, 0] }}
          transition={{ repeat: Infinity, repeatType: 'loop', ease: 'linear', duration: 8 }}
          className="relative w-full h-full object-contain rounded-full shadow-2xl"
        />

        {/* control button */}
        <button
          onClick={handleToggle}
          className="absolute inset-0 flex items-center justify-center focus:outline-none"
        >
          <span className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-500 hover:bg-blue-600 text-white rounded-full
                           flex items-center justify-center shadow-lg transition-colors">
            {isPlaying ? <BsPauseFill size={28} /> : <BsFillPlayFill size={28} />}
          </span>
        </button>
      </motion.div>
    </section>
  )
}
