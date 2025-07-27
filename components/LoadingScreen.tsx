'use client'
import { motion } from 'framer-motion'

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a] text-white">
      <div className="flex items-end justify-center space-x-1 h-8">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 bg-blue-400 rounded-full"
            animate={{
              height: ['4px', '32px', '4px'],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
      <p className="mt-4 text-sm tracking-[0.2em] text-gray-400 animate-pulse">TUNING UP...</p>
    </div>
  )
}

export default LoadingScreen