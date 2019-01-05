/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  download = () => {
    let dirs = RNFetchBlob.fs.dirs
    RNFetchBlob
    .config({
      // response data will be saved to this path if it has access right.
      path : dirs.DownloadDir + '/download-example.png'
    })
    .fetch('GET', 'https://raw.githubusercontent.com/joltup/rn-fetch-blob/master/img/RNFB-Flow-hd.png', {
      //some headers ..
    })
    .then((res) => {
      // the path should be dirs.DocumentDir + 'path-to-file.anything'
      console.log('The file saved to ', res.path())
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/images/dg-logo.png')} />
        <Text onPress={this.download} style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>YES To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
