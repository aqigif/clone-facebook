import React, { Component } from 'react';
import { Image, BackAndroid, Platform, TextInput, Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.or}>
        <View style={styles.wrapperOrLine}>
          <View style={styles.orLine} />
        </View>
        <View style={styles.wrapperOrText}>
          <Text style={styles.orText}>Or</Text>
        </View>
        <View style={styles.wrapperOrLine}>
          <View style={styles.orLine} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  or: {
    flexDirection: 'row',
    paddingLeft: 40,
    paddingRight: 40,
  },
  wrapperOrLine: { width: '45%', },
  orLine: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#E5E7EA',
  },
  wrapperOrText: { width: '10%', },
  orText: {
    color: '#4F545A',
    textAlign: 'center',
  },

});

export default App;