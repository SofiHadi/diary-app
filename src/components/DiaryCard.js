import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { tokens } from '../../theme';

export default function DiaryCard({ item, onPress }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.7}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={`Buka catatan harian ${item.title}`}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.date}>
          {item.date}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: tokens.colors.surface,
    padding: tokens.spacing.md,
    margin: tokens.spacing.xs,
    borderRadius: tokens.borderRadius.md,
    minHeight: 80,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: tokens.colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  contentContainer: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: tokens.colors.text,
    marginBottom: tokens.spacing.xs,
  },
  date: {
    fontSize: 14,
    color: tokens.colors.textSecondary,
  },
});