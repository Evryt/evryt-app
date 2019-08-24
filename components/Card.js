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
            padding: 20
            /*height: 191*/
          }
        ]}
      >
        {this.props.children}
      </View>
    );
  }
}
