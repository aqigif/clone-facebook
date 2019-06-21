import React, { Component } from 'react';
import { Image, BackAndroid, Platform, TextInput, Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';


class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.regis}>
        <View style={styles.regisButton}>
          <Button
            title="Create New Facebook Account"
            color="#00A400"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  regis: {
    flex: 1,
    justifyContent: 'center',
  },
  regisButton: { width: 280, },

});

export default App;