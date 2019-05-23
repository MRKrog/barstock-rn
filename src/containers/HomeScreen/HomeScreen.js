import React, { Component } from "react";
import {
  View,
  Image,
  Button,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions
} from "react-native";
import { Avatar } from 'react-native-elements';

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
  }

  logout = () => {
    this.props.navigation.navigate('Login');
  }

  getData = async () => {
    const url = "https://barstock-backend.herokuapp.com/api/v1/items?api_key=0yWwUm5CZ8CGR8MhT7FL9w";
    try {
      const response = await fetch(url)
      const allData = await response.json()
      this.props.setAlcohol(allData.data)
      console.log(this.props);
      this.props.setLoading(false)
    } catch (error) {
      console.log(error);
    }
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
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
