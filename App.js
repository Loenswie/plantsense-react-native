// App.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Leaderboard from './components/Leaderboard';
import { useFonts } from 'expo-font';

const App = () => {

  const [loaded] = useFonts({
    'Josefin-Slab': require('./assets/fonts/JosefinSlab-VariableFont_wght.ttf')
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Leaderboard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    color: 'white',
    width: '100%',
    fontFamily: 'Josefin-Slab',
  },
});

export default App;
