import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { colors, spacing } from '../styles/tokens';

export default function SearchBar({ onSearch }) {
  const [localQuery, setLocalQuery] = useState('');

  const handleChange = (text) => {
    setLocalQuery(text);
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Cari diary..."
        value={localQuery}
        onChangeText={handleChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.medium,
    backgroundColor: colors.surface,
  },
  input: {
    height: 40,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: spacing.medium,
    backgroundColor: colors.background,
  },
});