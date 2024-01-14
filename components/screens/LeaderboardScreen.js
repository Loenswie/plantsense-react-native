import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import BottomPlants from '../../assets/images/BottomPlants.png';
import PlantDetailsScreen from './PlantDetailsScreen';
import styles from '../../styles/LeaderboardStyles.js';
import { API_TOKEN } from '@env';

const URL = 'https://test-plantsense-cms.onrender.com/api/plants?populate=*';
const TOKEN = API_TOKEN;

const LeaderboardScreen = () => {
  const [selectedPlant, setSelectedPlant] = useState(null);

  const [topUsers, setTopUsers] = useState([]);

  const fetchTopUsers = async () => {
      const response = await fetch(URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    const data = await response.json();
    const sortedData = data.data.sort((a, b) => {
        return b.attributes.Streak - a.attributes.Streak;
    });
    setTopUsers(sortedData);
  };
  useEffect(() => {
    fetchTopUsers().catch((error) => {
        console.log(error);
    });
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
              {topUsers.map((plant, index) => (
                  <Pressable
                      key={plant.id}
                      onPress={() => handlePlantClick(plant)}
                      style={styles.listItem}
                  >
                    <Text style={styles.listItemText}>{index + 1}</Text>
                    <Text style={styles.listItemText}>{plant.attributes.Name}</Text>
                    <Text style={styles.listItemText}>{plant.attributes.Streak} 🔥</Text>
                  </Pressable>
              ))}
            </>
        )}

        <Image source={BottomPlants} style={styles.image} />
      </View>
  );
};

export default LeaderboardScreen;
