import React from 'react';
import { red, white, lightGray, darkGray } from '../Colors';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  AsyncStorage
} from 'react-native';


export default class Deck extends React.Component {

  removeDeck = async title => {
    const decksData = await AsyncStorage.getItem('Data:Deckslist');
    const Deck = JSON.parse(decksData);
    delete Deck[title];
    await AsyncStorage.setItem('Data:Deckslist', JSON.stringify(Deck));
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 24, margin: 20 }}>
          Deck Name : {navigation.getParam('title')}
        </Text>

        <TouchableOpacity>
          <Text style={[styles.text, styles.normalButton]}>Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={[styles.text, styles.normalButton]}>Start Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.removeDeck(navigation.getParam('title'));
            this.props.navigation.navigate('Decks', { token: 'ASdjpadA/6asdhj' });
          }}
          style={styles.bottom}>
          <Text style={[styles.delete, styles.deleteButton]}>
            DELETE {navigation.getParam('title')} DECK
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center'
  },
  deleteButton: {
    backgroundColor: red,
    padding: 10,
    color: white,
    width: 200,
    textAlign: 'center',
    borderRadius: 5
  },
  normalButton: {
    backgroundColor: lightGray,
    margin: 15,
    padding: 10,
    color: white,
    width: 200,
    textAlign: 'center',
    borderRadius: 5,
    borderColor: darkGray
  },
  text: {
    justifyContent: 'flex-end',
    fontSize: 18
  },
  delete: {
    flex: 1,
    color: red,
    fontSize: 18
  },
  bottom: {
    paddingBottom: 15,
    position: 'absolute',
    bottom: 10
  }
});
