import React, { Component } from "react";
import styles from './CategoryItem.style';
import { TouchableOpacity, Text, StyleSheet, Dimensions, View, LayoutAnimation, Image } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";
import Icon from 'react-native-vector-icons/FontAwesome';

export class CategoryItem extends Component{
  constructor() {
    super()
    this.state = {
      quantity: 0
    }
  }

  minusProduct = () => {
    const { removeFromCart, alcohol } = this.props;
    if (this.state.quantity > 0) {
      removeFromCart(alcohol)
      let newQuantity = this.state.quantity - 1
      this.setState({
        quantity: newQuantity
      });
    }
  };

  addProduct = () => {
    const { addToCart, alcohol } = this.props;
    addToCart(alcohol);
    let newQuantity = this.state.quantity + 1
    this.setState({
      quantity: newQuantity
    });
  };

  render(){
    const { name, unit, price, thumbnail } = this.props.alcohol;
    const { quantity } = this.state;
    let quantityStatus = quantity < 1 ? true : false;
    let btnStatus = quantity < 1 ? styles.textinvalid : styles.textvalid;
    const { category_item, btnMinus } = styles;

    return(
      <View style={category_item}>
        <View style={styles.item_info}>
          <View style={styles.item_image}>
            <Image style={{width: 40, height: 40}}
            source={{ uri: thumbnail }} />
          </View>
          <View style={styles.item_details}>
            <Text style={styles.item_name}>{name}</Text>
            <Text style={styles.item_price}>{unit} / ${price}</Text>
          </View>
        </View>

        <View style={styles.item_action}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={this.minusProduct} style={[btnMinus, btnStatus]} disabled={quantityStatus}>
              <Icon raised name='minus' color='#ffffff' size={14} />
            </TouchableOpacity>
            <Text style={styles.quantity}>{this.state.quantity}</Text>
            <TouchableOpacity onPress={this.addProduct} style={styles.btnPlus}>
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
  removeFromCart: alcohol => dispatch(actions.removeFromCart(alcohol))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)
