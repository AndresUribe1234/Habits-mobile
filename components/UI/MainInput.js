import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Colors from "../../utils/colors";

const MainInput = (props) => {
  const {
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    keyboardType,
    ...otherProps
  } = props;

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
  },
  input: {
    width: "100%",
    fontSize: 16,
  },
});

export default MainInput;
