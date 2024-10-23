// screens/DiaryScreen.tsx
import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, FlatList, View, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';
import CustomButton from '../components/CustomButton';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

interface Entry {
  id: string;
  text: string;
  date: string;
}

const DiaryScreen: React.FC = () => {
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState<Entry[]>([]);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = async () => {
    try {
      const storedEntries = await AsyncStorage.getItem('diaryEntries');
      if (storedEntries) {
        setEntries(JSON.parse(storedEntries));
      }
    } catch (error) {
      console.error('Error cargando las entradas del diario:', error);
    }
  };

  const saveEntry = async () => {
    if (entry.trim() === '') {
      Alert.alert('Entrada Vacía', 'Por favor, escribe algo antes de guardar.');
      return;
    }
    setIsSaving(true);
    const newEntry: Entry = {
      id: Date.now().toString(),
      text: entry,
      date: new Date().toLocaleString(),
    };
    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    setEntry('');
    try {
      await AsyncStorage.setItem('diaryEntries', JSON.stringify(updatedEntries));
    } catch (error) {
      console.error('Error guardando la entrada:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const deleteEntry = (id: string) => {
    Alert.alert(
      'Eliminar Entrada',
      '¿Estás seguro de que quieres eliminar esta entrada?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: async () => {
            const updatedEntries = entries.filter((item) => item.id !== id);
            setEntries(updatedEntries);
            try {
              await AsyncStorage.setItem('diaryEntries', JSON.stringify(updatedEntries));
            } catch (error) {
              console.error('Error eliminando la entrada:', error);
            }
          },
        },
      ]
    );
  };

  const renderItem = ({ item }: { item: Entry }) => (
    <Animatable.View animation="fadeInUp" duration={800} style={styles.entryItem}>
      <View style={styles.entryHeader}>
        <ThemedText type="subtitle" style={styles.entryDate}>
          {item.date}
        </ThemedText>
        <TouchableOpacity onPress={() => deleteEntry(item.id)}>
          <Ionicons name="trash-outline" size={24} color="#ff4d4d" />
        </TouchableOpacity>
      </View>
      <ThemedText type="default" style={styles.entryText}>
        {item.text}
      </ThemedText>
    </Animatable.View>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Diario Personal
      </ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu sentimiento aquí..."
        placeholderTextColor="#888"
        multiline
        value={entry}
        onChangeText={setEntry}
      />
      <CustomButton
        title="Guardar Entrada"
        onPress={saveEntry}
        icon="save-outline"
        loading={isSaving}
        style={styles.saveButton}
      />
      <FlatList
        data={entries}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <ThemedText type="default" style={styles.emptyText}>
            No tienes entradas en tu diario. ¡Comienza a escribir!
          </ThemedText>
        }
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 40,
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
    color: '#0a7ea4',
    fontSize: 24,
    fontWeight: '700',
  },
  input: {
    height: 100,
    borderColor: '#0a7ea4',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    textAlignVertical: 'top',
    fontSize: 16,
    backgroundColor: '#f0f8ff',
    color: '#11181C',
  },
  saveButton: {
    backgroundColor: '#0a7ea4',
    marginTop: 10,
  },
  list: {
    marginTop: 20,
    paddingBottom: 20,
  },
  entryItem: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Para Android
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  entryDate: {
    fontSize: 14,
    color: '#555',
  },
  entryText: {
    fontSize: 16,
    color: '#333',
  },
  emptyText: {
    textAlign: 'center',
    color: '#555',
    marginTop: 50,
    fontSize: 16,
  },
});

export default DiaryScreen;
