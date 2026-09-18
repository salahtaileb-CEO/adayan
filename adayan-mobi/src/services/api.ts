import axios from 'axios';
import { Destination, Flight, Hotel, Booking, TourPackage, AIMessage } from '../types';

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'https://api.adayan.com/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token interceptor
api.interceptors.request.use((config) => {
  const token = ''; // TODO: Get from secure storage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const searchFlights = async (
  origin: string,
  destination: string,
  departureDate: string,
  passengers: number = 1,
  classType: string = 'business'
): Promise<Flight[]> => {
  const response = await api.get('/flights/search', {
    params: { origin, destination, departureDate, passengers, class: classType },
  });
  return response.data;
};

export const searchHotels = async (
  destination: string,
  checkIn: string,
  checkOut: string,
  guests: number = 2
): Promise<Hotel[]> => {
  const response = await api.get('/hotels/search', {
    params: { destination, checkIn, checkOut, guests },
  });
  return response.data;
};

export const getDestinations = async (category?: string): Promise<Destination[]> => {
  const response = await api.get('/destinations', {
    params: { category },
  });
  return response.data;
};

export const getLuxuryPackages = async (): Promise<TourPackage[]> => {
  const response = await api.get('/packages/luxury');
  return response.data;
};

export const createBooking = async (bookingData: {
  type: string;
  itemId: string;
  travelDate: string;
  guests: number;
  specialRequests?: string;
}): Promise<Booking> => {
  const response = await api.post('/bookings', bookingData);
  return response.data;
};

export const getUserBookings = async (): Promise<Booking[]> => {
  const response = await api.get('/bookings/my');
  return response.data;
};

export const cancelBooking = async (bookingId: string): Promise<void> => {
  await api.delete(`/bookings/${bookingId}`);
};

// AI Agent APIs
export const chatWithAdam = async (message: string, context?: any): Promise<AIMessage> => {
  const response = await api.post('/ai/adam/chat', { message, context });
  return response.data;
};

export const chatWithAyat = async (message: string, preferences?: any): Promise<AIMessage> => {
  const response = await api.post('/ai/ayat/plan', { message, preferences });
  return response.data;
};

export const chatWithAnas = async (message: string, location?: string): Promise<AIMessage> => {
  const response = await api.post('/ai/anas/guide', { message, location });
  return response.data;
};

export default api;
