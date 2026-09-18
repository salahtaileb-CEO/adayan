import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../../App';
import { Destination } from '../types';
import { travelApi } from '../services/api';

const { width } = Dimensions.get('window');

// Mock data for demo purposes
const FEATURED_DESTINATIONS: Destination[] = [
  {
    id: '1',
    name: 'Maldives Private Island',
    country: 'Maldives',
    description: 'Experience ultimate luxury in your own private island resort',
    imageUrl: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8',
    pricePerNight: 2500,
    rating: 5.0,
    amenities: ['Private Pool', 'Butler Service', 'Spa', 'Fine Dining'],
  },
  {
    id: '2',
    name: 'Santorini Cliff Villa',
    country: 'Greece',
    description: 'Breathtaking views of the Aegean Sea from your private terrace',
    imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff',
    pricePerNight: 1800,
    rating: 4.9,
    amenities: ['Infinity Pool', 'Sunset View', 'Wine Cellar', 'Concierge'],
  },
  {
    id: '3',
    name: 'Swiss Alps Chalet',
    country: 'Switzerland',
    description: 'Exclusive mountain retreat with world-class skiing',
    imageUrl: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963',
    pricePerNight: 3200,
    rating: 5.0,
    amenities: ['Ski-in/Ski-out', 'Helicopter Pad', 'Spa', 'Michelin Chef'],
  },
];

const LUXURY_SERVICES = [
  {
    id: '1',
    title: 'Private Jet Charter',
    icon: 'airplane',
    description: 'Travel in ultimate privacy and comfort',
  },
  {
    id: '2',
    title: 'Yacht Rental',
    icon: 'boat',
    description: 'Explore coastal destinations in style',
  },
  {
    id: '3',
    title: 'VIP Airport Access',
    icon: 'key',
    description: 'Skip the lines with exclusive lounge access',
  },
  {
    id: '4',
    title: 'Personal Concierge',
    icon: 'chatbubbles',
    description: '24/7 dedicated assistance worldwide',
  },
];

