import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../utils/theme';
import { Button } from '../components/Button';

interface ProfileScreenProps {
  navigation: any;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const user = {
    name: 'Alexander Morrison',
    email: 'alexander.m@vip.adayan.com',
    tier: 'DIAMOND' as const,
    memberSince: '2023',
    totalTrips: 24,
    totalSpent: 285000,
    preferences: {
      seatClass: 'First Class',
      hotelStars: '5+',
      dietaryRestrictions: ['Gluten-free'],
      interests: ['Culture', 'Fine Dining', 'Adventure'],
    },
  };

  const menuItems = [
    { icon: '👤', title: 'Personal Information', subtitle: 'Name, contact details' },
    { icon: '💳', title: 'Payment Methods', subtitle: 'Cards & billing' },
    { icon: '🛂', title: 'Passport & Documents', subtitle: 'Travel documents' },
    { icon: '⭐', title: 'Loyalty Programs', subtitle: 'Airline & hotel status' },
    { icon: '🔔', title: 'Notifications', subtitle: 'Preferences & alerts' },
    { icon: '🌙', title: 'Dark Mode', subtitle: 'App appearance' },
    { icon: '🌐', title: 'Language & Currency', subtitle: 'USD • English' },
    { icon: '❓', title: 'Help & Support', subtitle: 'FAQ & contact us' },
    { icon: '📋', title: 'Terms & Privacy', subtitle: 'Legal information' },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header with Profile Info */}
      <View style={styles.header}>
        <Text style={styles.screenTitle}>Profile</Text>
        
        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatar}>AM</Text>
          </View>
          <Text style={styles.userName}>{user.name}</Text>
          <View style={[styles.tierBadge, styles.diamondTier]}>
            <Text style={styles.tierText}>💎 {user.tier} MEMBER</Text>
          </View>
          <Text style={styles.memberSince}>Member since {user.memberSince}</Text>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={[styles.statCard, SHADOWS.small]}>
            <Text style={styles.statValue}>{user.totalTrips}</Text>
            <Text style={styles.statLabel}>Total Trips</Text>
          </View>
          <View style={[styles.statCard, SHADOWS.small]}>
            <Text style={styles.statValue}>${(user.totalSpent / 1000).toFixed(0)}K</Text>
            <Text style={styles.statLabel}>Total Spent</Text>
          </View>
          <View style={[styles.statCard, SHADOWS.small]}>
            <Text style={styles.statValue}>{user.preferences.seatClass}</Text>
            <Text style={styles.statLabel}>Preferred Class</Text>
          </View>
        </View>
      </View>

      {/* Preferences Quick View */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Preferences</Text>
        <View style={[styles.preferencesCard, SHADOWS.small]}>
          <View style={styles.preferenceItem}>
            <Text style={styles.preferenceIcon}>🏨</Text>
            <View>
              <Text style={styles.preferenceLabel}>Hotel Preference</Text>
              <Text style={styles.preferenceValue}>{user.preferences.hotelStars} Hotels</Text>
            </View>
          </View>
          <View style={styles.preferenceDivider} />
          <View style={styles.preferenceItem}>
            <Text style={styles.preferenceIcon}>🍽️</Text>
            <View>
              <Text style={styles.preferenceLabel}>Dietary Restrictions</Text>
              <Text style={styles.preferenceValue}>{user.preferences.dietaryRestrictions.join(', ')}</Text>
            </View>
          </View>
          <View style={styles.preferenceDivider} />
          <View style={styles.preferenceItem}>
            <Text style={styles.preferenceIcon}>❤️</Text>
            <View>
              <Text style={styles.preferenceLabel}>Interests</Text>
              <Text style={styles.preferenceValue}>{user.preferences.interests.join(' • ')}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Menu Items */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Settings</Text>
        <View style={[styles.menuContainer, SHADOWS.small]}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.menuItem, index !== menuItems.length - 1 && styles.menuItemBorder]}
              onPress={() => {}}
            >
              <View style={styles.menuItemLeft}>
                <Text style={styles.menuItemIcon}>{item.icon}</Text>
                <View>
                  <Text style={styles.menuItemTitle}>{item.title}</Text>
                  <Text style={styles.menuItemSubtitle}>{item.subtitle}</Text>
                </View>
              </View>
              <Text style={styles.menuItemArrow}>›</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Logout Button */}
      <View style={styles.logoutSection}>
        <Button
          title="Log Out"
          onPress={() => {}}
          variant="outline"
          size="large"
          style={styles.logoutButton}
        />
      </View>

      {/* App Version */}
      <View style={styles.versionContainer}>
        <Text style={styles.versionText}>Adayan v1.0.0</Text>
        <Text style={styles.copyrightText}>© 2025 Adayan Luxury Travel</Text>
      </View>

      <View style={styles.footer} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray[50],
  },
  header: {
    backgroundColor: COLORS.primary,
    paddingTop: SPACING.xxl,
    paddingBottom: SPACING.lg,
    paddingHorizontal: SPACING.lg,
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: SPACING.lg,
  },
  profileCard: {
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: BORDER_RADIUS.full,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.md,
    borderWidth: 4,
    borderColor: COLORS.gold,
  },
  avatar: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: SPACING.sm,
  },
  tierBadge: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: BORDER_RADIUS.full,
    marginBottom: SPACING.xs,
  },
  diamondTier: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  tierText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '600',
  },
  memberSince: {
    fontSize: 13,
    color: COLORS.white,
    opacity: 0.8,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SPACING.md,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
    marginHorizontal: SPACING.xs,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: SPACING.xs,
  },
  statLabel: {
    fontSize: 11,
    color: COLORS.gray[600],
    textAlign: 'center',
  },
  section: {
    marginTop: SPACING.lg,
    paddingHorizontal: SPACING.lg,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.gray[800],
    marginBottom: SPACING.md,
  },
  preferencesCard: {
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
  },
  preferenceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.sm,
  },
  preferenceIcon: {
    fontSize: 24,
    marginRight: SPACING.md,
  },
  preferenceLabel: {
    fontSize: 13,
    color: COLORS.gray[600],
    marginBottom: SPACING.xs,
  },
  preferenceValue: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.gray[800],
  },
  preferenceDivider: {
    height: 1,
    backgroundColor: COLORS.gray[200],
    marginVertical: SPACING.sm,
    marginLeft: 40,
  },
  menuContainer: {
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.lg,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.md,
  },
  menuItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray[100],
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuItemIcon: {
    fontSize: 24,
    marginRight: SPACING.md,
  },
  menuItemTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.gray[800],
  },
  menuItemSubtitle: {
    fontSize: 13,
    color: COLORS.gray[500],
    marginTop: SPACING.xs,
  },
  menuItemArrow: {
    fontSize: 24,
    color: COLORS.gray[400],
  },
  logoutSection: {
    paddingHorizontal: SPACING.lg,
    marginTop: SPACING.xl,
    marginBottom: SPACING.lg,
  },
  logoutButton: {
    width: '100%',
  },
  versionContainer: {
    alignItems: 'center',
    paddingVertical: SPACING.lg,
  },
  versionText: {
    fontSize: 13,
    color: COLORS.gray[500],
    marginBottom: SPACING.xs,
  },
  copyrightText: {
    fontSize: 12,
    color: COLORS.gray[400],
  },
  footer: {
    height: SPACING.xl,
  },
});

export default ProfileScreen;
