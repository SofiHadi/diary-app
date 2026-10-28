import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';
import { colors, spacing } from '../styles/tokens';

export default function EntryForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [preview, setPreview] = useState('');
  const [mood, setMood] = useState('makan');

  const handleSubmit = () => {
    if (!title.trim() || !preview.trim()) {
      Alert.alert('Error', 'Judul dan isi diary nggak boleh kosong!');
      return;
    }

    const newEntry = {
      id: Date.now().toString(),
      title,
      preview,
      date: new Date().toLocaleDateString('id-ID'),
      mood,
    };

    onSubmit(newEntry);
    setTitle('');
    setPreview('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Judul Diary"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Apa yang kamu pikirkan hari ini?"
        value={preview}
        onChangeText={setPreview}
        multiline
      />
      
      <View style={styles.moodSelector}>
        <TouchableOpacity 
          style={[styles.moodOption, mood === 'makan' && styles.selectedMood]} 
          onPress={() => setMood('makan')}
        >
          <Text style={[styles.moodText, mood === 'makan' && styles.selectedMoodText]}>Makan</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.moodOption, mood === 'sedih' && styles.selectedMood]} 
          onPress={() => setMood('sedih')}
        >
          <Text style={[styles.moodText, mood === 'sedih' && styles.selectedMoodText]}>Sedih</Text>
        </TouchableOpacity>
      </View>

      <Button title="Tambah Entri" onPress={handleSubmit} color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.medium,
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  input: {
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 8,
    padding: spacing.small,
    marginBottom: spacing.small,
    backgroundColor: colors.background,
  },
  textArea: {
    height: 60,
    textAlignVertical: 'top',
  },
  moodSelector: {
    flexDirection: 'row',
    marginBottom: spacing.small,
    gap: 8,
  },
  moodOption: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.border,
  },
  selectedMood: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  moodText: {
    fontSize: 12,
    color: colors.text,
  },
  selectedMoodText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});