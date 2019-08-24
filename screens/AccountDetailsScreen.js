import React, { Component } from "react";
import { Text, SafeAreaView, View } from "react-native";
import IOSLargeTitle from "../components/IOSLargeTitle";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import QRCode from "react-native-qrcode";

export default class AccountScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: null,
      transactions: null
    };
  }
  async componentDidMount() {
    const account = this.props.navigation.state.params.account;
    this.setState({ balance: await account.getBalance() });
    this.setState({ transactions: await account.getTransactions() });
  }
  render() {
    const account = this.props.navigation.state.params.account;
    return (
      <SafeAreaView>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <TouchableOpacity onPress={() => this.props.navigation.pop()}>
            <Ionicons
              name="md-arrow-back"
              size={40}
              style={{ paddingLeft: 20, paddingTop: 20 }}
            />
          </TouchableOpacity>
          <IOSLargeTitle text={account.bank} />
        </View>
        <QRCode size={200} text={"ethereum:" + account.account.address} />
        <Text>
          {this.state.balance !== null
            ? this.state.balance + " " + account.currency
            : "Fetching balance..."}
        </Text>
        <View>
          {this.state.transactions !== null ? (
            this.state.transactions.length !== 0 ? (
              this.state.transactions.map(tx => (
                <Text>
                  {tx.from}
                  {tx.to}
                  {tx.amount}
                </Text>
              ))
            ) : (
              <Text>No recorded transactions for this account.</Text>
            )
          ) : (
            <Text>Fetching transactions...</Text>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

AccountScreen.navigationOptions = {
  header: null
};
