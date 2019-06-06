import React, { Component } from "react";
import styles from './CategoryItem.style';
import { TouchableOpacity, Text, View, Image } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";

export class CategoryItem extends Component {

  minusProduct = (id) => {
    const { removeFromCart, info, cart, updateCart } = this.props;
    let cartItem = cart.find(item => item.id == id)
    if(cartItem.quantity > 1) {
      updateCart(id, -1)
    } else {
      removeFromCart(info.id)
    }
  };

  addProduct = (id) => {
    const { addToCart, info, cart, updateCart } = this.props;
    let itemExists = false;
    cart.forEach(item => item.id == id ? itemExists = true : null);
    itemExists ? updateCart(id, 1) : addToCart(info.id);
  };

  toggleModal = (id) => {
    const { alcohol } = this.props;
    let distItem = alcohol.find(item => {
      return item.id == id
    })
    this.props.setAlcoholInfo(distItem)
    this.props.toggleModalDisplay(true)
  };

  render() {
    const { category_item, btnMinus } = styles;
    const { name, unit, price, thumbnail, id, ounces } = this.props.info;

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

    const checkAlcohol = this.props.businessItems.find(item => id == item.attributes.item_id)
    return(
      <View style={category_item}>
        <View style={styles.item_info}>
          <View style={styles.item_image}>
            <Image resizeMode="contain" style={{width: 45, height: 45}} source={{ uri: thumbnail }} />
          </View>
          <View style={styles.item_details}>
            <Text style={styles.item_name} numberOfLines={1}>{name}</Text>
            <Text style={styles.item_price}>
              {ounces !== 288 ? ounces : 24} {unit} / ${price}
            </Text>
          </View>
        </View>

        <View style={styles.item_action}>
        {
          !checkAlcohol ?
          <TouchableOpacity onPress={() => this.toggleModal(id)} style={styles.editBtn}>
            <Text style={styles.alc_toggle}>+</Text>
          </TouchableOpacity> :
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => this.minusProduct(id)} style={[btnMinus, btnStatus]} disabled={quantityStatus}>
              <Text style={styles.alc_toggle}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{currentCount}</Text>
            <TouchableOpacity onPress={() => this.addProduct(id)} style={styles.btnPlus}>
              <Text style={styles.alc_toggle}>+</Text>
            </TouchableOpacity>
          </View>
          }
        </View>
      </View>
    )
  }
}

export const mapStateToProps = (state) => ({
  cart: state.cart,
  businessItems: state.businessItems,
  modalDisplay: state.modalDisplay,
  alcohol: state.alcohol
})

export const mapDispatchToProps = (dispatch) => ({
  addToCart: id => dispatch(actions.addToCart(id)),
  updateCart: (id, number) => dispatch(actions.updateCart(id, number)),
  removeFromCart: id => dispatch(actions.removeFromCart(id)),
  toggleModalDisplay: bool => dispatch(actions.toggleModalDisplay(bool)),
  setAlcoholInfo: info => dispatch(actions.setAlcoholInfo(info))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)
