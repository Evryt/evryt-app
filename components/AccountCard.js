import React, { Component } from "react";
import { Text, View } from "react-native";
import Card from "./Card";

export default class AccountCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: null
    };
  }
  async componentWillMount() {
    this.setState({ balance: await this.props.account.getBalance() });
  }
  render() {
    return (
      <Card>
        <Text style={{ fontSize: 20, fontWeight: "700" }}>
          {this.props.account.bank}
        </Text>
        <Text style={{ fontSize: 18 }}>{this.renderBalance()}</Text>
        <Text>{this.props.account.name}</Text>
        <Text style={{ fontSize: 10 }}>{this.renderAddress()}</Text>
      </Card>
    );
  }
  renderAddress() {
    switch (this.props.account.type) {
      case "ether":
        return this.props.account.account.address;
      default:
        return this.props.account.iban;
    }
  }
  renderBalance() {
    return this.state.balance !== null
      ? this.state.balance + " " + this.props.account.currency
      : "Fetching balance...";
  }
}
