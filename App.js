import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import home from './components/home'
import profile from './components/profile'

import { createStackNavigator } from 'react-navigation';

export class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./images/icon.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

const RootStack = createStackNavigator( {
  home: home,
  profile: profile,

})

export default class App extends React.Component {
  render() {
    return <RootStack/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
