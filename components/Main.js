import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FormInput from "./FormInput";
const Main = () => {
  return (
    <View style={main.main1}>
      <View style={main.main2}>
        <Text style={main.headerText}>Welcome to Little Lemon</Text>
      </View>
      <View style={main.main3}>
        <Text style={main.regularText}>Login To Continue</Text>
      </View>
      <View style={main.main4}>
        <FormInput/>
      </View>
    </View>
  );
};

const main = StyleSheet.create({
  main1: {
    flex: 1,
  },
  main2: {
    flex: 0.25,
  },
  main3: {
    flex: 0.15,
  },
  main4: {
    flex: 0.6,
  },
  headerText: {
    padding: 25,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 20,
    padding: 15,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
});
export default Main;
