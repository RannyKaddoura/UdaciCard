import React from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  AsyncStorage
} from 'react-native';

export default class Decks extends React.Component {
  state = {
    decksData: null
  };
  componentDidMount() {
    const decksData = AsyncStorage.getItem('DecksData');
    this.setState({ decksData });
  }

  render() {
    const { decksData } = this.state;
    return (
      <ScrollView style={styles.container}>
        {decksData !== null &&
          Object.keys(decksData).map((title, idx) => (
            <TouchableOpacity
              key={idx}
              onPress={() =>
                this.props.navigation.navigate('Deck', {
                  title: title
                })
              }
              style={styles.fullWidthButton}>
              <Text>{title}</Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  fullWidthButton: {
    backgroundColor: '#c6c7c8',
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 60,
    width: 300,
    height: 200
  },
  review: {
    margin: 0,
    flexDirection: 'row'
  }
});
