import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { CurrentOrder } from "../CurrentOrder/CurrentOrder";
import { DistributorInventory } from "../DistributorInventory/DistributorInventory";
import HomeScreen from '../../../HomeScreen2';

export class OrderContainer extends Component{
    constructor(){
        super();
        this.state = {
            test: "test"
        }
    }

    render(){
        return(
            <Swiper index={0}>
                {/* <HomeScreen /> */}
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