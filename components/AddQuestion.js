import React from 'react';
import {
  Text,
  KeyboardAvoidingView,
  Button,
  TextInput,
  AsyncStorage,
  StyleSheet
} from 'react-native';
import { DECKS_DATA_KEY, white } from '../Variables';

export default class AddQuestion extends React.Component {
  state = {
    decksData: null,
    key: null,
    questionValue: '',
    answerValue: ''
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

  onChangeText = (value, name) => {
    if (name === 'question') {
      this.setState({ questionValue: value.text });
    } else {
      this.setState({ answerValue: value.text });
    }
  };

  addQuestion = () => {
    let { questionValue, answerValue, decksData, key } = this.state;
    decksData = {
      ...decksData,
      [key]: {
        ...decksData[key],
        ...decksData[key].questions.push({
          question: questionValue,
          answer: answerValue
        })
      }
    };
    AsyncStorage.setItem(DECKS_DATA_KEY, JSON.stringify(decksData));
  };

  render() {

    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text>Add Your Question Here</Text>

        <TextInput
          style={styles.input}
          placeholder="Type here the question!"
          onChangeText={text => this.onChangeText({ text }, 'question')}
        />

        <Text>Add Your Answer Here</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here the answer!"
          onChangeText={text => this.onChangeText({ text }, 'answer')}
        />

        <Button
          title="Creat New Question"
          onPress={() => {
            this.addQuestion();
            setTimeout(() => {
              this.props.navigation.navigate('Decks', {
                token: '9asjdOIJSIDas'
              });
            }, 1000);
          }}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    margin: 30
  },
  input: {
    marginBottom: 40,
    height: 50,
    width: 300,
    fontSize: 18,
    borderColor: '#c6c7c8'
  }
});
