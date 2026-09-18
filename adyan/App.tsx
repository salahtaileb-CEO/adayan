/**
 * Adayan - Luxury Travel Planner App
 * 
 * Color Theme: Purple typography on White background
 * Target Audience: High-class VIP customers
 * 
 * AI Agents:
 * - ADAM: Concierge AI Agent
 * - AYAT: Planner AI Agent  
 * - ANAS: Tour Guide AI Agent
 */

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import BookingScreen from './src/screens/BookingScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ConciergeScreen from './src/screens/ConciergeScreen';
import PlannerScreen from './src/screens/PlannerScreen';
import TourGuideScreen from './src/screens/TourGuideScreen';

// Theme Colors - Purple on White for luxury feel
export const COLORS = {
  primary: '#6B4C9A', // Elegant purple
  primaryDark: '#4A376E',
  primaryLight: '#8F72B8',
  background: '#FFFFFF',
  surface: '#F8F5FC',
  text: '#2D2D2D',
  textSecondary: '#6B6B6B',
  border: '#E5E0EB',
  accent: '#9B7EBD',
  gold: '#D4AF37', // Luxury accent
  success: '#4CAF50',
  error: '#F44336',
};

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

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Search':
              iconName = focused ? 'search' : 'search-outline';
              break;
            case 'Bookings':
              iconName = focused ? 'calendar' : 'calendar-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            case 'Concierge':
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
              break;
            case 'Planner':
              iconName = focused ? 'map' : 'map-outline';
              break;
            case 'TourGuide':
              iconName = focused ? 'location' : 'location-outline';
              break;
            default:
              iconName = 'ellipse-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textSecondary,
        tabBarStyle: {
          backgroundColor: COLORS.background,
          borderTopColor: COLORS.border,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        headerStyle: {
          backgroundColor: COLORS.background,
          shadowColor: 'transparent',
          elevation: 0,
        },
        headerTitleStyle: {
          color: COLORS.primary,
          fontWeight: '700',
          fontSize: 20,
        },
        headerTintColor: COLORS.primary,
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ title: 'Adayan' }}
      />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen}
        options={{ title: 'Search' }}
      />
      <Tab.Screen 
        name="Concierge" 
        component={ConciergeScreen}
        options={{ title: 'ADAM - Concierge' }}
      />
      <Tab.Screen 
        name="Planner" 
        component={PlannerScreen}
        options={{ title: 'AYAT - Planner' }}
      />
      <Tab.Screen 
        name="TourGuide" 
        component={TourGuideScreen}
        options={{ title: 'ANAS - Guide' }}
      />
      <Tab.Screen 
        name="Bookings" 
        component={BookingScreen}
        options={{ title: 'My Bookings' }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.background,
            shadowColor: 'transparent',
            elevation: 0,
          },
          headerTitleStyle: {
            color: COLORS.primary,
            fontWeight: '700',
          },
          headerTintColor: COLORS.primary,
          contentStyle: {
            backgroundColor: COLORS.background,
          },
        }}
      >
        <Stack.Screen 
          name="MainTabs" 
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="BookingDetails" 
          component={BookingScreen}
          options={{ title: 'Booking Details' }}
        />
        <Stack.Screen 
          name="SearchResult" 
          component={SearchScreen}
          options={{ title: 'Search Results' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
