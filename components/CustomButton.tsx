// components/CustomButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CustomButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: object;
  icon?: string;
  loading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, style, icon, loading = false }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress} disabled={loading}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <>
          {icon && <Ionicons name={icon} size={20} color="#fff" style={styles.icon} />}
          <Text style={styles.text}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0a7ea4',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  icon: {
    marginRight: 8,
  },
});

export default CustomButton;
