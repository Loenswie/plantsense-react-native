import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import BottomPlants from '../../assets/images/BottomPlants.png';
import PlantDetailsScreen from './PlantDetailsScreen';
import styles from '../../styles/LeaderboardStyles.js';

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

/* The actual 8 Top Users (Mock url because we don't have a backend yet)

  const [topUsers, setTopUsers] = useState([]);

  const fetchTopUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    data.length = 8;
    setTopUsers(data);
  };
  useEffect(() => {
    fetchTopUsers();
  }, []);

 */

const LeaderboardScreen = () => {
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PlantSense</Text>
      {selectedPlant ? (
        <PlantDetailsScreen plant={selectedPlant} onBackClick={handleBackClick} />
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

export default LeaderboardScreen;
