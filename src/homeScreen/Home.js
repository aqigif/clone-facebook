import React, { Component } from 'react';
import { Image, TextInput, ScrollView, Text, View, ImageBackground, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Head from '../TabNavigation/Head';
import Navbar from '../TabNavigation/Navbar';
import AddPost from './components/AddPost';
import AddStory from './components/AddStory';
import StoryList from './components/StoryList';
import PostList from './components/PostList';


const axios = require('axios');
 


class Home extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      storyList: require('./storyList.json'),
      postList: require('./postList.json'),
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <ScrollView>
            <AddPost />
            <View style={styles.story}>
              <ScrollView horizontal={true}>
                <AddStory />
                {
                  this.state.storyList.story.map(function (story, index) {
                    return (
                      <StoryList
                        key={index}
                        name={story.name}
                        avatar={story.avatar}
                        imageStory={story.imageStory}
                      />
                    )
                  })
                }
              </ScrollView>
            </View>
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
export default Home;