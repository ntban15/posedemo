import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import LoginButton from './LoginButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />
        <LoginButton />
      </View>
    );
  }
}
