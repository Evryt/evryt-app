import React, { Component } from "react";
import { Text, View } from "react-native";
import IOSLargeTitle from "../components/IOSLargeTitle";

export default class AccountScreen extends Component {
  render() {
    return (
      <View>
        <IOSLargeTitle text={this.props.navigation.state.params.name} />
        <Text>{JSON.stringify(this.props)}</Text>
      </View>
    );
  }
}
