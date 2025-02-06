import React from 'react';
import { StyleSheet, ImageBackground, View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('@/assets/images/screen-1-background.svg')} // Use a supported image format or set up SVG transformer
        style={styles.background}
        resizeMode="cover"
      >
        <Text style={styles.title}>
          EASY <Text style={styles.subtitle}>VOTING</Text>
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Full screen container
  },
  background: {
    flex: 1, // Full screen background
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    backgroundColor: 'white',
    padding: 10,
  },
  subtitle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#00FF00', // Adjust the color as needed
  },
});
