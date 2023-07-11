import { useCallback, useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import AuthContext from "../store/auth-context";
import MainBtn from "../components/UI/MainBtn";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import ApiUtils from "../utils/apiUtils";
import Spinner from "../components/UI/Spinner";
import Colors from "../utils/colors";

const HomeScreen = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const authCtx = useContext(AuthContext);

  useFocusEffect(
    useCallback(() => {
      console.log("");

      (async function () {
        setLoading(true);
        const apiResponse = await ApiUtils.fetchFeedData(
          authCtx.credentials.token
        );
        // console.log("API response:", apiResponse);

        if (apiResponse?.data) {
          setRegistrations(apiResponse.data[0]);
        } else {
          console.log("Invalid API response:", apiResponse[0]);
        }
        setLoading(false);

        console.log("Hello, I'm an IIFE!");
      })();
    }, [])
  );

  return (
    <View style={styles.container}>
      {!loading && (
        <>
          <MainBtn
            onPress={() => {
              navigation.navigate("AddHabitForm");
            }}
          >
            Add habits activity
          </MainBtn>
        </>
      )}
      {loading && <Spinner size="large" color={`${Colors.AppTitleColor}`} />}
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
