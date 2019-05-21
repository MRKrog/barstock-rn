import React, { Component } from 'react';
import { Button, Image, View, Text } from 'react-native';

class LogoTitle extends Component {
  render() {
    return (
      <Image
        source={require('../../images/BarStock_Logo.png')}
        style={{
          width: 150,
          height: 50,
        }}
      />
    );
  }
}

export default LogoTitle
