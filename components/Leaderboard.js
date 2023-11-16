import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import BottomPlants from '../assets/BottomPlants.png';
import PlantDetails from './PlantDetails';
import { useFonts } from 'expo-font';

const mockTopUsers = [
  { id: 1, plantName: 'Sunflower', streak: 10, plantType: 'Flower', owner: 'Alice' },
  { id: 2, plantName: 'Rose', streak: 8, plantType: 'Flower', owner: 'Bob' },
  { id: 3, plantName: 'Tulip', streak: 7, plantType: 'Flower', owner: 'Charlie' },
  { id: 4, plantName: 'Daisy', streak: 6, plantType: 'Flower', owner: 'David' },
  { id: 5, plantName: 'Lily', streak: 5, plantType: 'Flower', owner: 'Eve' },
  { id: 6, plantName: 'Orchid', streak: 4, plantType: 'Flower', owner: 'Frank' },
  { id: 7, plantName: 'Daffodil', streak: 3, plantType: 'Flower', owner: 'Grace' },
  { id: 8, plantName: 'Hyacinth', streak: 2, plantType: 'Flower', owner: 'Heidi' },
];

const Leaderboard = () => {
  const [topUsers, setTopUsers] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState(null);

  useEffect(() => {
    setTopUsers(mockTopUsers);
  }, []);

  const handlePlantClick = (plant) => {
    setSelectedPlant(plant);
  };

  const handleBackClick = () => {
    setSelectedPlant(null);
  };

  const [loaded] = useFonts({
    'Josefin-Slab': require('../assets/fonts/JosefinSlab-VariableFont_wght.ttf')
  });
  
  if (!loaded) {
    return null;
  }



  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PlantSense</Text>
      {selectedPlant ? (
        <PlantDetails plant={selectedPlant} onBackClick={handleBackClick} />
      ) : (
        <>
          <Text style={styles.subtitle}>Leaderboard</Text>
          {topUsers.map((user, index) => (
            <Pressable
              key={user.id}
              onPress={() => handlePlantClick(user)}
              style={styles.listItem}
            >
              <Text style={styles.listItemText}>{index + 1}</Text>
              <Text style={styles.listItemText}>{user.plantName}</Text>
              <Text style={styles.listItemText}>{user.streak} 🔥</Text>
            </Pressable>
          ))}
        </>
      )}
      
      <Image source={BottomPlants} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#393f38',
    alignItems: 'center',
    justifyContent: 'start',
    fontSize: 20,
    color: 'white',
    width: '100%',
    height: '80%',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    margin: 25,
    fontFamily: 'Josefin-Slab',
  },
  subtitle: {
    textAlign: 'center',
    color: '#fff',
    marginVertical: 0,
    fontSize: 35,
    fontFamily: 'Josefin-Slab',

  },
  listItem: {
    backgroundColor: '#4B7235',
    margin: 6,
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width: '85%',
  },
  listItemText: {
    marginRight: 10,
    fontWeight: '800',
    color: '#fff',
    fontFamily: 'Josefin-Slab',
  },
  image: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 100,
    zIndex: -1,
  },
});

export default Leaderboard;
