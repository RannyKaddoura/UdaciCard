import React from 'react';
import { DECKS_DATA_KEY, green, red, white } from '../Variables';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

export default class Quiz extends React.Component {
  state = {
    decksData: null,
    questions: [],
    key: null
  };

  componentDidMount() {
    const key = this.props.navigation.state.params.key;
    this.getData();
    this.setState({ key });
  }

  getData = async () => {
    const decksData = await AsyncStorage.getItem(DECKS_DATA_KEY);
    this.setState({ decksData: JSON.parse(decksData) });
  };

  render() {
    const { decksData, key } = this.state;

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {decksData !== null &&
          key !== null &&
          decksData[key].questions.map((data, idx) => (
            <View key={idx}>
              <Text style={styles.title}>
                Question {idx + 1}/{decksData[key].questions.length} of {key}
              </Text>
              <Text style={styles.QA}>question : {data.question}</Text>
              <Text style={styles.QA}>answer : {data.answer}</Text>
            </View>
          ))}

        <TouchableOpacity
          style={styles.CorrectButton}
          onPress={() => console.log('Quiz CorrectButton')}>
          <Text style={styles.text}>Correct ?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.IncorrectButton}
          onPress={() => console.log('Quiz IncorrectButton')}>
          <Text style={styles.text}>Incorrect ?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  CorrectButton: {
    backgroundColor: green,
    padding: 10,
    width: 200,
    borderRadius: 5,
    margin: 10
  },
  IncorrectButton: {
    backgroundColor: red,
    padding: 10,
    width: 200,
    borderRadius: 5,
    margin: 10
  },
  text: {
    color: white,
    textAlign: 'center',
    fontSize: 18
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    marginBottom: 20
  },
  QA: {
    fontSize: 20,
    paddingLeft: 50,
    paddingRight: 50
  }
});
