import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class BackendAuthScreen extends Component {
  render() {
    return (
      <View>
        <Button
          title="Login"
          onPress={() => this.props.navigation.push("BackendLogin")}
        />
        <Button
          title="Register"
          onPress={() => this.props.navigation.push("BackendRegister")}
        />
      </View>
    );
  }
}
