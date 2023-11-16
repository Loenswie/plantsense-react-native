import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';


import { useFonts } from 'expo-font';

const PlantDetails = ({ plant, onBackClick }) => {

  const [loaded] = useFonts({
    'Josefin-Slab': require('../assets/fonts/JosefinSlab-VariableFont_wght.ttf')
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.PlantDetailsContainer}>
      <Text style={styles.title}>{plant.plantName}</Text>
      <Text style={styles.text}>Owner: {plant.owner}</Text>
      <Text style={styles.text}>Plant Type: {plant.plantType}</Text>
      <Text style={styles.text}>Streak: {plant.streak} 🔥</Text>
      <Pressable style={styles.button} onPress={onBackClick}>
        <Text style={styles.text}>Back to Leaderboard</Text>
      </Pressable> 
    </View>
  );
};

const styles = StyleSheet.create({
  PlantDetailsContainer: {
    backgroundColor: '#4B7235',
    padding: 20,
    borderRadius: 8,
    margin: 20,
    color: '#fff',
    width: '85%',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Josefin-Slab',
  },
  button: {
    backgroundColor: '#354d28',
    color: '#fff',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    fontSize: 16,
    width: '95%',
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    width: '95%',
    fontFamily: 'Josefin-Slab',
  },
});

export default PlantDetails;
