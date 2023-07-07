import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = ({ onLogin }) => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform login logic here
    // For simplicity, let's assume successful login
    onLogin();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
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
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default LoginScreen;
