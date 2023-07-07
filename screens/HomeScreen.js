import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({ onLogout }) => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Perform logout logic here
    // For simplicity, let's assume successful logout
    onLogout();
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});

export default HomeScreen;
