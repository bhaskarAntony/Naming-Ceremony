import React from 'react';
import { MapPin, Calendar, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const VenueCard: React.FC = () => {
  const venue = {
    name: 'Sri Brahmachaitanya Srirama Kalyana Mantapa',
    address: 'Opp. Sri Rama Mandira, N.R. Extection, Chintamani',
    date: 'May 4th, 2025',
    mapsLink: 'https://maps.app.goo.gl/E5P9R58FicciTebMA?g_st=iw',
    mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.2427496757937!2d78.05245457359723!3d13.397290005405496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb204f80ba932b9%3A0xe7137c864ec732d2!2sSri%20Bramha%20Chaitanya%20Kalyana%20Mandira!5e0!3m2!1sen!2sin!4v1745985845024!5m2!1sen!2sin',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="w-full max-w-4xl mx-auto px-4 sm:px-6 mt-20"
    >
      <GlassCard className="p-6 bg-dark-100/80 backdrop-blur-md rounded-2xl shadow-2xl flex flex-col sm:flex-row">
        {/* Left: Google Maps Iframe */}
        <div className="w-full sm:w-1/2 h-64 sm:h-auto relative mb-4 sm:mb-0 sm:mr-4">
          <iframe
            src={venue.mapsEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
            title="Venue Location Map"
          ></iframe>
        </div>

        {/* Right: Venue Details */}
        <div className="w-full sm:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-decorative text-gold-500 mb-4">
            Venue Details
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-primary-400 mt-1" />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {venue.name}
                </h3>
                <br />
                <p className=" text-sm sm:text-base text-white">
                  {venue.address}
                </p>
                <br />
                <a
                  href={venue.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-900 text-white p-2 rounded hover:bg-primary-400 transition-colors text-sm sm:text-base"
                  aria-label="Open venue location in Google Maps"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
            <br />
            <div className="flex items-center gap-3">
              <Calendar size={20} className="text-primary-400" />
              <p className="text-white text-sm sm:text-base">
                {venue.date}
              </p>
            </div>
            {/* <div className="flex items-center gap-3">
              <Phone size={20} className="text-primary-400" />
              <a
                href={`tel:${venue.contact}`}
                className="text-primary-300 hover:text-primary-400 transition-colors text-sm sm:text-base"
                aria-label="Call venue contact number"
              >
                {venue.contact}
              </a>
            </div> */}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default VenueCard;