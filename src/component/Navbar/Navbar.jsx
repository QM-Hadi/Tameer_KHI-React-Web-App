import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoMdContact } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="top-0 left-0 w-full z-50 p-5 shadow-lg bg-gradient-to-r navbar_Con text-white">
        <div className="flex items-center justify-between px-6">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide text-yellow-400">🏗️ Tameer KHI</div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="hover:text-yellow-300 transition">
              <GiHamburgerMenu className="text-3xl" />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2 font-medium">
            <Link to="/" className="navbar_Links transition hover:text-yellow-300">Home</Link>
            <Link to="/about" className="navbar_Links transition hover:text-yellow-300">About</Link>
            <Link to="/places" className="navbar_Links transition hover:text-yellow-300">Places</Link>
            <Link to="/labours" className="navbar_Links transition hover:text-yellow-300">Labours</Link>
            <Link to="/services" className="navbar_Links transition hover:text-yellow-300">Services</Link>
            <Link to="/register" className="navbar_Links transition hover:text-yellow-300">REGISTER</Link>

            <Link to="/contact">
              <button className="Navbar_Btn flex items-center gap-2 px-6 py-2 rounded-full font-semibold shadow-lg bg-yellow-500 text-white hover:bg-yellow-400 transition">
                <IoMdContact className="text-xl" />
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-blue-400 bg-opacity-90 px-6 py-4 space-y-4 text-center font-medium">
            <Link to="/" className="block hover:text-yellow-300 transition cursor-pointer">Home</Link>
            <Link to="/about" className="block hover:text-yellow-300 transition cursor-pointer">About</Link>
            <Link to="/places" className="block hover:text-yellow-300 transition cursor-pointer">Places</Link>
            <Link to="/labours" className="block hover:text-yellow-300 transition cursor-pointer">Labours</Link>
            <Link to="/services" className="block hover:text-yellow-300 transition cursor-pointer">Services</Link>
            <Link to="/register" className="block hover:text-yellow-300 transition cursor-pointer">REGISTER</Link>
            <Link to="/contact">
              <button className="Navbar_Btn flex items-center gap-2 px-6 py-2 rounded-full font-semibold shadow-lg bg-yellow-500 text-white hover:bg-yellow-400 transition">
                <IoMdContact className="text-xl" />
                Contact Us
              </button>
            </Link>

          </div>
        )}
      </nav>

      {/* Spacer */}
    </div>
  );
};

export default Navbar;
