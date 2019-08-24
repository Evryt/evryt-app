import React, { Component } from "react";
import {
  Text,
  SafeAreaView,
  View,
  ScrollView,
  Button,
  Alert,
  Clipboard
} from "react-native";
import IOSLargeTitle from "../components/IOSLargeTitle";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import QRCode from "react-native-qrcode";
import TransactionCard from "../components/TransactionCard";
import AccountManager from "../utils/AccountManager";

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
          <Button
            title={"Send transaction"}
            onPress={async () => {
              this.props.navigation.push("AccountSend", { account });
            }}
          />
          <IOSLargeTitle text="Balance" />
          <Text style={{ paddingLeft: 20, fontSize: 20 }}>
            {this.state.balance !== null
              ? this.state.balance + " " + account.currency
              : "Fetching..."}
          </Text>
          <IOSLargeTitle text="Transactions" />
          {this.state.transactions !== null ? (
            this.state.transactions.length !== 0 ? (
              this.state.transactions
                .reverse()
                .slice(0, 10)
                .map(tx => (
                  <TransactionCard
                    key={tx.hash}
                    from={tx.from}
                    to={tx.to}
                    value={tx.value}
                    currency={account.currency}
                    timestamp={tx.timeStamp}
                    in={
                      tx.to.toLowerCase() ===
                      account.account.address.toLowerCase()
                    }
                  />
                ))
            ) : (
              <Text style={{ paddingLeft: 20, paddingBottom: 20 }}>
                No recorded transactions for this account.
              </Text>
            )
          ) : (
            <Text style={{ paddingLeft: 20, paddingBottom: 20 }}>
              Fetching transactions...
            </Text>
          )}
          <Button
            title="Copy address to clipboard"
            onPress={async () => {
              Clipboard.setString(account.account.address);
            }}
          />
          <Button
            title="Delete account"
            color="#ff0000"
            onPress={async () => {
              Alert.alert(
                "Are you sure?",
                "This action is irreversible.",
                [
                  {
                    text: "OK",
                    onPress: async () => {
                      await AccountManager.delete(
                        this.props.navigation.state.params.accountIndex
                      );
                      this.props.navigation.pop();
                    },
                    style: "cancel"
                  },
                  {
                    text: "Cancel"
                  }
                ],
                { cancelable: false }
              );
            }}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

AccountScreen.navigationOptions = {
  header: null
};
