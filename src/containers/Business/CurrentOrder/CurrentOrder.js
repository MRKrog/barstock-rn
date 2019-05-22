import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { connect } from "react-redux"
import styles from "./CurrentOrder.style"

export class CurrentOrder extends Component {
  constructor() {
    super();
    this.state = {
      total_cost: 0,
      potential_returns: 0
    }
  }

  render(){
    const { cart } = this.props;
    // const { total_cost, potential_returns } = this.state;

    let quantityAmount = cart.reduce((acc, el) => {
      console.log(el);
      if (!acc[el.name]) {
        acc[el.name] = 0;
      }
      acc[el.name]++;
      return acc;
    }, {});

    let combinedCart = Object.keys(quantityAmount).map((item, index) => {
      let itemInfo = cart.find(cartItem => cartItem.name === item);
      return {
        id: itemInfo.id,
        name: itemInfo.name,
        total: itemInfo.price * quantityAmount[item],
        ounces: itemInfo.ounces * quantityAmount[item],
        alc_category: itemInfo.alc_category,
        alc_type: itemInfo.alc_type,
        thumbnail: itemInfo.thumbnail,
        unit: itemInfo.unit,
        quantity: quantityAmount[item]
      }
    })

    console.log(combinedCart);

    let displayCart = combinedCart.map(item => {
      return(
        <View key={item.name} style={styles.item_row}>
          <Text>{item.quantity} X</Text>
          <Text>{item.name}</Text>
          <Text>${item.total.toFixed(2)}</Text>
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
            { displayCart }
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
