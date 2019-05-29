import React, { Component } from "react"
import Swiper from "react-native-swiper"
import AccountInfo from "../AccountInfo/AccountInfo"
import BarInventory from "../BarInventory/BarInventory"
import { View, Text, ImageBackground, Dimensions, StyleSheet, LayoutAnimation } from "react-native"
import PastOrders from "../PastOrders/PastOrders";
import { connect } from "react-redux"

export class AccountContainer extends Component{
  render(){
    return(
      <ImageBackground source={require('../../../../assets/bg.png')} style={styles.backgroundImage}>
        <Swiper index={this.props.swiperIndex} loop={false}>
          <AccountInfo />
          <BarInventory />
          <PastOrders navigation={this.props.navigation} />
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

export const mapStateToProps = (state) => ({
  swiperIndex: state.swiperIndex
})

export default connect(mapStateToProps)(AccountContainer)
