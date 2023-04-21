import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import { useState } from "react";

const FormInput = (props) => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [showComp, setShowComp] = useState(false);
  return (
    <>
      {!showComp ? (
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
          <Pressable
            style={formstyle.button}
            onPress={() => {
              setShowComp(!showComp);
              props.stateUp();
            }}
          >
            <Text style={formstyle.buttonText}>Log In</Text>
          </Pressable>
        </ScrollView>
      ) : (
        <View>
          <Text style={formstyle.regularText}> You Have Logged IN</Text>
        </View>
      )}
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
  button: {
    padding: 10,
    marginVertical: 10,
    marginLeft: "auto",
    marginRight: "auto",
    width: 150,
    backgroundColor: "pink",
    borderColor: "#EDEFEE",
    borderWidth: 2,
    borderRadius: 12,
  },

  buttonText: {
    color: "#333333",
    textAlign: "center",
    fontSize: 16,
  },
  regularText: {
    fontSize: 20,
    padding: 15,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
});
export default FormInput;
