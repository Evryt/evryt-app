import React, { Component } from "react";
import { Text, ScrollView, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import { TouchableOpacity } from "react-native-gesture-handler";
import AccountManager from "../utils/AccountManager";
import EtherMainnetAccount from "../utils/EtherMainnetAccount";
import EtherRinkebyAccount from "../utils/EtherRinkebyAccount";

export default class AccountAddCryptoScreen extends Component {
  render() {
    return (
      <ScrollView>
        <FlatList
          data={[
            {
              key: "ethereum",
              name: "Ethereum",
              generate: () => new EtherMainnetAccount().privateKey
            },
            {
              key: "rinkeby",
              name: "Ethereum Rinkeby",
              generate: () => new EtherRinkebyAccount().privateKey
            }
          ].sort()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                AccountManager.addAccount(item.key, item.generate());
                this.props.navigation.pop(2);
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

AccountAddCryptoScreen.navigationOptions = {
  title: "Select cryptocurrency"
};
