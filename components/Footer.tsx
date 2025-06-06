import React from 'react';
import Container from './Container';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 text-sm">
      <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <div className="text-white text-xl font-cursive mb-2 leading-tight">
            <span className="font-semibold">SiR Musiz</span>
            <div className="text-xs tracking-widest">Studios</div>
          </div>
          <p className="mt-2 text-sm">
            We believe in breaking the mould and setting trends through sound.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-medium mb-3">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/work" className="hover:text-white">Work</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
          </ul>
        </div>

        {/* Contact + Policy */}
        <div>
          <h4 className="text-white font-medium mb-3">Company</h4>
          <ul className="space-y-1">
            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
