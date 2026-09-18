import axios from 'axios';
import { Destination, Flight, Hotel, Booking, TravelPlan, TourInfo } from '../types';

// Base API configuration for cloud backend
const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'https://api.adyan-luxury.com/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

// Add auth token interceptor
api.interceptors.request.use(
  (config) => {
    const token = ''; // TODO: Get from secure storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const travelApi = {
  // Search destinations
  searchDestinations: async (query: string): Promise<Destination[]> => {
    const response = await api.get('/destinations/search', { params: { q: query } });
    return response.data;
  },

  // Get destination details
  getDestination: async (id: string): Promise<Destination> => {
    const response = await api.get(`/destinations/${id}`);
    return response.data;
  },

  // Search flights
  searchFlights: async (
    from: string,
    to: string,
    departureDate: string,
    passengers: number = 1
  ): Promise<Flight[]> => {
    const response = await api.get('/flights/search', {
      params: { from, to, departureDate, passengers },
    });
    return response.data;
  },

  // Search hotels
  searchHotels: async (
    location: string,
    checkIn: string,
    checkOut: string,
    guests: number = 2
  ): Promise<Hotel[]> => {
    const response = await api.get('/hotels/search', {
      params: { location, checkIn, checkOut, guests },
    });
    return response.data;
  },

  // Create booking
  createBooking: async (bookingData: {
    type: 'flight' | 'hotel' | 'package';
    itemId: string;
    passengerDetails: any;
  }): Promise<Booking> => {
    const response = await api.post('/bookings', bookingData);
    return response.data;
  },

  // Get user bookings
  getUserBookings: async (): Promise<Booking[]> => {
    const response = await api.get('/bookings/user');
    return response.data;
  },

  // Cancel booking
  cancelBooking: async (bookingId: string): Promise<void> => {
    await api.delete(`/bookings/${bookingId}`);
  },
};

export const aiApi = {
  // ADAM - Concierge AI
  chatWithConcierge: async (message: string, context?: any): Promise<string> => {
    const response = await api.post('/ai/concierge/chat', { message, context });
    return response.data.response;
  },

  // AYAT - Planner AI
  generateTravelPlan: async (preferences: {
    destination: string;
    startDate: string;
    endDate: string;
    budget: number;
    interests: string[];
  }): Promise<TravelPlan> => {
    const response = await api.post('/ai/planner/generate', preferences);
    return response.data.plan;
  },

  // ANAS - Tour Guide AI
  getTourRecommendations: async (location: string): Promise<TourInfo[]> => {
    const response = await api.get('/ai/guide/tours', { params: { location } });
    return response.data.tours;
  },

  getTourDetails: async (tourId: string): Promise<TourInfo> => {
    const response = await api.get(`/ai/guide/tours/${tourId}`);
    return response.data;
  },
};

export const userApi = {
  // User authentication
  login: async (email: string, password: string): Promise<{ token: string; user: any }> => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },

  register: async (userData: any): Promise<{ token: string; user: any }> => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },

  // Get user profile
  getProfile: async (): Promise<any> => {
    const response = await api.get('/user/profile');
    return response.data;
  },

  // Update user profile
  updateProfile: async (profileData: any): Promise<any> => {
    const response = await api.put('/user/profile', profileData);
    return response.data;
  },

  // VIP preferences
  getVipPreferences: async (): Promise<any> => {
    const response = await api.get('/user/vip-preferences');
    return response.data;
  },

  updateVipPreferences: async (preferences: any): Promise<any> => {
    const response = await api.put('/user/vip-preferences', preferences);
    return response.data;
  },
};

export default api;
