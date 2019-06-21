import React, { Component } from 'react';
import { Image, TextInput, ScrollView, Text, View, ImageBackground, Button, TouchableOpacity, StyleSheet } from 'react-native';

class StoryList extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this._onPressButton}>
        <View style={styles.storyPost}>
          <ImageBackground
            style={{ height: '100%', }}
            imageStyle={{ borderRadius: 10 }}
            source={{ uri: this.props.imageStory }}
            resizeMode='cover'>
            <View style={styles.storyProperty}>
              <View style={styles.storyDetail}>
                <Image source={{ uri: this.props.avatar }} style={{ width: 40, height: 40, borderRadius: 40 / 2 }}
                />
              </View>
              <View style={styles.addStoryTxt}>
                <Text style={styles.storyNameAccount}>{this.props.name}</Text>
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
    borderColor: '#DCDEE3',
    borderRadius: 10,
  },
  storyProperty: {
    flex: 1,
    flexDirection: 'column', justifyContent: 'space-between'
  },
  storyDetail: {
    margin: 5,
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  addStoryTxt: {
  },
  storyNameAccount: {
    margin: 10,
    color: '#fff',
    fontSize: 12,
  },


});
export default StoryList;