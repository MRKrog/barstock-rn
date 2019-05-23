import React, { Component } from "react";
import styles from './AlcoholCategory.style';
import CategoryItem from '../CategoryItem/CategoryItem';
import { TouchableOpacity, ScrollView, Text, StyleSheet, Dimensions, View, LayoutAnimation } from "react-native";
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
    LayoutAnimation.configureNext(LayoutAnimation.create(100));
    this.setState({ expanded: !this.state.expanded });
  }

  render(){
    const alcohol = this.props.info.map(alcohol => {
      return (
        <CategoryItem alcohol={alcohol} key={alcohol.name}/>
      )
    })

    return (
      <View >
        <TouchableOpacity onPress={this.changeLayout} style={styles.alc_catBtn}>
          <Text style={styles.alc_catTitle}>{this.props.title}</Text>
        </TouchableOpacity>
        <ScrollView style={styles.alc_catContainer}>
          <View style={[styles.alc_catInventory, { height: this.state.expanded ? null : 0, overflow: 'hidden' }]}>
            { alcohol }
          </View>
        </ScrollView>
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
