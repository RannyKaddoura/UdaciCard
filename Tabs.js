import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Decks from './components/Decks';
import Deck from './components/Deck';
import AddDeck from './components/AddDeck';
import AddQuestion from './components/AddQuestion';
import Errors from './components/error';
import Quiz from './components/Quiz';
import { red } from './Variables';

const HomeStack = createStackNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: () => ({
      title: `Decks List`,
      headerBackTitle: null,
      headerTitleStyle: { color: red, paddingLeft: 145 }
    })
  },
  Deck: {
    screen: Deck,
    navigationOptions: () => ({
      title: `Deck`,
      headerBackTitle: null
    })
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: () => ({
      title: `Quiz`,
      headerBackTitle: null
    })
  },
  AddQuestion: {
    screen: AddQuestion,
    navigationOptions: () => ({
      title: `AddQuestion`,
      headerBackTitle: null
    })
  },
  Errors: {
    screen: Errors
  },
  AddDeck: AddDeck
});

export default createAppContainer(
  createBottomTabNavigator(
    {
      Decks: HomeStack,
      AddDeck: AddDeck
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'Decks') {
            iconName = `ios-albums`;
          } else if (routeName === 'AddDeck') {
            iconName = `ios-add`;
          } else if (routeName === 'Settings') {
            iconName = `ios-options`;
          }

          return <IconComponent name={iconName} size={25} color={tintColor} />;
        }
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray'
      }
    }
  )
);
