// app/_layout.tsx
import { Slot } from 'expo-router';
import { ThemedView } from '../components/ThemedView';

export default function Layout() {
  return (
    <ThemedView style={{ flex: 1 }}>
      <Slot />
    </ThemedView>
  );
}
