import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import Rdj11Ico from '../icons/Rdj11Ico';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Eventos', href: '#events' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Localização', href: '#location' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-indigo-950/95 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          
          <Rdj11Ico color='#fff' className="h-8 w-8 text-purple-400" />
          <span className="text-white font-bold text-xl">G11</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-purple-300 transition-colors duration-200 text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://www.instagram.com/rdjovensg11/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white hover:text-purple-300"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-indigo-950 absolute w-full"
        >
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-white hover:bg-indigo-800 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://www.instagram.com/rdjovensg11/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 text-white hover:bg-indigo-800 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              <Instagram className="h-5 w-5 mr-2" />
              Instagram
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;