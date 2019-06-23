import React, { Component } from 'react';
import { Image, TextInput, ScrollView, Text, View, ImageBackground, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Head from '../TabNavigation/Head';
import Navbar from '../TabNavigation/Navbar';
import GroupAction from './components/GroupAction';
import GroupList from './components/GroupList';
import GroupPostList from './components/GroupPostList';


class Group extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      groupList: require('./groupList.json'),
      GroupPostList: require('./postList.json'),
    }
  }

  render() {
    return (
        <View style={styles.body}>
          <ScrollView>
            <GroupAction />
            <View style={styles.groups}>
              <View style={{flexDirection:'row', justifyContent:'space-between',marginTop:10}}>
                <View style={{flex:1,justifyContent:'flex-start',}}>
                  <Text style={{fontWeight:'bold', color:'#1C1E21',fontSize:20}}>Your Groups</Text>
                </View>
                <View style={{flex:1,alignItems:'flex-end', marginRight:20}}>
                  <Text  style={{ color:'#0B65DB',fontSize:18}}>See All</Text>
                  </View>
              </View>
              <ScrollView horizontal={true}>
                {
                  this.state.groupList.group.map(function (group, index) {
                    return (
                      <GroupList
                        key={index}
                        name={group.name}
                        imageGroup={group.imageGroup}
                      />
                    )
                  })
                }
              </ScrollView>
            </View>
            <View style={styles.postList}>
              {
                this.state.GroupPostList.post.map(function (post, index) {
                  return (
                    <GroupPostList
                      key={index}
                      name={post.name}
                      to = {post.to}
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
  groups: {
    marginTop: 1,
    marginBottom: 5,
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    paddingLeft: 20,
    alignItems: "center",
  },
  postList: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default Group;