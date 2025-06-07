'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-teal-100 via-cyan-50 to-blue-50 flex items-center justify-center text-center overflow-hidden">
      {/* Animated Background Blur Circle */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-800 opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-600 opacity-20 rounded-full blur-3xl z-0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 px-6"
      >
        <h1 className="text-black text-4xl sm:text-6xl font-bold leading-tight">
          Your next big<br />project <span className="text-blue-400">awaits!</span>
        </h1>

        <p className="text-black mt-4 text-lg max-w-xl mx-auto">
          We’re on with your hustle journey, through our <br />comprehensive sound and music production services.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-md shadow-md hover:bg-blue-500 hover:text-white transition duration-300"
        >
          BOOK NOW
        </motion.button>
      </motion.div>
    </div>
  )
}

export default Hero
