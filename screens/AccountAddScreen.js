import React, { Component } from "react";
import { Text, View, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import AccountManager from "../utils/AccountManager.js";

export default class AccountAddScreen extends Component {
  render() {
    return (
      <View
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <View style={{ width: "100%", padding: 20 }}>
          <TouchableOpacity
            style={{ width: "100%" }}
            onPress={async () => {
              if ((await AccountManager.getAuthDetails()) === null)
                return Alert.alert(
                  "You need to authenticate first in settings."
                );
              this.props.navigation.push("AccountAddBank");
            }}
          >
            <View
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                padding: 20,
                borderRadius: 20,
                backgroundColor: "#EEEEEE"
              }}
            >
              <Ionicons name="md-cash" size={50} />
              <Text>Connect my Bank account</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text>or</Text>
        </View>
        <View style={{ width: "100%", padding: 20 }}>
          <TouchableOpacity
            style={{ width: "100%" }}
            onPress={() => this.props.navigation.push("AccountAddCrypto")}
          >
            <View
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                padding: 20,
                borderRadius: 20,
                backgroundColor: "#EEEEEE"
              }}
            >
              <Ionicons name="md-key" size={50} />
              <Text>Create or import a Cryptocurrency wallet</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

AccountAddScreen.navigationOptions = {
  title: "Add account"
};
