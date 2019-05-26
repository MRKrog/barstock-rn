import React, { Component } from "react";
import { View, Image, Text, StyleSheet, ImageBackground, TextInput, Button, TouchableOpacity, StatusBar } from "react-native";
import styles from './LoginScreen.style';
import { fetchOptions } from "../../utility/fetchOptions"
import { Input } from 'react-native-elements';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  checkLoginType = async () => {
    const { email, password } = this.state
    const url = "https://barstock-backend.herokuapp.com/api/v1/login";

    // const busCredentials = {
    //   credential: "michaelryankrog@gmail.com",
    //   password: "password",
    // }
    // const distCredentials = {
    //   credential: "RNDC",
    //   password: "password",
    // }

    const loginCredentials = {
        credential: email,
        password: password,
    }

    const options = fetchOptions("POST", loginCredentials)

    try {
      const response = await fetch(url, options)
      const data = await response.json()
      console.log(data);
      return data
    } catch (error) {
      console.log(error);
    }
  }


  login = async () => {
    // const loginInfo = await this.checkLoginType()
    // let loginType = loginInfo.type
    // let loginAPI = loginInfo.api_key
    //
    // console.log(loginType);
    // console.log(loginAPI);

    // if(loginType === "Business"){
    //   this.props.navigation.navigate('MainApp');
    // } else if (loginType === "Distributor") {
    //   this.props.navigation.navigate('Distributor');
    // }
    this.props.navigation.navigate('MainApp');
  }

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../../assets/beer.jpg')} style={styles.backgroundImage}>

          <View style={styles.loginContainer}>

            <View style={styles.form}>
              <Image source={require('../../images/BarStock_Logo.png')} />
              <TextInput
                  onChangeText={(text) => { this.setState({ email: text })}}
                  value={`${this.state.email}`}
                  style={styles.searchInput}
                  placeholder="Email Address"
                  placeholderTextColor = "#cccccc"
              />
              <TextInput
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={(text) => { this.setState({ password: text })}}
                  value={`${this.state.password}`}
                  style={styles.searchInput}
                  placeholderTextColor = "#cccccc"
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

export default LoginScreen
