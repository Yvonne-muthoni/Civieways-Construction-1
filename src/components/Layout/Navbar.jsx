import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white py-2.5 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo + Company Name */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/logo/civie logo.png"
            alt="Civieways Logo"
            className="h-12 w-auto object-contain"
          />

          <span className="text-blue-800 font-bold text-lg md:text-xl">
            Civieways Construction Ltd
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-blue-800 font-extrabold">
          <Link to="/" className="hover:text-yellow-300 transition duration-300">
            Home
          </Link>

          <Link to="/about" className="hover:text-yellow-300 transition duration-300">
            About Us
          </Link>

          <Link to="/services" className="hover:text-yellow-300 transition duration-300">
            Our Services
          </Link>

          <Link to="/projects" className="hover:text-yellow-300 transition duration-300">
            Projects
          </Link>

          <Link to="/contact" className="hover:text-yellow-300 transition duration-300">
            Contact
          </Link>
        </div>

        {/* Burger Menu Button (Mobile) */}
        <button
          className="md:hidden text-blue-800 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col items-center space-y-6 py-6 text-blue-800 font-bold">

            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>

            <Link to="/services" onClick={() => setMenuOpen(false)}>
              Our Services
            </Link>

            <Link to="/projects" onClick={() => setMenuOpen(false)}>
              Projects
            </Link>

            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>

          </div>
        </div>
      )}

    </nav>
  );
}