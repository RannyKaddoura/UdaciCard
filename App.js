import React from 'react';
import TabNavigator from './Tabs';
import { lightGray, red } from './Colors';
import { AsyncStorage, StatusBar, View } from 'react-native';

export default class App extends React.Component {
  componentDidMount() {
    const decksData = {
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
    };
    AsyncStorage.setItem('Data:Deckslist', JSON.stringify(decksData));
  }

  render() {
    return <TabNavigator />;
  }
}