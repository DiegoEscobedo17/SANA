// screens/TherapyScreen.tsx

import React from 'react';
import { StyleSheet, Linking, TouchableOpacity, ScrollView, Image, View } from 'react-native';
import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';
import { Ionicons } from '@expo/vector-icons';

const specialists = [
  {
    name: 'Dra. Celeste Soledad Escobedo Carrasco',
    specialty: 'Psicóloga',
    email: 'celeste@gmail.com',
    phone: '+1234567890',
    image: require('../assets/images/piscologa.jpg'),
  },
  {
    name: 'Dra. Ana Paula Isadora Herrera Lazo',
    specialty: 'Psicóloga',
    email: 'ana@gmail.com',
    phone: '+1234567890',
    image: require('../assets/images/piscologa.jpg'),
  },
  {
    name: 'Dra. Yrmgard Yilian Yulliethe Ortiz Negron',
    specialty: 'Psicóloga',
    email: 'yrmgard@gmail.com',
    phone: '+1234567890',
    image: require('../assets/images/piscologa.jpg'),
  },
  {
    name: 'Dra. Milagros Chavez Nuñez',
    specialty: 'Psicóloga',
    email: 'milagros@ejemplo.com',
    phone: '+0987654321',
    image: require('../assets/images/piscologa.jpg'),
  },
  // Agrega más especialistas según sea necesario
];

const TherapyScreen: React.FC = () => {
  const handleContact = (contact: { email: string; phone: string }) => {
    // Abrir aplicación de correo electrónico
    Linking.openURL(`mailto:${contact.email}`);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.screenTitle}>
        Especialistas Disponibles
      </ThemedText>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {specialists.map((specialist, index) => (
          <TouchableOpacity
            key={index}
            style={styles.specialistCard}
            onPress={() => handleContact(specialist)}
          >
            <Image source={specialist.image} style={styles.specialistImage} />
            <View style={styles.specialistInfo}>
              <ThemedText type="defaultBold" style={styles.specialistName}>
                {specialist.name}
              </ThemedText>
              <ThemedText type="default" style={styles.specialistSpecialty}>
                {specialist.specialty}
              </ThemedText>
              <View style={styles.contactInfo}>
                <Ionicons name="mail-outline" size={16} color="#0a7ea4" />
                <ThemedText type="default" style={styles.contactText}>
                  {specialist.email}
                </ThemedText>
              </View>
              <View style={styles.contactInfo}>
                <Ionicons name="call-outline" size={16} color="#0a7ea4" />
                <ThemedText type="default" style={styles.contactText}>
                  {specialist.phone}
                </ThemedText>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 40,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0a7ea4',
    textAlign: 'center',
    marginBottom: 20,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  specialistCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 5, // Para Android
    shadowColor: '#000', // Para iOS
    shadowOffset: { width: 0, height: 2 }, // Para iOS
    shadowOpacity: 0.25, // Para iOS
    shadowRadius: 3.84, // Para iOS
  },
  specialistImage: {
    width: 100,
    height: 100,
  },
  specialistInfo: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  specialistName: {
    fontSize: 18,
    color: '#0a7ea4',
  },
  specialistSpecialty: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  contactText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#333',
  },
});

export default TherapyScreen;
