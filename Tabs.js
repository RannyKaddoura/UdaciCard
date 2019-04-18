import React, { Component } from 'react';
import { Button, Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DeckList from './components/DeckList';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>You are in HomeScreen!</Text>
      </View>
    );
  }
}

class DetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image resizeMode="center" source={require('./assets/test.jpg')} />
        <Text>You are in Nabile </Text>
      </View>
    );
  }
}

class SettingsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          title="Go to test"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: HomeStack,
      Deck: DeckList,
      Settings: SettingsStack
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'Home') {
            iconName = `ios-home`;
          } else if (routeName === 'Deck') {
            iconName = `ios-albums`;
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

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    overflow: 'visible'
  }
});
