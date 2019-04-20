import React from 'react';
import { red, blue, green } from '../Colors'
import { Text, View, Button, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';

export default class AddDeck extends React.Component {
  state = {
    title: ''
  };

  onChangeText = (title) => {
    this.setState({ title });
  };

  creatNewDeck = deckTitle => {
    this.props.navigation.navigate('Deck', { title : deckTitle })
  };

  render() {
    const { title } = this.state;

    return (
      <KeyboardAvoidingView behavior='padding' style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.title}>What is the title of your new Deck ???</Text>

        <TextInput
          style={[styles.input,{ borderColor: red} ]}
          value={title}
          selectionColor={ green }
          underlineColorAndroid={ blue }
          placeholder="Type here the title !"
          onChangeText={text => this.onChangeText(text)}
        />

        <Button title={`Create ${title} Deck`} onPress={ () => this.props.navigation.navigate('Deck', { title : title }) } />
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
    marginBottom: 50,
    height: 80,
    width: 300,
    fontSize:18,
    borderColor: '#c6c7c8'
  }
});