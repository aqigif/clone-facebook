import React, { Component } from 'react';
import { Image, TextInput, ScrollView, Text, View, ImageBackground, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Head from '../TabNavigation/Head';
import Navbar from '../TabNavigation/Navbar';
import NotificationList from './components/NotificationList';


class Notification extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      notificationList: require('./notificationList.json'),
    }
  }

  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <ScrollView>
            <View style={styles.postList}>
              {
                this.state.notificationList.notification.map(function (notification, index) {
                  return (
                    <NotificationList
                      key={index}
                      type={notification.type}
                      content={notification.content}
                    />
                  )
                })
              }
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: '#DCDEE3',
  },
  
  postList: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default Notification;