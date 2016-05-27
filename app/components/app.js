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
        <Text>token: { this.props.token }</Text>
        <Text>{ this.props.counter }</Text>
        <Text style={styles.increase} onPress={ this.props.handleIncrease }>
          increase
        </Text>
        <Text style={styles.decrease} onPress={ this.props.handleDecrease }>
          decrease
        </Text>
      </View>
    );
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
