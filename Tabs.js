import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Decks from './components/Decks';
import Deck from './components/Deck';
import AddDeck from './components/AddDeck';
import { red } from './Colors';

class DetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image resizeMode="center" source={require('./assets/test.jpg')} />
        <Text>You are in DetailsScreen </Text>
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: () => ({
      title: `Decks List`,
      headerBackTitle: null,
      headerTitleStyle: { color: red, paddingLeft: 145 }
    }),
  },
  Deck: {
    screen: Deck,
    navigationOptions: () => ({
      title: `Deck`,
      headerBackTitle: null
    }),
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
