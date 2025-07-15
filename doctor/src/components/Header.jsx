import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Header() {
     const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
        <header className="flex justify-between items-center px-6 py-4 shadow-md">
        <div className="text-xl font-bold text-blue-600">Prescripto</div>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl focus:outline-none"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        <nav className="hidden md:flex space-x-4 text-sm">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/doctors" className="hover:text-blue-600">All Doctors</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          <Link to="/admin">
            <button className="bg-blue-600 text-white px-4 py-1 rounded text-sm">Admin Panel</button>
          </Link>
        </nav>
      </header>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden flex flex-col px-6 space-y-2 bg-white shadow py-4 text-sm">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/doctors" className="hover:text-blue-600">All Doctors</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          <Link to="/admin">
            <button className="bg-blue-600 text-white px-4 py-1 rounded w-max">Admin Panel</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Header