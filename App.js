import { StatusBar } from "expo-status-bar";
import { useState, useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContextProvider } from "./store/auth-context";
import AuthContext from "./store/auth-context";
import AppLoading from "expo-app-loading";
import Colors from "./utils/colors";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import LogOut from "./screens/LogOut";
import FormScreen from "./screens/FormScreen";
import OthersProgressScreen from "./screens/OtherProgressScreen";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <StatusBar style="auto" />
        <Root />
      </AuthContextProvider>
    </>
  );
};

function Root() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    if (authCtx?.credentials.logged) {
      setIsLoggedIn(true);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (authCtx.credentials.logged) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [authCtx.credentials]);

  if (loading) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Drawer.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: `${Colors.AppBackgroundColor}`,
            },
            headerTintColor: `${Colors.AppTitleColor}`,
            drawerActiveTintColor: `${Colors.AppBackgroundColor}`,
          }}
        >
          <Drawer.Screen name="Home">
            {() => (
              <Stack.Navigator
                screenOptions={{
                  headerStyle: {
                    backgroundColor: `${Colors.AppBackgroundColor}`,
                  },
                  headerTintColor: `${Colors.AppTitleColor}`,
                }}
              >
                <Stack.Screen name="Feed" component={HomeScreen} />
                <Stack.Screen name="AddHabitForm" component={FormScreen} />
                <Stack.Screen
                  name="OthersProgress"
                  component={OthersProgressScreen}
                />
              </Stack.Navigator>
            )}
          </Drawer.Screen>
          <Drawer.Screen name="Log out" component={LogOut} />
        </Drawer.Navigator>
      ) : (
        <LoginScreen />
      )}
    </NavigationContainer>
  );
}

export default App;
