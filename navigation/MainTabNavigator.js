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

LinksStack.path = "";

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

SettingsStack.path = "";*/

const tabNavigator = createBottomTabNavigator({
  AccountStack
  //LinksStack,
  //SettingsStack
});

tabNavigator.path = "";

export default tabNavigator;
