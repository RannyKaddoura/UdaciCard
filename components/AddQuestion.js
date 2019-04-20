import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';

export default class AddDeck extends React.Component {
  state = {
    questiontype: {
      demo: {
        title: 'Demo',
        questions: [{
          question: 'What is the question',
          answer: 'What is the answer'
        }]
      }
    }
  };

  onChangeText = (text, key) => {
    const question = {}
    formatQuestion(question)
  };

  formatQuestion = ({ title, question, answer }) => {
    return {
      id: generateUID(),
      timestamp: Date.now(),
      title,
      questions: [{
        question,
        answer,
      }]
    }
  }

  createQuestion = () => {
    this.props.navigation.navigate('Details');
  };

  render() {
    const { questiontype } = this.state;

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>What is the title of your new Deck ???</Text>

        <TextInput
          style={{ height: 40 }}
          placeholder="Type here the question!"
          onChangeText={text => this.onChangeText({ text })}
        />

        <TextInput
          style={{ height: 40 }}
          placeholder="Type here the answer!"
          onChangeText={text => this.onChangeText({ text })}
        />

        <Text>title : 
          {questiontype.demo.title}
        </Text>

        <Text>question : 
          {questiontype.demo.questions.map(data => (
            data.question
          ))}
        </Text>

        <Text>answer : 
          {questiontype.demo.questions.map(data => (
            data.answer
          ))}
        </Text>

        <Button title="Creat New Question" onPress={this.createQuestion} />
      </View>
    );
  }
}
