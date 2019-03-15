import React from 'react';
import { YellowBox } from 'react-native';
import { Home } from './app/views/Home.js';
import { Contact } from './app/views/Contact.js';
import { Video } from './app/views/Video.js';
import { StackNavigator } from 'react-navigation';

const MyRoutes = StackNavigator({
  HomeRT:{
    screen: Home
  },
  ContactRT: {
    screen: Contact
  },
  LessonsRT: {
    screen: Video
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


