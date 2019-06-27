import React, { Component } from 'react';
import { Image, TextInput,Modal, ScrollView, Text, View, ImageBackground, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class AddPostInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      createModal: true,
    }
  }
  setCreateModal(visible) {
    this.setState({createModal: visible});
  }

  render() {
    return (
    
      <View style={{flex:1, flexDirection:'column'}}>
        <View style={{backgroundColor: '#2E4B8A', height:60, width:'100%', flexDirection:'row',paddingLeft:10,paddingRight:10}}>
          <TouchableOpacity style={{flex:1, justifyContent:'center'}} onPress={() => {
            this.setCreateModal(!this.state.createModal);
          }}>
            <Icon name='arrow-left' size={25} color='white' />
          </TouchableOpacity>
          <TouchableOpacity style={{flex:1, justifyContent:'center',alignItems:'flex-end'}}>
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
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
});
export default AddPostInput;