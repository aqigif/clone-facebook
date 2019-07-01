
import React, { Component } from 'react';
import { Image, TextInput, ScrollView, Text, View, ImageBackground, Button, TouchableOpacity, StyleSheet } from 'react-native';

class AddStory extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this._onPressButton}>
        <View style={styles.storyPost}>
          <ImageBackground style={{ height: '100%', }}
            imageStyle={{ borderRadius: 10 }}
            source={require('../../assets/img/profilePicture.jpg')}
            resizeMode='cover'>
            <View style={styles.storyProperty}>
              <View style={styles.addStoryIcon}>
                <Text style={styles.addStoryIconPlus}>+</Text>
              </View>
              <View style={styles.addStoryTxt}>
                <Text style={styles.addStoryTxtPlus}>Add to Story</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  storyPost: {
    height: 184,
    width: 100,
    marginRight: 5,
    borderWidth: 1,
    marginLeft:20,
    borderColor: '#DCDEE3',
    borderRadius: 10,
  },
  storyProperty: {
    flex: 1,
    flexDirection: 'column', justifyContent: 'space-between'
  },
  addStoryIcon: {
    margin: 5,
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  addStoryIconPlus: {
    color: '#1877F2',
    fontSize: 35,
    marginBottom: 5,
  },
  addStoryTxt: {
  },
  addStoryTxtPlus: {
    margin: 10,
    color: '#fff',
    fontSize: 12,
  },


});
export default AddStory;