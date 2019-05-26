import React, { Component } from "react"
import Swiper from "react-native-swiper"
import AccountInfo from "../AccountInfo/AccountInfo"
import BarInventory from "../BarInventory/BarInventory"
import { View, Text, ImageBackground, Dimensions, StyleSheet } from "react-native"
import PastOrders from "../PastOrders/PastOrders";

export default class AccountContainer extends Component{
  render(){
    return(
      <ImageBackground source={require('../../../../assets/bg.png')} style={styles.backgroundImage}>
        <Swiper index={0} loop={false}>
          <AccountInfo />
          <BarInventory />
          <PastOrders />
        </Swiper>
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
