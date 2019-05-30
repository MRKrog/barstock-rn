import React, { Component } from "react";
import Swiper from "react-native-swiper";
import AccountInfo from "../AccountInfo/AccountInfo";
import BarInventory from "../BarInventory/BarInventory";
import { ImageBackground } from "react-native";
import PastOrders from "../PastOrders/PastOrders";
import { connect } from "react-redux";
import styles from "./AccountContainer.style";

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

export const mapStateToProps = state => ({
  swiperIndex: state.swiperIndex
})

export default connect(mapStateToProps)(AccountContainer)
