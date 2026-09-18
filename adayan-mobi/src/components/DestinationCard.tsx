import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../utils/theme';
import { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
  onPress?: () => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.card, SHADOWS.medium]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Image source={{ uri: destination.imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{destination.name}</Text>
          {destination.isLuxury && (
            <View style={styles.luxuryBadge}>
              <Text style={styles.luxuryText}>★</Text>
            </View>
          )}
        </View>
        <Text style={styles.country}>{destination.country}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {destination.description}
        </Text>
        <View style={styles.footer}>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>★ {destination.rating.toFixed(1)}</Text>
          </View>
          <Text style={styles.price}>
            From ${destination.priceFrom.toLocaleString()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.lg,
    overflow: 'hidden',
    marginVertical: SPACING.sm,
    marginHorizontal: SPACING.md,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  content: {
    padding: SPACING.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  luxuryBadge: {
    backgroundColor: COLORS.gold,
    width: 28,
    height: 28,
    borderRadius: BORDER_RADIUS.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  luxuryText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  country: {
    fontSize: 14,
    color: COLORS.gray[600],
    marginBottom: SPACING.sm,
  },
  description: {
    fontSize: 14,
    color: COLORS.gray[700],
    lineHeight: 20,
    marginBottom: SPACING.md,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.gold,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
});

export default DestinationCard;
