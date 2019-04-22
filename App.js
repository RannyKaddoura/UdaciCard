import React from 'react';
import TabNavigator from './Tabs';
import { DECKS_DATA_KEY } from './Variables';
import { AsyncStorage } from 'react-native';
import { setLocalNotification } from './util/Notifications';

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
    AsyncStorage.setItem(DECKS_DATA_KEY, JSON.stringify(decksData));
    setLocalNotification();
  }

  render() {
    return <TabNavigator />;
  }
}
