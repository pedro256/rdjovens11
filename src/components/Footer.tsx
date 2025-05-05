import React from 'react';
import { Heart, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-indigo-950 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-7 w-7 text-purple-400 mr-2" />
              <span className="text-xl font-bold">Rede de Jovens</span>
            </div>
            <p className="text-gray-300 mb-4">
              E disse-lhes: "Vão pelo mundo todo e preguem o evangelho a todas as pessoas.<br/>
              (Marcos 16:15)
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/rdjovensg11/"
                aria-label="Instagram"
                className="bg-indigo-800 p-2 rounded-full hover:bg-purple-600 transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/559291552832"
                aria-label="WhatsApp"
                className="bg-indigo-800 p-2 rounded-full hover:bg-green-600 transition-colors duration-300"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="mailto:rdjovens143@gmail.com"
                aria-label="Email"
                className="bg-indigo-800 p-2 rounded-full hover:bg-indigo-600 transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Início</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Sobre</a>
              </li>
              <li>
                <a href="#events" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Eventos</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Galeria</a>
              </li>
              <li>
                <a href="#location" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Localização</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Contato</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Eventos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#events" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Culto Firmados na Rocha</a>
              </li>
              <li>
                <a href="#events" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Culto de Gincana</a>
              </li>
              <li>
                <a href="#events" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Encontro de Adoração</a>
              </li>
              <li>
                <a href="#events" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Estudo Bíblico</a>
              </li>
              <li>
                <a href="#events" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Retiros</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-purple-400 flex-shrink-0" />
                <span>R Dinahi, 3,
                    Tancredo Neves, Manaus - AM,
                    69087-130</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-purple-400 flex-shrink-0" />
                <span>+55 (92) 9155-2832</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-purple-400 flex-shrink-0" />
                <span>rdjovens143@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-indigo-900 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} @rdjovens11. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;