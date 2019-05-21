import React, { Component } from "react";
import styles from './CategoryItem.style';
import { TouchableOpacity, Text, StyleSheet, Dimensions, View, LayoutAnimation } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";

export class CategoryItem extends Component{

  render(){
    const { removeFromCart, addToCart, count, alchohol } = this.props;

    return(
      <View style={styles.category_item}>
        <Text>{alchohol.name}</Text>
        <TouchableOpacity onPress={() => {removeFromCart(alchohol)}}>
          <Text>-</Text>
        </TouchableOpacity>
        <Text>{count}</Text>
        <TouchableOpacity onPress={() => {addToCart(alchohol)}}>
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
  addToCart: alchohol => dispatch(actions.addToCart(alchohol)),
  removeFromCart: alchohol => dispatch(actions.removeFromCart(alchohol))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)
