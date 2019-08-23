import React, { Component } from "react";
import { Text, View } from "react-native";

export default class IOSLargeTitle extends Component {
  render() {
    return (
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 32, fontWeight: "700" }}>
          {this.props.text}
        </Text>
      </View>
    );
  }
}
