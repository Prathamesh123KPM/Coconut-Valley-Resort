
import React from 'react';
import {
  Waves,
  Palmtree,
  Utensils,
  Gamepad2,
  ShieldCheck,
  Wifi,
  Baby,
  Coffee,
  Wind,
  Tv,
  Maximize,
  Wind as AirVent,
  ShowerHead,
  Coffee as CoffeeIcon,
  Home
} from 'lucide-react';
import { Room, Amenity, Event, Attraction, Package, Testimonial } from './types';
import wed from './cv (1).webp';
import familyDorm from './familydormitory.webp';
import woodenRoomImg from './woodenroom.webp';
import jacuzziBlissImg from './jacuzzibliss.webp';
import starParadiseImg from './starparadise.webp';

// New Imports
import coconutHome from './coconuthome.webp';
import coconutAbout from './coconutabout.webp';
import coconutAbove from './coconutabove.webp';
import coconutGallery from './coconutgallary.webp';
import coconutJhula from './coconutjhula.webp';
import coconutPlay from './coconutplay.webp';
import coconutPool from './coconutpool.webp';
import coconutWedding1 from './coconutwedding1.webp';
import wedding from "./coconutwed.webp"
import coconutWedding2 from './coconutwedding2.webp';

// Room-specific imports
import deluxe1 from './deluxeroom (1).webp';
import deluxe2 from './deluxeroom (2).webp';
import jacuzzi1 from './jacuzzi (1).webp';
import jacuzzi2 from './jacuzzi (2).webp';
import jacuzzi3 from './jacuzzi (3).webp';
import jacuzzi4 from './jacuzzi (4).webp';
import night1 from './nightelegence (1).webp';
import night2 from './nightelegence (2).webp';
import night3 from './nightelegence (3).webp';
import night4 from './nightelegence (4).webp';
import star1 from './starparadisee (1).webp';
import star2 from './starparadisee (2).webp';
import triangle1 from './traiangleroom (1).webp';
import triangle2 from './traiangleroom (2).webp';
import triangle3 from './traiangleroom (3).webp';
import triangle4 from './traiangleroom (4).webp';
import tropical1 from './tropical (1).webp';
import tropical2 from './tropical (2).webp';
import tropical3 from './tropical (3).webp';
import woodenDorm1 from './woodendormitory (1).webp';
import woodenDorm2 from './woodendormitory (2).webp';
import woodenDorm3 from './woodendormitory (3).webp';
import woodenDorm4 from './woodendormitory (4).webp';
import woodenRoom1 from './woodenroom (1).webp';
import woodenRoom2 from './woodenroom (2).webp';
import woodenRoom3 from './woodenroom (3).webp';

