import React, { Component } from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class AccountAddScreen extends Component {
  render() {
    return (
      <View
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <View style={{ width: "100%", padding: 20 }}>
          <TouchableOpacity style={{ width: "100%" }}>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                padding: 20,
                borderRadius: 20,
                backgroundColor: "#EEEEEE"
              }}
            >
              <Ionicons name="md-cash" size={50} />
              <Text>Connect my Bank account</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text>or</Text>
        </View>
        <View style={{ width: "100%", padding: 20 }}>
          <TouchableOpacity style={{ width: "100%" }}>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                padding: 20,
                borderRadius: 20,
                backgroundColor: "#EEEEEE"
              }}
            >
              <Ionicons name="md-key" size={50} />
              <Text>Create or import a Cryptocurrency wallet</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

AccountAddScreen.navigationOptions = {
  title: "Add account"
};
