import { useContext } from "react";

import AuthContext from "../store/auth-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

function LogOut() {
  const authCtx = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("authenticationObject");
      authCtx.credentialsFxn({ ...authCtx.credentials, logged: false });
    } catch (error) {
      console.log("Error deleting object:", error);
    }
  };

  handleLogout();
  return <></>;
}

export default LogOut;
