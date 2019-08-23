import React, { Component } from "react";
import { Text, ScrollView, FlatList, View } from "react-native";

export default class AccountAddCryptoScreen extends Component {
  render() {
    return (
      <ScrollView>
        <FlatList
          data={["Bitcoin", "Ethereum"]}
          renderItem={({ item }) => (
            <View
              style={{
                padding: 20,
                borderBottomColor: "#dddddd",
                borderBottomWidth: 1
              }}
            >
              <Text>{item}</Text>
            </View>
          )}
        />
      </ScrollView>
    );
  }
}

AccountAddCryptoScreen.navigationOptions = {
  title: "Select cryptocurrency"
};
