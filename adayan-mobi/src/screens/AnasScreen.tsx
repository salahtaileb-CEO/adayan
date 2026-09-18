import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../utils/theme';
import { ChatMessage, ChatInput } from '../components/ChatComponents';
import { AIMessage } from '../types';

const welcomeMessage: AIMessage = {
  id: '1',
  agentId: 'ANAS',
  role: 'assistant',
  content: "Assalamu Alaikum! I'm ANAS, your personal tour guide and cultural expert. I bring destinations to life with insider knowledge, hidden gems, and authentic experiences.\n\nI can help you with:\n\n🏛️ Historical Sites & Monuments\n• Expert commentary and stories\n• Skip-the-line access arrangements\n• Photography tips and best spots\n\n🍽️ Local Cuisine & Restaurants\n• Authentic local eateries\n• Food tours and tastings\n• Culinary traditions and etiquette\n\n🎨 Culture & Traditions\n• Local customs and etiquette\n• Traditional performances\n• Artisan workshops and markets\n\n🗺️ Off-the-Beaten-Path\n• Hidden viewpoints\n• Local neighborhoods\n• Secret spots known only to locals\n\nWhich destination would you like to explore?",
  timestamp: new Date().toISOString(),
  suggestions: [
    'Explore Paris landmarks',
    'Tokyo hidden gems',
    'Rome historical tour',
    'Dubai modern attractions',
  ],
};

interface AnasScreenProps {
  navigation: any;
}

