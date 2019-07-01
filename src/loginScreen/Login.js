import React, { Component } from 'react';
import { Image, BackAndroid, Platform, TextInput,Alert, Text, View, Button, TouchableOpacity, StyleSheet, TouchableHighlight, Modal, BackHandler } from 'react-native';
import HeadStateOff from './components/HeadStateOff';
import HeadStateOn from './components/HeadStateOn';
import Language from './components/Language';
import OrLine from './components/OrLine';
import RegisButton from './components/RegisButton';
import {AsyncStorage} from 'react-native';
import { withNavigation } from 'react-navigation';

const axios = require('axios');


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocus: false,
      email : "",
      password: "",
      forgotOrRegisterStateText: 'Forgot Your Password?'
    }
  }

  handleLogin = () => {
    axios
    .post("http://192.168.137.1:3333/auth/login", {
      email: this.state.email,
      password: this.state.password
    })
    .then(res => {
      if (res.data.status==="Success"){
        const data = res.data.data;
        AsyncStorage.setItem('token', res.data.token);
        this.props.navigation.navigate('App');
        console.log(data)
      } else if (res.data.status==="Failure"){
        alert("Username or Password was Wrong!")
      }
    })
    .catch(err => {
      console.log(err);
    });
  }

  async componentDidMount() {
    const token = await AsyncStorage.getItem('token');
    if (token !== null) {
      this.props.navigation.navigate('App');
    }
  } 
  
  static navigationOptions = { header: null }
  onFocus() {
    this.setState({
      forgotOrRegisterStateText: 'Create New Facebook Account',
      isFocus: true
    })
  }
  onBlur() {
    this.setState({
      forgotOrRegisterStateText: 'Forgot Your Password?',
      isFocus: false
    })
  }
  render() {
    const onFocus = this.state.isFocus;
    let head, orLine, regisButton;

    if (onFocus == false) {
      head = <HeadStateOff />;
      orLine = <OrLine />;
      regisButton = <RegisButton />;
    } else {
      head = <HeadStateOn />
    }
    return (
      <View style={styles.container}>
        {head}
        <View style={styles.body}>
          <Language />
          <View style={styles.loginWrapper}>
            <TextInput
              style={styles.usernameInput}
              placeholder="Phone or Email"
              onChangeText={(email) => this.setState({email})}
              onFocus={() => this.onFocus()}
            />
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password})}
              onFocus={() => this.onFocus()}
            />
            <View style={styles.loginButton}>
              <Button
                title="Log In"
                color="#4E69A2"
                onPress={this.handleLogin}
              />
            </View>
            <TouchableOpacity onPress={this._onPressButton}>
              <Text style={styles.forgotOrRegister}>{this.state.forgotOrRegisterStateText}</Text>
            </TouchableOpacity>
          </View>
          {orLine}
          {regisButton}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, },

  body: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: "center",
  },

  loginWrapper: {
    justifyContent: 'center',
    flex: 2,
    alignItems: "center",
  },
  usernameInput: {
    marginTop: 10,
    height: 50,
    width: 280,
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: '#DEE0E4',
  },
  passwordInput: {
    marginTop: 10,
    height: 50,
    width: 280,
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: '#DEE0E4',
  },
  loginButton: {
    marginTop: 20,
    width: 280,
  },
  forgotOrRegister: {
    marginTop: 20,
    color: '#4E69A2',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomColor: '#DEE0E4'
  },

});

export default withNavigation(Login);