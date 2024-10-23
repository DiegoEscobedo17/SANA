// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { useColorScheme } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme(); // 'light' o 'dark'
  const currentColors = Colors[colorScheme] || Colors.light;

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'resources':
              iconName = focused ? 'book' : 'book-outline';
              break;
            case 'diary':
              iconName = focused ? 'bookmarks' : 'bookmarks-outline';
              break;
            case 'therapy':
              iconName = focused ? 'people' : 'people-outline';
              break;
            default:
              iconName = 'alert-circle-outline'; // Ícono válido para rutas no definidas
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: currentColors.tabIconSelected,
        tabBarInactiveTintColor: currentColors.tabIconDefault,
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Inicio' }} />
      <Tabs.Screen name="resources" options={{ title: 'Recursos' }} />
      <Tabs.Screen name="diary" options={{ title: 'Diario' }} />
      <Tabs.Screen name="therapy" options={{ title: 'Terapia' }} />
      {/* Asegúrate de que no haya Tabs.Screen adicionales */}
    </Tabs>
  );
}
