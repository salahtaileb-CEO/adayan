import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../utils/theme';
import { Button } from '../components/Button';

interface SearchScreenProps {
  navigation: any;
}

export const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {
  const [searchType, setSearchType] = React.useState<'flights' | 'hotels' | 'packages'>('flights');
  
  // Flight search state
  const [origin, setOrigin] = React.useState('');
  const [destination, setDestination] = React.useState('');
  const [departureDate, setDepartureDate] = React.useState('');
  const [returnDate, setReturnDate] = React.useState('');
  const [passengers, setPassengers] = React.useState(2);
  const [classType, setClassType] = React.useState('business');

  // Hotel search state
  const [hotelDestination, setHotelDestination] = React.useState('');
  const [checkIn, setCheckIn] = React.useState('');
  const [checkOut, setCheckOut] = React.useState('');
  const [guests, setGuests] = React.useState(2);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Search</Text>
      </View>

      {/* Search Type Tabs */}
      <View style={styles.searchTypeContainer}>
        <TouchableOpacity
          style={[styles.searchTypeTab, searchType === 'flights' && styles.activeSearchTypeTab]}
          onPress={() => setSearchType('flights')}
        >
          <Text style={[styles.searchTypeText, searchType === 'flights' && styles.activeSearchTypeText]}>
            ✈️ Flights
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.searchTypeTab, searchType === 'hotels' && styles.activeSearchTypeTab]}
          onPress={() => setSearchType('hotels')}
        >
          <Text style={[styles.searchTypeText, searchType === 'hotels' && styles.activeSearchTypeText]}>
            🏨 Hotels
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.searchTypeTab, searchType === 'packages' && styles.activeSearchTypeTab]}
          onPress={() => setSearchType('packages')}
        >
          <Text style={[styles.searchTypeText, searchType === 'packages' && styles.activeSearchTypeText]}>
            📦 Packages
          </Text>
        </TouchableOpacity>
      </View>

      {/* Flight Search Form */}
      {searchType === 'flights' && (
        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>From</Text>
            <TextInput
              style={styles.input}
              placeholder="City or Airport"
              placeholderTextColor={COLORS.gray[400]}
              value={origin}
              onChangeText={setOrigin}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>To</Text>
            <TextInput
              style={styles.input}
              placeholder="City or Airport"
              placeholderTextColor={COLORS.gray[400]}
              value={destination}
              onChangeText={setDestination}
            />
          </View>

          <View style={styles.row}>
            <View style={[styles.inputGroup, styles.halfWidth]}>
              <Text style={styles.label}>Departure</Text>
              <TextInput
                style={styles.input}
                placeholder="Select Date"
                placeholderTextColor={COLORS.gray[400]}
                value={departureDate}
                onChangeText={setDepartureDate}
              />
            </View>

            <View style={[styles.inputGroup, styles.halfWidth]}>
              <Text style={styles.label}>Return</Text>
              <TextInput
                style={styles.input}
                placeholder="Select Date"
                placeholderTextColor={COLORS.gray[400]}
                value={returnDate}
                onChangeText={setReturnDate}
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.inputGroup, styles.halfWidth]}>
              <Text style={styles.label}>Passengers</Text>
              <TextInput
                style={styles.input}
                placeholder="2"
                placeholderTextColor={COLORS.gray[400]}
                keyboardType="numeric"
                value={passengers.toString()}
                onChangeText={(val) => setPassengers(parseInt(val) || 1)}
              />
            </View>

            <View style={[styles.inputGroup, styles.halfWidth]}>
              <Text style={styles.label}>Class</Text>
              <View style={styles.pickerContainer}>
                {['economy', 'business', 'first'].map((cls) => (
                  <TouchableOpacity
                    key={cls}
                    style={[
                      styles.classOption,
                      classType === cls && styles.activeClassOption,
                    ]}
                    onPress={() => setClassType(cls)}
                  >
                    <Text
                      style={[
                        styles.classOptionText,
                        classType === cls && styles.activeClassOptionText,
                      ]}
                    >
                      {cls.charAt(0).toUpperCase() + cls.slice(1)}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>

          <Button
            title="Search Flights"
            onPress={() => navigation.navigate('Bookings')}
            variant="primary"
            size="large"
            style={styles.searchButton}
          />
        </View>
      )}

      {/* Hotel Search Form */}
      {searchType === 'hotels' && (
        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Destination</Text>
            <TextInput
              style={styles.input}
              placeholder="City, Resort, or Hotel"
              placeholderTextColor={COLORS.gray[400]}
              value={hotelDestination}
              onChangeText={setHotelDestination}
            />
          </View>

          <View style={styles.row}>
            <View style={[styles.inputGroup, styles.halfWidth]}>
              <Text style={styles.label}>Check-in</Text>
              <TextInput
                style={styles.input}
                placeholder="Select Date"
                placeholderTextColor={COLORS.gray[400]}
                value={checkIn}
                onChangeText={setCheckIn}
              />
            </View>

            <View style={[styles.inputGroup, styles.halfWidth]}>
              <Text style={styles.label}>Check-out</Text>
              <TextInput
                style={styles.input}
                placeholder="Select Date"
                placeholderTextColor={COLORS.gray[400]}
                value={checkOut}
                onChangeText={setCheckOut}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Guests</Text>
            <TextInput
              style={styles.input}
              placeholder="2"
              placeholderTextColor={COLORS.gray[400]}
              keyboardType="numeric"
              value={guests.toString()}
              onChangeText={(val) => setGuests(parseInt(val) || 1)}
            />
          </View>

          <Button
            title="Search Hotels"
            onPress={() => navigation.navigate('Bookings')}
            variant="primary"
            size="large"
            style={styles.searchButton}
          />
        </View>
      )}

      {/* Packages Placeholder */}
      {searchType === 'packages' && (
        <View style={styles.packagesContainer}>
          <Text style={styles.packagesTitle}>Luxury Travel Packages</Text>
          <Text style={styles.packagesSubtitle}>
            Curated experiences combining flights, hotels, and exclusive activities
          </Text>
          
          <View style={styles.packageCard}>
            <Text style={styles.packageName}>🏝️ Maldives Ultimate Escape</Text>
            <Text style={styles.packageDetails}>7 Days • All Inclusive • Private Villa</Text>
            <Text style={styles.packagePrice}>From $12,500 per person</Text>
            <Button
              title="View Details"
              onPress={() => {}}
              variant="outline"
              size="small"
              style={styles.packageButton}
            />
          </View>

          <View style={styles.packageCard}>
            <Text style={styles.packageName}>🗼 Parisian Elegance</Text>
            <Text style={styles.packageDetails}>5 Days • First Class • 5-Star Hotels</Text>
            <Text style={styles.packagePrice}>From $8,900 per person</Text>
            <Button
              title="View Details"
              onPress={() => {}}
              variant="outline"
              size="small"
              style={styles.packageButton}
            />
          </View>

          <View style={styles.packageCard}>
            <Text style={styles.packageName}>⛰️ Swiss Alps Adventure</Text>
            <Text style={styles.packageDetails}>6 Days • Ski & Spa • Luxury Chalet</Text>
            <Text style={styles.packagePrice}>From $9,500 per person</Text>
            <Button
              title="View Details"
              onPress={() => {}}
              variant="outline"
              size="small"
              style={styles.packageButton}
            />
          </View>

          <Button
            title="Browse All Packages"
            onPress={() => navigation.navigate('AYAT')}
            variant="primary"
            size="large"
            style={styles.searchButton}
          />
        </View>
      )}

      {/* Quick Filters */}
      <View style={styles.filtersSection}>
        <Text style={styles.filtersTitle}>Quick Filters</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.filterChip}>
            <Text style={styles.filterChipText}>⭐ 5-Star Only</Text>
          </View>
          <View style={styles.filterChip}>
            <Text style={styles.filterChipText}>🌊 Beachfront</Text>
          </View>
          <View style={styles.filterChip}>
            <Text style={styles.filterChipText}>🏔️ Mountain View</Text>
          </View>
          <View style={styles.filterChip}>
            <Text style={styles.filterChipText}>🍽️ All Inclusive</Text>
          </View>
          <View style={styles.filterChip}>
            <Text style={styles.filterChipText}>💎 VIP Access</Text>
          </View>
          <View style={styles.filterChip}>
            <Text style={styles.filterChipText}>🚁 Private Transfer</Text>
          </View>
        </ScrollView>
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
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.xxl,
    paddingBottom: SPACING.md,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  searchTypeContainer: {
    flexDirection: 'row',
    paddingHorizontal: SPACING.lg,
    marginTop: SPACING.md,
    gap: SPACING.sm,
  },
  searchTypeTab: {
    flex: 1,
    paddingVertical: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: COLORS.gray[100],
    alignItems: 'center',
  },
  activeSearchTypeTab: {
    backgroundColor: COLORS.primary,
  },
  searchTypeText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.gray[700],
  },
  activeSearchTypeText: {
    color: COLORS.white,
  },
  formContainer: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.lg,
  },
  inputGroup: {
    marginBottom: SPACING.md,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.gray[700],
    marginBottom: SPACING.sm,
  },
  input: {
    backgroundColor: COLORS.gray[50],
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
    fontSize: 16,
    borderWidth: 1,
    borderColor: COLORS.gray[200],
  },
  row: {
    flexDirection: 'row',
    gap: SPACING.md,
  },
  halfWidth: {
    flex: 1,
  },
  pickerContainer: {
    flexDirection: 'row',
    gap: SPACING.sm,
  },
  classOption: {
    flex: 1,
    paddingVertical: SPACING.sm,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: COLORS.gray[100],
    alignItems: 'center',
  },
  activeClassOption: {
    backgroundColor: COLORS.primary,
  },
  classOptionText: {
    fontSize: 13,
    color: COLORS.gray[700],
    fontWeight: '500',
  },
  activeClassOptionText: {
    color: COLORS.white,
  },
  searchButton: {
    marginTop: SPACING.md,
    marginBottom: SPACING.lg,
  },
  packagesContainer: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.lg,
  },
  packagesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.gray[800],
    marginBottom: SPACING.sm,
  },
  packagesSubtitle: {
    fontSize: 14,
    color: COLORS.gray[600],
    marginBottom: SPACING.lg,
  },
  packageCard: {
    backgroundColor: COLORS.gray[50],
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    ...SHADOWS.small,
  },
  packageName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: COLORS.gray[800],
    marginBottom: SPACING.xs,
  },
  packageDetails: {
    fontSize: 14,
    color: COLORS.gray[600],
    marginBottom: SPACING.sm,
  },
  packagePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: SPACING.md,
  },
  packageButton: {
    alignSelf: 'flex-start',
  },
  filtersSection: {
    marginTop: SPACING.xl,
    paddingHorizontal: SPACING.lg,
  },
  filtersTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.gray[800],
    marginBottom: SPACING.md,
  },
  filterChip: {
    backgroundColor: COLORS.gray[100],
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: BORDER_RADIUS.full,
    marginRight: SPACING.sm,
  },
  filterChipText: {
    fontSize: 13,
    color: COLORS.gray[700],
    fontWeight: '500',
  },
  footer: {
    height: SPACING.xxl,
  },
});

export default SearchScreen;
