import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import InputBar from './components/InputBar';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todoInput: '',
      todos: [
        { id: 0, title: 'Make todo list', done: false },
        { id: 1, title: 'Eat sill', done: false }
      ],
    }
  }

  addNewToDo() {
    
  }

  render() {
    let statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></View>;

    return (
      <View style={styles.container}>
        {statusbar}

        <Header title="Sweden" />

        <InputBar 
          textChange={todoInput => this.setState({ todoInput })}
          // addNewTodo={() => this.addNewTodo()
        }
        />

        <Text>
          {this.state.todoInput}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6'
  },

  statusbar: {
    backgroundColor: '#add8e6',
    height: '3.5%'
  }
});
