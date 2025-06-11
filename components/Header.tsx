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
          <Link href="/">Home</Link>
          <Link href="/about" className="hover:text-gray-300">Projects</Link>

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
            <button className="flex items-center hover:text-gray-300 cursor-pointer focus:outline-none">
              <span>WORK</span>
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

          <Link href="/services" className="hover:text-gray-300">Services</Link>
          <Link href="/studio" className="hover:text-gray-300">About Us</Link>
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
        <nav className="sm:hidden bg-white bg-opacity-90 backdrop-blur-md w-full px-8 py-4 flex flex-col space-y-4 uppercase font-light tracking-wide text-black">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>Projects</Link>

          {/* Mobile Work Submenu */}
          <div className="flex flex-col">
            <button
              onClick={toggleMobileWork}
              className="flex items-center justify-between focus:outline-none"
            >
              <span>WORK</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  mobileWorkOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>
            {mobileWorkOpen && (
              <div className="flex flex-col space-y-2 mt-2 pl-4 text-sm">
                <Link href="/work/music" onClick={() => setMenuOpen(false)}>Music Projects</Link>
                <Link href="/work/film" onClick={() => setMenuOpen(false)}>Film Scoring</Link>
                <Link href="/work/commercial" onClick={() => setMenuOpen(false)}>Commercials</Link>
              </div>
            )}
          </div>

          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/studio" onClick={() => setMenuOpen(false)}>About us</Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="border border-black px-4 py-2 rounded text-center hover:bg-black hover:text-white transition duration-200"
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
