import React, { Component } from 'react';
import {AsyncStorage, Image, TextInput, ScrollView, Text, View, ImageBackground, Button, TouchableOpacity, StyleSheet } from 'react-native';


const axios = require('axios');


class More extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: [],
    }
  }


  handleLogout = async () => {
    try {
      const token = await AsyncStorage.removeItem('token');
      if (token === null) {
        this.props.navigation.navigate('Login');
        console.log(token)
      }
      
    } catch (error) {
      console.error(error);
    }
    
  }

  render() {
    return (
      <View style={{justifyContent:'center',alignItems:'center'}}>
          <Button
            onPress={this.handleLogout}
            title="Logout"
          ></Button>
      </View>
    );
  }
}
export default More;