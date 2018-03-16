import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';

export default class Component1 extends Component {
    render() {
        return (
            <View>
            <Text style={styles.text}>{this.props.name}</Text>
            <Button 
                title='Press Me!' 
                onPress={() => Alert.alert('button press!')}
                color='white'
                />
            </View>
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