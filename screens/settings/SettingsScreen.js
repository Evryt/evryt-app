import React, { Component } from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import AccountManager from "../../utils/AccountManager";
import ListItem from "../../components/ListItem";

import config from "../../config.json";

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
        <ListItem>
          <Text style={{ fontWeight: "bold" }}>Evryt v0.1-build-2654</Text>
        </ListItem>
        <ListItem>
          <Text></Text>
        </ListItem>
        <ListItem>
          <Text style={{ fontWeight: "bold" }}>Credits:</Text>
        </ListItem>
        <ListItem>
          <Text>Piotr Adamczyk (mobile app, crypto support)</Text>
        </ListItem>
        <ListItem>
          <Text>Marcello Bardus (bank communication, tpp)</Text>
        </ListItem>

        <ListItem>
          <Text></Text>
        </ListItem>
        {this.state.authDetails === null ? (
          <TouchableOpacity
            onPress={() => this.props.navigation.push("BackendAuth")}
          >
            <ListItem>
              <Text style={{ color: "blue" }}>Auth with TPP</Text>
            </ListItem>
          </TouchableOpacity>
        ) : (
          <View>
            <TouchableOpacity
              onPress={async () => {
                fetch(config.backendEndpoint + "/users/my-accounts", {
                  headers: { session: await AccountManager.getAuthDetails() }
                })
                  .then(res => res.json())
                  .then(console.log);
              }}
            >
              <ListItem>
                <Text style={{ color: "red" }}>Log accounts</Text>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={async () => {
                await AccountManager.deauth();
                this.updateAuth();
              }}
            >
              <ListItem>
                <Text style={{ color: "red" }}>Deauth TPP (debug)</Text>
              </ListItem>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

SettingsScreen.navigationOptions = {
  title: "Settings"
};
