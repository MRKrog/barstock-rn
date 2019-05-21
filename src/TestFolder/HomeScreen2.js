import React, { Component } from "react";

import {
  View,
  Image,
  Button,
  Text
} from "react-native";
import { OrderContainer } from "./containers/Business/OrderContainer/OrderContianer"


class HomeScreen extends Component {

  openMenu = () => {
    this.props.navigation.toggleDrawer();
  }
  logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  }

  // <View style={{flex: 1, justifyContent: "center"}}>
  //   <View style={{padding: 20}}>
  //     <Button
  //       onPress={this.openMenu}
  //       title="Open Menu"
  //     />
  //   </View>
  //   <View style={{padding: 20}}>
  //     <Button
  //       onPress={this.logout}
  //       title="Logout"
  //     />
  //   </View>
  // </View>

  render() {
    return (
      <OrderContainer />
    );
  }
}

export default HomeScreen
