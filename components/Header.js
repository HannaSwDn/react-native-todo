import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{ props.title }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffff7f',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#202020',
    fontSize: 28,
    fontWeight: '900'
  }
})

export default Header;
