import React, { Component } from "react"
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from "react-native"
import AlchoholCategory from "../AlcoholCategory/AlcoholCategory"
import { connect } from "react-redux"
import { setAlchohol } from "../../../redux/actions"

export class DistributorInventory extends Component{

    componentDidMount(){
      this.props.setAlchohol()
    }

    render(){
        const category = this.props.alchohol.map(cat => {

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

export const mapStateToProps = (state) => ({
  alchohol: state.alchohol
})

export const mapDispatchToProps = (dispatch) => ({
  setAlchohol: alchohol => dispatch(setAlchohol(alchohol))
})

export default connect(mapStateToProps, mapDispatchToProps)(DistributorInventory)
const styles = StyleSheet.create({
    container: {
        margin: 20,
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
