import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Component1 from './Component1';
import Component2 from './Component2';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome!</Text>
        <Component1 name='Megan'/>
        <Component2/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#253452',
    alignItems: 'center',
    paddingTop: 140,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  }
});
