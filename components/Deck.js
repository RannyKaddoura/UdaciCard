import React from 'react';
import { red, white, lightGray } from '../Colors'
import {
  Text,
  TouchableOpacity, 
  View,
  StyleSheet,
  AsyncStorage
} from 'react-native';

export default class Deck extends React.Component {

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 24 , margin: 20}}>Deck title is : {navigation.getParam('title')}</Text>

        <TouchableOpacity>
          <Text style={[ styles.text, styles.normalButton ]}>Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity>
        <Text style={[ styles.text, styles.normalButton ]}>Start Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottom}>
          <Text style={[styles.delete, styles.deleteButton]}>DELETE DECK</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
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
    padding: 10,
    color: white,
    width: 200,
    textAlign: 'center',
    borderRadius: 5
  },
  text : {
    justifyContent: 'flex-end',
    fontSize: 18,
  },
  delete: {
    flex: 1,
    color: red,
    fontSize: 18,
  },
  bottom : {
    paddingBottom: 15,
    position: 'absolute',
    bottom: 10
  }
});
