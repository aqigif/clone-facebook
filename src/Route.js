import React, { Component } from 'react';
import { Text, View } from 'react-native';
import LoginScreen from './loginScreen/Login';
import HomeScreen from './homeScreen/Home';
import GroupScreen from './groupScreen/Group';
import WatchScreen from './watchScreen/Watch'
import Navbar from './TabNavigation/Navbar';
import { createStackNavigator, createAppContainer, createTopTabNavigator } from 'react-navigation';

export default class Route extends Component {
  render() {
    return (
      <Router />
    );
  }
}
const MainNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
    Group : GroupScreen,
    Watch : WatchScreen,
    Navbar : Navbar
  },
);

// Other code for App component her
const Router = createAppContainer(MainNavigator);