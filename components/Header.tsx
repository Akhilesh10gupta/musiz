'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import Container from './Container';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
  const [workHover, setWorkHover] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleMobileWork = () => setMobileWorkOpen(!mobileWorkOpen);

  return (
    <header className="h-[72px] fixed top-0 left-0 w-full z-50 bg-transparent text-black backdrop-blur-sm shadow-sm">
      <Container className="flex items-center justify-between py-4 px-4">
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
        <nav className="hidden sm:flex items-center space-x-6 text-sm uppercase font-light tracking-wide relative">
          <Link href="/" className='font-semibold hover:text-blue-400'>Home</Link>
          <Link href="#projects"  className="hover:text-blue-400 font-semibold">Projects</Link>

          {/* WORK Menu with Hover Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearTimeout((window as any).workTimeout);
              setWorkHover(true);
            }}
            onMouseLeave={() => {
              (window as any).workTimeout = setTimeout(() => {
                setWorkHover(false);
              }, 200);
            }}
          >
            <button className="flex items-center hover:text-blue-400 cursor-pointer focus:outline-none">
              <span className='font-semibold'>WORK</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>

            {workHover && (
              <div
                className="absolute top-full mt-2 left-0 bg-black text-white shadow-lg rounded-md py-2 w-48 z-50"
                onMouseEnter={() => {
                  clearTimeout((window as any).workTimeout);
                  setWorkHover(true);
                }}
                onMouseLeave={() => {
                  (window as any).workTimeout = setTimeout(() => {
                    setWorkHover(false);
                  }, 200);
                }}
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

          <Link href="#services" className="hover:text-blue-500 font-semibold">Services</Link>
          <Link href="/about" className="hover:text-blue-500 font-semibold">About Us</Link>
        </nav>

        {/* Desktop Contact Button */}
        <Link
          href="/contact"
          className="hidden sm:inline-block border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition duration-200"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="sm:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </Container>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden px-4 pt-4">
          <div className="bg-[#1c1c1c] text-gray-300 rounded-lg shadow-xl p-6 flex flex-col space-y-5 text-sm uppercase font-light tracking-wide">
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-white">
              Home
            </Link>
            <Link href="/projects" onClick={() => setMenuOpen(false)} className="text-white ">
              Projects
            </Link>

            {/* Mobile Work Submenu */}
            <div className="flex flex-col">
              <button
                onClick={toggleMobileWork}
                className="flex items-center justify-between text-left hover:text-white focus:outline-none"
              >
                <span>Work</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileWorkOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>
              {mobileWorkOpen && (
                <div className="flex flex-col space-y-2 mt-2 pl-4 text-sm">
                  <Link href="/work/music" onClick={() => setMenuOpen(false)} className="hover:text-white">
                    Music Projects
                  </Link>
                  <Link href="/work/film" onClick={() => setMenuOpen(false)} className="hover:text-white">
                    Film Scoring
                  </Link>
                  <Link href="/work/commercial" onClick={() => setMenuOpen(false)} className="hover:text-white">
                    Commercials
                  </Link>
                </div>
              )}
            </div>

            <Link href="/services" onClick={() => setMenuOpen(false)} className="hover:text-white">
              Services
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-white">
              about us
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 border border-white px-4 py-2 rounded text-center font-semibold hover:bg-white hover:text-black transition duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
