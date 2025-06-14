"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/sIR-music.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center max-w-4xl mx-auto mt-50"
        >
          {/* Main heading */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
              className="text-4xl sm:text-6xl font-bold text-white mb-6"
            >
              Your next big project{" "}
              <motion.span
                className="text-blue-400 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.6,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                awaits!
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    delay: 0.8,
                    duration: 0.6,
                  }}
                  className="absolute bottom-0 left-0 w-full h-1 bg-blue-400 origin-left"
                />
              </motion.span>
            </motion.h1>
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7,
              duration: 0.8,
              ease: "backOut",
            }}
            className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                staggerChildren: 0.05,
                delayChildren: 0.8,
              }}
              className="inline-block"
            >
              {"We're with you on your creative journey through our comprehensive sound and music production services."
                .split(" ")
                .map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block mr-1.5"
                  >
                    {word}
                  </motion.span>
                ))}
            </motion.span>
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row justify-center gap-5"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(59, 130, 246, 0.7)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">BOOK NOW</span>
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                whileHover={{ x: 0, opacity: 0.2 }}
                className="absolute inset-0 bg-white/20 rounded-full"
                transition={{ duration: 0.6 }}
              />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">OUR WORK</span>
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                whileHover={{ x: 0, opacity: 0.2 }}
                className="absolute inset-0 bg-black/10 rounded-full"
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </motion.div>

          {/* Music Visualizer Effect  */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex justify-center mt-16 space-x-1 h-8 items-end"
          >
            {[2, 4, 6, 8, 10, 8, 6, 4, 2].map((height, i) => (
              <motion.div
                key={i}
                animate={{
                  height: [height, height / 2, height],
                }}
                transition={{
                  duration: 1 + i * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="w-1.5 bg-blue-400 rounded-t-sm"
                style={{ height: `${height}px` }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
