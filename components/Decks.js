import React from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  AsyncStorage
} from 'react-native';
import { lightGray, white, gray } from '../Colors';

export default class Decks extends React.Component {
  state = {
    decksData: null
  };
  componentDidMount() {
    this.getData()
  }

  getData = async () => {
      const decksData = await AsyncStorage.getItem('Data:Deckslist');
      this.setState({ decksData: JSON.parse(decksData) })
  };

  render() {
    const { decksData } = this.state;

    console.log('decksData state: ', decksData);
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
    backgroundColor: white
  },
  fullWidthButton: {
    backgroundColor: white,
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
    borderColor: lightGray,
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
