import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'kn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'welcome': 'Welcome to',
    'naming.ceremony': 'Naming Ceremony',
    'invitation': 'Cordially invite You to our daughter\'s',
    'countdown.days': 'Days',
    'countdown.hours': 'Hours',
    'countdown.minutes': 'Minutes',
    'countdown.seconds': 'Seconds',
    'rsvp.heading': 'RSVP',
    'rsvp.subheading': 'Please confirm your attendance',
    'rsvp.name': 'Your Name',
    'rsvp.email': 'Email',
    'rsvp.phone': 'Phone',
    'rsvp.attending': 'Will you attend?',
    'rsvp.yes': 'Yes, I will attend',
    'rsvp.no': 'No, I cannot attend',
    'rsvp.guests': 'Number of guests',
    'rsvp.message': 'Message for the family',
    'rsvp.submit': 'Submit RSVP',
    'details.heading': 'Event Details',
    'details.date': 'Date',
    'details.time': 'Time',
    'details.venue': 'Venue',
    'details.location': 'Location',
    'details.directions': 'Get Directions',
    'gallery.heading': 'Photo Gallery',
    'gallery.subheading': 'Precious moments of our little one',
    'gifts.heading': 'Gift Registry',
    'gifts.subheading': 'Your blessings are the greatest gift',
    'about.heading': 'About the Ceremony',
    'about.description': 'The naming ceremony is an important tradition where we officially name our daughter and seek blessings from elders and God.',
    'nav.home': 'Home',
    'nav.details': 'Details',
    'nav.gallery': 'Gallery',
    'nav.rsvp': 'RSVP',
    'nav.gifts': 'Gifts',
  },
  kn: {
    'welcome': 'ಸುಸ್ವಾಗತ',
    'naming.ceremony': 'ನಾಮಕರಣ ಸಮಾರಂಭ',
    'invitation': 'ನಮ್ಮ ಮಗಳ ನಾಮಕರಣ ಸಮಾರಂಭಕ್ಕೆ ನಿಮ್ಮನ್ನು ಆದರದಿಂದ ಆಹ್ವಾನಿಸುತ್ತೇವೆ',
    'countdown.days': 'ದಿನಗಳು',
    'countdown.hours': 'ಗಂಟೆಗಳು',
    'countdown.minutes': 'ನಿಮಿಷಗಳು',
    'countdown.seconds': 'ಸೆಕೆಂಡುಗಳು',
    'rsvp.heading': 'ಆಹ್ವಾನ ಸ್ವೀಕೃತಿ',
    'rsvp.subheading': 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಹಾಜರಾತಿಯನ್ನು ದೃಢೀಕರಿಸಿ',
    'rsvp.name': 'ನಿಮ್ಮ ಹೆಸರು',
    'rsvp.email': 'ಇಮೇಲ್',
    'rsvp.phone': 'ಫೋನ್',
    'rsvp.attending': 'ನೀವು ಹಾಜರಾಗುವಿರಾ?',
    'rsvp.yes': 'ಹೌದು, ನಾನು ಹಾಜರಾಗುತ್ತೇನೆ',
    'rsvp.no': 'ಇಲ್ಲ, ನಾನು ಹಾಜರಾಗಲಾರೆ',
    'rsvp.guests': 'ಅತಿಥಿಗಳ ಸಂಖ್ಯೆ',
    'rsvp.message': 'ಕುಟುಂಬಕ್ಕೆ ಸಂದೇಶ',
    'rsvp.submit': 'ಆಹ್ವಾನ ಸ್ವೀಕೃತಿ ಸಲ್ಲಿಸಿ',
    'details.heading': 'ಕಾರ್ಯಕ್ರಮದ ವಿವರಗಳು',
    'details.date': 'ದಿನಾಂಕ',
    'details.time': 'ಸಮಯ',
    'details.venue': 'ಸ್ಥಳ',
    'details.location': 'ಸ್ಥಳ',
    'details.directions': 'ದಿಕ್ಕುಗಳನ್ನು ಪಡೆಯಿರಿ',
    'gallery.heading': 'ಫೋಟೋ ಗ್ಯಾಲರಿ',
    'gallery.subheading': 'ನಮ್ಮ ಚಿಕ್ಕ ಮಗುವಿನ ಅಮೂಲ್ಯ ಕ್ಷಣಗಳು',
    'gifts.heading': 'ಉಡುಗೊರೆ ನೋಂದಣಿ',
    'gifts.subheading': 'ನಿಮ್ಮ ಆಶೀರ್ವಾದಗಳೇ ಅತ್ಯುತ್ತಮ ಉಡುಗೊರೆ',
    'about.heading': 'ಸಮಾರಂಭದ ಬಗ್ಗೆ',
    'about.description': 'ನಾಮಕರಣ ಸಮಾರಂಭವು ಒಂದು ಮಹತ್ವದ ಸಂಪ್ರದಾಯವಾಗಿದ್ದು, ನಮ್ಮ ಮಗಳಿಗೆ ಅಧಿಕೃತವಾಗಿ ಹೆಸರಿಡುವ ಮತ್ತು ಹಿರಿಯರ ಹಾಗೂ ದೇವರ ಆಶೀರ್ವಾದವನ್ನು ಪಡೆಯುವ ಕಾರ್ಯಕ್ರಮವಾಗಿದೆ.',
    'nav.home': 'ಮುಖಪುಟ',
    'nav.details': 'ವಿವರಗಳು',
    'nav.gallery': 'ಗ್ಯಾಲರಿ',
    'nav.rsvp': 'ಆಹ್ವಾನ',
    'nav.gifts': 'ಉಡುಗೊರೆಗಳು',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => '',
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};