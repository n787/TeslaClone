import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
//import CarItem from './components/CarItem';
import CarsList from './components/CarsList';

export default function App() {
  return (
    <View style={styles.container}>
           < CarsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {     // this container for whole screen
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});