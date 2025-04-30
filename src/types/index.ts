export interface NavItem {
  label: {
    en: string;
    kn: string;
  };
  path: string;
}

export interface EventDetails {
  date: string;
  time: {
    ceremony: string;
    lunch: string;
  };
  venue: {
    name: string;
    location: string;
    address: string;
    mapUrl: string;
  };
}

export interface Photo {
  id: number;
  src: string;
  alt: string;
  featured?: boolean;
}

export interface GiftItem {
  id: number;
  name: {
    en: string;
    kn: string;
  };
  description: {
    en: string;
    kn: string;
  };
  image: string;
  link?: string;
}

export interface RSVPFormData {
  name: string;
  email: string;
  phone: string;
  attending: boolean;
  guestCount: number;
  message: string;
}