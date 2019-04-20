import React from 'react';
import TabNavigator from './Tabs';
import { AsyncStorage } from 'react-native'

export default class App extends React.Component {
  state = {
    decksData: {
      React: {
        title: 'React',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
      JavaScript: {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer:
              'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      }
    }
  };
  componentDidMount() {
    const { decksData } = this.state;
    AsyncStorage.setItem('DecksData', JSON.stringify(decksData));
  }

  render() {
    return <TabNavigator />;
  }
}
