import React, { Component } from "react";
import { View, Image, Button, Text, StyleSheet, ImageBackground, Dimensions } from "react-native";
import { Avatar } from 'react-native-elements';
import Footer from '../../components/Footer/Footer';
import Loading from '../../components/Loading/Loading';
import Icon from 'react-native-vector-icons/FontAwesome';
import OrderContainer from "../Business/OrderContainer/OrderContianer";

import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

class HomeScreen extends Component {

  componentDidMount() {
    this.props.navigation.setParams({ openMenu: this._openMenu });
    this.props.setLoading(true)
    this.getData()
    this.getBusinessData()
  }

  logout = () => {
    this.props.navigation.navigate('Login');
  }

  getData = async () => {
    const url = "https://barstock-backend.herokuapp.com/api/v1/items?api_key=0yWwUm5CZ8CGR8MhT7FL9w";
    try {
      const response = await fetch(url)
      const allData = await response.json()
      console.log("Allalcohol", allData);
      this.props.setAlcohol(allData.data)

      this.props.setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  getBusinessData = async  () => {
    // make a thunks folder and transfer the fetch into it
    let response = await fetch("https://barstock-backend.herokuapp.com/api/v1/business_items?api_key=0yWwUm5CZ8CGR8MhT7FL9w")
    let items = await response.json()
    console.log("Business Items", items.data)
    this.props.setBusinessItems(items.data)
  }

  render() {
    return (
      <View style={styles.MainDisplay}>
        <ImageBackground source={require('../../../assets/bg.png')} style={styles.backgroundImage}>
          {
            this.props.alcohol &&
            <OrderContainer navigation={this.props.navigation} />
          }
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

export const mapStateToProps = (state) => ({
  alcohol: state.alcohol,
  loading: state.loading,
})

export const mapDispatchToProps = (dispatch) => ({
  setAlcohol: alcohol => dispatch(actions.setAlcohol(alcohol)),
  setLoading: status => dispatch(actions.setLoading(status)),
  setBusinessItems: businessItems => dispatch(actions.setBusinessItems(businessItems))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
