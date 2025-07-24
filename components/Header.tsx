'use client'

import React, { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu, X } from 'lucide-react'
import Container from './Container'
import { motion, AnimatePresence } from 'framer-motion'

const Header: React.FC = () => {
  /* ------------ state ------------ */
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false)
  const [workHover, setWorkHover] = useState(false)

  /* Browser timeout ID is a number, so type the ref that way */
  const hoverTimeoutRef = useRef<number | null>(null)

  /* ------------ helpers ------------ */
  const toggleMenu = () => setMenuOpen(prev => !prev)
  const toggleMobileWork = () => setMobileWorkOpen(prev => !prev)

  const clearHoverTimeout = () => {
    if (hoverTimeoutRef.current !== null) {
      window.clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
  }

  const startHoverTimeout = () => {
    hoverTimeoutRef.current = window.setTimeout(() => setWorkHover(false), 200)
  }

  /* ------------ render ------------ */
  return (
    <header className="fixed top-0 left-0 z-50 h-[72px] w-full bg-transparent text-black backdrop-blur-sm shadow-sm">
      <Container className="flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="SiR Musiz Studios Logo"
            width={120}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="relative hidden items-center space-x-6 text-sm uppercase font-light tracking-wide sm:flex">
          <Link href="/" className="font-semibold hover:text-blue-400">
            Home
          </Link>
          <Link href="/Projects" className="font-semibold hover:text-blue-400">
            Projects
          </Link>

          {/* WORK menu with hover dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearHoverTimeout()
              setWorkHover(true)
            }}
            onMouseLeave={startHoverTimeout}
          >
            <button className="flex cursor-pointer items-center focus:outline-none hover:text-blue-400">
              <span className="font-semibold">WORK</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            {workHover && (
              <div
                className="absolute left-0 top-full z-50 mt-2 w-48 rounded-md bg-black py-2 text-white shadow-lg"
                onMouseEnter={clearHoverTimeout}
                onMouseLeave={startHoverTimeout}
              >
                <Link
                  href="/work/music"
                  className="block px-4 py-2 hover:bg-white hover:text-black"
                >
                  Music Projects
                </Link>
                <Link
                  href="/work/film"
                  className="block px-4 py-2 hover:bg-white hover:text-black"
                >
                  Film Scoring
                </Link>
                <Link
                  href="/work/commercial"
                  className="block px-4 py-2 hover:bg-white hover:text-black"
                >
                  Commercials
                </Link>
              </div>
            )}
          </div>

          <Link href="/artist" className="font-semibold hover:text-blue-500">
            Artist
          </Link>
          <Link href="/#services" className="font-semibold hover:text-blue-500">
            Services
          </Link>
          <Link href="/ekart" className="font-semibold hover:text-blue-500">
            Ekart
          </Link>
          <Link href="/#about" className="font-semibold hover:text-blue-500">
            About&nbsp;Us
          </Link>
        </nav>

        {/* Desktop contact button */}
        <Link
          href="/contact"
          className="hidden border border-black px-4 py-2 font-semibold transition duration-200 hover:bg-black hover:text-white sm:inline-block"
        >
          Contact&nbsp;Us
        </Link>

        {/* Mobile menu toggle */}
        <button
          onClick={toggleMenu}
          className="focus:outline-none sm:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
      {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="px-4 pt-4 sm:hidden"
          >
          <div className="flex flex-col space-y-5 rounded-lg bg-[#1c1c1c] p-6 text-sm uppercase font-light tracking-wide text-gray-300 shadow-xl">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/Projects"
              onClick={() => setMenuOpen(false)}
              className="text-white"
            >
              Projects
            </Link>
            {/* Mobile Work submenu */}
            <div className="flex flex-col">
              <button
                onClick={toggleMobileWork}
                className="flex items-center justify-between text-left focus:outline-none hover:text-white"
              >
                <span>WORK</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileWorkOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>
              {mobileWorkOpen && (
                <div className="mt-2 flex flex-col space-y-2 pl-4 text-sm">
                  <Link
                    href="/work/music"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-white"
                  >
                    Music Projects
                  </Link>
                  <Link
                    href="/work/film"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-white"
                  >
                    Film Scoring
                  </Link>
                  <Link
                    href="/work/commercial"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-white"
                  >
                    Commercials
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/artist"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white"
            >
              Artist
            </Link>
            <Link
              href="/#services"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/ekart"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white"
            >
              Ekart
            </Link>
            <Link
              href="/#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white"
            >
              About&nbsp;Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded border border-white px-4 py-2 text-center font-semibold transition duration-200 hover:bg-white hover:text-black"
            >
              Contact&nbsp;Us
            </Link>
          </div>
          </motion.div>
      )}
      </AnimatePresence>
    </header>
  )
}

export default Header
