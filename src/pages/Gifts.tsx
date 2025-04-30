import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { giftItems } from '../data/eventDetails';
import AnimatedText from '../components/AnimatedText';
import GiftRegistry from '../components/GiftRegistry';
import GlassCard from '../components/GlassCard';

const Gifts: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gradient-to-b from-dark-300 to-dark-200">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <AnimatedText 
            text={t('gifts.heading')} 
            variant="heading"
            className="text-gold-400 font-decorative mb-4"
          />
          <AnimatedText 
            text={t('gifts.subheading')}
            delay={0.2}
            className={`text-gray-300 max-w-3xl mx-auto ${language === 'kn' ? 'font-kannada' : ''}`}
          />
        </div>
        
        <div className="mb-10">
          <GlassCard className="text-center p-8">
            <p className={`text-gray-300 mb-4 ${language === 'kn' ? 'font-kannada' : ''}`}>
              {language === 'en' 
                ? "Your presence at our daughter's naming ceremony is the greatest gift. However, if you wish to give something, here are some suggestions that would be cherished."
                : "ನಮ್ಮ ಮಗಳ ನಾಮಕರಣ ಸಮಾರಂಭದಲ್ಲಿ ನಿಮ್ಮ ಉಪಸ್ಥಿತಿಯೇ ಅತ್ಯಂತ ದೊಡ್ಡ ಉಡುಗೊರೆ. ಆದರೆ, ನೀವು ಏನಾದರೂ ನೀಡಲು ಬಯಸಿದರೆ, ಇಲ್ಲಿ ಕೆಲವು ಸಲಹೆಗಳಿವೆ."}
            </p>
          </GlassCard>
        </div>
        
        <GiftRegistry gifts={giftItems} />
      </div>
    </div>
  );
};

export default Gifts;