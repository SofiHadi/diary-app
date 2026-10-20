import React, { useState } from 'react';
import { View, FlatList, useWindowDimensions, StyleSheet } from 'react-native';
import { tokens } from '../../theme';
import DiaryCard from '../components/DiaryCard';
import DiaryDetailModal from '../components/DiaryDetailModal';

const DIARY_DATA = [
  { id: '1', title: 'Belajar React Native', date: '10 Okt 2026', content: 'Hari ini saya belajar tentang FlatList dan Hooks.' },
  { id: '2', title: 'Makan Siang Enak', date: '11 Okt 2026', content: 'Makan ayam geprek level 5, sangat pedas tapi enak.' },
  { id: '3', title: 'Tugas Praktikum', date: '12 Okt 2026', content: 'Mengerjakan tugas membuat responsif desain 1 dan 2 kolom.' },
  { id: '4', title: 'Olahraga Pagi', date: '13 Okt 2026', content: 'Lari keliling komplek selama 30 menit agar sehat.' },
];

export default function DiaryListScreen() {
  const { width } = useWindowDimensions();
  // Breakpoint 600px
  const numColumns = width >= 600 ? 2 : 1;

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDiary, setSelectedDiary] = useState(null);

  const handlePressCard = (diary) => {
    setSelectedDiary(diary);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <FlatList
        key={numColumns} // PENTING: Merender ulang saat jumlah kolom berubah
        data={DIARY_DATA}
        numColumns={numColumns}
        contentContainerStyle={styles.listPadding}
        renderItem={({ item }) => (
          <DiaryCard item={item} onPress={() => handlePressCard(item)} />
        )}
        keyExtractor={(item) => item.id}
      />

      <DiaryDetailModal
        visible={modalVisible}
        diary={selectedDiary}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colors.background,
  },
  listPadding: {
    padding: tokens.spacing.sm,
  },
});