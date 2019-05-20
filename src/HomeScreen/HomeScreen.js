import React, { Component } from "react";
import {
  View,
  Image,
  Button,
  Text
} from "react-native";


class HomeScreen extends Component {

  openMenu = () => {
    // this.props.navigation.toggleDrawer();
  }
  // logout = async () => {
  //   await AsyncStorage.clear();
  //   this.props.navigation.navigate('Login');
  // }

  render() {
    return (
      <View style={{flex: 1, justifyContent: "center"}}>
        <View style={{padding: 20}}>
          <Button
            onPress={this.openMenu}
            title="Open Menu"
          />
        </View>
        <View style={{padding: 20}}>
          <Button
            title="Logout"
          />
        </View>
      </View>
    );
  }
}

export default HomeScreen
