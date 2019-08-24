import React, { Component } from "react";
import { Text, View, ScrollView, FlatList } from "react-native";
import ListItem from "../components/ListItem";

export default class AccountAddBankScreen extends Component {
  render() {
    return (
      <ScrollView>
        <FlatList
          data={[
            { key: "Revolut" },
            { key: "Alior Bank" },
            { key: "T-Mobile Usługi Bankowe" },
            { key: "Telekom Banking (RO)" },
            { key: "Fake Bank Ltd" }
          ].sort()}
          renderItem={({ item }) => <ListItem>{item.key}</ListItem>}
        />
      </ScrollView>
    );
  }
}

AccountAddBankScreen.navigationOptions = {
  title: "Select bank"
};
