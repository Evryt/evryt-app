import React, { Component } from "react";
import { Text, View } from "react-native";
import * as WebBrowser from "expo-web-browser";

export default class AccountAddBankScreen extends Component {
  componentDidMount() {
    WebBrowser.openBrowserAsync(
      "https://auth.truelayer.com/?response_type=code&client_id=testapp-6bdf5a&nonce=4288294409&scope=info%20accounts%20balance%20cards%20transactions%20direct_debits%20standing_orders%20products%20beneficiaries%20offline_access&redirect_uri=https://console.truelayer.com/redirect-page&enable_mock=true&enable_oauth_providers=false&enable_open_banking_providers=true&enable_credentials_sharing_providers=false"
    );
  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
