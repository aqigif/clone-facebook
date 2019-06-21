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
                <Image source={require('../../assets/img/loginHead.png')}
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
        backgroundColor: '#2E4B8A',
        justifyContent: 'center',
        alignItems: 'center'
    },
    background: {
        width: '100%',
        height: '100%'
    }
})
export default Head;