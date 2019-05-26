import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import { StackActions, NavigationActions } from 'react-navigation';
import Footer from "../../../components/Footer/Footer";
import * as actions from "../../../redux/actions";
import styles from './SubmitOrder.style';
import { connect } from "react-redux";
import { generateCost } from "../../../utility/liquorCleaner.js"

export class SubmitOrder extends Component{

  goBack = () => {
    this.props.navigation.navigate("Order")
  }

  submitOrder = () => {
    this.resetOrder()
  }

  resetOrder = () => {
    let resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Order' })],
    });
    this.props.emptyCart()
    this.props.navigation.dispatch(resetAction);
  }

  render(){
    const { cart } = this.props;
    let cartDisplay;

    let totalCost = generateCost(cart)
    cartDisplay = cart.map(item => {
      let marginColor = styles.marginGreen
      return(
        <View key={item.name} style={styles.item_info} id={item.id}>
          <Text style={styles.item_name} numberOfLines={1}>{item.name}</Text>
          <Text style={styles.item_unit}>x{item.count}</Text>
          <Text style={styles.item_cost}>${(item.price * item.count).toFixed(2)}</Text>
        </View>
      )
    })

    return(
      <ImageBackground source={require('../../../../assets/bg.png')} style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={styles.submit_container}>
            <View style={styles.cart_titleContainer}>
              <Text style={styles.cart_title}>Confirmation</Text>
            </View>
            <View style={styles.cart_items}>
              <View style={styles.cart_header}>
                <Text style={styles.cart_rowOne}>Name</Text>
                <Text style={styles.cart_rowTwo}>Quantity</Text>
                <Text style={styles.cart_rowThree}>Price</Text>
              </View>
              <ScrollView>
                { cartDisplay }
              </ScrollView>
            </View>
            <View style={styles.cart_priceContainer}>
              <View style={styles.cart_price}>
                <Text style={styles.cart_priceText}>
                  Total Cost ${totalCost.toFixed(2)}
                </Text>
              </View>
            </View>
            <View style={styles.submitBtn_container}>
              <TouchableOpacity style={styles.cart_backButton} onPress={this.goBack}>
                <Text style={styles.cart_checkoutText}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cart_checkoutButton} onPress={() => this.submitOrder()}>
                <Text style={styles.cart_checkoutText}>Submit Order</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Footer />
        </View>
      </ImageBackground>
    )
  }
}

export const mapStateToProps = (state) => ({
  cart: state.cart,
  order: state.order
})

export const mapDispatchToProps = (dispatch) => ({
  addToCart: alcohol => dispatch(actions.addToCart(alcohol)),
  removeFromCart: alcohol => dispatch(actions.removeFromCart(alcohol)),
  emptyCart: data => dispatch(actions.emptyCart(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SubmitOrder)
