import React, { Component } from 'react';
import { Image, TextInput, ScrollView, Text, View, ImageBackground, Button, TouchableOpacity, StyleSheet } from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';

class AddPost extends Component {
  render() {
    return (
      <View style={styles.addPostContainer}>
        <View style={styles.avatar}>
          <TouchableOpacity onPress={this._onPressButton}>
            <Image source={require('../../assets/img/profilePicture.jpg')}
              style={{ width: 40, height: 40, borderRadius: 40 / 2 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.addPostWrapper}>
          <View style={styles.addPost} >
            <Text> 
              What's on your mind?
            </Text>
          </View>
        </View>
        <View style={styles.uploadPhoto}>
          <TouchableOpacity onPress={this._onPressButton}>
            <Image source={require('../../assets/icon/upload.png')}
              style={{ width: 30, height: 41 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  addPostContainer: {
    height: 65,
    marginTop: 1,
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
  },
  avatar: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  addPostWrapper: { 
    flex: 9, justifyContent: 'center', 
    alignItems: 'center', 
    paddingLeft: 10, 
    paddingRight: 10 },
  addPost: {
    width: '100%',
    justifyContent: 'center', 
    height: 40,
    borderWidth: 1,
    paddingLeft:20,
    borderColor: '#DCDEE3',
    borderRadius: 30,
  },
  uploadPhoto: { flex: 1, justifyContent: 'center', alignItems: 'center' },

});
export default AddPost;