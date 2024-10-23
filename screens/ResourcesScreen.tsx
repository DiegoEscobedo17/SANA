// screens/ResourcesScreen.tsx
import React from 'react';
import { StyleSheet, Linking, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';
import { Ionicons } from '@expo/vector-icons'; // Importa Ionicons si deseas añadir iconos

const resources = [
  {
    title: 'Foro de Apoyo',
    url: 'https://www.psicoactiva.com/blog/regalos-emocionales/',
    image: require('../assets/images/apoyo.jpg'),
  },
  {
    title: 'Artículos sobre Duelo',
    url: 'https://articulosduele.com',
    image: require('../assets/images/duelo.jpg'),
  },
  {
    title: 'Videos de Sanación',
    url: 'https://www.youtube.com/watch?v=BR193aSDpsg',
    image: require('../assets/images/salvacion.jpg'),
  },
  {
    title: 'Conoce Casos de Duelo',
    url: 'https://revistas.uis.edu.co/index.php/revistamedicasuis/article/view/12918',
    image: require('../assets/images/duelo2.jpg'),
  },
  {
    title: 'La vida Continua...',
    url: 'https://lavidacontinua.org/',
    image: require('../assets/images/problemas.jpg'),
  },
  {
    title: 'Eres más fuerte de lo que crees',
    url: 'https://www.planetadelibros.com.pe/libro-eres-mas-fuerte-de-lo-que-crees/318063',
    image: require('../assets/images/fuerza.png'),
  },
  // Agrega más recursos según sea necesario
];

const ResourcesScreen: React.FC = () => {
  const handlePress = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      alert(`No se puede abrir la URL: ${url}`);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {resources.map((resource, index) => (
          <TouchableOpacity
            key={index}
            style={styles.resourceItem}
            onPress={() => handlePress(resource.url)}
          >
            <ImageBackground source={resource.image} style={styles.resourceImage}>
              <ThemedText type="default" style={styles.overlayText}>
                {resource.title}
                {/* Opcional: Añadir un icono */}
                {/* <Ionicons name="arrow-forward-outline" size={20} color="#fff" style={{ marginLeft: 8 }} /> */}
              </ThemedText>
            </ImageBackground>
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
    marginTop: 40, // Ajusta según necesites
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  resourceItem: {
    marginVertical: 8,
    borderRadius: 12,
    overflow: 'hidden', // Para que las esquinas redondeadas afecten también a la imagen
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Para Android
  },
  resourceImage: {
    width: '100%',
    height: 150, // Aumenta la altura para hacer la imagen más grande
    justifyContent: 'flex-end', // Posiciona el texto al final (abajo) de la imagen
    alignItems: 'flex-start', // Alinea el texto al inicio (izquierda) de la imagen
  },
  overlayText: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fondo semitransparente para mejorar la legibilidad
    padding: 8,
    borderRadius: 8,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResourcesScreen;
