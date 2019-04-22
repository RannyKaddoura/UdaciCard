import React from 'react';
import { DECKS_DATA_KEY, green, red, white, black } from '../Variables';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

export default class Quiz extends React.Component {
  state = {
    decksData: null,
    questions: [],
    key: null,
    showAnswer: false,
    index: 0,
    done: false,
    score: 0
  };

  componentDidMount() {
    const key = this.props.navigation.state.params.key;
    this.getData(key);
    this.setState({ key });
  }

  getData = async key => {
    const decksData = await AsyncStorage.getItem(DECKS_DATA_KEY);
    this.setState({
      decksData: JSON.parse(decksData),
      questions: JSON.parse(decksData)[key].questions
    });
  };

  nextQuestion = userAnswer => {
    const { index, questions, score } = this.state;
    this.setState({ showAnswer: false });
    if (index + 1 < questions.length) {
      this.setState({ index: index + 1 });
    } else {
      this.setState({ done: true });
    }
    if (userAnswer) {
      this.setState({ score: score + 1 });
    }
  };

  render() {
    const {
      decksData,
      key,
      showAnswer,
      index,
      questions,
      done,
      score
    } = this.state;

    if (done === true) {
      return (
        <View style={styles.scoreContainer}>
          <Text style={styles.input}>
            Your Score is {score} / {questions.length}
          </Text>
          <Text style={styles.input}>
            that mean {(100 * score) / questions.length} % Corrent
          </Text>
          <TouchableOpacity
            style={styles.scorButton}
            onPress={() =>
              this.props.navigation.navigate('Deck', {
                key: key,
                decksData: decksData
              })
            }>
            <Text style={styles.scorText}>Back To Deck</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.scorButton}
            onPress={() =>  this.setState({ done: false, index: 0, score: 0 })}>
            <Text style={styles.scorText}>Do the Quiz again</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        {decksData !== null && (
          <Text style={styles.title}>
            Question {index + 1}/{decksData[key].questions.length} of {key}
          </Text>
        )}

        {questions.length !== 0 && (
          <View>
            <Text style={[styles.QA, { fontWeight: 'bold' }]}>Question : </Text>
            <Text style={styles.QA}>{questions[index].question}</Text>
          </View>
        )}

        {showAnswer === true && questions.length !== 0 && (
          <View>
            <Text style={[styles.QA, { fontWeight: 'bold' }]}>Answer : </Text>
            <Text style={styles.QA}>{questions[index].answer}</Text>
          </View>
        )}

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.CorrectButton}
            onPress={() =>
              this.setState({ showAnswer: !this.state.showAnswer })
            }>
            <Text style={styles.text}>
              {showAnswer === false ? 'Show Answer !!' : 'Hide Answer !!'}{' '}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.CorrectButton}
            onPress={() => this.nextQuestion(questions[index].answer)}>
            <Text style={styles.text}>Correct ?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.IncorrectButton}
            onPress={() => this.nextQuestion()}>
            <Text style={styles.text}>Incorrect ?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  CorrectButton: {
    backgroundColor: green,
    padding: 10,
    width: 200,
    borderRadius: 5,
    margin: 10
  },
  IncorrectButton: {
    backgroundColor: red,
    padding: 10,
    width: 200,
    borderRadius: 5,
    margin: 10
  },
  text: {
    color: white,
    textAlign: 'center',
    fontSize: 18
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    marginBottom: 20
  },
  QA: {
    fontSize: 20,
    paddingLeft: 100,
    paddingRight: 100,
    marginBottom: 20
  },
  buttonsContainer: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center'
  },
  scoreContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: green,
    alignItems: 'center'
  },
  input: {
    marginBottom: 40,
    height: 100,
    width: 300,
    fontSize: 22,
    color: white,
    textAlign: 'center',
    borderColor: '#c6c7c8'
  },
  scorButton: {
    textAlign: 'center',
    backgroundColor: white,
    padding: 10,
    width: 200,
    borderRadius: 5,
    margin: 10,
    fontSize: 22,
    marginTop: 60,
    color: black
  },
  scorText: {
    fontSize: 22,
    textAlign: 'center',
    color: black
  }
});
