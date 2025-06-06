'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import Container from './Container';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'; // from shadcn/ui

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleMobileWork = () => setMobileWorkOpen(!mobileWorkOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent text-white backdrop-blur-sm shadow-sm">
      <Container className="flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <div className="text-2xl font-cursive">
          <span className="font-semibold">SiR Musiz</span>
          <div className="text-xs tracking-widest ml-1">Studios</div>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden sm:flex items-center space-x-6 text-sm uppercase font-light tracking-wide">
          <Link href="/" className="">Home</Link>
          <Link href="/about" className="hover:text-gray-300">Projects</Link>

          {/* WORK MENU - DESKTOP */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center hover:text-gray-300 cursor-pointer focus:outline-none">
              <span>WORK</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-transparent text-white">
              <DropdownMenuItem asChild>
                <Link href="/work/music">Music Projects</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/work/film">Film Scoring</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/work/commercial">Commercials</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/services" className="hover:text-gray-300">Services</Link>
          <Link href="/studio" className="hover:text-gray-300">About Us</Link>
        </nav>

        {/* Contact Button - hide on mobile */}
        <Link
          href="/contact"
          className="hidden sm:inline-block border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition duration-200"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="sm:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </Container>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="sm:hidden bg-transparent bg-opacity-80 backdrop-blur-md w-full px-8 py-4 flex flex-col space-y-4 uppercase font-light tracking-wide text-white">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>Projects</Link>

          {/* WORK MENU - MOBILE */}
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
            className="border border-white px-4 py-2 rounded text-center hover:bg-white hover:text-black transition duration-200"
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
