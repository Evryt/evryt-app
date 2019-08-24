import React, { Component } from "react";
import { Text, SafeAreaView, View, ScrollView } from "react-native";
import IOSLargeTitle from "../components/IOSLargeTitle";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import QRCode from "react-native-qrcode";
import Card from "../components/Card";

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
      <SafeAreaView style={{ display: "flex", height: "100%" }}>
        <ScrollView>
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
          <IOSLargeTitle text="QRCode" />
          <View
            style={{
              paddingBottom: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <QRCode size={200} value={"ethereum:" + account.account.address} />
          </View>
          <IOSLargeTitle text="Balance" />
          <Text style={{ paddingLeft: 20, fontSize: 20 }}>
            {this.state.balance !== null
              ? this.state.balance + " " + account.currency
              : "Fetching..."}
          </Text>
          <IOSLargeTitle text="Transactions" />
          {this.state.transactions !== null ? (
            this.state.transactions.length !== 0 ? (
              this.state.transactions.map(tx => (
                <Card key={tx.hash}>
                  <Text>{JSON.stringify(tx)}</Text>
                </Card>
              ))
            ) : (
              <Text>No recorded transactions for this account.</Text>
            )
          ) : (
            <Text>Fetching transactions...</Text>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

AccountScreen.navigationOptions = {
  header: null
};
