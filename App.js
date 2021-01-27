import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CarsList from './components/CarItem/CarsList';



export default function App() {
  return (
    <View style={styles.container}>
      <CarsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {     // this container for whole screen
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   // position: "absolute",
   // top: 20,
  },  
 
});
