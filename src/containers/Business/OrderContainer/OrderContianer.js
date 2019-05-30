import React, { Component } from "react";
import Swiper from "react-native-swiper";
import  CurrentOrder from "../CurrentOrder/CurrentOrder";
import  DistributorInventory from "../DistributorInventory/DistributorInventory";
import { connect } from 'react-redux';

class OrderContainer extends Component{
  render(){
    return(
      <Swiper index={this.props.swiperIndex} loop={false}>
        <DistributorInventory />
        <CurrentOrder navigation={this.props.navigation} />
      </Swiper>
    )
  }
}

export const mapStateToProps = (state) => ({
  swiperIndex: state.swiperIndex
})

export default connect(mapStateToProps)(OrderContainer)
