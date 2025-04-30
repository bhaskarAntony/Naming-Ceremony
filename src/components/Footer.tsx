import React from 'react';
import { Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-400 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center">
          <div className="text-center mb-4">
            <h3 className="text-gold-400 font-decorative text-2xl font-bold mb-2">
              {language === 'en' ? 'Naming Ceremony' : 'ನಾಮಕರಣ ಸಮಾರಂಭ'}
            </h3>
            <p className={`text-gray-400 ${language === 'kn' ? 'font-kannada' : ''}`}>
              {language === 'en' 
                ? 'With Best Compliments From:' 
                : 'ಇವರಿಂದ ಶುಭಾಶಯಗಳೊಂದಿಗೆ:'}
            </p>
            <p className="text-white">Mavukere Srirama Reddy's Family, Friends & Relatives.</p>
          </div>
          
          <div className="flex items-center text-gray-400 text-sm">
            <p>© {currentYear}</p>
            <span className="mx-2">•</span>
            <div className="flex items-center">
              <p className="mr-1">Developed By</p>
              <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" />
              <p className="ml-1"><span className="text-green-500">Bhaskar <a href="tel:9606729320">+91 9606729320</a></span> for the special occasion</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;