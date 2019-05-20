import React, { Component } from "react"
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from "react-native"
import { AlchoholCategory } from "../AlcoholCategory/AlcoholCategory"

export class DistributorInventory extends Component{
    constructor(){
        super();
        this.state = {
            test: "DistributorInventory",
            array: [{
                name: "beer", 
                description: "hello im am beer"
            },{
                name: "wine", 
                description: "hello im am wine"
            },{
                name: "lager", 
                description: "hello im am lager"
            },{
                name: "juice", 
                description: "hello im am juice"
            }]
        }
    }

    render(){
        const category = this.state.array.map(cat => {
            return(
                <AlchoholCategory info={cat}/>
            )
        })
        return(
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        Alchohol type
                    </Text>
                </View>
                <ScrollView style={styles.inventory}>
                    {
                        category
                    }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 50,
        flex: 1,
        shadowOpacity: 0.75,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: { height: 4, width: 0 },
        alignItems: "center",
        justifyContent: "center"
    },
    inventory: {
        flex: 1,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        width: Dimensions.get("window").width * 0.8
    },
    titleContainer: {
        borderRadius: 5,
        padding: 10,
        width: Dimensions.get("window").width * 0.8,
        backgroundColor: "#C4C4C4"
    },
    title: {
        fontSize: 20,
        color: "#ffffff",
        textAlign: "center"
    }
})
