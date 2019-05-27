import React, { Component } from 'react';
import { Button, Image, View, Text, StyleSheet } from 'react-native';

class Loading extends Component {
  render() {

    return (
      <View style={styles.container}>
        <Image source={require('../../../assets/loading.gif')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  loadingText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
})

export default Loading
