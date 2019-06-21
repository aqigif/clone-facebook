import React, { Component } from 'react';
import { Image, TextInput, ScrollView, Text, View, ImageBackground, Button, TouchableOpacity, StyleSheet } from 'react-native';

class Head extends Component {

  render() {
    return (
      <View style={styles.head}>
        <View style={styles.camera}>
          <TouchableOpacity onPress={this._onPressButton}>
            <Image source={require('../assets/icon/camera.png')}
              style={{ width: 24, height: 22 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#fff"
          />
        </View>
        <View style={styles.messenger}>
          <TouchableOpacity onPress={this._onPressButton}>
            <Image source={require('../assets/icon/messenger.png')}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  head: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#4267B2',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    alignItems: "center",
  },
  camera: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 10 },
  searchBar: { flex: 10, justifyContent: 'center', alignItems: 'center', paddingLeft: 10, paddingRight: 10 },
  searchInput: {
    color: '#fff',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  messenger: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 10 },

});
export default Head;