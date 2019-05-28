import React, { Component } from "react";
import { View, Image, Text, StyleSheet, ImageBackground, TextInput, Button, TouchableOpacity, StatusBar } from "react-native";
import styles from './LoginScreen.style';
import { fetchOptions } from "../../utility/fetchOptions"
import { Input } from 'react-native-elements';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      phone_number: '',
      address: '',
      distributor_code: '',
      rep: ''
    };
  }

  goBackBtn = () => {
    this.props.navigation.navigate('Login');
  }

  registerAccount = async () => {
    const url = "https://barstock-backend.herokuapp.com/api/v1/businesses/register";
    const { name, email, password, phone_number, address, distributor_code, rep } = this.state;
    const newAccount = {
      name,
      email,
      password,
      phone_number,
      address,
      distributor_code,
      rep
    }

    const options = fetchOptions("POST", newAccount)
    try {
      const response = await fetch(url, options)
      const data = await response.json()
      console.log(data);
      return data
    } catch (error) {
      console.log(error);
    }
    this.props.navigation.navigate('MainApp');
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../../assets/beer.jpg')} style={styles.backgroundImage}>

          <View style={styles.loginContainer}>

            <View style={styles.form}>
              <Image resizeMode="contain" source={require('../../images/BarStock_Logo.png')} style={[styles.logo, {width: 230, height: 50}]} />
              <TextInput
                  onChangeText={(text) => { this.setState({ name: text })}}
                  value={`${this.state.name}`}
                  style={styles.searchInput}
                  placeholder="Business Name"
                  placeholderTextColor = "#cccccc"
              />
              <TextInput
                  onChangeText={(text) => { this.setState({ email: text })}}
                  value={`${this.state.email}`}
                  style={styles.searchInput}
                  placeholder="Email Address"
                  placeholderTextColor = "#cccccc"
              />
              <TextInput
                  onChangeText={(text) => { this.setState({ phone_number: text })}}
                  value={`${this.state.phone_number}`}
                  style={styles.searchInput}
                  placeholder="Phone Number"
                  placeholderTextColor = "#cccccc"
              />
              <TextInput
                  onChangeText={(text) => { this.setState({ address: text })}}
                  value={`${this.state.address}`}
                  style={styles.searchInput}
                  placeholder="Address"
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
              <TextInput
                  placeholder="Distributor Code"
                  onChangeText={(text) => { this.setState({ distributor_code: text })}}
                  value={`${this.state.distributor_code}`}
                  style={styles.searchInput}
                  placeholderTextColor = "#cccccc"
              />
              <TextInput
                  placeholder="Representative Name"
                  onChangeText={(text) => { this.setState({ rep: text })}}
                  value={`${this.state.rep}`}
                  style={styles.searchInput}
                  placeholderTextColor = "#cccccc"
              />
            </View>

            <View style={styles.submitContainer}>
              <TouchableOpacity
                style={styles.loginScreenButton}
                onPress={this.registerAccount}
                underlayColor='#fff'>
                <Text style={styles.loginText}>Create New Account</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <TouchableOpacity
              style={styles.goBackBtn}
              onPress={this.goBackBtn}
              underlayColor='#fff'>
              <Text style={styles.setUpText}>Go Back</Text>
            </TouchableOpacity>
          </View>

        </ImageBackground>
      </View>
    );
  }
}

export default LoginScreen