export const ROOMS: Room[] = [
  {
    id: 'jacuzzi-bliss',
    name: 'Jacuzzi Bliss',
    capacity: '2 Guests',
    description: 'Indulge in ultimate relaxation with our Jacuzzi Bliss rooms. These exclusive suites feature a private in-room jacuzzi, perfect for unwinding after a day of beach activities. Designed for couples seeking a romantic and rejuvenating escape.',
    features: ['Private Jacuzzi', 'King-Size Bed', 'Mood Lighting', 'Garden View', 'Mini Bar', 'Smart TV'],
    image: jacuzzi1,
    price: '₹7,000',
    gallery: [jacuzzi2, jacuzzi3, jacuzzi4]
  },
  {
    id: 'triangle-room',
    name: 'Triangle Room',
    capacity: '2 Guests',
    description: 'Stay in our unique Triangle Rooms, designed with iconic A-frame architecture. These cozy cabins offer a snug and intimate atmosphere, perfect for couples. Large glass fronts let in plenty of natural light and offer stunning views of the surrounding greenery.',
    features: ['A-Frame Design', 'Cozy Interior', 'Private Sit-out', 'Skylight', 'Queen Bed', 'Modern Bath'],
    image: triangle1,
    price: '₹5,000',
    gallery: [triangle2, triangle3, triangle4]
  },
  {
    id: 'star-paradise',
    name: 'Star Paradise',
    capacity: '2 Guests',
    description: 'Sleep under the stars in our Star Paradise suites. Featuring a retractable roof or expansive skylights, these rooms offer an unparalleled stargazing experience from the comfort of your king-sized bed. Perfect for romantic nights and astronomy enthusiasts.',
    features: ['Retractable Roof', 'Telescope', 'King-Size Bed', 'Private Deck', 'Luxury Bath', 'Star Map Guide'],
    image: starParadiseImg,
    price: '₹8,500',
    gallery: [star1, star2]
  },
  {
    id: 'tropical-bliss',
    name: 'Tropical Bliss',
    capacity: '2 Guests',
    description: 'Experience the ultimate tropical getaway in our Bliss rooms. Surrounded by lush coconut palms and vibrant flora, these rooms offer a perfect blend of comfort and nature. Enjoy the serene ambiance and wake up to the sound of birds.',
    features: ['Tropical Decor', 'King-Size Bed', 'Private Balcony', 'Rain Shower', 'Garden View', 'Mini Bar'],
    image: tropical3,
    price: '₹6,500',
    gallery: [tropical2, tropical1]
  },
  {
    id: 'night-elegance',
    name: 'Night Elegance Suite',
    capacity: '2 Guests',
    description: 'Designed specifically for romance, the Night Elegance Suite features intelligent ambient lighting systems that can be adjusted to match your mood. Located just steps away from our infinity pool, this suite offers a private entrance and a massive glass wall that brings the moonlit coconut groves into your living space.',
    features: ['Smart Lighting System', 'Pool-side Access', 'Private Entrance', 'Rain Shower', 'Complimentary Wine', '4K Smart TV', 'Luxury Bathrobes'],
    image: night1,
    price: '₹9,000',
    gallery: [night2, night3, night4]
  },
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    capacity: '2-3 Guests',
    description: 'Our Deluxe Rooms offer a perfect blend of modern comfort and traditional elegance. Spacious and well-appointed, these rooms provide a relaxing retreat with views of our lush gardens or the sparkling pool.',
    features: ['King-Size Bed', 'Garden/Pool View', 'Work Desk', 'Tea/Coffee Maker', 'Modern Bathroom', 'High-Speed Wi-Fi'],
    image: deluxe2,
    price: '₹4,500',
    gallery: [deluxe1]
  },
  {
    id: 'wooden-room',
    name: 'Wooden Room',
    capacity: '2 Guests',
    description: 'Immerse yourself in nature with our Wooden Rooms. Constructed with sustainable timber, these rooms offer a warm and earthy ambiance. Enjoy the rustic charm without sacrificing modern comforts.',
    features: ['Timber Construction', 'Queen Bed', 'Private Porch', 'Garden View', 'Eco-Friendly Toiletries', 'Wi-Fi'],
    image: woodenRoom1,
    price: '₹5,500',
    gallery: [woodenRoom2, woodenRoom3]
  },
  {
    id: 'wooden-dormitory',
    name: 'Wooden Dormitory',
    capacity: '8-10 Guests',
    description: 'Our Wooden Dormitory is perfect for large groups seeking a shared yet comfortable experience. Built with rich timber, it offers a rustic charm with modern amenities. Ideal for friends, families, or corporate retreats looking for bonding time.',
    features: ['Shared Lounge', 'Air Conditioning', 'Lockers', 'Reading Lights', 'Garden Access'],
    image: woodenDorm1,
    price: '₹1,800 / person',
    gallery: [woodenDorm2, woodenDorm3, woodenDorm4]
  },
  {
    id: 'family-dormitory',
    name: 'Family Dormitory',
    capacity: '6-8 Guests',
    description: 'A spacious and welcoming dormitory designed for families and large groups. Offering a comfortable and communal living experience with all modern amenities needed for a relaxing stay.',
    features: ['Family-Friendly', 'Spacious Beds', 'Air Conditioning', 'Communal Lounge', 'High-Speed WiFi', 'Garden Access'],
    image: familyDorm,
    price: '₹2,000 / person',
    gallery: [coconutPlay, coconutJhula]
  }
];

