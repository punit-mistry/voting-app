import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  const handleVotePress = () => {
    // Navigate to the vote screen (adjust the route if necessary)
    router.push('/vote');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        EASY <Text style={styles.subtitle}>VOTING</Text>
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleVotePress}>
        <Text style={styles.buttonText}>Go to Vote</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Full screen container
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
    color: '#00FF00', // Brand color for subtitle text
  },
  button: {
    backgroundColor: '#00FF00', // Brand color for button background
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
