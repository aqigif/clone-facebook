import React, { Component } from "react";
import {
  AsyncStorage,
  Image,
  TextInput,
  ScrollView,
  Text,
  View,
  ImageBackground,
  Button,
  TouchableOpacity,
  Modal,
  StyleSheet
} from "react-native";
import {
  DotsLoader
} from "react-native-indicator";

const axios = require("axios");

class SplashScreen extends Component {
  constructor(props) {
    super(props);
      this.splashScreen();
  }
    splashScreen = async () => {
        const userToken = await AsyncStorage.getItem('token');
        console.log(userToken)
        this.props.navigation.navigate(userToken ? 'App' : 'Auth')
    }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("./assets/icon/facebookLogo.png")}
          style={styles.logo}
        />
        <DotsLoader />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    marginBottom: 20,
    width: 60,
    height: 60
  }
});

export default SplashScreen;
