"use client";

import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-highlight2 text-neutral sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center">


        {/* Desktop nav */}
        <nav className="hidden md:flex text-lg font-extrabold">
          <div className="flex gap-4 items-center">  
            <a href="#about" className="hover:text-secondary hover:underline transition duration-300 ease-in-out ">About Me</a>
            <a href="#skills" className="hover:text-secondary hover:underline transition duration-300 ease-in-out">Skills</a>
            <a href="#experiences" className="hover:text-secondary hover:underline transition duration-300 ease-in-out">Experiences</a>
          </div>  

          <Link href="/"> 
              <img src="./logo/MyLogo.png" alt="Logo" className="h-20 w-40 "/>
          </Link>
        
          <div className="flex gap-4 items-center">
            <a href="/projects" className="hover:text-secondary hover:underline transition duration-300 ease-in-out">Featured Projects</a>
            <a href="#contact" className="hover:text-secondary hover:underline transition duration-300 ease-in-out">Let's Talk!</a>
          </div>

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
        <nav className="md:hidden bg-highlight2 text-neutral px-6 py-4 space-y-3 font-semibold">
          <a href="#about" className="block hover:text-secondary">About</a>
          <a href="#skills" className="block hover:text-secondary">Skills</a>
          <a href="#experiences" className="block hover:text-secondary">Experiences</a>
          <a href="#about" className="block hover:text-secondary">Featured Projects</a>
          <a href="#contact" className="block hover:text-secondary">Let's Talk!</a>
        </nav>
      )}
    </header>
  );
};
