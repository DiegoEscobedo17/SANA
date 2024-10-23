// screens/HomeScreen.tsx

import React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, Image, View } from 'react-native';
import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen: React.FC = () => {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ImageBackground
        source={require('../assets/images/background.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.header}>
          <Image
            source={require('../assets/images/sana-logo.png')}
            style={styles.logo}
          />
          <ThemedText type="title" style={styles.title}>
            Bienvenido a SANA
          </ThemedText>
        </View>
        <ThemedText type="subtitle" style={styles.subtitle}>
          Tu compañero en el camino de la sanación emocional
        </ThemedText>

        
      </ImageBackground>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    color: '#1e1717',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#d6bcbc',
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#0a7ea4',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    width: '80%',
    marginBottom: 16,
  },
  buttonIcon: {
    marginRight: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default HomeScreen;
