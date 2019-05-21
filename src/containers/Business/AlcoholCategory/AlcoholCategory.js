import React, { Component } from "react";
import styles from './AlcoholCategory.style';
import CategoryItem from '../CategoryItem/CategoryItem';
import { TouchableOpacity, Text, StyleSheet, Dimensions, View, LayoutAnimation } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";

export class AlcoholCategory extends Component{
  constructor(){
    super();
    this.state ={
      test: "test"
    }
  }

  changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    this.setState({ expanded: !this.state.expanded });
  }

  render(){
    const alcohol = this.props.info.alcohol.map(alcohol => {
      const  count = this.props.cart.filter(alcoholCart => {
        return alcoholCart.id === alcohol.id
      }).length
     
      return(
        <CategoryItem alcohol={alcohol} count={count} />
      )
    })

    return(
      <View style={styles.alc_catContainer}>
        <TouchableOpacity onPress={this.changeLayout} style={styles.alc_catBtn}>
          <Text style={styles.alc_catTitle}>{this.props.info.catName}</Text>
        </TouchableOpacity>
        <View style={[styles.alc_catInventory, { height: this.state.expanded ? null : 0, overflow: 'hidden' }]}>
          <View><Text>Header</Text></View>
          { alcohol }
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

export default connect(mapStateToProps, mapDispatchToProps)(AlcoholCategory)
