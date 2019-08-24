import React, { Component } from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";
import config from "../../../config.json";
import AccountManager from "../../../utils/AccountManager.js";

export default class BackendLoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    return (
      <View>
        <Text>e-mail</Text>
        <TextInput
          autoCapitalize="none"
          textContentType="emailAddress"
          onChangeText={text => this.setState({ email: text })}
          style={{ height: 32, backgroundColor: "#ddd" }}
        />
        <Text>password</Text>
        <TextInput
          autoCapitalize="none"
          textContentType="password"
          secureTextEntry={true}
          onChangeText={text => this.setState({ password: text })}
          style={{ height: 32, backgroundColor: "#ddd" }}
        />
        <Button
          title="Login"
          disabled={
            this.state.email.length === 0 || this.state.password.length === 0
          }
          onPress={() => this.login()}
        />
      </View>
    );
  }
  async login() {
    const response = await fetch(config.backendEndpoint + "/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        passwordHash: this.state.password,
        cipheredPrivateKey: "notempty",
        pubkey: "notempty"
      })
    }).then(res => res.json());
    if (response.error) {
      console.error(response);
      return Alert.alert("Error: " + response.error);
    }
    await AccountManager.auth(response.session);
    Alert.alert("Authenticated successfully!");
    this.props.navigation.popToTop();
  }
}
