import React from 'react'; 
import { 
  StyleSheet, 
  ScrollView, 
  Text,
  View,
  Image
} from 'react-native'; 
import DiaryCard from '../components/DiaryCard';

const diaryEntries = [ 
  { 
    id: 1, 
    title: 'Pagi yang Tenang', 
    date: '2025-10-06', 
    preview: `Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk...`, 
    image: { uri: 'https://picsum.photos/seed/happy/80' },
    mood: 'happy'
  }, 
  { 
    id: 2, 
    title: 'Produktif di Kampus', 
    date: '2025-10-05', 
    preview: `Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru...`, 
    image: { uri: 'https://picsum.photos/seed/focus/80' },
    mood: 'focus'
  }, 
  { 
    id: 3, 
    title: 'Senja di Taman', 
    date: '2025-10-04', 
    preview: `Menikmati senja sambil membaca buku favorit. Warna langit sangat indah...`, 
    image: { uri: 'https://picsum.photos/seed/calm/80' },
    mood: 'calm' 
  },
  { 
    id: 4, 
    title: 'Harus Mengulang Laporan', 
    date: '2025-10-03', 
    preview: `File laporanku tiba-tiba *corrupt* dan belum di-backup. Terpaksa mengetik ulang dari awal...`, 
    // Memanggil gambar lokal (pastikan folder dan filenya sudah dibuat sesuai langkah 1)
    image: require('../../assets/moods/sedih.png'),
    mood: 'sad' 
  },
  { 
    id: 5, 
    title: 'Makan Malam Bersama', 
    date: '2025-10-02', 
    preview: `Merayakan ulang tahun teman dengan makan malam bersama. Sangat seru dan menyenangkan!`, 
    image: require('../../assets/moods/makan.png'),
    mood: 'excited' 
  },
]; 

export default function DiaryListScreen() { 
  return ( 
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={styles.content} 
    > 
      {/* Header dengan Avatar Pengguna */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Buku Harian</Text> 
        <Image 
          source={{ uri: 'https://i.pravatar.cc/150?img=12' }} // Gambar avatar remote dummy
          style={styles.avatar} 
        />
      </View>

      {diaryEntries.map((entry) => ( 
        <DiaryCard 
          key={entry.id} 
          title={entry.title} 
          date={entry.date} 
          preview={entry.preview} 
          image={entry.image} // Properti gambar dikirim ke komponen
          mood={entry.mood}   // Properti mood dikirim untuk variasi border
        /> 
      ))} 
    </ScrollView> 
  ); 
} 

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    backgroundColor: '#f9fafb', // Latar sedikit keabu-abuan agar kartu lebih menonjol
  }, 
  content: { 
    padding: 16, 
  }, 
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: { 
    fontSize: 28, 
    fontWeight: '800', 
    color: '#111827',
  }, 
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#e5e7eb',
  }
});