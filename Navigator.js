import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { blue, red, darkGray, gray, white } from './Colors';

import Deck from './components/Deck';
import Decks from './components//Decks';
import AddDeck from './components/AddDeck';

const DeckList = StackNavigator(
  {
    Decks: {
      screen: Decks
    },
    Deck: {
      screen: Deck 
    }
  },
  {
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
        height: 45
      }
    }
  }
);

const Navigation = TabNavigator(
  {
    Decks: {
      screen: DeckList
    },
    AddDeck: {
      screen: AddDeck,
    }
  },
  {
    navigationOptions: {
      header: null
    },
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: red,
      inactiveTintColor: darkGray
    }
  }
);

export default Navigation;
