import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"

export class CurrentOrder extends Component{
    constructor(){
        super();
        this.state = {
            test: "CurrentOrder"
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>{this.state.test}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})
