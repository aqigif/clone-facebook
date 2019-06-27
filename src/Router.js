import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import LoginScreen from './loginScreen/Login';
import HomeScreen from './homeScreen/Home';
import GroupScreen from './groupScreen/Group';
import WatchScreen from './watchScreen/Watch';
import MoreScreen from './moreScreen/More';
import NotificationScreen from './notificationScreen/Notification';
import Navbar from './TabNavigation/Navbar';
import AddPostInput from './homeScreen/components/AddPostInput';
import Head from './TabNavigation/Head';
import { createStackNavigator, createAppContainer, createTopTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import {AsyncStorage} from 'react-native';
import HomeRouter from './HomeRouter';

const MainNavigator = createMaterialTopTabNavigator(
  {
    Home :{
      screen: HomeRouter,
      navigationOptions:{
        tabBarIcon:({tintColor})=>(
          <Image source={require('./assets/icon/home.png')} 
            style={{ width: 25, height: 25 }}
          />
        )
        
      },
    },
    Groups:{
      screen:GroupScreen,
      navigationOptions:{
        tabBarIcon:({tintColor})=>(
          <Image source={require('./assets/icon/group.png')} 
            style={{ width: 25, height: 25 }}
          />
        )
      },
    },
    Watch:{
      screen:WatchScreen,
      navigationOptions:{
        tabBarIcon:({tintColor})=>(
          <Image source={require('./assets/icon/watch.png')} 
            style={{ width: 24, height: 22 }}
          />
        )
      },
    },
    Profile:{
      screen:HomeScreen,
      navigationOptions:{
        tabBarIcon:({tintColor})=>(
          <Image source={require('./assets/icon/profile.png')} 
            style={{ width: 24, height: 24 }}
          />
        )
      },
    },
    Notifications:{
      screen:NotificationScreen,
      navigationOptions:{
        tabBarIcon:({tintColor})=>(
          <Image source={require('./assets/icon/notification.png')} 
            style={{ width: 22, height: 25 }}
          />
        )
      },
    },
    More:{
      screen:MoreScreen,
      navigationOptions:{
        tabBarIcon:({tintColor})=>(
          <Image source={require('./assets/icon/more.png')} 
            style={{ width: 25, height: 25 }}
          />
        )
      },
    },
  },
  {
    initialRouteName:"Home",
    tabBarOptions:{
      showIcon:true,
      showLabel:false,
      style:{
        backgroundColor:'white',
        elevation:0,
        borderBottomWidth:0,
        borderBottomColor:'white'
      }
    }
  }
);

const WatchRoute = createStackNavigator({
  watchTopTabNavigator : MainNavigator,
  Login : {
    screen : LoginScreen
  },
},{
  initialRouteName: 'Login',
  defaultNavigationOptions:{
    header : props => <Head />
  }
})

// Other code for App component here
export default createAppContainer(WatchRoute);