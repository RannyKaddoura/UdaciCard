import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './Tabs'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator />
      </View>
    );
  }
}
