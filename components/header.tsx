"use client";

import { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-neutral sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Marc's Portfolio</h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-highlight">About</a>
          <a href="#projects" className="hover:text-highlight">Projects</a>
          <a href="#contact" className="hover:text-highlight">Contact</a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <span className="text-2xl">&#10005;</span> // X icon
          ) : (
            <span className="text-2xl">&#9776;</span> // hamburger icon
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-primary text-neutral px-6 py-4 space-y-3">
          <a href="#about" className="block hover:text-highlight">About</a>
          <a href="#projects" className="block hover:text-highlight">Projects</a>
          <a href="#contact" className="block hover:text-highlight">Contact</a>
        </nav>
      )}
    </header>
  );
};
