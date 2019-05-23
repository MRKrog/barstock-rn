import React, { Component } from "react";
import styles from './CategoryItem.style';
import { TouchableOpacity, Text, StyleSheet, Dimensions, View, LayoutAnimation, Image } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";
import Icon from 'react-native-vector-icons/FontAwesome';

export class CategoryItem extends Component {

  minusProduct = (id, number) => {
    const { removeFromCart, alcohol, cart, updateCart } = this.props;
    let cartItem = cart.find(item => item.id === id)
    if(cartItem.count > 1) {
      updateCart(id, number)
    } else {
      removeFromCart(alcohol)
    }
  };

  addProduct = (id, number) => {
    const { addToCart, alcohol, cart, updateCart } = this.props;
    let itemExists = false;
    cart.forEach(item => item.id === id ? itemExists = true : null);
    itemExists ? updateCart(id, number) : addToCart(alcohol);
  };

  render() {
    const { category_item, btnMinus } = styles;
    const { name, unit, price, thumbnail, id } = this.props.alcohol;

    let currentCount = 0;
    let quantityStatus = true;
    let btnStatus = styles.textinvalid

    this.props.cart.forEach(item => {
      if(item.id === id) {
        currentCount = item.count
        quantityStatus = false;
        btnStatus = styles.textvalid
      }
    })

    return(
      <View style={category_item}>
        <View style={styles.item_info}>
          <View style={styles.item_image}>
            <Image style={{width: 40, height: 40}} source={{ uri: thumbnail }} />
          </View>
          <View style={styles.item_details}>
            <Text style={styles.item_name}>{name}</Text>
            <Text style={styles.item_price}>{unit} / ${price}</Text>
          </View>
        </View>

        <View style={styles.item_action}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => this.minusProduct(id, -1)} style={[btnMinus, btnStatus]} disabled={quantityStatus}>
              <Icon raised name='minus' color='#ffffff' size={14} />
            </TouchableOpacity>
            <Text style={styles.quantity}>{currentCount}</Text>
            <TouchableOpacity onPress={() => this.addProduct(id, 1)} style={styles.btnPlus}>
              <Icon raised name='plus' color='#ffffff' size={14} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.quantityText}>Current Quantity</Text>
          </View>
        </View>
      </View>
    )
  }
}

export const mapStateToProps = (state) => ({
  cart: state.cart
})

export const mapDispatchToProps = (dispatch) => ({
  addToCart: alcohol => dispatch(actions.addToCart(alcohol)),
  updateCart: (id, number) => dispatch(actions.updateCart(id, number)),
  removeFromCart: alcohol => dispatch(actions.removeFromCart(alcohol))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)
