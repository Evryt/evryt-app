import React, { Component } from "react";
import { Text, ScrollView, FlatList } from "react-native";
import ListItem from "../components/ListItem";

export default class AccountAddCryptoScreen extends Component {
  render() {
    return (
      <ScrollView>
        <FlatList
          data={["Bitcoin", "Ethereum"].sort()}
          renderItem={({ item }) => <ListItem>{item}</ListItem>}
        />
      </ScrollView>
    );
  }
}

AccountAddCryptoScreen.navigationOptions = {
  title: "Select cryptocurrency"
};
