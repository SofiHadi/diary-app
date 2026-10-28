import React from 'react';
import { Modal, View, Text, Button, StyleSheet, Image } from 'react-native';
import { colors, spacing } from '../styles/tokens';

export default function DiaryDetailModal({ visible, entry, onClose, moodImage }) {
  if (!entry) return null;

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Image source={moodImage} style={styles.mood} />
          <Text style={styles.title}>{entry.title}</Text>
          <Text style={styles.date}>{entry.date}</Text>
          <Text style={styles.body}>{entry.preview}</Text>

          <Button title="Tutup" onPress={onClose} color={colors.primary} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: spacing.large,
  },
  modalContent: {
    backgroundColor: colors.surface,
    padding: spacing.large,
    borderRadius: 12,
    alignItems: 'center',
  },
  mood: {
    width: 80,
    height: 80,
    marginBottom: spacing.medium,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: spacing.small,
  },
  date: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.medium,
  },
  body: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: spacing.large,
  },
});