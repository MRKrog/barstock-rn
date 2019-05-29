import React, { Component } from "react";
import { View, Image, Button, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


class ThankYou extends Component {

  goHome = () => {
    this.props.navigation.navigate("Order")
  }

  render() {
    return (
      <View style={styles.MainDisplay}>
        <ImageBackground source={require('../../../../assets/order_bg.jpg')} style={styles.backgroundImage}>
          <Text>Your Order Has Been Placed!</Text>
          <TouchableOpacity onPress={this.goHome}><Text>Home</Text></TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

const styles = StyleSheet.create({
  MainDisplay: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },

  backgroundImage: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default ThankYou
