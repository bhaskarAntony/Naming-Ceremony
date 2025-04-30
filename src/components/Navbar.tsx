import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: { en: 'Home', kn: 'ಮುಖಪುಟ' }, path: '/' },
  { label: { en: 'Details', kn: 'ವಿವರಗಳು' }, path: '/details' },
  { label: { en: 'Gallery', kn: 'ಗ್ಯಾಲರಿ' }, path: '/gallery' },
  { label: { en: 'RSVP', kn: 'ಆಹ್ವಾನ' }, path: '/rsvp' },
  { label: { en: 'Gifts', kn: 'ಉಡುಗೊರೆಗಳು' }, path: '/gifts' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'kn' : 'en');
  };

  return (
    <nav className="fixed w-full z-50 bg-dark-200/80 backdrop-blur-md border-b border-primary-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink 
              to="/" 
              className="text-gold-400 font-decorative text-3xl font-bold"
            >
              Naming Ceremony
            </NavLink>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    isActive 
                      ? 'text-gold-400 bg-primary-900/30' 
                      : 'text-white/80 hover:text-gold-400 hover:bg-primary-900/20'
                  }`
                }
              >
                {language === 'en' ? item.label.en : item.label.kn}
              </NavLink>
            ))}
            
            <button
              onClick={toggleLanguage}
              className="ml-4 p-2 rounded-full bg-primary-900/30 text-gold-400 hover:bg-primary-900/50 transition-colors duration-300"
              aria-label="Toggle language"
            >
              <Languages size={20} />
            </button>
          </div>
          
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleLanguage}
              className="p-2 mr-2 rounded-full bg-primary-900/30 text-gold-400 hover:bg-primary-900/50 transition-colors duration-300"
              aria-label="Toggle language"
            >
              <Languages size={20} />
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary-700/20 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-200/95 backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) => 
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive 
                        ? 'text-gold-400 bg-primary-900/30' 
                        : 'text-white/80 hover:text-gold-400 hover:bg-primary-900/20'
                    }`
                  }
                >
                  {language === 'en' ? item.label.en : item.label.kn}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;