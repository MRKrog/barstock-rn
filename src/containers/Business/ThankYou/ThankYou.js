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
          <Text style={styles.textTitle}>Your Order Has Been Placed!</Text>
          <TouchableOpacity onPress={this.goHome} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
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
  textTitle: {
    color: "#ffffff",
    fontSize: 30,
    fontFamily: "Lato"
  },
  buttonContainer: {
    backgroundColor: "#EEAD0C",

    borderRadius: 5,
    marginVertical: 20,
    marginRight: 15,
    marginLeft: 15,
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowColor: '#231f20',
    shadowOffset: { height: 1, width: 0 }
  },
  buttonText: {
    fontSize: 22,
    textTransform: "uppercase",
    color: "#ffffff",
    fontFamily: 'abel',
    paddingVertical: 10,
  }
})

export default ThankYou
