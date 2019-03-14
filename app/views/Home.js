import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from '../sections/Header.js';

export class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header message = 'Press to Login' />
                <Text style={{flex:8}}> Test </Text>
                <Text style={{flex:6}}> Test2 </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});