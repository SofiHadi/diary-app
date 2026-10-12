import React from 'react'; 
import { View, Text, Image, StyleSheet } from 'react-native'; 

export default function DiaryCard({ title, date, preview, image, mood }) { 
  // Fungsi untuk menentukan warna border berdasarkan mood
  const getMoodColor = (moodName) => {
    switch (moodName) {
      case 'happy': return '#4ade80'; // Hijau
      case 'focus': return '#3b82f6'; // Biru
      case 'calm': return '#a78bfa'; // Ungu
      case 'sad': return '#9ca3af'; // Abu-abu
      case 'excited': return '#f59e0b'; // Oranye
      default: return '#e5e7eb'; // Abu-abu standar
    }
  };

  const moodColor = getMoodColor(mood);

  return ( 
    // Menerapkan warna kustom pada borderColor dan menebalkan border kiri sebagai variasi
    <View style={[styles.card, { borderColor: moodColor, borderLeftWidth: 6 }]}> 
      <Image source={image} style={styles.mood} /> 
      <View style={styles.content}> 
        <Text style={styles.title}>{title}</Text> 
        <Text style={styles.date}>{date}</Text> 
        <Text style={styles.preview} numberOfLines={2}>
          {preview}
        </Text> 
      </View> 
    </View> 
  ); 
} 

const styles = StyleSheet.create({ 
  card: { 
    flexDirection: 'row', 
    gap: 12, 
    padding: 12, 
    borderWidth: 1, 
    borderRadius: 12, 
    marginBottom: 12,
    backgroundColor: '#fff',
  }, 
  mood: { 
    width: 64, 
    height: 64, 
    borderRadius: 32, 
  }, 
  content: { 
    flex: 1, 
  }, 
  title: { 
    fontSize: 16, 
    fontWeight: '700', 
  }, 
  date: { 
    fontSize: 12, 
    color: '#6b7280', 
    marginBottom: 6, 
  }, 
  preview: { 
    fontSize: 14, 
  }, 
});