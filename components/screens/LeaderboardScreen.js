import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import BottomPlants from '../../assets/images/BottomPlants.png';
import PlantDetailsScreen from './PlantDetailsScreen';
import styles from '../../styles/LeaderboardStyles.js';

const URL = 'https://test-plantsense-cms.onrender.com/api/plants?populate=*';
const TOKEN = '82e80ebaf984fa5045332258aecf63a00059e94bfedd91eed37520c0ce1c57f43f4ba4b0d8cafc342a3c01fbca0c43bc40d35a138edd9cb226a1b9729c6a4697be3193f4db5f710f4f1ad1fafcefdd5183ffec18cac1ee1ef1c4d1f9ff699960fea87f1bb294d702ff075515bb111a494781e88ea574363d6b8e65c22ca99f22';

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
