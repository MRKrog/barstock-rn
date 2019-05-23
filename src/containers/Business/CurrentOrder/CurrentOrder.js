import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView, TouchableHighlight } from "react-native";
import { connect } from "react-redux"
import * as actions from "../../../redux/actions";
import styles from "./CurrentOrder.style";
import Icon from 'react-native-vector-icons/FontAwesome';
import Swipeable from 'react-native-swipeable';

export class CurrentOrder extends Component {

  submitOrder = () => {
    let combinedOrder = this.createOrderDisplay()
    this.props.updateOrder(combinedOrder);
    this.props.navigation.navigate("SubmitOrder")
  }

  createOrderDisplay = () => {
    let quantityAmount = this.combineQuantities();
    let combinedOrder = this.createOrder(quantityAmount);
    return combinedOrder
  }

  combineQuantities = () => {
    let quantityAmount = this.props.cart.reduce((acc, el) => {
      if (!acc[el.name]) acc[el.name] = 0
      acc[el.name]++;
      return acc;
    }, {});
    return quantityAmount;
  }

  createOrder = (quantityAmount) => {
    let combinedCart = Object.keys(quantityAmount).map((item, index) => {
      let itemInfo = this.props.cart.find(cartItem => cartItem.name === item);
      let type = this.findType(itemInfo.alc_type, quantityAmount[item])
      return {
        id: itemInfo.id,
        name: itemInfo.name,
        total: itemInfo.price * quantityAmount[item],
        ounces: itemInfo.ounces * quantityAmount[item],
        alc_category: itemInfo.alc_category,
        alc_type: itemInfo.alc_type,
        thumbnail: itemInfo.thumbnail,
        unit: itemInfo.unit,
        quantity: quantityAmount[item],
        type: type,
        profits: 10
      }
    })
    return combinedCart;
  }

  findType = (type, quantity) => {
    let liquorType;
    switch (type) {
      case "beer":
        liquorType = quantity <= 1 ? "Case" : "Cases"
        break;
      case "liquor":
        liquorType = quantity <= 1 ? "Btl" : "Btls"
        break;
      default:
        liquorType = "Quantity"
    }
    return liquorType
  }

  generateCost = (cartItems) => {
    let totalCost = cartItems.reduce((acc, item) => {
      acc += item.total
      return acc
    }, 0)
    return totalCost
  }

  generateReturn = (cartItems) => {
    let totalReturn = cartItems.reduce((acc, item) => {
      acc += item.profits
      return acc
    }, 0)
    return totalReturn
  }

  removeFromCart = (itemId) => {
    this.props.removeCartGroup(itemId)
  }

  render() {
    let cartDisplay;
    let allItems = this.createOrderDisplay()
    let totalCost = this.generateCost(allItems)
    let totalReturn = this.generateReturn(allItems)

    cartDisplay = allItems.map(item => {
      let marginColor = styles.marginGreen
      let deleteBtn = [
        <TouchableHighlight style={styles.rightSwipeItem} key={item.name}>
          <Icon name='times' color='#fff' size={30} />
        </TouchableHighlight>,
      ];
      return(
        <Swipeable key={item.name}
                   rightContent={deleteBtn}
                   rightButtonWidth={45}
                   rightActionActivationDistance={80}
                   onRightActionRelease={() => this.removeFromCart(item.id)}>
          <View style={[styles.item_info, marginColor]} id={item.id}>
            <Text style={styles.item_name} numberOfLines={1}>{item.name}</Text>
            <Text style={styles.item_unit}>{item.quantity} x {item.type}</Text>
            <Text style={styles.item_profit}>${item.profits}</Text>
            <Text style={styles.item_cost}>${item.total.toFixed(2)}</Text>
          </View>
        </Swipeable>
      )
    })

    return(
      <View style={styles.cart_container}>
        <View style={styles.cart_titleContainer}>
          <Text style={styles.cart_title}>Current Order</Text>
        </View>
        <View style={styles.cart_items}>
          <View style={styles.cart_header}>
            <Text style={styles.cart_rowOne}>Name</Text>
            <Text style={styles.cart_rowTwo}>Quantity</Text>
            <Text style={styles.cart_rowThree}>Profit</Text>
            <Text style={styles.cart_rowFour}>Cost</Text>
            <Text style={styles.cart_rowFive}></Text>
          </View>
          <ScrollView>
            { cartDisplay }
          </ScrollView>
        </View>
        <View style={styles.cart_priceContainer}>
          <View style={styles.cart_potential}>
            <Text style={styles.cart_potentialText}>Potential Return</Text>
            <Text style={styles.cart_potentialText}>${totalReturn.toFixed(2)}</Text>
          </View>
          <View style={styles.cart_price}>
            <Text style={styles.cart_priceText}>Total Cost</Text>
            <Text style={styles.cart_priceText}>${totalCost.toFixed(2)}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.cart_checkoutButton} onPress={() => this.submitOrder()}>
          <Text style={styles.cart_checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export const mapStateToProps = (state) => ({
  cart: state.cart,
  order: state.order
})

export const mapDispatchToProps = (dispatch) => ({
  removeCartGroup: id => dispatch(actions.removeCartGroup(id)),
  updateOrder: data => dispatch(actions.updateOrder(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(CurrentOrder)
