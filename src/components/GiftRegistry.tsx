import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { GiftItem } from '../types';
import GlassCard from './GlassCard';

interface GiftRegistryProps {
  gifts: GiftItem[];
}

const GiftRegistry: React.FC<GiftRegistryProps> = ({ gifts }) => {
  const { language } = useLanguage();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {gifts.map((gift, index) => (
        <motion.div
          key={gift.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <GlassCard className="h-full flex flex-col md:flex-row gap-4 items-center">
            <div className="w-full md:w-1/3 aspect-square overflow-hidden rounded-lg">
              <img 
                src={gift.image} 
                alt={language === 'en' ? gift.name.en : gift.name.kn}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gold-400 mb-2">
                {language === 'en' ? gift.name.en : gift.name.kn}
              </h3>
              <p className="text-gray-300 mb-4">
                {language === 'en' ? gift.description.en : gift.description.kn}
              </p>
              {gift.link && (
                <a 
                  href={gift.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block py-2 px-4 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                >
                  {language === 'en' ? 'View Options' : 'ಆಯ್ಕೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ'}
                </a>
              )}
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
};

export default GiftRegistry;