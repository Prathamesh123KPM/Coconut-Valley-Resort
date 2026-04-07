
// Import React to resolve the 'React' namespace error
import React from 'react';

export interface Room {
  id: string;
  name: string;
  description: string;
  features: string[];
  capacity: string;
  image: string;
  price: string;
  gallery: string[];
}

export interface Amenity {
  name: string;
  icon: React.ReactNode;
}

export interface Event {
  title: string;
  description: string;
  image: string;
}

export interface Attraction {
  name: string;
  distance: string;
  description: string;
  image: string;
}

export interface Package {
  name: string;
  price: string;
  features: string[];
  bestFor: string;
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
}
