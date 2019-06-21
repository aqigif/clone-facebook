import React, { Component } from 'react';
import { Image, BackAndroid, Platform, TextInput, Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

class Head extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.head}>
                <Image source={require('../../assets/icon/facebookLogo.png')}
                    style={styles.background}
                    resizeMode="contain"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, },
    head: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    background: {
        width: 75.5,
        height: 75.5,
    }
})
export default Head;