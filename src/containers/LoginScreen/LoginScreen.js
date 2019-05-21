import React, { Component } from "react";

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar
} from "react-native";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Email' };
  }
  login = () => {
    this.props.navigation.navigate('Home');
  }

  componentDidMount() {
   StatusBar.setHidden(true);
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../../assets/beer.jpg')} style={styles.backgroundImage}>
          <View style={styles.loginContainer}>
            <Image source={require('../../images/BarStock_Logo.png')} />
            <View style={styles.form}>
              <TextInput
                  style={styles.searchInput}
                  placeholder="Email Address"
              />
              <TextInput
                  style={styles.searchInput}
                  placeholder="Password"
              />
            </View>

            <View style={styles.submitContainer}>
              <TouchableOpacity
                style={styles.loginScreenButton}
                onPress={this.login}
                underlayColor='#fff'>
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ImageBackground>
      </View>
    );
  }
}

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: screenWidth,
    height: screenHeight,
    resizeMode: 'stretch',
    justifyContent: 'center',
  },
  loginContainer: {
    flexDirection: 'column',
    height: screenHeight * .5,
    width: screenWidth * .8,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  form: {
    flex: 2,
    paddingHorizontal: 10,
    justifyContent: 'flex-end'
  },
  submitContainer: {
    flex: 2,
    marginTop: 5,
    paddingHorizontal: 10,
  },
  loginScreenButton: {
    padding: 8,
    backgroundColor:'#EEAD0E',
    borderRadius:5,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: '#231f20',
    shadowOffset: { height: 4, width: 0 },
 },

 loginText:{
    color:'#fff',
    textAlign:'center',
    fontSize: 20,
    textTransform: "uppercase",
    fontFamily: 'abel',
 },
 searchInput: {
   marginTop: 5,
   lineHeight: 22,
   fontSize: 20,
   padding: 5,
   marginBottom: 5,
   fontFamily: 'abel',
   backgroundColor: "#fff"
 },
})


export default LoginScreen
