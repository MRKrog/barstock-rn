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
