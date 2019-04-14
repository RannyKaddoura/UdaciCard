import React from 'react';
import { Button, Text, View } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DeckList from './components/DeckList';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>You are in HomeScreen!</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>You are in Details!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Go to Details"
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
  Settings: SettingsScreen,
  Details: DetailsScreen
});

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: HomeStack,
      DeckList: DeckList,
      Settings: SettingsStack
    },
    {
      /* Other configuration remains unchanged */
    }
  )
);
