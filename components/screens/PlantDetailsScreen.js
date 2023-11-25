import React from 'react';
import {View, Text, Pressable, Image } from 'react-native';
import styles from '../../styles/PlantDetailsStyles.js';

const PlantDetailsScreen = ({plant, onBackClick}) => {

    return (
        <View style={styles.PlantDetailsContainer}>
            <Text style={styles.title}>{plant.attributes.Name}</Text>
            <Text style={styles.text}>Rank: {plant.id}</Text>
            <Text style={styles.text}>Owner: {plant.attributes.owner.data.attributes.username}</Text>
            <Text style={styles.text}>Streak: {plant.attributes.Streak} 🔥</Text>
            <Image style={styles.image2} source={{uri: plant.attributes.Image.data[0].attributes.url}}/>
            <Pressable style={styles.button} onPress={onBackClick}>
                <Text style={styles.text}>Back to Leaderboard</Text>
            </Pressable>
        </View>
//
    );
};

export default PlantDetailsScreen;
