import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import BottomPlants from '../../assets/images/BottomPlants.png';
import PlantDetailsScreen from './PlantDetailsScreen';
import styles from '../../styles/LeaderboardStyles.js';

const URL = 'http://localhost:1337/api/plants?populate=*'; // This is the URL for the Strapi API locally: does not work on mobile ( has to be changed to the IP address of the computer running the Strapi API)
const TOKEN = '8df4e48df1327c963d27f3a5b1f7a6be12c923d9d73250dd81a02f72e33f485e208d6cd03c441fdfbe1f46276d0e9f19286b89c7bf8b36140058862802da14513728558cd36c50394d614292aa1377c75f25482bcbbd32ddd69fa5929d112d031269ac6031fec90aaededbc4d7cf511b7c35345b34f0ff3de633fed093d4476d';

const LeaderboardScreen = () => {
  const [selectedPlant, setSelectedPlant] = useState(null);

  const [topUsers, setTopUsers] = useState([]);

  const fetchTopUsers = async () => {
    const response = await fetch(URL); // This is the fetch for the Strapi API locally: does not work on mobile ( has to be changed to the IP address of the computer running the Strapi API)
    // const response = await fetch(URL, {
    //   headers: {
    //     Authorization: `Bearer ${TOKEN}`,
    //   },
    // });
    const data = await response.json();
    const sortedData = data.data.sort((a, b) => {
        return b.attributes.Streak - a.attributes.Streak;
    });
    console.log(sortedData)
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
