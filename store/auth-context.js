import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext({
  credential: {},
  credentialFxn: function () {},
});

export function AuthContextProvider(props) {
  const [credentials, setCredentials] = useState({});

  useEffect(() => {
    (function () {
      getStoredCredentials();
    })();
  }, []);

  async function getStoredCredentials() {
    try {
      const storedObject = await AsyncStorage.getItem("authenticationObject");
      if (storedObject !== null) {
        const parsedObject = JSON.parse(storedObject);
        setCredentials(parsedObject);
        console.log("Stored credentials from authctx:", parsedObject);
        return parsedObject;
      }
    } catch (e) {
      console.log(e);
    }
  }

  function credentialsHandler(credentialsObject) {
    setCredentials(credentialsObject);
  }

  const context = {
    credential: credentials,
    credentialFxn: credentialsHandler,
  };

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
