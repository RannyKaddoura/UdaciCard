import React from 'react';
import { red, blue, green } from '../Colors';
import { Text, View, Button, StyleSheet } from 'react-native';

export default class Errors extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={[styles.input, { borderColor: red }]}>
          You cannot create Deck without title
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    input: {
      marginBottom: 40,
      height: 50,
      width: 300,
      fontSize: 18,
      borderColor: '#c6c7c8'
    }
  });
  