import React, { Component } from "react";
import {TouchableOpacity, Text, StyleSheet, Dimensions, View, LayoutAnimation} from "react-native";
import { connect } from "react-redux";
import { removeFromCart, addToCart } from "../../../redux/actions"

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
        const alchohol = this.props.info.alchohol.map(alchohol => {
          let count
          const check = this.props.cart.find(alchoholCart => {
            return alchoholCart.id === alchohol.id
          })
          if(check){
            count = check.count
          }else{
            count = 0
          }
          return(
            <View>
              <Text>{alchohol.name}</Text>
              <TouchableOpacity onPress={() => {this.props.removeFromCart(alchohol)}}><Text>-</Text></TouchableOpacity>
              <Text>{count}</Text>
              <TouchableOpacity onPress={() => {this.props.addToCart(alchohol)}}><Text>+</Text></TouchableOpacity>
            </View>
          )
        })
        return(
            <View>
                 <TouchableOpacity onPress={this.changeLayout} style={styles.category}>
                        <Text style={styles.font}>{this.props.info.catName}</Text>
                </TouchableOpacity>
                <View style={{ height: this.state.expanded ? null : 0, overflow: 'hidden' }}>
                    {
                      alchohol
                    }
                </View>
            </View>
        )
    }
}

export const mapStateToProps = (state) => ({
  cart: state.cart
})

export const mapDispatchToProps = (dispatch) => ({
  addToCart: alchohol => dispatch(addToCart(alchohol)),
  removeFromCart: alchohol => dispatch(removeFromCart(alchohol))
})

export default connect(mapStateToProps, mapDispatchToProps)(AlchoholCategory)


const styles = StyleSheet.create({
    category: {
        shadowOpacity: 0.75,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: { height: 4, width: 0 },
        margin: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#11212A",
    },
    font: {
        fontSize: 20,
        fontFamily: "roboto",
        fontWeight: "bold",
        textAlign: "center",
        color: "#ffffff"
    }
})