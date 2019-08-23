import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import Card from "../components/Card";
import IOSLargeTitle from "../components/IOSLargeTitle";
import { SafeAreaView } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

const ACCOUNTS = [
  {
    bank: "Alior Bank",
    name: "Konto Jakże Osobiste",
    balance: "123.45",
    currency: "PLN",
    type: "fiat",
    iban: "PL03185440316494521378415658"
  },
  {
    bank: "Revolut",
    name: "EUR",
    balance: "678.90",
    currency: "EUR",
    type: "fiat",
    iban: "GB96VAJE17803727651320"
  },
  {
    bank: "Bitcoin",
    name: "Savings Wallet",
    balance: "2.1234",
    currency: "BTC",
    type: "crypto",
    address: "1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX"
  },
  {
    bank: "Ethereum",
    name: "Wallet #1",
    balance: "0.8852",
    currency: "ETH",
    type: "crypto",
    address: "0xa86520a0e9FB2E4d623a052a32a72DB045fC6DC2"
  },
  {
    bank: "Ethereum ERC20 Token",
    name: "Ethcraft Diamonds",
    balance: "173",
    currency: "DIAX",
    type: "erc20",
    address: "0xa86520a0e9FB2E4d623a052a32a72DB045fC6DC2"
  }
];

export default function AccountListScreen(props) {
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
          <TouchableOpacity onPress={() => props.navigation.push("AccountAdd")}>
            <Ionicons
              name="md-add"
              size={28}
              style={{ paddingRight: 20, paddingTop: 24 }}
            />
          </TouchableOpacity>
        </View>
        {ACCOUNTS.map((account, key) => (
          <TouchableOpacity
            key={key}
            onPress={() => props.navigation.push("Account", { ...account })}
          >
            <Card {...account} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
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
