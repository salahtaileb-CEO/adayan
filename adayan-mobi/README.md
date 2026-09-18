# Adayan - Luxury Travel Planner Mobile App

## Overview
Adayan is a premium mobile application designed for VIP customers seeking luxury travel experiences. The app features three specialized AI agents to provide concierge services, travel planning, and tour guidance.

## Features

### 🎩 ADAM - Concierge AI Agent
- Restaurant reservations at Michelin-starred establishments
- Private jet charters and helicopter transfers
- Exclusive event access and VIP tickets
- Luxury hotel suites and private villas
- Personal shopping and styling services
- Yacht charters and marine experiences

### 🗺️ AYAT - Travel Planner AI Agent
- Bespoke luxury itinerary creation
- Destination recommendations
- Flight and hotel coordination
- Activity planning and booking
- Budget management

### 🏛️ ANAS - Tour Guide AI Agent
- Historical sites and monuments expertise
- Local cuisine and restaurant recommendations
- Cultural insights and traditions
- Hidden gems and off-the-beaten-path locations
- Photography tips and best spots

### Additional Features
- Real-time flight search and booking
- Luxury hotel search and reservations
- Curated travel packages
- Booking management and tracking
- VIP member profiles and preferences
- Clean, responsive UI with purple (#6B4C9A) typography on white background

## Tech Stack
- **Framework**: React Native with Expo SDK 57
- **Navigation**: React Navigation (Tabs & Stack)
- **API Client**: Axios
- **State Management**: React Hooks (useState, useContext)
- **Styling**: StyleSheet with custom theme

## Project Structure
```
adayan-mobi/
├── App.tsx                 # Main app entry with navigation
├── app.json               # Expo configuration
├── eas.json               # EAS Build configuration
├── src/
│   ├── screens/           # Screen components
│   │   ├── HomeScreen.tsx
│   │   ├── SearchScreen.tsx
│   │   ├── AdamScreen.tsx
│   │   ├── AyatScreen.tsx
│   │   ├── AnasScreen.tsx
│   │   ├── BookingsScreen.tsx
│   │   └── ProfileScreen.tsx
│   ├── components/        # Reusable components
│   │   ├── Button.tsx
│   │   ├── DestinationCard.tsx
│   │   └── ChatComponents.tsx
│   ├── services/          # API services
│   │   └── api.ts
│   ├── types/             # TypeScript types
│   │   └── index.ts
│   ├── utils/             # Utilities and theme
│   │   └── theme.ts
│   └── context/           # React context providers
└── .env                   # Environment variables
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Expo CLI
- EAS CLI

### Installation
```bash
# Install dependencies
npm install

# Start development server
npx expo start

# Run on iOS simulator
npx expo run:ios

# Run on Android emulator
npx expo run:android

# Run on web
npx expo start --web
```

### Building for Production
```bash
# Initialize EAS (if not done)
eas init

# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android

# Submit to stores
eas submit --platform ios
eas submit --platform android
```

## Configuration

### Environment Variables
Create a `.env` file with:
```
EXPO_PUBLIC_API_URL=https://api.adayan.com/v1
```

### EAS Project ID
The project is configured with EAS Project ID: `798c21a6-93be-4886-9da8-5b0392454046`

## Design System

### Colors
- **Primary**: #6B4C9A (Purple)
- **Primary Dark**: #543D7A
- **Primary Light**: #8B6AB5
- **White**: #FFFFFF
- **Gold**: #D4AF37 (for luxury accents)

### Typography
- Clean, readable fonts
- Purple text on white background
- Hierarchical sizing for clarity

### Components
- Elegant cards with subtle shadows
- Rounded corners (8-16px)
- Generous spacing for premium feel
- Responsive layouts

## API Integration
The app is designed to connect to a cloud-based backend API. See `src/services/api.ts` for available endpoints:
- Flight search and booking
- Hotel search and reservation
- Destination listings
- Tour packages
- AI agent chat interfaces
- User bookings management

## Next Steps
1. Connect to actual backend API endpoints
2. Implement authentication flow
3. Add secure storage for tokens
4. Integrate payment processing
5. Add push notifications
6. Implement offline support
7. Add analytics and tracking
8. Complete remaining screen implementations

## License
© 2025 Adayan Luxury Travel. All rights reserved.
