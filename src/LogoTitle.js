import React, { Component } from 'react';
import { Button, Image, View, Text } from 'react-native';

class LogoTitle extends Component {
  render() {
    return (
      <Image
        source={require('./images/barStock.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

export default LogoTitle
