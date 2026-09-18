export interface User {
  id: string;
  name: string;
  email: string;
  tier: 'VIP' | 'PLATINUM' | 'DIAMOND';
  preferences: UserPreferences;
}

export interface UserPreferences {
  currency: string;
  language: string;
  travelStyle: string[];
  dietaryRestrictions: string[];
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  imageUrl: string;
  rating: number;
  priceFrom: number;
  category: 'beach' | 'mountain' | 'city' | 'cultural' | 'adventure';
  isLuxury: boolean;
}

export interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  departure: Location;
  arrival: Location;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  class: 'economy' | 'business' | 'first';
  availableSeats: number;
}

export interface Hotel {
  id: string;
  name: string;
  location: Location;
  description: string;
  imageUrl: string;
  rating: number;
  stars: number;
  pricePerNight: number;
  amenities: string[];
  isLuxury: boolean;
}

export interface Location {
  city: string;
  country: string;
  airport?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

export interface Booking {
  id: string;
  userId: string;
  type: 'flight' | 'hotel' | 'package' | 'tour';
  status: 'confirmed' | 'pending' | 'cancelled';
  bookingDate: string;
  travelDate: string;
  totalPrice: number;
  details: Flight | Hotel | TourPackage;
}

export interface TourPackage {
  id: string;
  name: string;
  destination: string;
  duration: number;
  description: string;
  imageUrl: string;
  price: number;
  includes: string[];
  guide: string;
  maxGuests: number;
}

export interface AIMessage {
  id: string;
  agentId: 'ADAM' | 'AYAT' | 'ANAS';
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  suggestions?: string[];
}

export interface AIAgent {
  id: 'ADAM' | 'AYAT' | 'ANAS';
  name: string;
  role: string;
  description: string;
  avatar: string;
  specialty: string;
}
