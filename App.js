import React from 'react';
import { YellowBox } from 'react-native';
import { Home } from './app/views/Home.js';
import { Contact } from './app/views/Contact.js';
import { StackNavigator } from 'react-navigation';

const MyRoutes = StackNavigator({
  HomeRT:{
    screen: Home
  },
  ContactRT: {
    screen: Contact
  },
},
  {
    initialRouteName: 'HomeRT'
  }
);

YellowBox.ignoreWarnings(['Remote debugger']);

export default class App extends React.Component {
  render() {
    return (
        <MyRoutes/>
      );
    }
  }


