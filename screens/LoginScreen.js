import { useState, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import MainBtn from "../components/UI/MainBtn";
import MainInput from "../components/UI/MainInput";
import Colors from "../utils/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthContext from "../store/auth-context";
import ApiUtils from "../utils/apiUtils";
import Spinner from "../components/UI/Spinner";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const authCtx = useContext(AuthContext);

  const handleLogin = async () => {
    const usernameToCheck = username.toLowerCase().trim();
    const passwordToCheck = password.trim();

    const apiResponse = await ApiUtils.loginCredentialsAuthentication(
      usernameToCheck,
      passwordToCheck
    );

    setLoading(true);
    await storeCredentials(apiResponse);
    authCtx.credentialsFxn(apiResponse);
    setLoading(false);
    if (apiResponse.err) {
      setErrorMsg(apiResponse.err);
      setError(true);
    }
  };

  async function storeCredentials(object) {
    try {
      const objectToStore = JSON.stringify(object);
      await AsyncStorage.setItem("authenticationObject", objectToStore);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      {!loading && (
        <>
          <Text style={styles.title}>Habittus</Text>
          <View style={styles.input_container}>
            <MainInput
              style={styles.input}
              placeholder="Email"
              value={username}
              onChangeText={(event) => {
                setUsername(event);
                setError(false);
              }}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <MainInput
              placeholder="Password"
              value={password}
              onChangeText={(event) => {
                setPassword(event);
                setError(false);
              }}
              secureTextEntry={true}
              autoCapitalize="none"
            />
          </View>
          {error && <Text style={styles.error}>{`Error: ${errorMsg}`}</Text>}
          <MainBtn onPress={handleLogin}>Login</MainBtn>
        </>
      )}
      {loading && <Spinner size="large" color={`${Colors.AppTitleColor}`} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    gap: 50,
    backgroundColor: `${Colors.AppBackgroundColor}`,
  },
  title: { fontWeight: "bold", fontSize: 24, color: `${Colors.AppTitleColor}` },
  input_container: { width: "100%" },
  error: { color: `${Colors.ErrorMsg}` },
});

export default LoginScreen;
