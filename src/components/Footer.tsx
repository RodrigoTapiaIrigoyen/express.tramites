import React from 'react';
import { Scale } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Scale className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">GestoresExpress</span>
            </div>
            <p className="mt-4 text-gray-400">
              Expertos en gestión legal y administrativa para particulares y empresas.
              Soluciones profesionales adaptadas a tus necesidades.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Horario</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Lunes - Viernes: 9:00 - 18:00</li>
              <li>Sábado: 9:00 - 13:00</li>
              <li>Domingo: Cerrado</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} GestoresExpress. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;