import React from 'react';
import { red, blue, green } from '../Colors';
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  AsyncStorage
} from 'react-native';

export default class AddDeck extends React.Component {
  state = {
    title: '',
    error: false
  };

  onChangeText = title => {
    this.setState({ title });
  };

  creatNewDeck = deckTitle => {
    this.props.navigation.navigate('Deck', { title: deckTitle });
  };

  storDeck = async title => {
    if (title) {
      const decksData = await AsyncStorage.getItem('Data:Deckslist');
      const oldDeck = JSON.parse(decksData);
      const newDeck = {
        [title]: {
          title: title,
          questions: []
        }
      };
      const finalDecks = Object.assign(oldDeck, newDeck);

      await AsyncStorage.setItem('Data:Deckslist', JSON.stringify(finalDecks));
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    const { title, error } = this.state;

    if (error) {
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={[styles.input, { borderColor: red }]}>
          {' '}
          You cannot create Deck without title{' '}
        </Text>
      </View>;
    }

    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.title}>What is the title of your new Deck ???</Text>

        <TextInput
          style={[styles.input, { borderColor: red }]}
          value={title}
          selectionColor={green}
          underlineColorAndroid={blue}
          placeholder="Type here the title !"
          onChangeText={text => this.onChangeText(text)}
        />

        <Button
          title={`Create ${title} Deck`}
          onPress={() => {
            if ( title ) {
            this.storDeck(title);
            this.props.navigation.navigate('Deck', { title: title });
          } else {this.props.navigation.navigate('Errors');}
          }}
        />
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
    marginBottom: 40,
    height: 50,
    width: 300,
    fontSize: 18,
    borderColor: '#c6c7c8'
  }
});
