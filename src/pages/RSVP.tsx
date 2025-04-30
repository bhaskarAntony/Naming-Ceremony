import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedText from '../components/AnimatedText';
import RSVPForm from '../components/RSVPForm';

const RSVP: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gradient-to-b from-dark-300 to-dark-200">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <AnimatedText 
            text={t('rsvp.heading')} 
            variant="heading"
            className="text-gold-400 font-decorative mb-4"
          />
          <AnimatedText 
            text={t('rsvp.subheading')}
            delay={0.2}
            className={`text-gray-300 max-w-3xl mx-auto ${language === 'kn' ? 'font-kannada' : ''}`}
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <RSVPForm />
        </motion.div>
      </div>
    </div>
  );
};

export default RSVP;