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
var FroggyMessengerContainer = require('./FroggyMessengerContainer');


class froggy extends Component {
  render() {
    return (
      <View>
        <FroggyMessengerContainer/>
      </View>
    );
  }
}

AppRegistry.registerComponent('froggy', () => froggy);