import React, { Component } from 'react';
import {AsyncStorage, Image, TextInput, ScrollView, Text, View, ImageBackground, Button, TouchableOpacity,Modal, StyleSheet } from 'react-native';
import Head from '../TabNavigation/Head';
import Navbar from '../TabNavigation/Navbar';
import AddPost from './components/AddPost';
import AddPostInput from './components/AddPostInput';
import AddStory from './components/AddStory';
import StoryList from './components/StoryList';
import PostList from './components/PostList';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import Icon from 'react-native-vector-icons/FontAwesome';

const axios = require('axios');


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: [],
      storyList: require('./storyList.json'),
      postList: require('./postList.json'),
      createModal: false,
      feed: ""
    }
  }
  setCreateModal(visible) {
    this.setState({createModal: visible});
  }

  createFeed = async () => {
    const token = await AsyncStorage.getItem('token');
    var config = {headers: {'Authorization': "Bearer " + token}};
    axios.post('http://192.168.0.11:3333/posts/', {
      feed: this.state.feed
    },config)
    .then(res => {
      this.setCreateModal(!this.state.createModal);
    })
    .catch(err => {
      console.log(err);
    });
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
            <TouchableOpacity
            onPress={() => {
            this.setCreateModal(true);
            }}>
              <AddPost />
            </TouchableOpacity>
            <Modal 
              animationType="slide"
              transparent={false}
              visible={this.state.createModal}
            >
              <View style={{flex:1, flexDirection:'column'}}>
                <View style={{backgroundColor: '#2E4B8A', height:60, width:'100%', flexDirection:'row',paddingLeft:10,paddingRight:10}}>
                  <TouchableOpacity style={{flex:1, justifyContent:'center'}} onPress={() => {
                    this.setCreateModal(!this.state.createModal);
                  }}>
                    <Icon name='arrow-left' size={25} color='white' />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.createFeed} style={{flex:1, justifyContent:'center',alignItems:'flex-end'}}>
                    <Text style={{color:'white',fontWeight:'bold',fontSize:16}}>Post</Text>
                  </TouchableOpacity>
                </View>
                <View style={{height:'10%', flexDirection:'row', padding:10}}>
                  <View style={{width:'15%'}}>
                    <Image source={{uri:'https://scontent-sin2-2.xx.fbcdn.net/v/t1.0-9/62002010_2277671888984017_8204108312476647424_n.jpg?_nc_cat=111&_nc_ht=scontent-sin2-2.xx&oh=280fce721aa5867abf51fb49095db552&oe=5D8D84F9'}}
                      style={{
                        width:50,
                        height:50,
                        borderRadius:25
                      }}
                    />
                  </View>
                  
                  <View style={{paddingLeft:10}}>
                    <Text style={{fontWeight:'bold', color:'black'}}>Aqil Gifari</Text>
                    <View style={{flexDirection:'row',marginTop:5}}>
                      <View style={{borderWidth:1, marginRight:5,width:60, justifyContent:'center',borderRadius:5,flexDirection:'row',alignItems:'center'}}>
                        <Text>Public</Text>
                      </View>
                      <View style={{borderWidth:1, width:60, justifyContent:'center',borderRadius:5,flexDirection:'row',alignItems:'center'}}>
                        <Text>Album</Text>
                      </View>
                    </View>
                  </View>
                
                </View>
                <View style={{height:'80%',padding:10}}>
                  <TextInput 
                    placeholder="What's on Your Mind?"
                    style={{fontSize:18,}}
                    multiline={true}
                    onChangeText={(feed) => this.setState({feed})}
                  />
                </View>
              </View>
            </Modal>
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
                      time={post.createdAt}
                      status={post.feed}
                      hastag="#semangat"
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