interface HomeScreenProps {
  navigation: any;
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const [destinations, setDestinations] = useState<Destination[]>(FEATURED_DESTINATIONS);
  const [loading, setLoading] = useState(false);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Welcome Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greetingText}>Welcome to</Text>
          <Text style={styles.appName}>Adayan</Text>
          <Text style={styles.tagline}>Luxury Travel Redefined</Text>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-circle" size={44} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      {/* Hero Section */}
      <LinearGradient
        colors={[COLORS.primary, COLORS.primaryDark]}
        style={styles.heroSection}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.heroTitle}>Your VIP Journey Begins Here</Text>
        <Text style={styles.heroSubtitle}>
          Curated experiences for discerning travelers
        </Text>
        <TouchableOpacity
          style={styles.ctaButton}
          onPress={() => navigation.navigate('Search')}
        >
          <Text style={styles.ctaButtonText}>Plan Your Escape</Text>
          <Ionicons name="arrow-forward" size={20} color={COLORS.background} />
        </TouchableOpacity>
      </LinearGradient>

      {/* AI Agents Quick Access */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your AI Travel Team</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={styles.agentCard}
            onPress={() => navigation.navigate('Concierge')}
          >
            <View style={[styles.agentIcon, { backgroundColor: '#6B4C9A' }]}>
              <Ionicons name="chatbubbles" size={32} color={COLORS.background} />
            </View>
            <Text style={styles.agentName}>ADAM</Text>
            <Text style={styles.agentRole}>Concierge</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.agentCard}
            onPress={() => navigation.navigate('Planner')}
          >
            <View style={[styles.agentIcon, { backgroundColor: '#8F72B8' }]}>
              <Ionicons name="map" size={32} color={COLORS.background} />
            </View>
            <Text style={styles.agentName}>AYAT</Text>
            <Text style={styles.agentRole}>Planner</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.agentCard}
            onPress={() => navigation.navigate('TourGuide')}
          >
            <View style={[styles.agentIcon, { backgroundColor: '#9B7EBD' }]}>
              <Ionicons name="location" size={32} color={COLORS.background} />
            </View>
            <Text style={styles.agentName}>ANAS</Text>
            <Text style={styles.agentRole}>Guide</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Featured Destinations */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Destinations</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>

        {destinations.map((destination) => (
          <TouchableOpacity
            key={destination.id}
            style={styles.destinationCard}
            onPress={() => navigation.navigate('BookingDetails', { bookingId: destination.id })}
          >
            <Image source={{ uri: destination.imageUrl }} style={styles.destinationImage} />
            <View style={styles.destinationInfo}>
              <View style={styles.destinationHeader}>
                <View>
                  <Text style={styles.destinationName}>{destination.name}</Text>
                  <Text style={styles.destinationCountry}>{destination.country}</Text>
                </View>
                <View style={styles.ratingBadge}>
                  <Ionicons name="star" size={14} color={COLORS.gold} />
                  <Text style={styles.ratingText}>{destination.rating}</Text>
                </View>
              </View>
              <Text style={styles.destinationDescription} numberOfLines={2}>
                {destination.description}
              </Text>
              <View style={styles.destinationFooter}>
                <Text style={styles.priceText}>
                  ${destination.pricePerNight.toLocaleString()}
                  <Text style={styles.priceUnit}>/night</Text>
                </Text>
                <TouchableOpacity style={styles.bookButton}>
                  <Text style={styles.bookButtonText}>Book Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Luxury Services */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>VIP Services</Text>
        <View style={styles.servicesGrid}>
          {LUXURY_SERVICES.map((service) => (
            <TouchableOpacity key={service.id} style={styles.serviceCard}>
              <View style={styles.serviceIconContainer}>
                <Ionicons name={service.icon as any} size={28} color={COLORS.primary} />
              </View>
              <Text style={styles.serviceTitle}>{service.title}</Text>
              <Text style={styles.serviceDescription}>{service.description}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.footer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  greetingText: {
    fontSize: 16,
    color: COLORS.textSecondary,
    fontWeight: '400',
  },
  appName: {
    fontSize: 36,
    color: COLORS.primary,
    fontWeight: '700',
    letterSpacing: -1,
  },
  tagline: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  profileButton: {
    padding: 0,
  },
  heroSection: {
    margin: 20,
    borderRadius: 20,
    padding: 30,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  heroTitle: {
    fontSize: 28,
    color: COLORS.background,
    fontWeight: '700',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: COLORS.background,
    opacity: 0.9,
    marginBottom: 24,
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 30,
    alignSelf: 'flex-start',
  },
  ctaButtonText: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 22,
    color: COLORS.text,
    fontWeight: '700',
  },
  seeAllText: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: '600',
  },
  agentCard: {
    alignItems: 'center',
    marginRight: 16,
    backgroundColor: COLORS.surface,
    padding: 20,
    borderRadius: 16,
    width: 120,
  },
  agentIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  agentName: {
    fontSize: 16,
    color: COLORS.text,
    fontWeight: '700',
    marginBottom: 4,
  },
  agentRole: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  destinationCard: {
    backgroundColor: COLORS.background,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  destinationImage: {
    width: '100%',
    height: 200,
  },
  destinationInfo: {
    padding: 16,
  },
  destinationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  destinationName: {
    fontSize: 18,
    color: COLORS.text,
    fontWeight: '700',
  },
  destinationCountry: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  ratingText: {
    fontSize: 12,
    color: COLORS.text,
    fontWeight: '600',
    marginLeft: 4,
  },
  destinationDescription: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 20,
    marginBottom: 12,
  },
  destinationFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 20,
    color: COLORS.primary,
    fontWeight: '700',
  },
  priceUnit: {
    fontSize: 12,
    color: COLORS.textSecondary,
    fontWeight: '400',
  },
  bookButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  bookButtonText: {
    color: COLORS.background,
    fontSize: 14,
    fontWeight: '600',
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceCard: {
    width: (width - 56) / 2,
    backgroundColor: COLORS.surface,
    padding: 20,
    borderRadius: 16,
    marginBottom: 12,
  },
  serviceIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  serviceTitle: {
    fontSize: 16,
    color: COLORS.text,
    fontWeight: '600',
    marginBottom: 6,
  },
  serviceDescription: {
    fontSize: 12,
    color: COLORS.textSecondary,
    lineHeight: 18,
  },
  footer: {
    height: 40,
  },
});
