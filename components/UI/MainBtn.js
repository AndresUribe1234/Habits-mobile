import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const MainBtn = ({ children, onPress, style }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        style,
        pressed && { backgroundColor: "#e67300" },
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ff8c00",
    padding: 10,
    borderRadius: 4,
    alignItems: "center",
    minWidth: "30%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default MainBtn;
