import { useState } from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

import MobileNav from './navigation/MobileNav';
const logo = "/images/logo.jpeg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50  rounded-3xl m-1  shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={logo}
                alt="InteriorStudio Logo"
                className="h-14 w-auto" // Adjust height and width as needed
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-right  space-x-8">
            <Link
              to="/portfolio"
              className="text-gray-800 hover:text-gray-900 font-neutral-50 transition duration-300"
            >
              portfolio
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-gray-900 font-neutral-50 transition duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/aboutus"
              className="text-gray-800 hover:text-gray-900 font-neutral-50 transition duration-300"
            >
              About Us
            </Link>
            <a href="mailto:interio.livesupp0rt@gmail.com" className="text-gray-800 hover:text-gray-400 transition">
              <Mail className="h-6 w-6" />
            </a>

          </nav>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-gray-900 transition duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
