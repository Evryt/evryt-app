import React, { Component } from "react";
import { Text, View } from "react-native";
import IOSLargeTitle from "../../components/IOSLargeTitle";

export default class ExchangeMainScreen extends Component {
  render() {
    return (
      <View>
        <IOSLargeTitle text={"I want to give"} />
        <IOSLargeTitle text={"I want to get"} />
      </View>
    );
  }
}
