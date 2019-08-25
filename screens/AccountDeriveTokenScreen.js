import React, { Component } from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";

import AccountManager from "../utils/AccountManager";

export default class AccountDeriveTokenScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contractAddress: "",
      tokenName: "",
      tokenCode: ""
    };
  }
  render() {
    const account = this.props.navigation.state.params.account;
    return (
      <View>
        <Text>
          You want to derive token account from {account.account.address}
        </Text>
        <Text>ERC20 Contract address</Text>
        <TextInput
          style={{ height: 32, backgroundColor: "#ddd" }}
          value={this.state.contractAddress}
          onChangeText={evt => this.setState({ contractAddress: evt })}
        ></TextInput>
        <Text>ERC20 Token name</Text>
        <TextInput
          style={{ height: 32, backgroundColor: "#ddd" }}
          value={this.state.tokenName}
          onChangeText={evt => this.setState({ tokenName: evt })}
        ></TextInput>
        <Text>ERC20 Token code</Text>
        <TextInput
          style={{ height: 32, backgroundColor: "#ddd" }}
          value={this.state.tokenCode}
          onChangeText={evt => this.setState({ tokenCode: evt })}
        ></TextInput>
        <Button
          title="Derive"
          onPress={async () => {
            const data = account.deriveTokenAccount(
              this.state.contractAddress,
              this.state.tokenName,
              this.state.tokenCode
            );
            await AccountManager.addAccount(data.type, data.param);
            Alert.alert("Success! The account should appear in your wallet.");
            this.props.navigation.popToTop();
          }}
        />
      </View>
    );
  }
}

AccountDeriveTokenScreen.navigationOptions = {
  title: "Derive token account"
};
