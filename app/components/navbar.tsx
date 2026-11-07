
"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Start", href: "#start" },
    { name: "About me", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="relative w-full sticky bg-[#010a18] top-0 left-0">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">

        <h1 className="text-lg font-bold sm:text-xl">
        </h1>
        <div className="hidden items-center gap-2 md:flex lg:gap-5">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="border-b-2 border-transparent px-3 py-2 text-sm text-white transition-colors duration-300 hover:border-sky-300 hover:text-sky-300 lg:text-base"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          className="rounded-md p-2 text-2xl transition-colors hover:text-sky-300 md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
      {menuOpen && (
        <div className="absolute left-0 top-full z-50 flex w-full flex-col border-t border-gray-700 bg-gray-950 px-5 py-3 shadow-lg md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-gray-800 px-4 py-3 text-white transition-colors duration-300 last:border-b-0 hover:text-sky-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
