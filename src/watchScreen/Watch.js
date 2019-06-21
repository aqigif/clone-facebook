import React, { Component } from 'react';
import { Image, TextInput, ScrollView, Text, View, ImageBackground, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Head from '../TabNavigation/Head';
import Navbar from '../TabNavigation/Navbar';
import PostList from './components/PostList';


class Watch extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      postList: require('./postList.json'),
    }
  }

  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={styles.container}>
        <Head />
        <Navbar />
        <View style={styles.body}>
          <ScrollView>
            <View style={styles.postList}>
              {
                this.state.postList.post.map(function (post, index) {
                  return (
                    <PostList
                      key={index}
                      name={post.name}
                      avatar={post.avatar}
                      time={post.time}
                      status={post.status}
                      hastag={post.hastag}
                      imagePost={post.imagePost}
                      react={post.react}
                      comment={post.comment}
                      share={post.share}
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
  story: {
    height: 214,
    marginTop: 10,
    marginBottom: 5,
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: "center",
  },
  postList: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default Watch;