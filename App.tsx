import React from "react";
import { Component } from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";

import logo from "./assets/images/dg-logo.png";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component<{}> {
  public state = {
    text: "Something"
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={{ width: 70, height: 50 }} />
        <Text onPress={() => console.log("BLAH")} style={styles.instructions}>
          YES To get started, edit App.js
        </Text>
        <Text
          onPress={() => this.setState({ text: this.state.text + "yes" })}
          style={styles.instructions}
        >
          {this.state.text}
        </Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
