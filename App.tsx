// App.tsx
import React, { useEffect, useState } from 'react';
import { View, StatusBar } from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      {showSplash ? <SplashScreen /> : <HomeScreen />}
    </View>
  );
}
