import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  FlatList,
  ActivityIndicator
} from "react-native";
import ListItem from "../components/ListItem";
import config from "../config.json";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";

export default class AccountAddBankScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      banks: null
    };
  }
  async componentWillMount() {
    try {
      const response = await fetch(config.backendEndpoint + "/banks/all").then(
        res => res.json()
      );
      this.setState({ error: response.error, banks: response.integratedBanks });
      console.log(response);
    } catch (error) {
      this.setState({ error });
    }
  }
  render() {
    return (
      <ScrollView>
        {this.state.banks === null && !this.state.error && (
          <ActivityIndicator />
        )}
        {this.state.error && (
          <Text>Error: {JSON.stringify(this.state.error)}</Text>
        )}
        <FlatList
          data={
            this.state.banks && !this.state.error
              ? this.state.banks
                  .sort((a, b) => a.name > b.name)
                  .map((obj, id) => ({ ...obj, key: "" + id }))
              : []
          }
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={async () => {
                await WebBrowser.openBrowserAsync(
                  config.universalBankFrontend +
                    "?name=" +
                    encodeURIComponent(item.name) +
                    "&endpoint=" +
                    encodeURIComponent(item.apiUrl)
                );
                this.props.navigation.popToTop();
              }}
            >
              <ListItem>{item.name}</ListItem>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    );
  }
}

AccountAddBankScreen.navigationOptions = {
  title: "Select bank"
};
