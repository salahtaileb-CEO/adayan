import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../utils/theme';
import { ChatMessage, ChatInput } from '../components/ChatComponents';
import { AIMessage } from '../types';

const welcomeMessage: AIMessage = {
  id: '1',
  agentId: 'AYAT',
  role: 'assistant',
  content: "Hello! I'm AYAT, your personal travel planning assistant. I specialize in crafting bespoke luxury itineraries tailored to your preferences.\n\nTo create your perfect journey, please share:\n\n• Destination or region of interest\n• Travel dates and duration\n• Number of travelers\n• Preferred travel style (relaxation, adventure, culture, etc.)\n• Any special occasions or requirements\n• Budget range\n\nLet's design an unforgettable experience together!",
  timestamp: new Date().toISOString(),
  suggestions: [
    'Plan a 7-day Maldives trip',
    'European summer tour',
    'Romantic getaway Paris',
    'Family adventure safari',
  ],
};

interface AyatScreenProps {
  navigation: any;
}

export const AyatScreen: React.FC<AyatScreenProps> = ({ navigation }) => {
  const [messages, setMessages] = useState<AIMessage[]>([welcomeMessage]);
  const [isLoading, setIsLoading] = useState(false);
  const [tripPlan, setTripPlan] = useState<any>(null);

  const handleSendMessage = async (content: string) => {
    const userMessage: AIMessage = {
      id: Date.now().toString(),
      agentId: 'AYAT',
      role: 'user',
      content,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response with itinerary planning
    setTimeout(() => {
      let aiResponse: AIMessage;
      
      if (content.toLowerCase().includes('maldives')) {
        aiResponse = {
          id: (Date.now() + 1).toString(),
          agentId: 'AYAT',
          role: 'assistant',
          content: `Excellent choice! The Maldives offers unparalleled luxury. Here's a初步 itinerary:\n\n🏝️ 7-Day Maldives Luxury Escape\n\nDay 1-2: Private Overwater Villa\n• Seaplane transfer from Male\n• Sunset champagne cruise\n• Private beach dinner\n\nDay 3-4: Underwater Experiences\n• Private submarine tour\n• Michelin-star underwater restaurant\n• Spa treatments over the lagoon\n\nDay 5-7: Island Hopping\n• Private yacht charter\n• Exclusive sandbank picnic\n• Dolphin watching at sunset\n\n💰 Estimated: $8,500 - $15,000 per person\n\nWould you like me to refine this itinerary or proceed with booking?`,
          timestamp: new Date().toISOString(),
          suggestions: [
            'Proceed with booking',
            'Modify itinerary',
            'Show hotel options',
            'Add activities',
          ],
        };
      } else if (content.toLowerCase().includes('paris')) {
        aiResponse = {
          id: (Date.now() + 1).toString(),
          agentId: 'AYAT',
          role: 'assistant',
          content: `Paris, the city of light and luxury! Here's your exclusive itinerary:\n\n🗼 5-Day Parisian Elegance\n\nDay 1: Arrival & Champs-Élysées\n• Private transfer in luxury sedan\n• Suite at Ritz Paris\n• Evening at Eiffel Tower private lounge\n\nDay 2: Art & Culture\n• Private Louvre tour after hours\n• Lunch at Le Meurice Alain Ducasse\n• Shopping on Rue Saint-Honoré\n\nDay 3: Versailles Experience\n• Helicopter transfer to Versailles\n• Private palace tour\n• Garden picnic with champagne\n\nDay 4: Culinary Journey\n• Cooking class with Michelin chef\n• Wine tasting in Champagne region\n• Dinner at Le Cinq\n\nDay 5: Departure\n• Spa morning at Four Seasons\n• Private shopping assistance\n• Airport VIP lounge access\n\n💰 Estimated: $6,000 - $12,000 per person\n\nShall I customize this further?`,
          timestamp: new Date().toISOString(),
          suggestions: [
            'Book this itinerary',
            'Change hotels',
            'Add more days',
            'Different budget',
          ],
        };
      } else {
        aiResponse = {
          id: (Date.now() + 1).toString(),
          agentId: 'AYAT',
          role: 'assistant',
          content: `Thank you for sharing your travel interests. Based on your preferences, I'd recommend considering:\n\n🌟 Personalized Recommendations:\n\n1. Destination Suggestions\n• For relaxation: Maldives, Bora Bora, Seychelles\n• For culture: Kyoto, Rome, Istanbul\n• For adventure: Patagonia, New Zealand, Iceland\n• For urban luxury: Dubai, Singapore, Monaco\n\n2. Optimal Travel Periods\n• Weather considerations\n• Exclusive events and seasons\n• Privacy and crowd levels\n\n3. Luxury Accommodations\n• 5-star hotels and resorts\n• Private villas and estates\n• Boutique luxury properties\n\nPlease provide more details about your preferred destination, travel dates, and specific interests so I can craft a detailed day-by-day itinerary with exact bookings and experiences.\n\nWhat destination captures your imagination?`,
          timestamp: new Date().toISOString(),
          suggestions: [
            'Tell me about Maldives',
            'Show European options',
            'Asian luxury destinations',
            'Beach resorts only',
          ],
        };
      }
      
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.agentInfo}>
          <View style={styles.agentAvatar}>
            <Text style={styles.agentEmoji}>🗺️</Text>
          </View>
          <View>
            <Text style={styles.agentName}>AYAT</Text>
            <Text style={styles.agentRole}>Travel Planner AI Agent</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.itineraryButton}>
          <Text style={styles.itineraryButtonText}>My Plans</Text>
        </TouchableOpacity>
      </View>

      {/* Planning Stages */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.stagesBar}
        contentContainerStyle={styles.stagesContent}
      >
        {['✈️ Flights', '🏨 Hotels', '🎯 Activities', '🍽️ Dining', '🚗 Transport', '📋 Full Plan'].map((stage, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.stageChip, index === 5 && styles.stageChipActive]}
            onPress={() => handleSendMessage(`Show me ${stage.split(' ')[1]} options`)}
          >
            <Text style={[styles.stageChipText, index === 5 && styles.stageChipTextActive]}>
              {stage}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatMessage message={item} />
        )}
        contentContainerStyle={styles.messagesContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* Input */}
      <ChatInput
        onSend={handleSendMessage}
        placeholder="Describe your dream trip..."
        disabled={isLoading}
      />
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
    paddingVertical: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray[200],
  },
  agentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
  },
  agentAvatar: {
    width: 50,
    height: 50,
    borderRadius: BORDER_RADIUS.full,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  agentEmoji: {
    fontSize: 28,
  },
  agentName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  agentRole: {
    fontSize: 13,
    color: COLORS.gray[600],
  },
  itineraryButton: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  itineraryButtonText: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: '600',
  },
  stagesBar: {
    maxHeight: 50,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray[100],
  },
  stagesContent: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    gap: SPACING.sm,
  },
  stageChip: {
    backgroundColor: COLORS.gray[100],
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: BORDER_RADIUS.full,
  },
  stageChipActive: {
    backgroundColor: COLORS.primary,
  },
  stageChipText: {
    fontSize: 13,
    color: COLORS.gray[700],
    fontWeight: '500',
  },
  stageChipTextActive: {
    color: COLORS.white,
  },
  messagesContainer: {
    paddingVertical: SPACING.md,
  },
});

export default AyatScreen;
