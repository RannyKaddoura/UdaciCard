import React from 'react';
import { red } from '../Utilit';
import { Text, View, Button, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';

export default class AddDeck extends React.Component {
  state = {
    title: ''
  };

  onChangeText = (title) => {
    this.setState({ title });
  };

  createDeck = () => {
    this.props.navigation.navigate('Decks');
  };

  render() {
    const { title } = this.state;

    return (
      <KeyboardAvoidingView behavior='padding' style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.title}>What is the title of your new Deck ???</Text>

        <TextInput
          style={[styles.input,{ borderColor: red} ]}
          value={title}
          placeholder="Type here the title !"
          onChangeText={text => this.onChangeText(text)}
        />

        <Button title={`Create ${title} Deck`} onPress={this.createDeck} />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    margin: 40
  },
  input: {
    height: 40,
    borderColor: '#c6c7c8'
  }
});
