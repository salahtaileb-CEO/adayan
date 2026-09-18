import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../utils/theme';
import { Button } from '../components/Button';
import { DestinationCard } from '../components/DestinationCard';
import { AIAgent } from '../types';

const aiAgents: AIAgent[] = [
  {
    id: 'ADAM',
    name: 'ADAM',
    role: 'Concierge AI Agent',
    description: 'Your personal luxury concierge for reservations, recommendations, and VIP services.',
    avatar: '🎩',
    specialty: 'Concierge Services',
  },
  {
    id: 'AYAT',
    name: 'AYAT',
    role: 'Travel Planner AI Agent',
    description: 'Expert travel planner crafting personalized itineraries for your perfect journey.',
    avatar: '🗺️',
    specialty: 'Trip Planning',
  },
  {
    id: 'ANAS',
    name: 'ANAS',
    role: 'Tour Guide AI Agent',
    description: 'Your knowledgeable local guide providing insights, history, and hidden gems.',
    avatar: '🏛️',
    specialty: 'Local Tours & Culture',
  },
];

const featuredDestinations = [
  {
    id: '1',
    name: 'Maldives Private Island',
    country: 'Maldives',
    description: 'Experience ultimate luxury in your own private overwater villa with crystal-clear waters.',
    imageUrl: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800',
    rating: 4.9,
    priceFrom: 5500,
    category: 'beach' as const,
    isLuxury: true,
  },
  {
    id: '2',
    name: 'Swiss Alps Retreat',
    country: 'Switzerland',
    description: 'Breathtaking mountain views with world-class skiing and luxury chalets.',
    imageUrl: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800',
    rating: 4.8,
    priceFrom: 4200,
    category: 'mountain' as const,
    isLuxury: true,
  },
  {
    id: '3',
    name: 'Paris Luxury Experience',
    country: 'France',
    description: 'The city of lights awaits with exclusive access to museums, Michelin dining, and more.',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
    rating: 4.7,
    priceFrom: 3800,
    category: 'city' as const,
    isLuxury: true,
  },
];

const vipServices = [
  { icon: '✈️', title: 'Private Jets', description: 'Charter flights worldwide' },
  { icon: '🏨', title: '5-Star Hotels', description: 'Exclusive suites & villas' },
  { icon: '🍽️', title: 'Fine Dining', description: 'Michelin-starred experiences' },
  { icon: '🚁', title: 'Helicopter Tours', description: 'Aerial sightseeing' },
  { icon: '🛥️', title: 'Yacht Charters', description: 'Luxury sea voyages' },
  { icon: '🎭', title: 'VIP Events', description: 'Exclusive access & tickets' },
];

interface HomeScreenProps {
  navigation: any;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Welcome to</Text>
          <Text style={styles.title}>Adayan</Text>
          <Text style={styles.subtitle}>Luxury Travel Redefined</Text>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileIcon}>👤</Text>
        </TouchableOpacity>
      </View>

      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>Where would you like to go?</Text>
        <View style={styles.searchBar}>
          <Text style={styles.searchPlaceholder}>🔍 Search destinations, hotels, flights...</Text>
        </View>
      </View>

      {/* AI Agents Quick Access */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Meet Your AI Assistants</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.agentsScroll}
        >
          {aiAgents.map((agent) => (
            <TouchableOpacity
              key={agent.id}
              style={styles.agentCard}
              onPress={() => navigation.navigate(agent.id)}
            >
              <View style={styles.agentAvatar}>
                <Text style={styles.agentEmoji}>{agent.avatar}</Text>
              </View>
              <Text style={styles.agentName}>{agent.name}</Text>
              <Text style={styles.agentRole}>{agent.specialty}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Featured Destinations */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Destinations</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        {featuredDestinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            destination={destination}
            onPress={() => navigation.navigate('Search')}
          />
        ))}
      </View>

      {/* VIP Services */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>VIP Services</Text>
        <View style={styles.servicesGrid}>
          {vipServices.map((service, index) => (
            <View key={index} style={styles.serviceItem}>
              <Text style={styles.serviceIcon}>{service.icon}</Text>
              <Text style={styles.serviceTitle}>{service.title}</Text>
              <Text style={styles.serviceDescription}>{service.description}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* CTA Section */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Ready for an unforgettable journey?</Text>
        <Text style={styles.ctaSubtitle}>Let our AI agents craft your perfect luxury escape</Text>
        <View style={styles.ctaButtons}>
          <Button
            title="Plan My Trip"
            onPress={() => navigation.navigate('AYAT')}
            variant="primary"
            size="large"
            style={styles.ctaButton}
          />
          <Button
            title="Contact Concierge"
            onPress={() => navigation.navigate('ADAM')}
            variant="outline"
            size="large"
            style={styles.ctaButton}
          />
        </View>
      </View>

      <View style={styles.footer} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.xxl,
    paddingBottom: SPACING.lg,
  },
  greeting: {
    fontSize: 16,
    color: COLORS.gray[600],
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.gray[500],
    marginTop: SPACING.xs,
  },
  profileButton: {
    width: 48,
    height: 48,
    borderRadius: BORDER_RADIUS.full,
    backgroundColor: COLORS.gray[100],
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileIcon: {
    fontSize: 24,
  },
  heroSection: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.lg,
    backgroundColor: COLORS.gray[50],
    marginHorizontal: SPACING.md,
    borderRadius: BORDER_RADIUS.xl,
  },
  heroTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.gray[800],
    marginBottom: SPACING.md,
  },
  searchBar: {
    backgroundColor: COLORS.white,
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.lg,
    ...SHADOWS.small,
  },
  searchPlaceholder: {
    fontSize: 16,
    color: COLORS.gray[400],
  },
  section: {
    marginTop: SPACING.xl,
    paddingHorizontal: SPACING.lg,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  seeAll: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: '600',
  },
  agentsScroll: {
    gap: SPACING.md,
    paddingRight: SPACING.lg,
  },
  agentCard: {
    width: 120,
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    alignItems: 'center',
    ...SHADOWS.medium,
  },
  agentAvatar: {
    width: 60,
    height: 60,
    borderRadius: BORDER_RADIUS.full,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.sm,
  },
  agentEmoji: {
    fontSize: 32,
  },
  agentName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: SPACING.xs,
  },
  agentRole: {
    fontSize: 12,
    color: COLORS.gray[600],
    textAlign: 'center',
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceItem: {
    width: '30%',
    backgroundColor: COLORS.gray[50],
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  serviceIcon: {
    fontSize: 32,
    marginBottom: SPACING.sm,
  },
  serviceTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.gray[800],
    textAlign: 'center',
    marginBottom: SPACING.xs,
  },
  serviceDescription: {
    fontSize: 11,
    color: COLORS.gray[600],
    textAlign: 'center',
  },
  ctaSection: {
    marginHorizontal: SPACING.md,
    marginTop: SPACING.xl,
    marginBottom: SPACING.xl,
    padding: SPACING.xl,
    backgroundColor: COLORS.primary,
    borderRadius: BORDER_RADIUS.xl,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: SPACING.sm,
  },
  ctaSubtitle: {
    fontSize: 14,
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: SPACING.lg,
    opacity: 0.9,
  },
  ctaButtons: {
    width: '100%',
    gap: SPACING.md,
  },
  ctaButton: {
    width: '100%',
  },
  footer: {
    height: SPACING.xxl,
  },
});

export default HomeScreen;
