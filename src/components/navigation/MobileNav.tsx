import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-800">Menu</h2>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-800 transition"
            >
              ✕
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-4">
            <Link
              to="/"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-800 rounded transition"
              onClick={onClose}
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-800 rounded transition"
              onClick={onClose}
            >
              Contact Us
            </Link>
            <Link
              to="/aboutus"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-800 rounded transition"
              onClick={onClose}
            >
              About Us
            </Link>
          </nav>

          {/* Contact Section */}
          <div className="flex items-center space-x-3 border-t pt-4">
            <Mail className="h-6 w-6 text-gray-800" />
            <a 
              href="mailto:interio.livesupp0rt@gmail.com" 
              className="text-gray-700 hover:text-gray-800 transition"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
