import React, { Component } from 'react';
import { Image, TextInput, ScrollView, Text, View, ImageBackground, Button, TouchableOpacity, StyleSheet } from 'react-native';
class NotificationContent extends Component {
  render() {
    return (
    <View 
      style={{
        flex: 1,
        flexDirection:'row',
        borderTopWidth:0.5,
        borderTopColor:'#DCDEE3',
        justifyContent: 'center',
        padding:15,
        backgroundColor:'#E6F2FF',
      }}
    >
      <View style={styles.avatarWrapper}>
        <TouchableOpacity onPress={this._onPressButton}>
          <Image source={{ uri: this.props.avatar }}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.notificationContent}>
        <Text>
          {this.props.content}
        </Text>
        <Text style={{color:'#227DF2'}}>
          {this.props.time}
        </Text>
      </View>
      <View style={styles.notificationAction}>
        <TouchableOpacity onPress={this._onPressButton}>
          <Image source={require('../../assets/icon/dotAction.png')} style={styles.dotIcon} />
        </TouchableOpacity>
      </View>
    </View>
    )
  }
}
class NotificationList extends Component {
  render() {
    return (
    <View>
      <View style={styles.notificationLine} />
      <View style={styles.notificationItem}>
        <View style={styles.notificationType}>
          <Text style={{fontWeight:'bold',color:'black'}}>{this.props.type}</Text>  
        </View>
        {
          this.props.content.map(function (content, index) {
            return (
              <NotificationContent
                key={index}
                avatar={content.avatar}
                content={content.content}
                time={content.time}
              />
            )
          })
        }
      </View>
      <View style={styles.notificationLine} />
    </View>
    );
  }
}
const styles = StyleSheet.create({
  notificationLine: {
    height: 5,
    width: '100%',
    flex: 1,
    backgroundColor: '#DCDEE3',
  },
  notificationItem: {
    flex: 1,
    borderRadius:10,
  },
  notificationType: {
    padding: 10,
    flex: 1,
  },
  avatarWrapper: { 
    flex: 1,  
  },
  avatar: { 
    width: 70, 
    height: 70, 
    borderRadius: 70 / 2 
  },
  notificationContent:{
    flex:3,
    alignItems:'flex-start',
    flexDirection:'column',
  },
  notificationAction: {
    marginLeft:10, 
    justifyContent: 'center', 
    alignItems: 'flex-end' 
  },
  dotIcon: { 
    width: 17, 
    height: 5 
  },
});
export default NotificationList;