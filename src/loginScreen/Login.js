import React, { Component } from 'react';
import { Image, BackAndroid, Platform, TextInput, Text, View, Button, TouchableOpacity, StyleSheet, TouchableHighlight, Modal, BackHandler } from 'react-native';
import HeadStateOff from './components/HeadStateOff';
import HeadStateOn from './components/HeadStateOn';
import Language from './components/Language';
import OrLine from './components/OrLine';
import RegisButton from './components/RegisButton';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocus: false,
      forgotOrRegisterStateText: 'Forgot Your Password?'
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
              onFocus={() => this.onFocus()}
              onBlur={() => this.onBlur()}
            />
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              secureTextEntry={true}
              onFocus={() => this.onFocus()}
              onBlur={() => this.onBlur()}
            />
            <View style={styles.loginButton}>
              <Button
                title="Log In"
                color="#4E69A2"
                onPress={() => this.props.navigation.navigate('Home')}
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

export default Login;