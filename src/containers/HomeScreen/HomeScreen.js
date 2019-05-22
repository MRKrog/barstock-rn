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

import LogoTitle from '../../components/LogoTitle/LogoTitle';
import Icon from 'react-native-vector-icons/FontAwesome';
import OrderContainer from "../Business/OrderContainer/OrderContianer";

import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

class HomeScreen extends Component {

  componentDidMount() {
    this.props.navigation.setParams({ openMenu: this._openMenu });
  }
  
  logout = () => {
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={styles.MainDisplay}>
        <ImageBackground source={require('../../../assets/bg.png')} style={styles.backgroundImage}>
          <OrderContainer navigation={this.props.navigation}/>
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

export default HomeScreen
