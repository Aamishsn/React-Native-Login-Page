import React from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { useState } from "react";

const FormInput = () => {
  return (
    <>
      <ScrollView keyboardDismissMode="on-drag">
        <TextInput
          style={formstyle.input}
          placeholder="Full Name"
          keyboardType="default"
        ></TextInput>
        <TextInput
          style={formstyle.input}
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
    backgroundColor: "#F4CE14",
  },
});
export default FormInput;
