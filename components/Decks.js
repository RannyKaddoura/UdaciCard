import React from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  AsyncStorage,
  Animated
} from 'react-native';
import { DECKS_DATA_KEY, lightGray, white, black } from '../Variables';

export default class Decks extends React.Component {
  state = {
    opacity: new Animated.Value(0),
    width: new Animated.Value(0),
    height: new Animated.Value(0),
    decksData: null,
    token: null
  };
  componentDidMount() {
    const { opacity, width, height } = this.state;
    this.getData();
    Animated.timing(opacity, { toValue: 1, duration: 2000 }).start();
    Animated.spring(width, { toValue: 550, speed: 3 }).start();
    Animated.timing(height, { toValue: 200, speed: 3 }).start();
  }

  getData = async () => {
    const decksData = await AsyncStorage.getItem(DECKS_DATA_KEY);
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
    const { decksData, opacity } = this.state;
    
    return (
      <ScrollView style={styles.container}>
        {decksData !== null &&
          Object.keys(decksData).map((title, idx) => (
            <TouchableOpacity
              key={idx}
              onPress={() =>
                this.props.navigation.navigate('Deck', {
                  key: title,
                  decksData: decksData
                })
              }
              style={styles.fullWidthButton}>
              <Animated.View
                style={[styles.textContainer, { opacity }]}>
                <Text style={styles.text}>Deck Name: {title}</Text>
                <Text style={styles.text}>
                  Cards Number : {decksData[title].questions.length}
                </Text>
              </Animated.View>
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
    fontSize: 20,
    marginBottom: 10
  },
  review: {
    margin: 0,
    flexDirection: 'row'
  }
});
