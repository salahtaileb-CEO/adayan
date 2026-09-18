import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  MainTabs: undefined;
  BookingDetails: { bookingId: string };
  SearchResult: { query: string };
};

export type MainTabParamList = {
  Home: undefined;
  Search: undefined;
  Bookings: undefined;
  Profile: undefined;
  Concierge: undefined;
  Planner: undefined;
  TourGuide: undefined;
};

export type AppStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type MainTabNavigationProp = BottomTabNavigationProp<MainTabParamList>;

export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  imageUrl: string;
  pricePerNight: number;
  rating: number;
  amenities: string[];
}

export interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  departure: string;
  arrival: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  class: 'economy' | 'business' | 'first';
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  pricePerNight: number;
  rating: number;
  amenities: string[];
  stars: number;
}

export interface Booking {
  id: string;
  type: 'flight' | 'hotel' | 'package';
  status: 'confirmed' | 'pending' | 'cancelled';
  date: string;
  totalAmount: number;
  details: Flight | Hotel | Destination;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  agent?: 'ADAM' | 'AYAT' | 'ANAS';
}

export interface TravelPlan {
  id: string;
  destination: string;
  startDate: string;
  endDate: string;
  activities: Activity[];
  estimatedCost: number;
}

export interface Activity {
  id: string;
  name: string;
  time: string;
  duration: string;
  location: string;
  description: string;
}

export interface TourInfo {
  id: string;
  name: string;
  location: string;
  description: string;
  duration: string;
  price: number;
  rating: number;
  imageUrl: string;
  highlights: string[];
}
