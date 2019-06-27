import React, { Component } from 'react';
import {AsyncStorage, Image, TextInput, ScrollView, Text, View, ImageBackground, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Head from '../TabNavigation/Head';
import Navbar from '../TabNavigation/Navbar';
import AddPost from './components/AddPost';
import AddStory from './components/AddStory';
import StoryList from './components/StoryList';
import PostList from './components/PostList';
import TimeAgo from 'timeago-react';

const axios = require('axios');


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: [],
      storyList: require('./storyList.json'),
      postList: require('./postList.json'),
    }
  }


  async componentDidMount() {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token === null) {
        this.props.navigation.navigate('Login');
      }else{
        console.log(token)
        var config = {headers: {'Authorization': "Bearer " + token}};
        let {data: status} = await axios.get('http://192.168.0.11:3333/posts/', config)        
          this.setState({status});
          console.log(this.state.status)
      }
      
    } catch (error) {
      console.error(error);
    }
    
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <ScrollView>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('AddPostInput')}>
              <AddPost />
            </TouchableOpacity>
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
                this.state.status.map(function (post, index) {
                  return (
                    <PostList
                      key={index}
                      name={post.users.name}
                      avatar={post.users.avatar}
                      time="Two days ago"
                      status={post.feed}
                      hastag="#semangat"
                      image={post.image}
                      react='20'
                      comment='20'
                      share='20'
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