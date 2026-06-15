import React, { useState } from 'react';

const navLinks = [
  { href: "#home", label: "Inicio" },
  { href: "#about", label: "Nosotros" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#000000]/80 backdrop-blur-md text-white fixed top-0 left-0 w-full z-50 border-b border-neutral-800 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 h-20 flex items-center justify-between">
        
        {/* Logo / Nombre de la Marca */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-black tracking-tight uppercase">
            Chocolate <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-sky-400">Innovation</span>
          </span>
        </div>

        {/* Menú de Escritorio */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wider uppercase">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.label === "Contacto" ? (
                <a href={link.href} className="bg-sky-400/10 text-sky-200 border border-sky-400/20 px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-sky-200 hover:to-sky-400 hover:text-neutral-950 hover:border-transparent transition-all duration-300">
                  {link.label}
                </a>
              ) : (
                <a href={link.href} className="text-gray-400 hover:text-sky-300 transition-colors duration-200">
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Botón de Menú Móvil (Hamburguesa) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-sky-300 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú Desplegable Móvil */}
      <div className={`md:hidden bg-[#000000] border-b border-neutral-800 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100 block' : 'max-h-0 opacity-0 hidden'}`}>
        <ul className="px-6 py-4 space-y-4 text-sm font-medium tracking-wider uppercase">
          {navLinks.map((link) => (
            <li key={link.href} className={link.label === "Contacto" ? "pt-2" : ""}>
              <a 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className={link.label === "Contacto" 
                  ? "block text-center bg-gradient-to-r from-sky-200 to-sky-400 text-neutral-950 font-bold py-2.5 px-4 rounded-xl shadow-lg shadow-sky-400/10 text-xs"
                  : "block text-gray-400 hover:text-sky-300 transition-colors"
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;