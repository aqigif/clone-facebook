import React, { Component } from 'react';
import { Image, BackAndroid, Platform, TextInput, Text, View, Button, TouchableOpacity, StyleSheet, Modal, TouchableHighlight, Alert } from 'react-native';

class Language extends Component {
  constructor(props) {
    super(props);
  }
  state = { moreLanguageModal: false, };
  setMoreLanguageModal(visible) { this.setState({ moreLanguageModal: visible }); }

  render() {
    return (
      <View style={styles.language}>
        <TouchableOpacity onPress={this._onPressButton}>
          <Text style={styles.quickLanguage}>Indonesia • </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onPressButton}>
          <Text style={styles.quickLanguage}> Melayu • </Text>
        </TouchableOpacity>
        <TouchableHighlight onPress={() => { this.setMoreLanguageModal(true); }}>
          <Text style={styles.moreLanguage}> More...</Text>
        </TouchableHighlight>
        
        <View style={{ marginTop: 22 }}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.moreLanguageModal}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={{ marginTop: 22 }}>
              <View>
                <Text>Enjoyyy english language...</Text>

                <TouchableHighlight
                  onPress={() => {
                    this.setMoreLanguageModal(!this.state.moreLanguageModal);
                  }}>
                  <Text>Close</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </View>
        
      </View>


    );
  }
}

const styles = StyleSheet.create({

  language: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },

  quickLanguage: { color: '#606770' },
  moreLanguage: { color: '#395898' },

});

export default Language;