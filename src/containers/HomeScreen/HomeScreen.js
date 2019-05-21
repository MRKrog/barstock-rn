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

import LogoTitle from '../../components/LogoTitle/LogoTitle';
import Icon from 'react-native-vector-icons/FontAwesome';
import OrderContainer from "../Business/OrderContainer/OrderContianer";

import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

class HomeScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: <LogoTitle />,
      headerLeft: (
        <Icon.Button
          onPress={params.openMenu}
          name="bars"
          size={30}
          backgroundColor="#11212a"
          color="#fff"
        />
      ),
      headerRight: (
        <Button title="+1" color="#fff" />
      ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ openMenu: this._openMenu });
  }

  _openMenu = () => {
    this.props.navigation.toggleDrawer();
  }

  logout = () => {
    // await AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={styles.MainDisplay}>
        <ImageBackground source={require('../../../assets/bg.png')} style={styles.backgroundImage}>
          <OrderContainer />
        </ImageBackground>
      </View>
    );
  }
}

const screenWith = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height


const styles = StyleSheet.create({
  MainDisplay: {
    flex: 1,
    width: screenWith,
    height: screenHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },

  backgroundImage: {
    flex: 1,
    width: screenWith,
    height: screenHeight,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default HomeScreen
