import React, { Component } from "react";
import styles from './AlcoholCategory.style';
import CategoryItem from '../CategoryItem/CategoryItem';
import { TouchableOpacity, Text, StyleSheet, Dimensions, View, LayoutAnimation } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";

export class AlchoholCategory extends Component{
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
    const alchohol = this.props.info.alchohol.map(alchohol => {
      let count
      const check = this.props.cart.find(alchoholCart => {
        return alchoholCart.id === alchohol.id
      })
      if(check){
        count = check.count
      }else{
        count = 0
      }
      return(
        <CategoryItem alchohol={alchohol} count={count} />
      )
    })

    return(
      <View style={styles.alc_catContainer}>
        <TouchableOpacity onPress={this.changeLayout} style={styles.alc_catBtn}>
          <Text style={styles.alc_catTitle}>{this.props.info.catName}</Text>
        </TouchableOpacity>
        <View style={[styles.alc_catInventory, { height: this.state.expanded ? null : 0, overflow: 'hidden' }]}>
          <View><Text>Header</Text></View>
          { alchohol }
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(AlchoholCategory)
