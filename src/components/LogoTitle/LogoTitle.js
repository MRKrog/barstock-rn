import React, { Component } from 'react';
import { Image } from 'react-native';

class LogoTitle extends Component {
  render() {
    return (
      <Image
        source={require('../../images/BarStock_Logo.png')}
        style={{width: 100, height: 22}}
      />
    );
  }
}

export default LogoTitle
