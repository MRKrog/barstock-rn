import React, { Component } from "react";
import styles from './CategoryItem.style';
import { TouchableOpacity, Text, StyleSheet, Dimensions, View, LayoutAnimation } from "react-native";
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
    const { alcohol } = this.props;

    return(
      <View style={styles.category_item}>
        <View style={styles.item_info}>
          <Text>{alcohol.name}</Text>
        </View>
        <View style={styles.item_action}>
          <TouchableOpacity onPress={this.minusProduct} style={styles.btnMinus}>
            <Icon raised name='minus' color='#ffffff' />
          </TouchableOpacity>
          <Text>{this.state.quantity}</Text>
          <TouchableOpacity onPress={this.addProduct} style={styles.btnPlus}>
            <Icon raised name='plus' color='#ffffff' />
          </TouchableOpacity>
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
