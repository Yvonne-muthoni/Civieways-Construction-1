import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-transparent py-2.5">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo + Company Name */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/logo/civie logo.png"
            alt="Civieways Logo"
            className="h-12 w-auto object-contain"
          />

          <span className="text-yellow-400 font-bold text-lg md:text-xl">
            Civieways Construction Ltd
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-yellow-400 font-extrabold">

          <Link
            to="/"
            className="hover:text-yellow-300 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-yellow-300 transition duration-300"
          >
            About
          </Link>

          <Link
            to="/services"
            className="hover:text-yellow-300 transition duration-300"
          >
            Services
          </Link>

          <Link
            to="/projects"
            className="hover:text-yellow-300 transition duration-300"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="hover:text-yellow-300 transition duration-300"
          >
            Contact
          </Link>

        </div>

      </div>
    </nav>
  );
}