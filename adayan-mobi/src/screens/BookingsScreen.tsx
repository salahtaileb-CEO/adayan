import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../utils/theme';
import { Button } from '../components/Button';

const mockBookings = [
  {
    id: 'BK001',
    type: 'hotel',
    name: 'The Ritz Paris',
    location: 'Paris, France',
    dates: 'May 15-20, 2025',
    guests: 2,
    status: 'confirmed',
    totalPrice: 8500,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400',
  },
  {
    id: 'BK002',
    type: 'flight',
    name: 'Emirates First Class',
    location: 'DXB → CDG',
    dates: 'May 15, 2025 • 14:30',
    guests: 2,
    status: 'confirmed',
    totalPrice: 12000,
    image: 'https://images.unsplash.com/photo-1542296332-2e44a996aa0b?w=400',
  },
  {
    id: 'BK003',
    type: 'tour',
    name: 'Private Louvre After-Hours Tour',
    location: 'Paris, France',
    dates: 'May 17, 2025 • 19:00',
    guests: 2,
    status: 'pending',
    totalPrice: 1500,
    image: 'https://images.unsplash.com/photo-1499856871940-a09627c6dcf6?w=400',
  },
];

interface BookingsScreenProps {
  navigation: any;
}

export const BookingsScreen: React.FC<BookingsScreenProps> = ({ navigation }) => {
  const renderBookingCard = (booking: any) => (
    <TouchableOpacity style={[styles.card, SHADOWS.medium]} activeOpacity={0.8}>
      <View style={styles.cardImageContainer}>
        {/* Placeholder for image - in real app would use actual image */}
        <View style={styles.cardImagePlaceholder}>
          <Text style={styles.cardImageText}>{booking.type.toUpperCase()}</Text>
        </View>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>{booking.status}</Text>
        </View>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.bookingId}>#{booking.id}</Text>
        <Text style={styles.bookingName}>{booking.name}</Text>
        <Text style={styles.bookingLocation}>{booking.location}</Text>
        <View style={styles.bookingDetails}>
          <Text style={styles.detailItem}>📅 {booking.dates}</Text>
          <Text style={styles.detailItem}>👥 {booking.guests} Guests</Text>
        </View>
        <View style={styles.cardFooter}>
          <Text style={styles.totalPrice}>${booking.totalPrice.toLocaleString()}</Text>
          <View style={styles.actionButtons}>
            <Button
              title="Details"
              onPress={() => {}}
              variant="outline"
              size="small"
            />
            {booking.status === 'confirmed' && (
              <Button
                title="Cancel"
                onPress={() => {}}
                variant="secondary"
                size="small"
              />
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>My Bookings</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Filter ⌄</Text>
        </TouchableOpacity>
      </View>

      {/* Status Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={[styles.tabText, styles.activeTabText]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Confirmed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Pending</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Past</Text>
        </TouchableOpacity>
      </View>

      {/* Summary Cards */}
      <View style={styles.summaryContainer}>
        <View style={[styles.summaryCard, SHADOWS.small]}>
          <Text style={styles.summaryValue}>$22,000</Text>
          <Text style={styles.summaryLabel}>Total Spent</Text>
        </View>
        <View style={[styles.summaryCard, SHADOWS.small]}>
          <Text style={styles.summaryValue}>3</Text>
          <Text style={styles.summaryLabel}>Upcoming Trips</Text>
        </View>
        <View style={[styles.summaryCard, SHADOWS.small]}>
          <Text style={styles.summaryValue}>VIP</Text>
          <Text style={styles.summaryLabel}>Member Status</Text>
        </View>
      </View>

      {/* Bookings List */}
      <FlatList
        data={mockBookings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderBookingCard(item)}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      {/* CTA */}
      <View style={styles.ctaContainer}>
        <Button
          title="Plan New Trip"
          onPress={() => navigation.navigate('AYAT')}
          variant="primary"
          size="large"
          style={styles.ctaButton}
        />
      </View>
    </View>
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
    paddingBottom: SPACING.md,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  filterButton: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
  },
  filterButtonText: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: '600',
  },
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.md,
    gap: SPACING.sm,
  },
  tab: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: BORDER_RADIUS.full,
    backgroundColor: COLORS.gray[100],
  },
  activeTab: {
    backgroundColor: COLORS.primary,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.gray[600],
  },
  activeTabText: {
    color: COLORS.white,
  },
  summaryContainer: {
    flexDirection: 'row',
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.lg,
    gap: SPACING.md,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: SPACING.xs,
  },
  summaryLabel: {
    fontSize: 12,
    color: COLORS.gray[600],
    textAlign: 'center',
  },
  listContent: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.xxl,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.lg,
    overflow: 'hidden',
    marginBottom: SPACING.md,
  },
  cardImageContainer: {
    height: 120,
    position: 'relative',
  },
  cardImagePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.gray[200],
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImageText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.gray[400],
  },
  statusBadge: {
    position: 'absolute',
    top: SPACING.md,
    right: SPACING.md,
    backgroundColor: COLORS.success,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
    borderRadius: BORDER_RADIUS.full,
  },
  statusText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  cardContent: {
    padding: SPACING.md,
  },
  bookingId: {
    fontSize: 12,
    color: COLORS.gray[500],
    marginBottom: SPACING.xs,
  },
  bookingName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.gray[800],
    marginBottom: SPACING.xs,
  },
  bookingLocation: {
    fontSize: 14,
    color: COLORS.gray[600],
    marginBottom: SPACING.md,
  },
  bookingDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.md,
  },
  detailItem: {
    fontSize: 13,
    color: COLORS.gray[700],
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: COLORS.gray[100],
    paddingTop: SPACING.md,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: SPACING.sm,
  },
  ctaContainer: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.xl,
  },
  ctaButton: {
    width: '100%',
  },
});

export default BookingsScreen;
