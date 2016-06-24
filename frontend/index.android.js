/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
var SplashScreen = require('@remobile/react-native-splashscreen');

class froggy extends Component {
  componentDidMount() {
    setTimeout(() => SplashScreen.hide(), 2000);
  }
  render() {
    return (
      <View>

      </View>
    );
  }
}

AppRegistry.registerComponent('froggy', () => froggy);
