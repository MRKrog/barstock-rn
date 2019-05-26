import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView, TouchableHighlight } from "react-native";
import { connect } from "react-redux"
import * as actions from "../../../redux/actions";
import styles from "./CurrentOrder.style";
import Icon from 'react-native-vector-icons/FontAwesome';
import Swipeout from 'react-native-swipeout';
import { generateCost, generateReturn } from "../../../utility/liquorCleaner.js"
import Footer from "../../../components/Footer/Footer";
import AlcoholModal from "../AlcoholModal/AlcoholModal";


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
      console.log("this is the inisede of the find", busItem)
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
    let distProdServSize = distItem.ounces * distItem.count;
    let menuProdServSize = busItem.attributes.serving_size;
    let menuPrice = busItem.attributes.price_sold;
    let distCost = distItem.price * distItem.count;
    let singleProfit = ((distProdServSize / menuProdServSize) * menuPrice - distCost);
    return singleProfit
  };

  getSingleMargin = (distItem) => {
    const { businessItems, cart, alcohol } = this.props;
    let busItem = businessItems.find(item => item.id === distItem.id)
    let distProdServSize = distItem.ounces;
    let menuProdServSize = busItem.attributes.serving_size;
    let menuPrice = busItem.attributes.price_sold;
    let distCost = distItem.price;
    let singleMargin = (100 - ((distCost / ((distProdServSize / menuProdServSize) * menuPrice)) * 100))
    return singleMargin
  };

  getRowColor = (num) => {
    console.log(num);
    let color;
    if(num >= 80) {
      color = styles.marginGreen
    } else if(num >= 70) {
      color = styles.marginYellow
    } else {
      color = styles.marginRed
    }
    return color
  }

  removeFromCart = (itemId) => {
    this.props.removeCartGroup(itemId)
  }

  toggleModal = (itemId) => {
    const { businessItems } = this.props;
    let busItem = businessItems.find(item => item.id == itemId)
    this.props.setAlcoholInfo(busItem)
    this.props.toggleModalDisplay(true)
  }

  render() {
    console.log("this is the cart", this.props.cart)
    console.log("this is buss", this.props.businessItems)
    let cartDisplay;
    let disabledStatus;
    let disabledStyles;
    if(this.props.cart.length > 0){
      disabledStatus = false
      disabledStyles = styles.textvalid
    } else {
      disabledStatus = true
      disabledStyles = styles.textinvalid
    }

    let totalCost = generateCost(this.props.cart)
    let totalReturn = this.getTotalReturn()

    cartDisplay = this.props.cart.map(item => {
      let itemType = this.findType(item.alc_type, item)
      let itemProfit = this.getSingleReturn(item)
      let itemMargin = this.getSingleMargin(item)
      let marginColor = this.getRowColor(itemMargin)
      let swipeoutBtns = [{
          text: (<Icon name='edit' color='#B2BCC8' size={20} />),
          backgroundColor: "#2C4969",
          underlayColor: "#2c4969",
          onPress: () => { this.toggleModal(item.id) }
        }, {
          text: (<Icon name='trash' color='#F1BFBD' size={20} />),
          backgroundColor: '#DB504A',
          underlayColor: "#DB504A",
          onPress: () => { this.removeFromCart(item.id) }
        }
      ]
      return(
        <Swipeout key={item.name} right={swipeoutBtns} autoClose={true} buttonWidth={50} sensitivity={60}>
          <View style={[styles.item_info, marginColor, styles.listItem]} id={item.id}>
            <Text style={styles.item_name} numberOfLines={1}>{item.name}</Text>
            <Text style={styles.item_unit}>{item.count} x {itemType}</Text>
            <Text style={styles.item_profit}>${itemProfit.toFixed(2)}</Text>
            <Text style={styles.item_cost}>${(item.price * item.count).toFixed(2)}</Text>
          </View>
        </Swipeout>
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
          { this.props.modalDisplay && <AlcoholModal/> }
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
        <TouchableOpacity style={[styles.cart_checkoutButton, disabledStyles]}
                          onPress={() => this.submitOrder()}
                          disabled={disabledStatus}
                        >
          <Text style={styles.cart_checkoutText}>Checkout</Text>
        </TouchableOpacity>
        <Footer />
      </View>
    )
  }
}

export const mapStateToProps = (state) => ({
  cart: state.cart,
  order: state.order,
  businessItems: state.businessItems,
  modalDisplay: state.modalDisplay,
  alcohol: state.alcohol
})

export const mapDispatchToProps = (dispatch) => ({
  removeCartGroup: id => dispatch(actions.removeCartGroup(id)),
  updateOrder: data => dispatch(actions.updateOrder(data)),
  toggleModalDisplay: bool => dispatch(actions.toggleModalDisplay(bool)),
  setAlcoholInfo: info => dispatch(actions.setAlcoholInfo(info))
})


export default connect(mapStateToProps, mapDispatchToProps)(CurrentOrder)
