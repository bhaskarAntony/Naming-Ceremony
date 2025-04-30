import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';
import { eventDetails, photos } from '../data/eventDetails';
import AnimatedText from '../components/AnimatedText';
import CountdownTimer from '../components/CountdownTimer';
import GlassCard from '../components/GlassCard';
import PhotoGallery from '../components/PhotoGallery';
import AIChatbot from '../components/AIChatbot';
import image1 from '../assets/images/10.jpg';

const Home: React.FC = () => {
  const { t, language } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-floral-pattern bg-center bg-cover mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-primary-900/40 to-dark-300 opacity-70"></div>
        
        <div className="container mx-auto max-w-6xl z-10 text-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 mt-20"
          >
            <h3 className={`text-primary-300 font-semibold text-xl mb-3 ${language === 'kn' ? 'font-kannada' : ''}`}>
              {t('welcome')}
            </h3>
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-decorative text-gold-400 mb-2 drop-shadow-lg ${language === 'kn' ? 'font-kannada font-bold' : ''}`}>
              {language === 'en' ? 'Smt. Nirosha & Sri Satish Reddy' : 'ಶ್ರೀಮತಿ ನಿರೋಷಾ & ಶ್ರೀ ಸತೀಶ್ ರೆಡ್ಡಿ'}
            </h1>
            <p className={`text-white/90 text-lg ${language === 'kn' ? 'font-kannada' : ''}`}>
              {t('invitation')}
            </p>
          </motion.div>
          
          {/* Baby Photo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative mx-auto w-64 h-64 md:w-80 md:h-80 mb-8"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400/30 to-primary-800/50 blur-xl animate-pulse-slow"></div>
            <div className="relative overflow-hidden rounded-full border-4 border-gold-400/50 h-full w-full p-1">
              <img 
                src={image1}
                alt="Baby"
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  // target.src = {image1}.default;
                }}
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h2 className={`text-5xl md:text-7xl lg:text-8xl font-decorative text-white mb-8 drop-shadow-lg ${language === 'kn' ? 'font-kannada font-bold text-4xl md:text-5xl lg:text-6xl' : ''}`}>
              {t('naming.ceremony')}
            </h2>
          </motion.div>
          
          <CountdownTimer targetDate="2025-05-04T09:30:00" />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            <GlassCard className="flex flex-col items-center text-center space-y-2">
              <Calendar className="text-gold-400 h-8 w-8 mb-1" />
              <h3 className="text-lg font-semibold text-white">
                {language === 'en' ? 'Date' : 'ದಿನಾಂಕ'}
              </h3>
              <p className="text-gray-300">{eventDetails.date}</p>
            </GlassCard>
            
            <GlassCard className="flex flex-col items-center text-center space-y-2">
              <Clock className="text-gold-400 h-8 w-8 mb-1" />
              <h3 className="text-lg font-semibold text-white">
                {language === 'en' ? 'Time' : 'ಸಮಯ'}
              </h3>
              <p className="text-gray-300">{eventDetails.time.ceremony}</p>
              <p className="text-gray-300">{language === 'en' ? 'Lunch: ' : 'ಊಟ: '}{eventDetails.time.lunch}</p>
            </GlassCard>
            
            <GlassCard className="flex flex-col items-center text-center space-y-2">
              <MapPin className="text-gold-400 h-8 w-8 mb-1" />
              <h3 className="text-lg font-semibold text-white">
                {language === 'en' ? 'Venue' : 'ಸ್ಥಳ'}
              </h3>
              <p className="text-gray-300">{eventDetails.venue.name}</p>
              <p className="text-gray-300 text-sm">{eventDetails.venue.location}</p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
      
      {/* About Section */}
      <div ref={ref} className="py-16 px-4 bg-gradient-to-b from-dark-300 to-dark-200">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <AnimatedText 
              text={language === 'en' ? 'About the Ceremony' : 'ಸಮಾರಂಭದ ಬಗ್ಗೆ'} 
              variant="heading"
              className="text-gold-400 font-decorative mb-4"
            />
            <AnimatedText 
              text={t('about.description')}
              delay={0.2}
              className={`text-gray-300 max-w-3xl mx-auto ${language === 'kn' ? 'font-kannada' : ''}`}
            />
          </div>
          
          {inView && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <GlassCard className="h-full">
                  <h3 className={`text-2xl font-decorative text-gold-400 mb-4 ${language === 'kn' ? 'font-kannada font-bold' : ''}`}>
                    {language === 'en' ? 'Ceremony Details' : 'ಸಮಾರಂಭದ ವಿವರಗಳು'}
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="bg-primary-900/30 p-1 rounded-full mr-2 mt-1">
                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                      </span>
                      <span className={language === 'kn' ? 'font-kannada' : ''}>
                        {language === 'en' 
                          ? 'Traditional naming ritual performed by a priest'
                          : 'ಪುರೋಹಿತರಿಂದ ನಡೆಸಲ್ಪಡುವ ಸಾಂಪ್ರದಾಯಿಕ ನಾಮಕರಣ ಸಂಸ್ಕಾರ'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary-900/30 p-1 rounded-full mr-2 mt-1">
                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                      </span>
                      <span className={language === 'kn' ? 'font-kannada' : ''}>
                        {language === 'en' 
                          ? 'Blessing of the baby by family elders'
                          : 'ಕುಟುಂಬದ ಹಿರಿಯರಿಂದ ಮಗುವಿಗೆ ಆಶೀರ್ವಾದ'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary-900/30 p-1 rounded-full mr-2 mt-1">
                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                      </span>
                      <span className={language === 'kn' ? 'font-kannada' : ''}>
                        {language === 'en' 
                          ? 'Special prayers for the baby\'s health and prosperity'
                          : 'ಮಗುವಿನ ಆರೋಗ್ಯ ಮತ್ತು ಸಮೃದ್ಧಿಗಾಗಿ ವಿಶೇಷ ಪ್ರಾರ್ಥನೆಗಳು'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary-900/30 p-1 rounded-full mr-2 mt-1">
                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                      </span>
                      <span className={language === 'kn' ? 'font-kannada' : ''}>
                        {language === 'en' 
                          ? 'Distribution of sweets and gifts to guests'
                          : 'ಅತಿಥಿಗಳಿಗೆ ಸಿಹಿ ಮತ್ತು ಉಡುಗೊರೆಗಳ ವಿತರಣೆ'}
                      </span>
                    </li>
                  </ul>
                </GlassCard>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <GlassCard className="h-full">
                  <h3 className={`text-2xl font-decorative text-gold-400 mb-4 ${language === 'kn' ? 'font-kannada font-bold' : ''}`}>
                    {language === 'en' ? 'What to Expect' : 'ಏನು ನಿರೀಕ್ಷಿಸಬೇಕು'}
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="bg-primary-900/30 p-1 rounded-full mr-2 mt-1">
                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                      </span>
                      <span className={language === 'kn' ? 'font-kannada' : ''}>
                        {language === 'en' 
                          ? 'Warm welcome with traditional rituals'
                          : 'ಸಾಂಪ್ರದಾಯಿಕ ಸಂಸ್ಕಾರಗಳೊಂದಿಗೆ ಆತ್ಮೀಯ ಸ್ವಾಗತ'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary-900/30 p-1 rounded-full mr-2 mt-1">
                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                      </span>
                      <span className={language === 'kn' ? 'font-kannada' : ''}>
                        {language === 'en' 
                          ? 'Cultural performances celebrating the occasion'
                          : 'ಸಂದರ್ಭವನ್ನು ಆಚರಿಸುವ ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary-900/30 p-1 rounded-full mr-2 mt-1">
                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                      </span>
                      <span className={language === 'kn' ? 'font-kannada' : ''}>
                        {language === 'en' 
                          ? 'Delicious traditional and modern cuisine'
                          : 'ರುಚಿಕರವಾದ ಸಾಂಪ್ರದಾಯಿಕ ಮತ್ತು ಆಧುನಿಕ ಆಹಾರ'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary-900/30 p-1 rounded-full mr-2 mt-1">
                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                      </span>
                      <span className={language === 'kn' ? 'font-kannada' : ''}>
                        {language === 'en' 
                          ? 'Photo opportunities with the baby and family'
                          : 'ಮಗು ಮತ್ತು ಕುಟುಂಬದೊಂದಿಗೆ ಫೋಟೋ ಅವಕಾಶಗಳು'}
                      </span>
                    </li>
                  </ul>
                </GlassCard>
              </motion.div>
            </div>
          )}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-16 px-4 bg-gradient-to-b from-dark-200 to-dark-300">
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

      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
};

export default Home;