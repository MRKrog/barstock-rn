import React, { Component } from "react";
import { View, Text } from "react-native";

export default class PassOrder extends Component{
  constructor(){
    super();
    this.state = {
      test: "pass order"
    }
  }

  render(){
    return(
      <View>
        <Text>{this.state.test}</Text>
      </View>
    )
  }
}