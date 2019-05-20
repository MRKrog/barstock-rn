import React, { Component } from "react"
import { View, Text } from "react-native"

export class SubmitOrder extends Component{
    constructor(){
        super();
        this.state = {
            test: "SubmitOrder"
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