import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { Photo } from '../types';
import imag1 from '../assets/images/1.jpg';
import imag2 from '../assets/images/2.jpg';
import imag3 from '../assets/images/3.jpg';
import imag4 from '../assets/images/4.jpg';
import imag5 from '../assets/images/5.jpg';
import imag6 from '../assets/images/6.jpg';
import imag7 from '../assets/images/7.jpg';
import imag8 from '../assets/images/8.jpg';
import imag9 from '../assets/images/9.jpg';
import imag10 from '../assets/images/10.jpg';
import imag11 from '../assets/images/11.jpg';
import imag12 from '../assets/images/12.jpg';



const PhotoGallery: React.FC = () => {
  const photos: Photo[] = [
    { id: 1, src: imag1, alt: 'Photo 1' },
    { id: 2, src: imag2, alt: 'Photo 2' },
    { id: 3, src: imag3, alt: 'Photo 3' },
    { id: 4, src: imag4, alt: 'Photo 4' },
    { id: 5, src: imag5, alt: 'Photo 5' },
    { id: 6, src: imag6, alt: 'Photo 6' },
    { id: 7, src: imag7, alt: 'Photo 7' },
    { id: 8, src: imag8, alt: 'Photo 8' },
    { id: 9, src: imag9, alt: 'Photo 9' },
    { id: 10, src: imag10, alt: 'Photo 10' },
    { id: 11, src: imag11, alt: 'Photo 11' },
    { id: 12, src: imag12, alt: 'Photo 12' },
  ];
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const openLightbox = (id: number) => {
    setSelectedPhoto(id);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: 'next' | 'prev') => {
    if (selectedPhoto === null) return;
    
    const currentIndex = photos.findIndex(photo => photo.id === selectedPhoto);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % photos.length;
    } else {
      newIndex = (currentIndex - 1 + photos.length) % photos.length;
    }
    
    setSelectedPhoto(photos[newIndex].id);
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            onClick={() => openLightbox(photo.id)}
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src={photo.src} 
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-300/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white font-medium">{photo.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedPhoto !== null && (
        <motion.div
          className="fixed inset-0 z-50 bg-dark-400/95 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            className="absolute top-4 right-4 text-white bg-primary-800/50 p-2 rounded-full hover:bg-primary-700/70 transition-colors z-10"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>
          
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-primary-800/50 p-2 rounded-full hover:bg-primary-700/70 transition-colors z-10"
            onClick={() => navigatePhoto('prev')}
          >
            <ArrowLeft size={24} />
          </button>
          
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-primary-800/50 p-2 rounded-full hover:bg-primary-700/70 transition-colors z-10"
            onClick={() => navigatePhoto('next')}
          >
            <ArrowRight size={24} />
          </button>
          
          <motion.div
            className="relative max-w-4xl max-h-[80vh] overflow-hidden rounded-xl shadow-2xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {photos.map(photo => (
              photo.id === selectedPhoto && (
                <img 
                  key={photo.id}
                  src={photo.src} 
                  alt={photo.alt}
                  className="w-full h-full object-contain"
                />
              )
            ))}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default PhotoGallery;