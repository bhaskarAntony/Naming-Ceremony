import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { photos } from '../data/eventDetails';
import AnimatedText from '../components/AnimatedText';
import PhotoGallery from '../components/PhotoGallery';

const Gallery: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gradient-to-b from-dark-300 to-dark-200">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <AnimatedText 
            text={t('gallery.heading')} 
            variant="heading"
            className="text-gold-400 font-decorative mb-4"
          />
          <AnimatedText 
            text={t('gallery.subheading')}
            delay={0.2}
            className={`text-gray-300 max-w-3xl mx-auto ${language === 'kn' ? 'font-kannada' : ''}`}
          />
        </div>
        
        <PhotoGallery photos={photos} />
      </div>
    </div>
  );
};

export default Gallery;