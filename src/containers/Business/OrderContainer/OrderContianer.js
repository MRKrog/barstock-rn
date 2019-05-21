import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import  CurrentOrder from "../CurrentOrder/CurrentOrder";
import  DistributorInventory from "../DistributorInventory/DistributorInventory";

class OrderContainer extends Component{
    constructor(){
        super();
        this.state = {
            test: "test"
        }
    }

    render(){
        return(
            <Swiper index={0} loop={false}>
                <DistributorInventory />
                <CurrentOrder />
            </Swiper>
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

export default OrderContainer
