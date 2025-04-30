import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { eventDetails } from '../data/eventDetails';
import AnimatedText from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const Details: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gradient-to-b from-dark-300 to-dark-200">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <AnimatedText 
            text={t('details.heading')} 
            variant="heading"
            className="text-gold-400 font-decorative mb-4"
          />
          <AnimatedText 
            text={language === 'en' 
              ? "All the information you need about the special day" 
              : "ವಿಶೇಷ ದಿನದ ಬಗ್ಗೆ ನಿಮಗೆ ಬೇಕಾದ ಎಲ್ಲಾ ಮಾಹಿತಿ"}
            delay={0.2}
            className={`text-gray-300 max-w-3xl mx-auto ${language === 'kn' ? 'font-kannada' : ''}`}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="h-full flex flex-col">
              <div className="flex items-center mb-4">
                <Calendar className="text-gold-400 h-8 w-8 mr-3" />
                <h3 className={`text-2xl font-semibold text-white ${language === 'kn' ? 'font-kannada' : ''}`}>
                  {t('details.date')}
                </h3>
              </div>
              <div className="bg-dark-100/40 rounded-lg p-4 mb-4">
                <p className="text-xl text-white">{eventDetails.date}</p>
              </div>
              <p className={`text-gray-300 ${language === 'kn' ? 'font-kannada' : ''}`}>
                {language === 'en' 
                  ? "Please mark your calendars for this auspicious occasion." 
                  : "ದಯವಿಟ್ಟು ಈ ಶುಭ ಸಂದರ್ಭಕ್ಕಾಗಿ ನಿಮ್ಮ ಕ್ಯಾಲೆಂಡರ್‌ಗಳಲ್ಲಿ ಗುರುತಿಸಿ."}
              </p>
            </GlassCard>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GlassCard className="h-full flex flex-col">
              <div className="flex items-center mb-4">
                <Clock className="text-gold-400 h-8 w-8 mr-3" />
                <h3 className={`text-2xl font-semibold text-white ${language === 'kn' ? 'font-kannada' : ''}`}>
                  {t('details.time')}
                </h3>
              </div>
              <div className="space-y-4 mb-4">
                <div className="bg-dark-100/40 rounded-lg p-4">
                  <p className={`text-lg font-medium text-gold-400 mb-1 ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {language === 'en' ? "Naming Ceremony" : "ನಾಮಕರಣ ಸಮಾರಂಭ"}:
                  </p>
                  <p className="text-white">{eventDetails.time.ceremony}</p>
                </div>
                <div className="bg-dark-100/40 rounded-lg p-4">
                  <p className={`text-lg font-medium text-gold-400 mb-1 ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {language === 'en' ? "Lunch" : "ಊಟ"}:
                  </p>
                  <p className="text-white">{eventDetails.time.lunch}</p>
                </div>
              </div>
              <p className={`text-gray-300 ${language === 'kn' ? 'font-kannada' : ''}`}>
                {language === 'en' 
                  ? "We request you to arrive 15 minutes early." 
                  : "15 ನಿಮಿಷ ಮೊದಲೇ ಬರಬೇಕೆಂದು ನಾವು ವಿನಂತಿಸುತ್ತೇವೆ."}
              </p>
            </GlassCard>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <GlassCard>
            <div className="flex items-center mb-4">
              <MapPin className="text-gold-400 h-8 w-8 mr-3" />
              <h3 className={`text-2xl font-semibold text-white ${language === 'kn' ? 'font-kannada' : ''}`}>
                {t('details.venue')}
              </h3>
            </div>
            <div className="bg-dark-100/40 rounded-lg p-4 mb-6">
              <p className="text-xl text-white mb-1">{eventDetails.venue.name}</p>
              <p className="text-gray-300">{eventDetails.venue.location}</p>
              <p className="text-gray-400 text-sm mt-2">{eventDetails.venue.address}</p>
            </div>
            <a 
              href={eventDetails.venue.mapUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center py-2 px-4 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
            >
              <Navigation className="h-4 w-4 mr-2" />
              <span>{t('details.directions')}</span>
            </a>
          </GlassCard>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <GlassCard>
            <h3 className={`text-2xl font-semibold text-white mb-4 ${language === 'kn' ? 'font-kannada' : ''}`}>
              {language === 'en' ? "Schedule of Events" : "ಕಾರ್ಯಕ್ರಮಗಳ ವೇಳಾಪಟ್ಟಿ"}
            </h3>
            <div className="space-y-4">
              <div className="flex">
                <div className="mr-4 relative">
                  <div className="w-3 h-3 rounded-full bg-gold-400"></div>
                  <div className="absolute top-3 bottom-0 left-1.5 w-0.5 bg-gold-400/30"></div>
                </div>
                <div>
                  <p className="text-gold-400 font-medium">9:00 AM</p>
                  <p className={`text-white ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {language === 'en' ? "Guest Arrival" : "ಅತಿಥಿಗಳ ಆಗಮನ"}
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 relative">
                  <div className="w-3 h-3 rounded-full bg-gold-400"></div>
                  <div className="absolute top-3 bottom-0 left-1.5 w-0.5 bg-gold-400/30"></div>
                </div>
                <div>
                  <p className="text-gold-400 font-medium">9:30 AM</p>
                  <p className={`text-white ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {language === 'en' ? "Naming Ceremony Begins" : "ನಾಮಕರಣ ಸಮಾರಂಭ ಪ್ರಾರಂಭ"}
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 relative">
                  <div className="w-3 h-3 rounded-full bg-gold-400"></div>
                  <div className="absolute top-3 bottom-0 left-1.5 w-0.5 bg-gold-400/30"></div>
                </div>
                <div>
                  <p className="text-gold-400 font-medium">10:30 AM</p>
                  <p className={`text-white ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {language === 'en' ? "Blessing Ceremony" : "ಆಶೀರ್ವಾದ ಸಮಾರಂಭ"}
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 relative">
                  <div className="w-3 h-3 rounded-full bg-gold-400"></div>
                  <div className="absolute top-3 bottom-0 left-1.5 w-0.5 bg-gold-400/30"></div>
                </div>
                <div>
                  <p className="text-gold-400 font-medium">11:00 AM</p>
                  <p className={`text-white ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {language === 'en' ? "Cultural Program" : "ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮ"}
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <div className="w-3 h-3 rounded-full bg-gold-400"></div>
                </div>
                <div>
                  <p className="text-gold-400 font-medium">12:30 PM</p>
                  <p className={`text-white ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {language === 'en' ? "Lunch" : "ಊಟ"}
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Details;