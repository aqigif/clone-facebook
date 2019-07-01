import React from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation"; // Version can be specified in package.json
import HomeScreen from "./homeScreen/Home";
import AddPostInput from "./homeScreen/components/AddPostInput";

const LookRoute = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
    AddPostInput: {
      screen: AddPostInput,
      headerBackground: ""
    }
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(LookRoute);

export default class HomeRouter extends React.Component {
  render() {
    return <AppContainer />;
  }
}
