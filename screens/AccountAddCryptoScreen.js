import React, { Component } from "react";
import { Text, ScrollView, FlatList, View } from "react-native";

export default class AccountAddCryptoScreen extends Component {
  render() {
    return (
      <ScrollView>
        <FlatList
          data={["Bitcoin", "Ethereum"]}
          renderItem={({ item }) => <ListItem>{item}</ListItem>}
        />
      </ScrollView>
    );
  }
}

AccountAddCryptoScreen.navigationOptions = {
  title: "Select cryptocurrency"
};
