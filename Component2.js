import React, { Component } from 'react';
import { Image, TextInput, View, Text } from 'react-native';

export default class Component2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            picture: {
                uri: 'https://www.merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/puppy-3143-ad4140d8f6055cda2cd8956d4af37ea9@1x.jpg'
            },
            text: 'hello'
        }
    }


    render() {

        return (
            <View>
                <Image source={this.state.picture} style={{width: 300, height: 250, marginTop: 70}}/>
                <TextInput
                    style={{height: 40, backgroundColor: 'white'}}
                    placeholder='Change the image'
                    onChangeText={(text) => this.setState({text})}
                />
                <Text>{this.state.text}</Text>
            </View>
        )

    }
}