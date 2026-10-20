import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { tokens } from '../../theme';

export default function DiaryDetailModal({ visible, diary, onClose }) {
  if (!diary) return null;

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.modalCard}>
          <Text style={styles.title}>{diary.title}</Text>
          <Text style={styles.date}>{diary.date}</Text>
          <Text style={styles.content}>{diary.content}</Text>

          <TouchableOpacity 
            style={styles.closeButton} 
            onPress={onClose}
            accessible={true}
            accessibilityLabel="Tutup detail catatan"
          >
            <Text style={styles.closeText}>Tutup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: tokens.spacing.md,
  },
  modalCard: {
    width: '90%',
    maxWidth: 500,
    backgroundColor: tokens.colors.surface,
    padding: tokens.spacing.lg,
    borderRadius: tokens.borderRadius.md,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: tokens.colors.text,
    marginBottom: tokens.spacing.xs,
  },
  date: {
    fontSize: 14,
    color: tokens.colors.textSecondary,
    marginBottom: tokens.spacing.md,
  },
  content: {
    fontSize: 16,
    color: tokens.colors.text,
    lineHeight: 24,
    marginBottom: tokens.spacing.lg,
  },
  closeButton: {
    backgroundColor: tokens.colors.primary,
    paddingVertical: tokens.spacing.md,
    borderRadius: tokens.borderRadius.md,
    alignItems: 'center',
    minHeight: 48,
    justifyContent: 'center',
  },
  closeText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});