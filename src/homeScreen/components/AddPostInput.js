import React, { Component } from "react";
import {
  Image,
  TextInput,
  Modal,
  ScrollView,
  Text,
  View,
  ImageBackground,
  Button,
  TouchableOpacity,
  StyleSheet,
  AsyncStorage
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { createStackNavigator, createAppContainer, withNavigation } from "react-navigation";
const axios = require('axios');
class AddPostInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: "",
      action: ""
    };
  }

  handlePost = async (action,postId,) => {
    if (postId || action !== null) {
      if (action === "posts") {
        const token = await AsyncStorage.getItem('token');
        var config = {headers: {'Authorization': "Bearer " + token}};
        axios.post('http://192.168.137.1:3333/posts/', {
          feed: this.state.feed
        },config)
        .then(res => {
          this.props.navigation.navigate('AuthLoading')
        })
        .catch(err => {
          console.log(err);
        });
      } else if (action === "update") {
        const token = await AsyncStorage.getItem('token');
        var config = {headers: {'Authorization': "Bearer " + token}};
        axios.patch(`http://192.168.137.1:3333/posts/${postId}`, {
          feed: this.state.feed
        },config)
        .then(res => {
          this.props.navigation.navigate('AuthLoading')
        })
        .catch(err => {
          console.log("error");
        });
      }
    }
  };

  render() {
    
    const navigation = this.props.navigation;
    const feed = navigation.getParam('feed', '');
    const postId = navigation.getParam('postId', 'No - POST-ID');
    const action = navigation.getParam('action', '');
    return (
      <View style={{ height: "100%", width: "100%", flexDirection: "column" }}>
        <View
          style={{
            backgroundColor: "#2E4B8A",
            height: 60,
            width: "100%",
            flexDirection: "row",
            paddingLeft: 10,
            paddingRight: 10
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, justifyContent: "center" }}
            onPress={() => {
              this.props.navigation.navigate("MainScreen");
            }}
          >
            <Icon name="arrow-left" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { this.handlePost(action,postId) }}
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end"
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 16
              }}
            >{action === 'posts' ? `Post` : `Save`}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 60, flexDirection: "row", padding: 10 }}>
          <View style={{ width: "15%" }}>
            <Image
              source={{
                uri:
                  "https://scontent-sin2-2.xx.fbcdn.net/v/t1.0-9/62002010_2277671888984017_8204108312476647424_n.jpg?_nc_cat=111&_nc_ht=scontent-sin2-2.xx&oh=280fce721aa5867abf51fb49095db552&oe=5D8D84F9"
              }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 25
              }}
            />
          </View>

          <View style={{ paddingLeft: 10 }}>
            <Text style={{ fontWeight: "bold", color: "black" }}>
              Aqil Gifari
            </Text>
            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <View
                style={{
                  borderWidth: 1,
                  marginRight: 5,
                  width: 60,
                  justifyContent: "center",
                  borderRadius: 5,
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <Text>Public</Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  width: 60,
                  justifyContent: "center",
                  borderRadius: 5,
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <Text>Album</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <TextInput
            placeholder="What's on Your Mind?"
            style={{
              fontSize: 18,
              height: "100%",
              textAlignVertical: "top"
            }}
            multiline={true}
            onChangeText={feed => this.setState({ feed })}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({});
export default withNavigation(AddPostInput);
