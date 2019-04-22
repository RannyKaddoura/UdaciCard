import React from 'react';
import { green, white, black } from '../Variables';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class Score extends React.Component {
  render() {
    const { score, questionsNumber } = this.props.navigation.state.params;
    console.log('Score questionsNumber', questionsNumber);
    console.log('Score score', score);
    return (
      <View style={styles.container}>
        <Text style={styles.input}>Your Score is {score} / {questionsNumber}</Text>
        <Text style={styles.input}>that mean { 100 * score / questionsNumber } % Corrent</Text>
        <TouchableOpacity
          style={styles.CorrectButton}
          onPress={() => this.props.navigation.navigate('Decks')}>
          <Text style={styles.text}>Back To Decks</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: green,
    alignItems: 'center'
  },
  input: {
    marginBottom: 40,
    height: 100,
    width: 300,
    fontSize: 22,
    color: white,
    textAlign: 'center',
    borderColor: '#c6c7c8'
  },
  CorrectButton: {
    textAlign: 'center',
    backgroundColor: white,
    padding: 10,
    width: 200,
    borderRadius: 5,
    margin: 10,
    fontSize: 22,
    marginTop: 60,
    color: black
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
    color: black

  }
});
