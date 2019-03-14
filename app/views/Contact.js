import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Header } from '../sections/Header.js';

export class Contact extends React.Component {
    static navigationOptions = {
        header: null,
    }

    render(){
        const { goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Header message = 'Press to Login' />
                <Text style={{flex: 8}}>The contact form will go here</Text>
                <Text style={{flex: 6}}>More contact form will go here</Text>
                <Button onPress={() => goBack()} title="Go back to homescreen" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});