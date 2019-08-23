import React, { Component } from "react";
import { Text, View, ScrollView, FlatList } from "react-native";
import ListItem from "../components/ListItem";

export default class AccountAddBankScreen extends Component {
  render() {
    return (
      <ScrollView>
        <FlatList
          data={[
            "Revolut",
            "Alior Bank",
            "T-Mobile Usługi Bankowe",
            "Telekom Banking (RO)",
            "Fake Bank Ltd"
          ].sort()}
          renderItem={({ item }) => <ListItem>{item}</ListItem>}
        />
      </ScrollView>
    );
  }
}

AccountAddBankScreen.navigationOptions = {
  title: "Select bank"
};
