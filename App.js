import React from 'react';
import { View } from 'react-native';
import LeaderboardScreen from './components/screens/LeaderboardScreen';
import { useFonts } from 'expo-font';
import styles from './styles/AppStyles.js';

const App = () => {

  const [loaded] = useFonts({
    'Josefin-Slab': require('./assets/fonts/JosefinSlab-VariableFont_wght.ttf')
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <LeaderboardScreen />
    </View>
  );
};

export default App;
