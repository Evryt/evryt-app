import React, { Component } from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";

import config from "../../../config.json";
import AccountManager from "../../../utils/AccountManager.js";

export default class BackendRegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: ""
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
          value={this.state.email}
          style={{ height: 32, backgroundColor: "#ddd" }}
        />
        <Text>password</Text>
        <TextInput
          autoCapitalize="none"
          textContentType="newPassword"
          secureTextEntry={true}
          onChangeText={text => this.setState({ password: text })}
          value={this.state.password}
          style={{ height: 32, backgroundColor: "#ddd" }}
        />
        <Text>confirm password</Text>
        <TextInput
          autoCapitalize="none"
          value={this.state.confirmPassword}
          style={{ height: 32, backgroundColor: "#ddd" }}
          onChangeText={text =>
            this.setState({
              confirmPassword: "Yes, I confirm that is the password I want"
            })
          }
        />
        <Button
          title="Register"
          onPress={() => this.register()}
          disabled={
            this.state.email.length === 0 ||
            this.state.password.length === 0 ||
            this.state.confirmPassword.length === 0
          }
        />
      </View>
    );
  }
  async register() {
    const response = await fetch(config.backendEndpoint + "/users/register", {
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
    Alert.alert("Created account successfully!");
    this.props.navigation.popToTop();
  }
}
