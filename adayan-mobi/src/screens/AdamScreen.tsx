import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../utils/theme';
import { ChatMessage, ChatInput } from '../components/ChatComponents';
import { Button } from '../components/Button';
import { AIMessage } from '../types';
import { chatWithAdam } from '../services/api';

const welcomeMessage: AIMessage = {
  id: '1',
  agentId: 'ADAM',
  role: 'assistant',
  content: "Welcome to Adayan's VIP Concierge Service. I'm ADAM, your personal luxury concierge. How may I assist you today? I can help with:\n\n• Restaurant reservations at Michelin-starred establishments\n• Private jet charters and helicopter transfers\n• Exclusive event access and VIP tickets\n• Luxury hotel suites and private villas\n• Personal shopping and styling services\n• Yacht charters and marine experiences\n\nWhat would you like to arrange?",
  timestamp: new Date().toISOString(),
  suggestions: [
    'Book a Michelin star restaurant',
    'Arrange private jet charter',
    'VIP event tickets',
    'Luxury hotel booking',
  ],
};

interface AdamScreenProps {
  navigation: any;
}

export const AdamScreen: React.FC<AdamScreenProps> = ({ navigation }) => {
  const [messages, setMessages] = useState<AIMessage[]>([welcomeMessage]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (content: string) => {
    const userMessage: AIMessage = {
      id: Date.now().toString(),
      agentId: 'ADAM',
      role: 'user',
      content,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // In production, this would call the actual API
      // For now, we'll simulate a response
      setTimeout(() => {
        const aiResponse: AIMessage = {
          id: (Date.now() + 1).toString(),
          agentId: 'ADAM',
          role: 'assistant',
          content: `Thank you for your request. As your dedicated concierge, I'll personally ensure this is arranged to the highest standards. \n\nFor "${content}", I recommend:\n\n• Contacting our exclusive partners immediately\n• Securing VIP access and premium amenities\n• Coordinating all logistics seamlessly\n\nShall I proceed with making these arrangements? I can also provide alternative options if you'd prefer.`,
          timestamp: new Date().toISOString(),
          suggestions: [
            'Yes, proceed with booking',
            'Show me alternatives',
            'What are the details?',
            'Speak to human concierge',
          ],
        };
        setMessages((prev) => [...prev, aiResponse]);
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      setIsLoading(false);
      const errorMessage: AIMessage = {
        id: (Date.now() + 1).toString(),
        agentId: 'ADAM',
        role: 'assistant',
        content: 'I apologize for the inconvenience. Let me connect you with our human concierge team who will assist you immediately.',
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  const handleSuggestionPress = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.agentInfo}>
          <View style={styles.agentAvatar}>
            <Text style={styles.agentEmoji}>🎩</Text>
          </View>
          <View>
            <Text style={styles.agentName}>ADAM</Text>
            <Text style={styles.agentRole}>Concierge AI Agent</Text>
          </View>
        </View>
        <Button
          title="Call"
          onPress={() => {}}
          variant="outline"
          size="small"
        />
      </View>

      {/* Services Quick Access */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.servicesBar}
        contentContainerStyle={styles.servicesContent}
      >
        {['🍽️ Dining', '✈️ Flights', '🏨 Hotels', '🎭 Events', '🚗 Transport', '🛍️ Shopping'].map((service, index) => (
          <TouchableOpacity
            key={index}
            style={styles.serviceChip}
            onPress={() => handleSendMessage(`I need ${service.split(' ')[1]} services`)}
          >
            <Text style={styles.serviceChipText}>{service}</Text>
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
        placeholder="Request luxury services..."
        disabled={isLoading}
      />
    </View>
  );
};

import { TouchableOpacity } from 'react-native';

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
  servicesBar: {
    maxHeight: 50,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray[100],
  },
  servicesContent: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    gap: SPACING.sm,
  },
  serviceChip: {
    backgroundColor: COLORS.gray[100],
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: BORDER_RADIUS.full,
  },
  serviceChipText: {
    fontSize: 13,
    color: COLORS.gray[700],
    fontWeight: '500',
  },
  messagesContainer: {
    paddingVertical: SPACING.md,
  },
});

export default AdamScreen;
