import React, { Component } from "react";
import styles from './CategoryItem.style';
import { TouchableOpacity, Text, StyleSheet, Dimensions, View, LayoutAnimation } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";

export class CategoryItem extends Component{

  render(){
    const { removeFromCart, addToCart, count, alcohol } = this.props;

    return(
      <View style={styles.category_item}>
        <Text>{alcohol.name}</Text>
        <TouchableOpacity onPress={() => {removeFromCart(alcohol)}}>
          <Text>-</Text>
        </TouchableOpacity>
        <Text>{count}</Text>
        <TouchableOpacity onPress={() => {addToCart(alcohol)}}>
          <Text>+</Text>
        </TouchableOpacity>
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
