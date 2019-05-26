import React, { Component } from "react";
import { View, Image, Text, StyleSheet, ImageBackground, TextInput, Button, TouchableOpacity, StatusBar } from "react-native";
import styles from './LoginScreen.style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  login = () => {
    const { email, password } = this.state;
    // alert('email: '+ email + ' ' + 'password: ' + password);
    this.props.navigation.navigate('MainApp');
  }

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../../assets/beer.jpg')} style={styles.backgroundImage}>

          <Image source={require('../../images/BarStock_Logo.png')} />

          <View style={styles.loginContainer}>

            <View style={styles.form}>
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
