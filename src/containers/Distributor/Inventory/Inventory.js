import React, { Component } from "react"
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity, ImageBackground } from "react-native";
import styles from "./Inventory.style";
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';
import DistributorInventory from "../DistributorInventory/DistributorInventory"

class Inventory extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {
    this.props.setLoading(true)
    this.getData()
  }

  getData = async () => {
    const url = "https://barstock-backend.herokuapp.com/api/v1/items?api_key=0yWwUm5CZ8CGR8MhT7FL9w";
    try {
      const response = await fetch(url)
      const allData = await response.json()
      this.props.setAlcohol(allData.data)
      this.props.setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  render() {

    return (
      <View style={styles.MainDisplay}>
        <ImageBackground source={require('../../../../assets/bg.png')} style={styles.backgroundImage}>
          <DistributorInventory />
        </ImageBackground>
      </View>
    )
  }
}

export const mapStateToProps = (state) => ({
  alcohol: state.alcohol,
  loading: state.loading,
})

export const mapDispatchToProps = (dispatch) => ({
  setAlcohol: alcohol => dispatch(actions.setAlcohol(alcohol)),
  setLoading: status => dispatch(actions.setLoading(status)),
  setBusinessItems: businessItems => dispatch(actions.setBusinessItems(businessItems))
})

export default connect(mapStateToProps, mapDispatchToProps)(Inventory)
