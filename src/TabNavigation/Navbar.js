import React, { Component } from 'react';
import { Image, TextInput, ScrollView, Text, View, ImageBackground, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Head from './Head';
import Home from '../homeScreen/Home';
import Group from '../groupScreen/Group';
import Watch from '../watchScreen/Watch';

class Navbar extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.navbar}>
        <View style={styles.home}>
          <TouchableOpacity onPress={this._onPressButton}>
            <Image source={require('../assets/icon/homeActive.png')}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.group}>
          <TouchableOpacity onPress={this._onPressButton}>
            <Image source={require('../assets/icon/group.png')}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.watch}>
          <TouchableOpacity onPress={this._onPressButton}>
            <Image source={require('../assets/icon/watch.png')}
              style={{ width: 24, height: 22 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.profile}>
          <TouchableOpacity onPress={this._onPressButton}>
            <Image source={require('../assets/icon/profile.png')}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.notification}>
          <TouchableOpacity onPress={this._onPressButton}>
            <Image source={require('../assets/icon/notification.png')}
              style={{ width: 21, height: 24 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.more}>
          <TouchableOpacity onPress={this._onPressButton}>
            <Image source={require('../assets/icon/more.png')}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  //container
  container: {
    flex: 1,
  },
  //head
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


  navbar: {
    height: 50,
    flexDirection: 'row',
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: '#C6C7CC',
  },
  home: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  group: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  watch: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  profile: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  notification: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  more: { flex: 1, justifyContent: 'center', alignItems: 'center' },


  body: {
    flex: 1,
    backgroundColor: '#DCDEE3',
  },

  post: {
    height: 65,
    marginTop: 1,
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
  },
  profilePicture: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  postWrapper: { flex: 9, justifyContent: 'center', alignItems: 'center', paddingLeft: 10, paddingRight: 10 },
  postIn: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#DCDEE3',
    borderRadius: 30,
  },
  upload: { flex: 1, justifyContent: 'center', alignItems: 'center' },

  story: {
    height: 214,
    marginTop: 5,
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: "center",
  },

  storyPost: {
    height: 184,
    width: 100,
    marginRight: 5,
    borderWidth: 1,
    borderColor: '#DCDEE3',
    borderRadius: 10,
    backgroundColor: "grey"
  },

  addStoryIcon: {
    margin: 10,
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
  addStoryTxtPlus: {
    margin: 10,
    color: '#fff',
    fontSize: 12,
  },


  postList: {
    marginTop: 5,
    flex: 1,
    backgroundColor: '#fff',
  },
  postLine: {
    height: 5,
    width: '100%',
    flex: 1,
    backgroundColor: '#DCDEE3',
  },
  postItem: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    flex: 1
  },
  headPost: {
    flexDirection: 'row',
    paddingTop: 10,
    flex: 1,
  },
  posterPicture: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  posterId: { flex: 9, justifyContent: 'center', paddingLeft: 10, paddingRight: 10 },
  posterName: { color: '#1C1E21', fontWeight: 'bold' },
  postAction: { flex: 1, justifyContent: 'center', alignItems: 'center' },

  bodyPost: {
    paddingTop: 20,
    flex: 2,
    paddingBottom: 5,
  },
  postContent: {
    fontSize: 24,
    color: '#1C1E21',
    marginBottom: 10,
  }

});
export default Navbar;