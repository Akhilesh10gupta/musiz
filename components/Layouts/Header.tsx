"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    {
      label: "Work",
      href: "/work",
      subItems: [
        { label: "Music Projects", href: "/work/music" },
        { label: "Film Scoring", href: "/work/film" },
        { label: "Commercials", href: "/work/commercial" },
      ],
    },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = (item: string) => {
    setOpenDropdown(openDropdown === item ? null : item);
  };

  const toggleMobileWork = () => setMobileWorkOpen(!mobileWorkOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent text-white backdrop-blur-sm shadow-sm">
      <Container className="flex items-center justify-between py-4 px-4 ">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 ">
          <Image
            src="/logo.png"
            alt="SiR Musiz Studios Logo"
            width={120}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.subItems ? (
                <>
                  <button
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center uppercase tracking-wider text-sm font-medium text-white/90 hover:text-white transition-colors py-2"
                  >
                    {item.label}
                    {openDropdown === item.label ? (
                      <ChevronUp className="w-4 h-4 ml-1" />
                    ) : (
                      <ChevronDown className="w-4 h-4 ml-1" />
                    )}
                  </button>

                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        onMouseLeave={() => setOpenDropdown(null)}
                        className="absolute left-0 top-full mt-2 w-56 bg-black/90 border border-white/10 rounded-lg shadow-xl backdrop-blur-lg"
                      >
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all border-b border-white/5 last:border-0"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="relative uppercase tracking-wider text-sm font-medium text-white/90 hover:text-white transition-colors py-2 group"
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 h-0.5 bg-blue-500 w-0 group-hover:w-full transition-all duration-300" />
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="hidden sm:inline-block border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition duration-200"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="sm:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </Container>

      {menuOpen && (
        <nav className="sm:hidden bg-transparent bg-opacity-80 backdrop-blur-md w-full px-8 py-4 flex flex-col space-y-4 uppercase font-light tracking-wide text-white">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>

          {/* WORK MENU - MOBILE */}
          <div className="flex flex-col">
            <button
              onClick={toggleMobileWork}
              className="flex items-center justify-between focus:outline-none"
            >
              <span>WORK</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  mobileWorkOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {mobileWorkOpen && (
              <div className="flex flex-col space-y-2 mt-2 pl-4 text-sm">
                <Link href="/work/music" onClick={() => setMenuOpen(false)}>
                  Music Projects
                </Link>
                <Link href="/work/film" onClick={() => setMenuOpen(false)}>
                  Film Scoring
                </Link>
                <Link
                  href="/work/commercial"
                  onClick={() => setMenuOpen(false)}
                >
                  Commercials
                </Link>
              </div>
            )}
          </div>

          <Link href="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link href="/studio" onClick={() => setMenuOpen(false)}>
            About us
          </Link>
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
