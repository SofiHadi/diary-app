import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, spacing } from '../styles/tokens';

export default function DiaryCard({
  title,
  date,
  preview,
  moodImage,
  liked,
  onPress,
  onToggleLike,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, { opacity: pressed ? 0.85 : 1 }]}
      accessibilityLabel={`Entri ${title} tanggal ${date}`}
    >
      <Image source={moodImage} style={styles.mood} />

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.preview} numberOfLines={3} ellipsizeMode="tail">
          {preview}
        </Text>
      </View>

      <TouchableOpacity onPress={onToggleLike} style={styles.likeButton}>
        <Text style={styles.likeText}>{liked ? '❤️' : '🤍'}</Text>
      </TouchableOpacity>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: spacing.medium,
    marginHorizontal: spacing.medium,
    marginVertical: spacing.small,
    backgroundColor: colors.surface,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  mood: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: spacing.medium,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
  },
  date: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  preview: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  likeButton: {
    justifyContent: 'center',
    paddingLeft: spacing.medium,
  },
  likeText: {
    fontSize: 24,
  },
});