export const AMENITIES: Amenity[] = [
  { name: 'Swimming Pool', icon: <Waves className="w-6 h-6" /> },
  { name: 'Kids Pool', icon: <Baby className="w-6 h-6" /> },
  { name: 'Outdoor Lawn', icon: <Palmtree className="w-6 h-6" /> },
  { name: 'Fine Dining', icon: <Utensils className="w-6 h-6" /> },
  { name: 'Indoor/Outdoor Games', icon: <Gamepad2 className="w-6 h-6" /> },
  { name: '24x7 Support', icon: <ShieldCheck className="w-6 h-6" /> },
  { name: 'Beach Access', icon: <Waves className="w-6 h-6 text-blue-400" /> },
  { name: 'Free WiFi', icon: <Wifi className="w-6 h-6" /> },
];

export const EVENTS: Event[] = [
  {
    title: 'Weddings & Engagements',
    description: 'Begin your forever surrounded by coconut groves and the sound of waves.',
    image: wedding
  },
  {
    title: 'Corporate Retreats',
    description: 'Boost team morale with nature-inspired workspaces and team-building activities.',
    image: coconutAbove
  },
  {
    title: 'Family Celebrations',
    description: 'Birthdays, anniversaries, or just a weekend together—make every moment count.',
    image: coconutJhula
  }
];

export const ATTRACTIONS: Attraction[] = [
  {
    name: 'Kelva Beach',
    distance: 'Walking Distance',
    description: 'One of the largest beaches in Maharashtra, perfect for sunset walks.',
    image: coconutAbove
  },
  {
    name: 'Shirgaon Beach',
    distance: '15 mins drive',
    description: 'A quieter alternative for those seeking solitude and pristine sands.',
    image: 'https://content.jdmagicbox.com/v2/comp/mumbai/i3/022pxx22.xx22.141213112417.r7i3/catalogue/shirgaon-beach-shirgaon-palghar-tourist-attraction-jlqltvd7o0.webp'
  },
  {
    name: 'Kaldurg Fort',
    distance: '30 mins drive',
    description: 'A hiker\'s paradise offering panoramic views of the Palghar coastline.',
    image: 'https://coconutvalley.in/wp-content/uploads/2024/09/8dd1369158485ae3dc26bd4bef7f65d9.webp'
  }
];

export const PACKAGES: Package[] = [
  {
    name: 'Day Outing',
    price: '₹1,200*',
    features: ['Breakfast & Lunch', 'Hi-Tea', 'Pool Access', 'Games Area'],
    bestFor: 'Schools & Groups'
  },
  {
    name: 'Staycation',
    price: '₹5,500*',
    features: ['Luxury Room', 'All Meals Included', 'Beach Access', 'Free WiFi'],
    bestFor: 'Couples & Small Families'
  },
  {
    name: 'Weekend Bliss',
    price: '₹11,000*',
    features: ['2 Nights Stay', 'Gala Dinner', 'Nature Trail', 'Special Workshop'],
    bestFor: 'Relaxation Seekers'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Anjali Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'A hidden gem! The peace here is unparalleled. The stay experience was unique and very comfortable.',
    image: 'https://picsum.photos/id/177/100/100'
  },
  {
    name: 'Rahul Varma',
    location: 'Pune',
    rating: 5,
    text: 'Great food, amazing service. The staff goes above and beyond to make you feel at home. Highly recommended for family trips.',
    image: 'https://picsum.photos/id/237/100/100'
  },
  {
    name: 'Meera Deshmukh',
    location: 'Thane',
    rating: 4,
    text: 'Beautifully maintained pool and lawn. The proximity to Kelva beach makes it a perfect weekend getaway.',
    image: 'https://picsum.photos/id/342/100/100'
  }
];
