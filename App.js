import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

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

  render() {
    let statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></View>;

    return (
      <View style={styles.container}>
        {statusbar}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue'
  },

  statusbar: {
    backgroundColor: 'yellow',
    height: '3.5%'
  }
});
