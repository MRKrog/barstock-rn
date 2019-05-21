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
                <AlchoholCategory info={cat} key={cat.name}/>
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
        flex: 1,
        alignSelf: "center",
        shadowOpacity: 0.3,
        shadowRadius: 1,
        shadowColor: '#231f20',
        shadowOffset: { height: 2, width: 0 },
        marginTop: 50,
        width: Dimensions.get("window").width * .95,
        height: Dimensions.get("window").height,
    },
    titleContainer: {
        borderRadius: 5,
        backgroundColor: "#2c4969",
        padding: 10,
    },
    title: {
        fontSize: 22,
        textTransform: "uppercase",
        color: "#ffffff",
        textAlign: "center",
        fontFamily: 'abel'
    },
    inventory: {
        flexDirection: "column",

        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,

    }
})
