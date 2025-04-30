import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { RSVPFormData } from '../types';
import GlassCard from './GlassCard';

const RSVPForm: React.FC = () => {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    watch,
    formState: { errors } 
  } = useForm<RSVPFormData>();
  
  const attending = watch('attending');
  
  const onSubmit: SubmitHandler<RSVPFormData> = (data) => {
    console.log(data);
    setSubmitted(true);
    // In a real app, you would send this data to a server
  };

  if (submitted) {
    return (
      <GlassCard className="max-w-md mx-auto text-center py-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <Check size={32} className="text-white" />
        </motion.div>
        <h3 className="text-2xl font-bold text-white mb-4">
          {language === 'en' ? 'Thank You!' : 'ಧನ್ಯವಾದಗಳು!'}
        </h3>
        <p className="text-gray-300">
          {language === 'en' 
            ? 'Your RSVP has been submitted successfully. We look forward to celebrating with you!'
            : 'ನಿಮ್ಮ ಆಹ್ವಾನ ಸ್ವೀಕೃತಿಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲಾಗಿದೆ. ನಿಮ್ಮೊಂದಿಗೆ ಆಚರಿಸಲು ನಾವು ಕಾಯುತ್ತಿದ್ದೇವೆ!'
          }
        </p>
      </GlassCard>
    );
  }

  return (
    <GlassCard className="max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            {t('rsvp.name')}*
          </label>
          <input
            id="name"
            {...register('name', { required: true })}
            className="w-full px-4 py-2 bg-dark-100/50 border border-primary-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-white"
          />
          {errors.name && (
            <p className="mt-1 text-red-400 text-sm">
              {language === 'en' ? 'Name is required' : 'ಹೆಸರು ಅಗತ್ಯವಿದೆ'}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            {t('rsvp.email')}*
          </label>
          <input
            id="email"
            type="email"
            {...register('email', { 
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            })}
            className="w-full px-4 py-2 bg-dark-100/50 border border-primary-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-white"
          />
          {errors.email?.type === 'required' && (
            <p className="mt-1 text-red-400 text-sm">
              {language === 'en' ? 'Email is required' : 'ಇಮೇಲ್ ಅಗತ್ಯವಿದೆ'}
            </p>
          )}
          {errors.email?.type === 'pattern' && (
            <p className="mt-1 text-red-400 text-sm">
              {language === 'en' ? 'Invalid email address' : 'ಅಮಾನ್ಯ ಇಮೇಲ್ ವಿಳಾಸ'}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
            {t('rsvp.phone')}
          </label>
          <input
            id="phone"
            {...register('phone')}
            className="w-full px-4 py-2 bg-dark-100/50 border border-primary-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-white"
          />
        </div>

        <div>
          <span className="block text-sm font-medium text-gray-300 mb-1">
            {t('rsvp.attending')}*
          </span>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="true"
                {...register('attending', { required: true })}
                className="form-radio h-4 w-4 text-primary-500"
              />
              <span className="ml-2 text-white">{t('rsvp.yes')}</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="false"
                {...register('attending', { required: true })}
                className="form-radio h-4 w-4 text-primary-500"
              />
              <span className="ml-2 text-white">{t('rsvp.no')}</span>
            </label>
          </div>
          {errors.attending && (
            <p className="mt-1 text-red-400 text-sm">
              {language === 'en' ? 'Please select an option' : 'ದಯವಿಟ್ಟು ಒಂದು ಆಯ್ಕೆಯನ್ನು ಆರಿಸಿ'}
            </p>
          )}
        </div>

        {attending === 'true' && (
          <div>
            <label htmlFor="guestCount" className="block text-sm font-medium text-gray-300 mb-1">
              {t('rsvp.guests')}
            </label>
            <select
              id="guestCount"
              {...register('guestCount')}
              className="w-full px-4 py-2 bg-dark-100/50 border border-primary-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-white"
            >
              {[0, 1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
            {t('rsvp.message')}
          </label>
          <textarea
            id="message"
            rows={4}
            {...register('message')}
            className="w-full px-4 py-2 bg-dark-100/50 border border-primary-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-white"
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 px-4 bg-gradient-to-r from-primary-600 to-primary-800 text-white font-medium rounded-md hover:from-primary-500 hover:to-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-colors"
        >
          {t('rsvp.submit')}
        </motion.button>
      </form>
    </GlassCard>
  );
};

export default RSVPForm;