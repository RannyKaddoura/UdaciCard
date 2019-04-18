import React from 'react';
import { Text, View, Button } from 'react-native';

export default class AddDeck extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>You are in NewDeck Component</Text>
        <Button
          title="Go to test"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}
