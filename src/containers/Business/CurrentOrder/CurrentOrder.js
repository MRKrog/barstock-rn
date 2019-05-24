import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView, TouchableHighlight } from "react-native";
import { connect } from "react-redux"
import * as actions from "../../../redux/actions";
import styles from "./CurrentOrder.style";
import Icon from 'react-native-vector-icons/FontAwesome';
import Swipeable from 'react-native-swipeable';
import { generateCost, generateReturn } from "../../../utility/liquorCleaner.js"

export class CurrentOrder extends Component {

  submitOrder = () => {
    this.props.navigation.navigate("SubmitOrder")
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
        liquorType = "Qty"
    }
    return liquorType
  }

  getTotalReturn = () => {
    const { businessItems, cart } = this.props;
    let totalReturn = cart.reduce((acc, distItem) => {
      let busItem = businessItems.find(item => item.id === distItem.id)
      let distProdServSize = distItem.ounces;
      let menuProdServSize = busItem.attributes.serving_size;
      let menuPrice = busItem.attributes.price_sold;
      let distCost = distItem.price;
      return (acc +=
        (distProdServSize / menuProdServSize) * menuPrice - distCost);
    }, 0);
    return totalReturn
  }

  getSingleReturn = (distItem) => {
    const { businessItems } = this.props;
    let busItem = businessItems.find(item => item.id === distItem.id)
    let distProdServSize = distItem.ounces;
    let menuProdServSize = busItem.attributes.serving_size;
    let menuPrice = busItem.attributes.price_sold;
    let distCost = distItem.price;
    let singleProfit = ((distProdServSize / menuProdServSize) * menuPrice - distCost);
    return singleProfit
  };

  getRowColor = (num) => {
    let color;
    if(num >= 80) {
      color = styles.marginGreen
    } else {
      color = styles.marginYellow
    }
    console.log(num);
    // switch (num) {
    //   case (num > 79):
    //
    //     break;
    //   case num > 69:
    //     color = styles.marginYellow
    //     break;
    //   default:
    //
    // }
    return color
  }

  removeFromCart = (itemId) => {
    this.props.removeCartGroup(itemId)
  }

  render() {
    const { cart } = this.props

    let cartDisplay;
    let totalCost = generateCost(cart)
    let totalReturn = this.getTotalReturn()

    cartDisplay = cart.map(item => {
      let itemType = this.findType(item.alc_type, item)
      let itemReturn = this.getSingleReturn(item)
      let marginColor = this.getRowColor(itemReturn)
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
            <Text style={styles.item_unit}>{item.count} x {itemType}</Text>
            <Text style={styles.item_profit}>${itemReturn.toFixed(2)}</Text>
            <Text style={styles.item_cost}>${(item.price * item.count).toFixed(2)}</Text>
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
  order: state.order,
  businessItems: state.businessItems
})

export const mapDispatchToProps = (dispatch) => ({
  removeCartGroup: id => dispatch(actions.removeCartGroup(id)),
  updateOrder: data => dispatch(actions.updateOrder(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(CurrentOrder)
