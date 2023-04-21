import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Main from "./Main";
const LoginScreen = () => {
  return (
    <>
      <View style={loginStyle.cont1}>
        <Text style={loginStyle.heading}>Little Lemon</Text>
      </View>

      <View style={loginStyle.cont2}>
        <Main />
      </View>

      <View style={loginStyle.cont3}>
        <Text>All rights reserved Little Lemon 2023</Text>
      </View>
    </>
  );
};
const loginStyle = StyleSheet.create({
  cont1: {
    flex: 0.2,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  cont2: {
    flex: 0.75,
    backgroundColor: "darkslategrey",
  },

  cont3: {
    flex: 0.05,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
export default LoginScreen;
