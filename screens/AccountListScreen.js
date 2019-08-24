import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator
} from "react-native";

import Card from "../components/Card";
import IOSLargeTitle from "../components/IOSLargeTitle";
import { SafeAreaView } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import AccountManager from "../utils/AccountManager";
import AccountCard from "../components/AccountCard";

export default class AccountListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: null
    };
    const willFocusSubscription = this.props.navigation.addListener(
      "willFocus",
      () => {
        this.refreshAccounts();
      }
    );
  }
  async refreshAccounts() {
    this.setState({ accounts: null });
    this.setState({ accounts: await AccountManager.getAccounts() });
  }
  render() {
    if (this.state.accounts === null)
      return (
        <SafeAreaView>
          <ActivityIndicator></ActivityIndicator>
        </SafeAreaView>
      );
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <IOSLargeTitle text="Accounts" />
            <TouchableOpacity
              onPress={() => this.props.navigation.push("AccountAdd")}
            >
              <Ionicons
                name="md-add"
                size={28}
                style={{ paddingRight: 20, paddingTop: 24 }}
              />
            </TouchableOpacity>
          </View>
          {this.state.accounts.map((account, key) => (
            <TouchableOpacity
              key={key}
              onPress={() =>
                this.props.navigation.push("AccountDetails", { account })
              }
            >
              <AccountCard account={account} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

AccountListScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
