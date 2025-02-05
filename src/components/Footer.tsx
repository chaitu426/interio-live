import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // For smooth scrolling
    });
  };

  return (
    <footer className="bg-black text-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Description */}
        <div>
          <h1 className="text-xl font-semibold mb-4">Interio.live</h1>
          <p className="text-gray-400">
            Transforming spaces into modern, elegant designs that inspire and delight. At Interio.live, we bring your dream spaces to life.
          </p>
        </div>

        {/* Office - Headquarters */}
        <div>
          <h4 className="text-lg font-semibold mb-4">HEADQUARTERS</h4>
          <ul className="space-y-2 text-gray-400">
            <li>interio.livesupp0rt@gmail.com</li>
            <li>+91 7020769985</li>
            <li>
              Interio.live,
              <br />
              India, MH 10001
            </li>
          </ul>
        </div>

        {/* Regional Office */}
        <div>
          <h4 className="text-lg font-semibold mb-4">LINKS</h4>
          <ul className="space-y-2 text-gray-400">
            <Link to="/contact" onClick={scrollToTop}>
              <li>Contact Us</li>
            </Link>
            <Link to="/aboutus" onClick={scrollToTop}>
              <li className="mt-2">About Us</li>
            </Link>
            <Link to="/privacy" onClick={scrollToTop}>
              <li className="mt-2">Privacy Policy</li>
            </Link>
            <Link to="/terms" onClick={scrollToTop}>
              <li className="mt-2">Terms & Conditions</li>
            </Link>
          </ul>
        </div>

        {/* Newsletter and Social Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">STAY CONNECTED</h4>
          <p className="text-gray-400 mb-4">
            Join our newsletter to get the latest updates on design trends and tips.
          </p>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-white text-black rounded hover:bg-zinc-200 transition"
            >
              Subscribe
            </button>
          </form>
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-4">FOLLOW US</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/interio.live?igsh=MXJrNHpxcG5pOG8xMA=="
                className="text-gray-400 hover:text-white transition"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-5">
              <p>Copyright © 2025 interio.live</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
