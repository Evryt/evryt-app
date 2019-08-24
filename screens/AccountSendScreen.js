import React, { Component } from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";

export default class AccountSendScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      to: "",
      amount: "0"
    };
  }
  render() {
    const account = this.props.navigation.state.params.account;
    return (
      <View>
        <Text>
          You want to send {account.currency} from {account.account.address}
        </Text>
        <Text>IBAN / Address</Text>
        <TextInput
          style={{ height: 32, backgroundColor: "#ddd" }}
          value={this.state.to}
          onChangeText={evt => this.setState({ to: evt })}
        ></TextInput>
        <Text>Amount</Text>
        <TextInput
          style={{ height: 32, backgroundColor: "#ddd" }}
          value={this.state.amount}
          onChangeText={evt => this.setState({ amount: evt })}
        ></TextInput>
        <Button
          title="Send"
          onPress={async () => {
            await account.sendTransaction(this.state.to, this.state.amount);
            Alert.alert(
              "Success! The transaction should appear soon in your wallet."
            );
            this.props.navigation.pop();
          }}
        />
      </View>
    );
  }
}

AccountSendScreen.navigationOptions = {
  title: "Send"
};
