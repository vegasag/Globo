import React from 'react';
import { Home } from './app/views/Home.js';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Remote debugger']);


export default class App extends React.Component {
  render() {
    return (
      <Home/>
    );
  }
}