import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../../styles/PlantDetailsStyles.js';

const PlantDetails = ({ plant, onBackClick }) => {

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

export default PlantDetails;
