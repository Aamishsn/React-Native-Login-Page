import React from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { useState } from "react";

const FormInput = () => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  return (
    <>
      <ScrollView keyboardDismissMode="on-drag">
        <TextInput
          style={formstyle.input}
          value={email}
          onChangeText={onChangeEmail}
          placeholder="Full Name"
          keyboardType="default"
        ></TextInput>
        <TextInput
          style={formstyle.input}
          value={password}
          onChangeText={onChangePassword}
          placeholder="Password"
          secureTextEntry={true}
        ></TextInput>
      </ScrollView>
    </>
  );
};
const formstyle = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "white",
  },
});
export default FormInput;
