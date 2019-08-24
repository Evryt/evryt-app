import React, { Component } from "react";
import { Text, View } from "react-native";
import Card from "./Card";

export default class AccountCard extends Component {
  constructor(props) {
    super(props);
    console.log(props);
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
        <Text>{this.props.account.bank}</Text>
        <Text>{this.props.account.name}</Text>
        <Text>{this.props.account.type}</Text>
        <Text>{this.renderAddress()}</Text>
        <Text>{this.renderBalance()}</Text>
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
