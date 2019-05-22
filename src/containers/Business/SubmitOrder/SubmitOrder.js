import React, { Component } from "react"
import { View, Text, StyleSheet, Dimensions, ImageBackground } from "react-native"

export default class SubmitOrder extends Component{
    constructor(){
        super();
        this.state = {
            test: "SubmitOrder"
        }
    }

    render(){
        return(
          <ImageBackground source={require('../../../../assets/bg.png')} style={styles.backgroundImage}>
              <View>
                  <Text>{this.state.test}</Text>
              </View>
            </ImageBackground>
        )
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