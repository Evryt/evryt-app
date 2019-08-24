import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import AccountListScreen from "../screens/AccountListScreen";
import AccountAddScreen from "../screens/AccountAddScreen";
import AccountDetailsScreen from "../screens/AccountDetailsScreen";
import AccountAddBankScreen from "../screens/AccountAddBankScreen";
import AccountAddCryptoScreen from "../screens/AccountAddCryptoScreen";
import ExchangeMainScreen from "../screens/exchange/ExchangeMainScreen";
import CertificateListScreen from "../screens/certificate/CertificateListScreen";
import SettingsScreen from "../screens/demos/SettingsScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const AccountStack = createStackNavigator(
  {
    AccountList: AccountListScreen,
    AccountAdd: AccountAddScreen,
    AccountDetails: AccountDetailsScreen,
    AccountAddBank: AccountAddBankScreen,
    AccountAddCrypto: AccountAddCryptoScreen
  },
  config
);

AccountStack.navigationOptions = {
  tabBarLabel: "Accounts",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-apps" : "md-apps"}
    />
  )
};

AccountStack.path = "";

/*const LinksStack = createStackNavigator(
  {
    Links: LinksScreen
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: "Links",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

LinksStack.path = "";*/

const ExchangeStack = createStackNavigator(
  {
    ExchangeMain: ExchangeMainScreen
  },
  config
);

ExchangeStack.navigationOptions = {
  tabBarLabel: "Swap",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-swap" : "md-swap"}
    />
  )
};

const CertificateStack = createStackNavigator(
  {
    CertificateList: CertificateListScreen
  },
  config
);

CertificateStack.navigationOptions = {
  tabBarLabel: "Certificates",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-checkbox-outline"} />
  )
};

CertificateStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

SettingsStack.path = "";

const tabNavigator = createBottomTabNavigator({
  AccountStack,
  ExchangeStack,
  CertificateStack,
  SettingsStack
});

tabNavigator.path = "";

export default tabNavigator;
