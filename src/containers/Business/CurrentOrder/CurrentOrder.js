import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { connect } from "react-redux"
import styles from "./CurrentOrder.style"

export class CurrentOrder extends Component{
  render(){
    console.log(this.props.cart)
    const cart = this.props.cart.map(alcohol => {
      return(
        <View>
          <Text>{alcohol.count}X{alcohol.name}</Text>
        </View>
        )
      })
    return(
      <View style={styles.cart_container}>
        <View style={styles.cart_titleContainer}>
          <Text style={styles.cart_title}>Current Order</Text>
        </View>
        <View style={styles.cart_items}>
          <ScrollView>
          {
            cart
          }
          </ScrollView>
        </View>
        <View style={styles.cart_priceContainer}>
          <View style={styles.cart_potential}>
            <Text style={styles.cart_potentialText}>Potential Return*</Text>
            <Text style={styles.cart_potentialText}>$9080808</Text>
          </View>
          <View style={styles.cart_price}>
            <Text style={styles.cart_priceText}>Total Cost</Text>
            <Text style={styles.cart_priceText}>$1000</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.cart_checkoutButton} onPress={() => {this.props.navigation.navigate("SubmitOrder")}}>
          <Text style={styles.cart_checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export const mapStateToProps = (state) => ({
  cart: state.cart
})


export default connect(mapStateToProps)(CurrentOrder)