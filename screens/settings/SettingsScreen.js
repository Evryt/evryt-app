import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import AccountManager from "../../utils/AccountManager";

export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authDetails: null
    };
    const willFocusSubscription = this.props.navigation.addListener(
      "willFocus",
      () => {
        this.updateAuth();
      }
    );
  }
  componentWillMount() {
    this.updateAuth();
  }
  async updateAuth() {
    this.setState({ authDetails: await AccountManager.getAuthDetails() });
  }
  render() {
    return (
      <View>
        {this.state.authDetails === null ? (
          <Button
            title="Auth"
            onPress={() => this.props.navigation.push("BackendAuth")}
          />
        ) : (
          <Button
            title="Deauth"
            onPress={async () => {
              await AccountManager.deauth();
              this.updateAuth();
            }}
          />
        )}
      </View>
    );
  }
}
