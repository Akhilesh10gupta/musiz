import React from 'react';
import Container from './Container';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-400 text-sm">
      <Container className="px-4 py-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 border-b border-gray-800 pb-6 text-center md:text-left">
          {/* Brand Info */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-2 tracking-tight">SiR Musiz Studios</h3>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs mx-auto md:mx-0">
              Music is the shorthand of emotion.<br />Let professionals handle your rhythm and vibes.
            </p>
            <div className="flex justify-center md:justify-start mt-3 space-x-3">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-white hover:text-white hover:bg-blue-600 transition duration-300">
                <FaFacebookF size={13} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-white hover:text-white hover:bg-sky-500 transition duration-300">
                <FaTwitter size={13} />
              </a>
              <a href="https://www.instagram.com/sirmusiz_studios/" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-white hover:text-white hover:bg-pink-500 transition duration-300">
                <FaInstagram size={13} />
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="text-white font-semibold text-base mb-2">About</h4>
            <ul className="space-y-1 text-xs">
              <li><Link href="#" className="hover:text-white transition">My History</Link></li>
              <li><Link href="#" className="hover:text-white transition">Blogs</Link></li>
              <li><Link href="#" className="hover:text-white transition">Newsletter</Link></li>
              <li><Link href="#" className="hover:text-white transition">Pricing List</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-white font-semibold text-base mb-2">Information</h4>
            <ul className="space-y-1 text-xs">
              <li><Link href="#" className="hover:text-white transition">Sitemap</Link></li>
              <li><Link href="#" className="hover:text-white transition">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white transition">Contact Me</Link></li>
              <li><Link href="#" className="hover:text-white transition">Community</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-4 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-500 space-y-2 md:space-y-0">
          <p className="text-center">
            © <span className="text-blue-400 font-medium">SiR Musiz</span> {new Date().getFullYear()}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms & Services</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
