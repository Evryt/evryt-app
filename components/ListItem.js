import React, { Component } from "react";
import { Text, View } from "react-native";

export default class ListItem extends Component {
  render() {
    return (
      <View
        style={{
          padding: 20,
          borderBottomColor: "#dddddd",
          borderBottomWidth: 1
        }}
      >
        <Text>{this.props.children}</Text>
      </View>
    );
  }
}
