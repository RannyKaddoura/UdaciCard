import React from 'react';
import { Text, ScrollView, TouchableOpacity, View, StyleSheet } from 'react-native';

export default class Decks extends React.Component {
  state = {
    decklist: [
      { name: 'Deck 01' },
      { name: 'Deck 02' },
      { name: 'Deck 03' },
      { name: 'Deck 04' },
      { name: 'Deck 05' }
    ]
  };
  render() {
    const { decklist } = this.state;
    return (
      <ScrollView  style={ styles.container}>
        {decklist.map((data, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={() => this.props.navigation.navigate(`${data.name}`)}
            style={ styles.fullWidthButton}>
            <Text>Name : {data.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  fullWidthButton: {
    backgroundColor: '#c6c7c8',
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 60,
    width: 300,
    height: 200
  },
  review : {
    margin: 0,
    flexDirection: 'row'
  } 
});
