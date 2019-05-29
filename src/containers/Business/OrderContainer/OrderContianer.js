import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import  CurrentOrder from "../CurrentOrder/CurrentOrder";
import  DistributorInventory from "../DistributorInventory/DistributorInventory";
import { connect } from 'react-redux';
import * as actions from "../../../redux/actions";
import Loading from '../../../components/Loading/Loading';

class OrderContainer extends Component{
  constructor() {
    super();
    this.state = {
      test: "test"
    }
  }

  render(){
    return(
      <Swiper index={this.props.swiperIndex} loop={false}>
        <DistributorInventory />
        <CurrentOrder navigation={this.props.navigation} />
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})

export const mapStateToProps = (state) => ({
  alcohol: state.alcohol,
  loading: state.loading,
  swiperIndex: state.swiperIndex
})

export const mapDispatchToProps = (dispatch) => ({
  setAlcohol: alcohol => dispatch(actions.setAlcohol(alcohol)),
  setLoading: status => dispatch(actions.setLoading(status)),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer)
