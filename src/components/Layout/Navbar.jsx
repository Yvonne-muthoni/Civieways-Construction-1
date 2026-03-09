import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-blue-900 shadow-lg py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo/civie logo.png"
            alt="Civieways Logo"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-white font-medium">

          <Link
            to="/"
            className="hover:text-yellow-400 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-yellow-400 transition duration-300"
          >
            About
          </Link>

          <Link
            to="/services"
            className="hover:text-yellow-400 transition duration-300"
          >
            Services
          </Link>

          <Link
            to="/projects"
            className="hover:text-yellow-400 transition duration-300"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="hover:text-yellow-400 transition duration-300"
          >
            Contact
          </Link>

        </div>
      </div>
    </nav>
  );
}