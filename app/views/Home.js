import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from '../sections/Header.js';

export class Home extends React.Component {
    render() {
        return (
            <View>
                <Text> Test </Text>
                <Text> Test2 </Text>
                <Text> Test3 </Text>
                <Header message = 'Press to Login' />

            </View>
        );
    }
}