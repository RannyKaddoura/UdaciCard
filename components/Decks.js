import React from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  AsyncStorage
} from 'react-native';
import { lightGray, white, black } from '../Colors';

export default class Decks extends React.Component {
  state = {
    decksData: null,
    token: null
  };
  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const decksData = await AsyncStorage.getItem('Data:Deckslist');
    this.setState({ decksData: JSON.parse(decksData) });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.navigation.state.params.token) {
      setTimeout(() => {
        this.getData();
      }, 1500);
    }
  }

  render() {
    const { decksData } = this.state;
    console.log('Decks decksData', decksData);
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
              <View style={styles.textContainer}>
                <Text style={styles.text}>Deck : {title}</Text>
                <Text style={styles.text}>
                  Cards :{decksData[title].questions.length}
                </Text>
              </View>
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
    backgroundColor: lightGray,
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
    borderColor: black,
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 60,
    width: 300,
    height: 200
  },
  textContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column'
  },
  text: {
    marginTop: 10,
    marginBottom: 10
  },
  review: {
    margin: 0,
    flexDirection: 'row'
  }
});
