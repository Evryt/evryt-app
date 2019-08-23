import React, { Component } from "react";
import { View, Text } from "react-native";
export default class Card extends Component {
  render() {
    return (
      <View
        {...this.props}
        style={[
          this.props.style,
          {
            borderRadius: 10,
            marginBottom: 20,
            marginLeft: 20,
            marginRight: 20,
            backgroundColor: "#EEEEEE",
            padding: 20,
            height: 191
          }
        ]}
      >
        <Text>{this.props.bank}</Text>
        <Text>{this.props.name}</Text>
        <Text>{this.props.type}</Text>
        <Text>
          {this.props.type === "crypto" || this.props.type === "erc20"
            ? "Address: " + this.props.address
            : "IBAN: " + this.props.iban}
        </Text>
        <Text>
          {this.props.balance} {this.props.currency}
        </Text>
      </View>
    );
  }
}
