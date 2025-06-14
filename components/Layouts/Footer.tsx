import React from 'react';
import Container from './Container';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 text-sm">
      <Container className="px-4 py-12">
        {/* Top Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">SiR Musiz</h3>
            <p className="mb-6 leading-relaxed">
              It is easier to entrust the work to the experts because they are able to provide
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition">
                <FaFacebookF />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition">
                <FaTwitter />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* About Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">My History</Link></li>
              <li><Link href="#" className="hover:text-white">Blogs</Link></li>
              <li><Link href="#" className="hover:text-white">Newsletter</Link></li>
              <li><Link href="#" className="hover:text-white">Pricing List</Link></li>
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Information</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">Sitemap</Link></li>
              <li><Link href="#" className="hover:text-white">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white">Contact Me</Link></li>
              <li><Link href="#" className="hover:text-white">Community</Link></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get It Touch</h4>
            <p className="mb-4 leading-relaxed">
              Stay connected with me and let's know more about my service
            </p>
            <Link
              href="/contact"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold uppercase py-3 px-6 rounded-lg inline-block text-center transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-xs">
          <p className="text-gray-400">
            © <span className="text-yellow-500 font-medium">SiR Musiz</span> 2025 all rights reserved
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Term & Services</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
