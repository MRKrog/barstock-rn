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

//   alc_category:
// "lager"
// alc_type:
// "beer"
// name:
// "Bud Light"
// ounces:
// 288
// price:
// 24.35
// thumbnail:
// "https://products0.imgix.drizly.com/ci-bud-light-19699dcd3e7591e3.png?auto=format%2Ccompress&fm=jpeg&q=20"
// unit:
// "case"

  render(){
    const alcohol = this.props.info.map(alcohol => {
      return(
        <CategoryItem alcohol={alcohol} key={alcohol.id}/>
      )
    })


    return(
      <View style={styles.alc_catContainer}>
        <TouchableOpacity onPress={this.changeLayout} style={styles.alc_catBtn}>
          <Text style={styles.alc_catTitle}>{this.props.title}</Text>
        </TouchableOpacity>
        <View style={[styles.alc_catInventory, { height: this.state.expanded ? null : 0, overflow: 'hidden' }]}>
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
