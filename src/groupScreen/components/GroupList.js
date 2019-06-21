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
            source={{ uri: this.props.imageGroup }}
            resizeMode='cover'>
          </ImageBackground>
        </View>
        <View style={{marginBottom:10}}>
          <Text style={{color:'#242628', textAlign:'center',}}>{this.props.name} </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  storyPost: {
    marginTop:10,
    marginBottom:5,
    height: 100,
    width: 100,
    marginRight: 5,
    borderWidth: 1,
    borderColor: '#DCDEE3',
    borderRadius: 10,
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