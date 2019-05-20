import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"

export class DistributorInventory extends Component{
    constructor(){
        super();
        this.state = {
            test: "DistributorInventory"
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
