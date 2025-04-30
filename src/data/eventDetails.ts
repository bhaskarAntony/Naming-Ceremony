import { EventDetails, Photo, GiftItem } from '../types';

export const eventDetails: EventDetails = {
  date: "Sunday, May 4th, 2025",
  time: {
    ceremony: "9:30 AM - 10:30 AM",
    lunch: "12:30 PM"
  },
  venue: {
    name: "Sri Brahmachaitanya Srirama Kalyana Mantapa",
    location: "Opp. Sri Rama Mandira, N.R. Extension, Chintamani",
    address: "Yagavapapishettipalli, Gownipalli Panchayath, Srinivasapura Taluk, Kolar Dist.",
    mapUrl: "https://www.google.com/maps?q=Chintamani,+Karnataka"
  }
};

export const photos: Photo[] = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/265987/pexels-photo-265987.jpeg",
    alt: "Baby with parents",
    featured: true
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg",
    alt: "Baby sleeping"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg",
    alt: "Baby smiling"
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg",
    alt: "Baby with toys"
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/2846815/pexels-photo-2846815.jpeg",
    alt: "Family portrait"
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/3933293/pexels-photo-3933293.jpeg",
    alt: "Baby's hand"
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/1166473/pexels-photo-1166473.jpeg",
    alt: "Baby with flower"
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/236164/pexels-photo-236164.jpeg",
    alt: "Baby laughing"
  }
];

export const giftItems: GiftItem[] = [
  {
    id: 1,
    name: {
      en: "Baby Clothes",
      kn: "ಮಗುವಿನ ಬಟ್ಟೆಗಳು"
    },
    description: {
      en: "Soft, comfortable clothing for the little one",
      kn: "ಚಿಕ್ಕ ಮಗುವಿಗೆ ಮೃದುವಾದ, ಆರಾಮದಾಯಕ ಬಟ್ಟೆಗಳು"
    },
    image: "https://images.pexels.com/photos/3932957/pexels-photo-3932957.jpeg"
  },
  {
    id: 2,
    name: {
      en: "Educational Toys",
      kn: "ಶೈಕ್ಷಣಿಕ ಆಟಿಕೆಗಳು"
    },
    description: {
      en: "Toys that help in early development",
      kn: "ಆರಂಭಿಕ ಬೆಳವಣಿಗೆಯಲ್ಲಿ ಸಹಾಯ ಮಾಡುವ ಆಟಿಕೆಗಳು"
    },
    image: "https://images.pexels.com/photos/3933024/pexels-photo-3933024.jpeg"
  },
  {
    id: 3,
    name: {
      en: "Baby Books",
      kn: "ಮಗುವಿನ ಪುಸ್ತಕಗಳು"
    },
    description: {
      en: "Colorful books to start the reading journey",
      kn: "ಓದುವ ಪ್ರಯಾಣವನ್ನು ಪ್ರಾರಂಭಿಸಲು ಬಣ್ಣಬಣ್ಣದ ಪುಸ್ತಕಗಳು"
    },
    image: "https://images.pexels.com/photos/159597/book-read-literature-pages-159597.jpeg"
  },
  {
    id: 4,
    name: {
      en: "Baby Care Products",
      kn: "ಮಗುವಿನ ಆರೈಕೆ ಉತ್ಪನ್ನಗಳು"
    },
    description: {
      en: "Gentle products for baby's delicate skin",
      kn: "ಮಗುವಿನ ಸೂಕ್ಷ್ಮ ಚರ್ಮಕ್ಕೆ ಮೃದುವಾದ ಉತ್ಪನ್ನಗಳು"
    },
    image: "https://images.pexels.com/photos/3737697/pexels-photo-3737697.jpeg"
  }
];