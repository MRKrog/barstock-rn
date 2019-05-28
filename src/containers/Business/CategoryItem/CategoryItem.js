import React, { Component } from "react";
import styles from './CategoryItem.style';
import { TouchableOpacity, Text, View, Image } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";
import Icon from 'react-native-vector-icons/FontAwesome';

export class CategoryItem extends Component {

  minusProduct = (id) => {
    const { removeFromCart, alcohol, cart, updateCart } = this.props;
    let cartItem = cart.find(item => item.id == id)
    if(cartItem.quantity > 1) {
      updateCart(id, -1)
    } else {
      removeFromCart(alcohol.id)
    }
  };

  addProduct = (id) => {
    const { addToCart, alcohol, cart, updateCart } = this.props;
    let itemExists = false;
    cart.forEach(item => item.id == id ? itemExists = true : null);
    itemExists ? updateCart(id, 1) : addToCart(alcohol.id);
  };

  render() {
    const { category_item, btnMinus } = styles;
    const { name, unit, price, thumbnail, id } = this.props.alcohol;

    let currentCount = 0;
    let quantityStatus = true;
    let btnStatus = styles.textinvalid

    this.props.cart.forEach(item => {
      if(item.id == id) {
        currentCount = item.quantity
        quantityStatus = false;
        btnStatus = styles.textvalid
      }
    })

    return(
      <View style={category_item}>
        <View style={styles.item_info}>
          <View style={styles.item_image}>
            <Image resizeMode="contain" style={{width: 40, height: 40}} source={{ uri: thumbnail }} />
          </View>
          <View style={styles.item_details}>
            <Text style={styles.item_name}>{name}</Text>
            <Text style={styles.item_price}>{unit} / ${price}</Text>
          </View>
        </View>

        <View style={styles.item_action}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => this.minusProduct(id)} style={[btnMinus, btnStatus]} disabled={quantityStatus}>
              <Icon raised name='minus' color='#ffffff' size={18} />
            </TouchableOpacity>
            <Text style={styles.quantity}>{currentCount}</Text>
            <TouchableOpacity onPress={() => this.addProduct(id)} style={styles.btnPlus}>
              <Icon raised name='plus' color='#ffffff' size={18} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export const mapStateToProps = (state) => ({
  cart: state.cart,
})

export const mapDispatchToProps = (dispatch) => ({
  addToCart: id => dispatch(actions.addToCart(id)),
  updateCart: (id, number) => dispatch(actions.updateCart(id, number)),
  removeFromCart: id => dispatch(actions.removeFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)
