import React, { Component } from 'react';
import { Image, TextInput, ScrollView, Text, View, ImageBackground, Button, TouchableOpacity, StyleSheet } from 'react-native';

var home = require('../../assets/icon/homeActive.png');


class Icon extends Component {
  constructor() {
    super()
  }

  render() {
    return (
    <View>
        <Image source={home} />
    </View>
    );
  }
}
export default Icon;