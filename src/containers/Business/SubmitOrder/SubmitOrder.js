import React, { Component } from "react";
import { View, Text, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import { StackActions, NavigationActions } from 'react-navigation';
import Footer from "../../../components/Footer/Footer";
import * as actions from "../../../redux/actions";
import styles from './SubmitOrder.style';
import { connect } from "react-redux";
import { generateCost } from "../../../utility/liquorCleaner.js";
import { fetchOptions } from "../../../utility/fetchOptions"

export class SubmitOrder extends Component{

  goBack = () => {
    this.props.navigation.navigate("Order")
  }

  submitOrder = async (cost) => {
    // const items = this.props.cart.map(item => {
    //   let alcoholInfo = this.props.alcohol.find(alcohol => {
    //     return alcohol.id == item.id
    //   })
    //   return {...item, price: alcoholInfo.attributes.price }
    // })
    // const url = "https://barstock-backend.herokuapp.com/api/v1/orders";
    // const orderToSend = {
    //     api_key: "0yWwUm5CZ8CGR8MhT7FL9w",
    //     total_cost: cost.toFixed(2),
    //     items
    // }
    // const options = fetchOptions("POST", orderToSend)
    //
    // try {
    //   const response = await fetch(url, options)
    //   const data = await response.json()
    //   await this.props.emptyCart()
    //   const updatedData = {
    //     type: "order",
    //     id: data.data.attributes.id,
    //     attributes: { items: items,
    //       created_at: data.data.attributes.created_at,
    //       id: data.data.attributes.id
    //     }
    //   }
    //   this.props.updatePastOrder(updatedData)
    //
    // } catch (error) {
    //   console.log(error);
    // }

    this.props.navigation.navigate("Finish")
  }


  render(){
    const { cart, alcohol } = this.props;
    let cartDisplay;

    let totalCost = generateCost(cart, alcohol)

    cartDisplay = cart.map(item => {
      const alcoholInfo = this.props.alcohol.find(alcohol => item.id == alcohol.id)
      return(
        <View key={item.id} style={styles.item_info} id={item.id}>
          <Text style={styles.item_name} numberOfLines={1}>{alcoholInfo.attributes.name}</Text>
          <Text style={styles.item_unit}>x{item.quantity}</Text>
          <Text style={styles.item_cost}>${(alcoholInfo.attributes.price * item.quantity).toFixed(2)}</Text>
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
              <TouchableOpacity style={styles.cart_checkoutButton} onPress={() => {this.submitOrder(totalCost)}}>
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
  alcohol: state.alcohol,
  order: state.order
})

export const mapDispatchToProps = (dispatch) => ({
  addToCart: alcohol => dispatch(actions.addToCart(alcohol)),
  removeFromCart: alcohol => dispatch(actions.removeFromCart(alcohol)),
  emptyCart: data => dispatch(actions.emptyCart(data)),
  updatePastOrder: order => dispatch(actions.updatePastOrder(order))
})

export default connect(mapStateToProps, mapDispatchToProps)(SubmitOrder)
