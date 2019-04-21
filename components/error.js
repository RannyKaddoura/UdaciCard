import React from 'react';
import { red, white } from '../Colors';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { Constants } from 'expo'


export default class Errors extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ErrorStatusBar backgroundColor={red} barStyle="light-content" />
        <Text style={[styles.input, { borderColor: red }]}>
          You cannot create Deck without title
        </Text>
      </View>
    );
  }
}

function ErrorStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: red,
    alignItems: 'center'
  },
  input: {
    marginBottom: 40,
    height: 100,
    width: 300,
    fontSize: 32,
    color: white,
    textAlign: 'center',
    borderColor: '#c6c7c8'
  }
});
