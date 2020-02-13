import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const InputBar = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} onChangeText={(todoInput => props.textChange(todoInput))} value={props.todoInput} />
      <TouchableOpacity style={styles.addButton} onPress={props.addNewToDo}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowOffset: { width: 0, height: 3 },
    shadowColor: '#171717',
    shadowOpacity: .1
  },
  input: {
    backgroundColor: '#ffff7f',
    flex: 1,
    fontSize: 18,
    height: 40,
    padding: 4,
    margin: 8
  },
  addButton: {
    backgroundColor: '#ffff7f',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
    padding: 4,
    margin: 8,
    marginLeft: 0
  },
  addButtonText: {
    color: '#202020',
    fontSize: 24,
    fontWeight: '700'
  }
})

export default InputBar;
