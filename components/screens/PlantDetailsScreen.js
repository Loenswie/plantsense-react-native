import React from 'react';
import {View, Text, Pressable, ImageComponent} from 'react-native';
import styles from '../../styles/PlantDetailsStyles.js';
import {Image} from "react-native-web";

const PlantDetailsScreen = ({plant, onBackClick}) => {

    return (
        <View style={styles.PlantDetailsContainer}>
            <Text style={styles.title}>{plant.attributes.Name}</Text>
            <Text style={styles.text}>Rank: {plant.id}</Text>
            {/* <Text style={styles.text}>Owner: {plant.attributes.Owner.data.attributes.firstname} {plant.attributes.Owner.data.attributes.lastname}</Text> Due to cross-origin this does not work yet */}
            <Text style={styles.text}>Plant Type: {plant.attributes.Type}</Text>
            <Text style={styles.text}>Streak: {plant.attributes.Streak} 🔥</Text>
            <Image style={styles.image2} source={{uri: "http://localhost:1337" + plant.attributes.Image.data.attributes.url}}/>
            <Pressable style={styles.button} onPress={onBackClick}>
                <Text style={styles.text}>Back to Leaderboard</Text>
            </Pressable>
        </View>

    );
};

export default PlantDetailsScreen;
