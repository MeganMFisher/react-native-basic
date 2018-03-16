import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class Component1 extends Component {
    render() {
        return (
            <Text style={styles.text}>{this.props.name}</Text>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'lightblue',
        fontWeight: 'bold',
        fontSize: 20,
    }
})