export const AnasScreen: React.FC<AnasScreenProps> = ({ navigation }) => {
  const [messages, setMessages] = useState<AIMessage[]>([welcomeMessage]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<string>('');

  const handleSendMessage = async (content: string) => {
    const userMessage: AIMessage = {
      id: Date.now().toString(),
      agentId: 'ANAS',
      role: 'user',
      content,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI tour guide response
    setTimeout(() => {
      let aiResponse: AIMessage;
      
      if (content.toLowerCase().includes('paris')) {
        aiResponse = {
          id: (Date.now() + 1).toString(),
          agentId: 'ANAS',
          role: 'assistant',
          content: `Ah, Paris! The City of Light awaits! Let me be your guide through this magnificent city.\n\n🗼 Must-Visit Landmarks:\n\n1. Eiffel Tower\n• Best time: Sunset for golden hour photos\n• Secret spot: Trocadéro Gardens for perfect views\n• Pro tip: Book summit access in advance\n• Nearby: Champagne bar at the top\n\n2. Louvre Museum\n• Hidden gem: Medieval Louvre foundations\n• Must-see: Mona Lisa, Venus de Milo\n• Local secret: Less crowded Richelieu entrance\n• Best café: Café Marly inside the museum\n\n3. Montmartre\n• Sacred Heart Basilica at sunrise\n• Place du Tertre artists' square\n• Secret: La Maison Rose restaurant\n• Hidden vineyard: Clos Montmartre\n\n4. Seine River\n• Private boat tour recommendation\n• Best bridges: Pont Alexandre III\n• Evening cruise with dinner\n• Hidden lock-free bridge: Pont Neuf\n\n🍽️ Local Dining Recommendations:\n• Le Comptoir du Relais (Saint-Germain)\n• L'As du Fallafel (Marais)\n• Breizh Café (authentic crêpes)\n\nWould you like detailed information about any specific location or shall I arrange a private guided tour?`,
          timestamp: new Date().toISOString(),
          suggestions: [
            'Book private tour',
            'Restaurant reservations',
            'More historical sites',
            'Shopping recommendations',
          ],
        };
      } else if (content.toLowerCase().includes('tokyo')) {
        aiResponse = {
          id: (Date.now() + 1).toString(),
          agentId: 'ANAS',
          role: 'assistant',
          content: `Tokyo! Where ancient traditions meet futuristic innovation! Allow me to show you the real Tokyo.\n\n⛩️ Essential Experiences:\n\n1. Senso-ji Temple (Asakusa)\n• Arrive early (7 AM) to avoid crowds\n• Nakamise shopping street for souvenirs\n• Secret: Small shrine behind main hall\n• Traditional: Fortune telling (omikuji)\n\n2. Meiji Shrine\n• Peaceful forest walk in the city\n• Weekend: Traditional wedding ceremonies\n• Hidden: Iris Garden (seasonal)\n• Adjacent: Harajuku's Takeshita Street\n\n3. Tsukiji Outer Market\n• Best sushi breakfast: Sushi Dai\n• Fresh seafood tastings\n• Kitchen knife shops\n• Local secret: Tamagoyaki stands\n\n4. Shibuya & Shinjuku\n• Shibuya Crossing (best view: Starbucks)\n• Golden Gai bars (Shinjuku)\n• Robot Restaurant alternative\n• Metropolitan Government Building (free views)\n\n🍜 Culinary Journey:\n• Ramen: Ichiran or local shops in Yokocho\n• Tempura: Tenmatsu in Ginza\n• Yakitori: Omoide Yokocho alleyways\n• Wagyu: Premium beef experiences\n\n🌸 Seasonal Highlights:\n• Spring: Cherry blossoms in Ueno Park\n• Autumn: Red leaves in Rikugien Garden\n• Winter: Illuminations in Roppongi\n\nShall I arrange a private guide or provide more details on specific areas?`,
          timestamp: new Date().toISOString(),
          suggestions: [
            'Arrange local guide',
            'Food tour booking',
            'Traditional experiences',
            'Nightlife recommendations',
          ],
        };
      } else if (content.toLowerCase().includes('rome')) {
        aiResponse = {
          id: (Date.now() + 1).toString(),
          agentId: 'ANAS',
          role: 'assistant',
          content: `Roma! The Eternal City beckons with millennia of history! Let me guide you through la dolce vita.\n\n🏛️ Ancient Wonders:\n\n1. Colosseum & Roman Forum\n• Skip-the-line: Underground & arena floor\n• Best photo: From Via dei Fori Imperiali\n• Hidden: Domus Aurea (Nero's palace)\n• Evening: Moonlight tours available\n\n2. Vatican City\n• St. Peter's Basilica (climb the dome)\n• Sistine Chapel: Go early or late\n• Secret: Vatican Gardens tour\n• Raphael Rooms: Often less crowded\n\n3. Pantheon\n• Free entry, awe-inspiring architecture\n• Best light: Midday through oculus\n• Nearby: Tazza d'Oro coffee\n• Tomb of Raphael inside\n\n4. Trevi Fountain\n• Visit at dawn for no crowds\n• Coin tossing tradition explained\n• Nearby: Quirinal Palace gardens\n• Gelato: Giolitti nearby\n\n🍝 Culinary Delights:\n• Carbonara: Da Danilo or Flavio al Velavevodetto\n• Cacio e Pepe: Roscioli or Checco il Carrettiere\n• Supplì (fried rice balls): Street food essential\n• Wine: Frascati from nearby hills\n\n🚶‍♂️ Charming Neighborhoods:\n• Trastevere: Cobblestone streets, nightlife\n• Testaccio: Authentic Roman cuisine\n• Monti: Boutiques and wine bars\n• Jewish Ghetto: Historic and culinary gem\n\nWould you like me to arrange a private archaeologist guide or make dining reservations?`,
          timestamp: new Date().toISOString(),
          suggestions: [
            'Private archaeologist guide',
            'Vatican VIP tour',
            'Food tour booking',
            'Day trips (Pompeii, etc.)',
          ],
        };
      } else {
        aiResponse = {
          id: (Date.now() + 1).toString(),
          agentId: 'ANAS',
          role: 'assistant',
          content: `Thank you for your interest! As your personal tour guide, I'm here to make your travel experiences unforgettable.\n\n🌍 Popular Destinations I Can Guide You Through:\n\nEurope:\n• Paris, France - Art, romance, cuisine\n• Rome, Italy - Ancient history, Vatican\n• Barcelona, Spain - Gaudí architecture\n• London, UK - Royal heritage, museums\n• Athens, Greece - Classical antiquity\n\nAsia:\n• Tokyo, Japan - Tradition meets modernity\n• Kyoto, Japan - Temples, geisha culture\n• Bangkok, Thailand - Temples, street food\n• Singapore - Gardens, multicultural hub\n• Dubai, UAE - Modern marvels, luxury\n\nAmericas:\n• New York, USA - Iconic landmarks\n• Cusco/Machu Picchu, Peru - Incan wonders\n• Rio de Janeiro, Brazil - Beaches, Carnival\n• Vancouver, Canada - Nature and city blend\n\nWhat I Provide:\n✓ Detailed historical context and stories\n✓ Hidden gems and local secrets\n✓ Best times to visit each location\n✓ Photography tips and optimal angles\n✓ Local dining and shopping recommendations\n✓ Cultural etiquette and customs\n✓ Private guide arrangements\n✓ Skip-the-line access coordination\n\nTell me which destination excites you, and I'll craft a personalized tour experience!`,
          timestamp: new Date().toISOString(),
          suggestions: [
            'European cities',
            'Asian adventures',
            'Historical sites',
            'Cultural experiences',
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
            <Text style={styles.agentEmoji}>🏛️</Text>
          </View>
          <View>
            <Text style={styles.agentName}>ANAS</Text>
            <Text style={styles.agentRole}>Tour Guide AI Agent</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.locationButton}>
          <Text style={styles.locationButtonText}>📍 Current Location</Text>
        </TouchableOpacity>
      </View>

      {/* Tour Categories */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesBar}
        contentContainerStyle={styles.categoriesContent}
      >
        {['🏛️ History', '🍽️ Food', '🎨 Art', '🕌 Culture', '📸 Photo Spots', '🛍️ Shopping'].map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.categoryChip}
            onPress={() => handleSendMessage(`Tell me about ${category.split(' ')[1]} in my destination`)}
          >
            <Text style={styles.categoryChipText}>{category}</Text>
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
        placeholder="Ask about landmarks, culture, food..."
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
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: COLORS.gray[100],
  },
  locationButtonText: {
    color: COLORS.gray[700],
    fontSize: 13,
    fontWeight: '500',
  },
  categoriesBar: {
    maxHeight: 50,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray[100],
  },
  categoriesContent: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    gap: SPACING.sm,
  },
  categoryChip: {
    backgroundColor: COLORS.gray[100],
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: BORDER_RADIUS.full,
  },
  categoryChipText: {
    fontSize: 13,
    color: COLORS.gray[700],
    fontWeight: '500',
  },
  messagesContainer: {
    paddingVertical: SPACING.md,
  },
});

export default AnasScreen;
