import React, { Component } from "react";
import { Text, View } from "react-native";
import Card from "./Card";

export default class TransactionCard extends Component {
  render() {
    return (
      <Card style={{ backgroundColor: this.props.in ? "#bbffbb" : "#ffbbbb" }}>
        <Text>
          {new Date(parseInt(this.props.timestamp) * 1000).toLocaleString()}
        </Text>
        <Text>From: {this.props.from}</Text>
        <Text>To: {this.props.to}</Text>
        <Text>
          Value: {this.props.value} {this.props.currency}
        </Text>
      </Card>
    );
  }
}
