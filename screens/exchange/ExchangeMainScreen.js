import React, { Component } from "react";
import { Text, View } from "react-native";
import IOSLargeTitle from "../../components/IOSLargeTitle";

export default class ExchangeMainScreen extends Component {
  render() {
    return (
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%"
        }}
      >
        <Text style={{ fontSize: 32, color: "#ddd" }}>Coming soon</Text>
      </View>
    );
  }
}

ExchangeMainScreen.navigationOptions = {
  title: "Swap"
};
