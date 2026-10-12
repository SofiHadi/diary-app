import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import DiaryListScreen from './src/screens/DiaryListScreen';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <DiaryListScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});