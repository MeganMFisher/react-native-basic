import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Component2 extends Component {
    render() {
        let pic = {
            uri: 'https://www.merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/puppy-3143-ad4140d8f6055cda2cd8956d4af37ea9@1x.jpg'
        };

        return (
            <Image source={pic} style={{width: 300, height: 250, marginTop: 70}}/>
        )
    }
}