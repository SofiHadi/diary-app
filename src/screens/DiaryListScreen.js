import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import EntryForm from '../components/EntryForm';
import DiaryCard from '../components/DiaryCard';
import DiaryDetailModal from '../components/DiaryDetailModal';
import { colors } from '../styles/tokens';

const MOOD_IMAGES = {
  makan: require('../../assets/moods/makan.png'),
  sedih: require('../../assets/moods/sedih.png'),
};

export default function DiaryListScreen() {
  const [entries, setEntries] = useState([
    { id: '1', title: 'Makan Bareng', preview: 'Hari ini makan mie ayam bareng teman.', date: '28/10/2026', mood: 'makan' },
    { id: '2', title: 'Tugas Menumpuk', preview: 'Sedih banget tugas minggu ini banyak.', date: '28/10/2026', mood: 'sedih' },
  ]);
  const [query, setQuery] = useState('');
  const [likedIds, setLikedIds] = useState({});
  const [selected, setSelected] = useState(null);

  const handleSearch = (text) => {
    setQuery(text);
  };

  const handleAddEntry = (newEntry) => {
    setEntries([newEntry, ...entries]);
  };

  const handleToggleLike = (id) => {
    setLikedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredEntries = entries.filter(
    (entry) =>
      entry.title.toLowerCase().includes(query.toLowerCase()) ||
      entry.preview.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <EntryForm onSubmit={handleAddEntry} />

      <FlatList
        data={filteredEntries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DiaryCard
            title={item.title}
            date={item.date}
            preview={item.preview}
            moodImage={MOOD_IMAGES[item.mood] || MOOD_IMAGES['makan']}
            liked={!!likedIds[item.id]}
            onPress={() => setSelected(item)}
            onToggleLike={() => handleToggleLike(item.id)}
          />
        )}
      />

      <DiaryDetailModal
        visible={!!selected}
        entry={selected}
        moodImage={selected ? (MOOD_IMAGES[selected.mood] || MOOD_IMAGES['makan']) : null}
        onClose={() => setSelected(null)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});