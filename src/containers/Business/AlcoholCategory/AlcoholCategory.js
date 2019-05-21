import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions, View, LayoutAnimation } from "react-native";
import styled from 'styled-components';

export class AlchoholCategory extends Component{
    constructor(){
        super();
        this.state ={
            test: "test"
        }
    }

    changeLayout = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        this.setState({ expanded: !this.state.expanded });
      }

    render(){
        return(
            <View>
                 <TouchableOpacity onPress={this.changeLayout} style={styles.category}>
                    <Text style={styles.font}>{this.props.info.name}</Text>
                </TouchableOpacity>
                <View style={{ height: this.state.expanded ? null : 0, overflow: 'hidden' }}>
                    <Text style={styles.text}>{this.props.info.description}</Text>
                </View>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    category: {
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowColor: '#231f20',
        shadowOffset: { height: 4, width: 0 },
        marginTop: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#11212A",
    },
    font: {
        fontSize: 20,
        textTransform: "uppercase",
        fontFamily: 'abel',
        textAlign: "center",
        color: "#ffffff",
        letterSpacing: 1
    }
})
