import { useContext, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import AuthContext from "../store/auth-context";
import MainBtn from "../components/UI/MainBtn";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const authCtx = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <MainBtn
        onPress={() => {
          navigation.navigate("AddHabitForm");
        }}
      >
        Add habits activity
      </MainBtn>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
});

export default HomeScreen;
