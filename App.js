import React from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import InputBar from './components/InputBar';
import TodoItem from './components/TodoItem';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todoInput: '',
      todos: [
        { id: 0, title: 'Make todo list', done: true },
        { id: 1, title: 'Eat sill', done: false }
      ],
    }
  }

  addNewToDo() {
    let todos = this.state.todos;

    todos.unshift({
      id: todos.length + 1,
      title: this.state.todoInput,
      done: false
    })

    this.setState({
      todos: todos,
      todoInput: ''
    })
  }

  toggleDone(item) {
    let todos = this.state.todos;

    todos = todos.map((todo) => {
      if (todo.id == item.id) {
        todo.done = !todo.done
      }

      return todo
    })

    this.setState({todos})
  }

  removeTodo(item) {
    let todos = this.state.todos;

    todos = todos.filter((todo) => todo.id !== item.id)

    this.setState({todos})
  }

  render() {
    let statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></View>;

    return (
      <View style={styles.container}>
        {statusbar}

        <Header title="Luc in Sviden" />

        <InputBar 
          addNewToDo={() => this.addNewToDo()}
          textChange={todoInput => this.setState({ todoInput })}
          todoInput={this.state.todoInput}
        />

        <FlatList 
          data={this.state.todos}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return(
              <TodoItem todoItem={item} toggleDone={() => this.toggleDone(item)} removeTodo={() => this.removeTodo(item)} />
            )
          }}
        />
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
