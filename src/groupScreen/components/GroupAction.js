import React, { Component } from 'react';
import { Image, TextInput, ScrollView, Text, View, ImageBackground, Button, TouchableOpacity, StyleSheet } from 'react-native';

class GroupAction extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.groupActionWrapper}>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.groupAction}>
            <Text >
              <Image 
                source={require('../../assets/icon/create.png')} style={{width:15,height:15}}
                /> Create
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.groupAction}>
          <Text >
              <Image 
                source={require('../../assets/icon/discover.png')} 
                style={{width:18,height:18}}
              /> Discover
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.groupAction}>
          <Text >
          <Image 
            source={require('../../assets/icon/setting.png')} 
            style={{width:17,height:17}}
          /> Settings
            </Text>
          </View>
        </TouchableOpacity>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  groupActionWrapper: {
    marginTop: 1,
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 12.5,
    height:65,
    alignItems: "center",
  },
  groupAction: { 
    flex: 1, 
    height: 50,
    width: 104,
    borderRadius: 40,
    padding:10,
    marginLeft:5,
    justifyContent: 'center', 
    alignItems: 'center' ,
    backgroundColor:'#EBEDF0'
  },
});
export default GroupAction;