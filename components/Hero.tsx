'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useCycle } from 'framer-motion'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'

export default function Hero() {
  /* ───────────────── mounted flag ───────────────── */
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  /* ───────────────── canvas ───────────────── */
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (!canvasRef.current || typeof window === 'undefined') return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const isMobile = window.matchMedia('(max-width: 640px)').matches
    const dpr = isMobile ? 1 : window.devicePixelRatio || 1

    const setSize = () => {
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    setSize()

    const colors = ['#8B5CF6', '#06B6D4', '#F59E0B']
    const COUNT = isMobile ? 6 : 50
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))

    let skipFrame = false
    const step = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1
        if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1

        ctx.save()
        ctx.globalAlpha = p.opacity
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()

        // Only draw lines on desktop
        if (!isMobile) {
          for (let j = i + 1; j < particles.length; j++) {
            const o = particles[j]
            const dist = Math.hypot(p.x - o.x, p.y - o.y)
            if (dist < 100) {
              ctx.save()
              ctx.globalAlpha = (100 - dist) / 100 * 0.2
              ctx.strokeStyle = p.color
              ctx.lineWidth = 0.5
              ctx.beginPath()
              ctx.moveTo(p.x, p.y)
              ctx.lineTo(o.x, o.y)
              ctx.stroke()
              ctx.restore()
            }
          }
        }
      })

      if (isMobile) {
        setTimeout(step, 50) // ~20 FPS
      } else {
        requestAnimationFrame(step)
      }
    }
    step()

    window.addEventListener('resize', setSize)
    return () => window.removeEventListener('resize', setSize)
  }, [mounted])

  /* ───────────────── vinyl / audio ───────────────── */
  const [isPlaying, toggle] = useCycle(false, true)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handleToggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) audio.pause()
    else void audio.play().catch(() => {})
    toggle()
  }

  /* ───────────────── sparkles ───────────────── */
  const [sparkles, setSparkles] = useState(8)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isMobile = window.matchMedia('(max-width: 640px)').matches
      setSparkles(isMobile ? 4 : 8)
    }
  }, [])

  /* ───────────────── avoid SSR mismatch ───────────────── */
  if (!mounted) return null

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] pt-32 lg:pt-40 bg-gradient-to-br from-teal-100 via-cyan-50 to-blue-50
                 flex flex-col xl:flex-row items-center justify-center gap-16 xl:gap-32 px-6 pb-24 overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* blurred blobs */}
      <div className="absolute -top-48 -left-48 w-[680px] h-[680px] bg-blue-800/20 rounded-full blur-[140px]" />
      <div className="absolute -bottom-48 -right-48 w-[560px] h-[560px] bg-indigo-600/20 rounded-full blur-[120px]" />

      {/* sparkles */}
      {[...Array(sparkles)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-white rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.8, 0], scale: [0, 1, 0], y: [0, -40], x: [0, 20] }}
          transition={{ repeat: Infinity, duration: 6 + i, delay: i * 0.7, ease: 'easeInOut' }}
          style={{ top: `${20 + i * 10}%`, left: `${10 + i * 12}%` }}
        />
      ))}

      {/* audio element */}
      <audio ref={audioRef} src="/music.mp3" preload="auto" />

      {/* text block */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="max-w-2xl w-full px-2 sm:px-0 text-center xl:text-left"
      >
        <h1 className="text-4xl sm:text-5xl xl:text-8xl font-extrabold leading-tight sm:leading-tight xl:leading-tight text-black drop-shadow-md">
          Your next big<br />
          project&nbsp;
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-black drop-shadow-lg hero-animated-gradient">
            awaits!
          </span>
          <span className="hero-music-wave sm:hidden"></span>
        </h1>
        <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-gray-800/90 leading-relaxed sm:leading-relaxed">
          We’re on with your hustle journey, through our<br className='hidden xs:inline' />
          comprehensive sound and music production services.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-8 sm:mt-12 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500
                     text-white text-lg sm:text-xl font-bold shadow-lg hover:shadow-xl transition-shadow"
        >
          BOOK NOW
        </motion.a>
      </motion.div>

      {/* vinyl player */}
      <motion.div
        initial={{ opacity: 0, x: 120, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.1, ease: 'easeOut', delay: 0.4 }}
        className="relative w-64 h-64 sm:w-80 sm:h-80 xl:w-[23rem] xl:h-[23rem]"
      >
        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />

        <motion.img
          src="/vinyl.png"
          alt="Vinyl"
          animate={{ rotate: isPlaying ? [0, 360] : [0], y: [0, -6, 0] }}
          transition={{ repeat: isPlaying ? Infinity : 0, repeatType: 'loop', ease: 'linear', duration: 8 }}
          className="relative w-full h-full rounded-full object-contain shadow-2xl"
        />

        <motion.button
          onClick={handleToggle}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="absolute inset-0 flex items-center justify-center focus:outline-none"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {!isPlaying && (
            <span className="absolute inline-flex h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-blue-500/70 opacity-75 animate-ping" />
          )}
          <span className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg">
            {isPlaying ? <BsPauseFill size={28} /> : <BsFillPlayFill size={28} />}
          </span>
        </motion.button>
      </motion.div>
    </section>
  )
}