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

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.increase} onPress={ this.handleIncrease }>
          increase
        </Text>
        <Text style={styles.decrease} onPress={ this.handleDecrease }>
          decrease
        </Text>
      </View>
    );
  }

  handleIncrease = () => {
    console.log('increase');
  }

  handleDecrease = () => {
    console.log('decrease');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  increase: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  decrease: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
