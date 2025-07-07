import React from 'react';
import Container from './Container';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-400 text-sm">
      <Container className="px-2 py-4">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 border-b border-gray-800 pb-12 text-center md:text-left place-items-center md:place-items-start">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-white text-3xl font-extrabold mb-4 tracking-wide">SiR Musiz</h3>
            <p className="text-gray-500 mb-6 leading-relaxed text-sm max-w-xs mx-auto md:mx-0">
              Music is the shorthand of emotion. Let professionals handle your rhythm, sound, and vibes.
            </p>
            <div className="flex justify-center md:justify-start space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-blue-500 transition">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-sky-400 transition">
                <FaTwitter size={18} />
              </a>
              <a href="https://www.instagram.com/sirmusiz_studios/" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-pink-500 transition">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">About</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white transition">My History</Link></li>
              <li><Link href="#" className="hover:text-white transition">Blogs</Link></li>
              <li><Link href="#" className="hover:text-white transition">Newsletter</Link></li>
              <li><Link href="#" className="hover:text-white transition">Pricing List</Link></li>
            </ul>
          </div>

          {/* Information Section */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Information</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white transition">Sitemap</Link></li>
              <li><Link href="#" className="hover:text-white transition">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white transition">Contact Me</Link></li>
              <li><Link href="#" className="hover:text-white transition">Community</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center md:justify-between text-xs text-gray-500 text-center space-y-4 md:space-y-0">
          <p>
            © <span className="text-blue-400 font-medium">SiR Musiz</span> 2025. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms & Services</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
