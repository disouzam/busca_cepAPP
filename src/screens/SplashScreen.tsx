import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from '../styles/SplashScreen.styles';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      {/* Ajuste o caminho do logo se precisar */}
      <Image source={require('../../assets/images/location_logo.png')} style={styles.logo} />
      <Text style={styles.title}>Bem-vindo ao LocalizaCEP</Text>
    </View>
  );
}
