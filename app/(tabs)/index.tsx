import React from "react";
import { StyleSheet, ImageBackground, View,Text } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/screen-1-background.svg")} // Ensure this path is correct
        style={styles.backgroundImage}
        resizeMode="cover" 
      >
          <Text  className="text-[35] bg-white">
            EASY
            <Text style={styles.titleVoting}> VOTING </Text>
          </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // This makes the container take up the full screen height
  },
  backgroundImage: {
    flex: 1, // Ensure the ImageBackground takes up the full screen
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    opacity:1,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF", // Ensure text is visible on the background
  },
  titleVoting: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#00FF",
  },
});