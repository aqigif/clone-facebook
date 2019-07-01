import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import LoginScreen from './loginScreen/Login';
import HomeScreen from './homeScreen/Home';
import GroupScreen from './groupScreen/Group';
import WatchScreen from './watchScreen/Watch';
import MoreScreen from './moreScreen/More';
import NotificationScreen from './notificationScreen/Notification';
import Navbar from './TabNavigation/Navbar';
import AddPostInput from './homeScreen/components/AddPostInput';
import PostList from './components/PostList';
import Head from './TabNavigation/Head';
import { createStackNavigator, createAppContainer, createTopTabNavigator,createSwitchNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import {AsyncStorage} from 'react-native';
import SplashScreen from './SplashScreen';
// import HomeRouter from './HomeRouter';

const homeIcon = require('./assets/icon/home.png')
const homeActiveIcon = require('./assets/icon/homeActive.png')
const groupIcon = require('./assets/icon/group.png')
const groupActiveIcon = require('./assets/icon/groupActive.png')
const watchIcon = require('./assets/icon/watch.png')
const watchActiveIcon = require('./assets/icon/watchActive.png')
const profileIcon = require('./assets/icon/profile.png')
const profileActiveIcon = require('./assets/icon/profileActive.png')
const notifIcon = require('./assets/icon/notification.png')
const notifActiveIcon = require('./assets/icon/notificationActive.png')
const moreIcon = require('./assets/icon/more.png')
const moreActiveIcon = require('./assets/icon/moreActive.png')

const HomeTabIcon = ({ focused }) => (
    <TabIcon icon={focused ? homeActiveIcon : homeIcon} />
);
const GroupTabIcon = ({ focused }) => (
    <TabIcon icon={focused ? groupActiveIcon : groupIcon} />
);
const WatchTabIcon = ({ focused }) => (
    <TabIcon icon={focused ? watchActiveIcon : watchIcon} />
);
const ProfileTabIcon = ({ focused }) => (
    <TabIcon icon={focused ? profileActiveIcon : profileIcon} />
);
const NotifTabIcon = ({ focused }) => (
    <TabIcon icon={focused ? notifActiveIcon : notifIcon} />
);
const MoreTabIcon = ({ focused }) => (
    <TabIcon icon={focused ? moreActiveIcon : moreIcon} />
);
const SearchBar = () => (
  <Head />
);



//Menu Top 
const MenuTopTabNavigation = createMaterialTopTabNavigator(
  {
      Home: {
          screen: HomeScreen,
          navigationOptions: {
              tabBarIcon: HomeTabIcon
          }
      },

      Group: {
          screen: GroupScreen,
          navigationOptions: {
              tabBarIcon: GroupTabIcon
          }
      },
      Watch: {
          screen: WatchScreen,
          navigationOptions: {
              tabBarIcon: WatchTabIcon
          }
      },

      Profile: {
          screen: HomeScreen,
          navigationOptions: {
              tabBarIcon: ProfileTabIcon
          }
      },
      Notification: {
          screen: NotificationScreen,
          navigationOptions: {
              tabBarIcon: NotifTabIcon
          }
      },
      More: {
          screen: MoreScreen,
          navigationOptions: {
              tabBarIcon: MoreTabIcon
          }
      },

  },
  {
      initialRouteName: 'Home',
      tabBarPosition: 'top',
      tabBarOptions: {
          showLabel: false,
          showIcon: true,
          indicatorStyle: {
              backgroundColor: 'transparent'
          },
          style: {
              backgroundColor: '#fff'
          }
      }
  }
)

const CreatePostStack = createStackNavigator(
    {
        
        CreatePostScreen: {
            screen: AddPostInput,
            navigationOptions: { 
                gesturesEnabled: false
            }
        },
        PostScreen: {
            screen: PostList,
            navigationOptions: { 
                gesturesEnabled: false
            }
        }
    },
    {
        initialRouteName: "CreatePostScreen",
        defaultNavigationOptions: {
            header: null,
            headerStyle: {
                display: 'none',
                title: 'a'
            },

        }
    }
)

//Main Screen
const AppStack = createStackNavigator(
  {
      MainScreen: {
          screen: MenuTopTabNavigation,
          navigationOptions: { gesturesEnabled: false }
      },
      CreatePostScreen : {
          screen: CreatePostStack,
          navigationOptions : {
              header: null
          }
          
      },
      PostScreen: {
          screen: PostList,
          navigationOptions: { 
              gesturesEnabled: false,header: null
          }
      }
  },
  {
      initialRouteName: "MainScreen",
      defaultNavigationOptions: {
          header: SearchBar,
          headerStyle: {
              backgroundColor: '#FF5733',
              flex: 0.2
          },

      }
  }
);

const AuthStack = createStackNavigator(
  {
      Login: {
          screen: LoginScreen,
          navigationOptions: { gesturesEnabled: false, header: null }
      }
  },
  {
      
      defaultNavigationOptions: {
          header: null,
          resetOnBlur: false
      }
  }
)



const AppContainer = createSwitchNavigator(
  {
      AuthLoading: SplashScreen,
      Auth: AuthStack,
      App: AppStack,
  },
  {

      initialRouteName: 'AuthLoading',
      resetOnBlur: true,
  }
);

class TabIcon extends Component {
  render () {
      return (
      <View style={styles.menuBarItem} >
          <Image style={styles.logoMenuBar} source={this.props.icon} />
      </View >

      )
  }

}

const styles = StyleSheet.create({
  menuBar: {
      backgroundColor: 'white',
      flex: 1,
      borderBottomWidth: 1,
      borderColor: '#a1b3d9',
      alignItems: 'center',
      flexDirection: 'row'
  },
  menuBarItem: { flex: 1, alignItems: 'center' },
  logo: {
      width: 25,
      height: 25,

  },
  logoMenuBar: {
      width: 25,
      height: 25,

  },
})

export default createAppContainer(AppContainer);