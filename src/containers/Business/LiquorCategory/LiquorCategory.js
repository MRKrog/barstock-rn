import React, { Component } from "react";
import styles from './LiquorCategory.style';
import { TouchableOpacity, ScrollView, Text, StyleSheet, Dimensions, View, LayoutAnimation } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";

export class LiquorCategory extends Component{
  constructor(){
    super();
    this.state ={

    }
  }

  changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.create(100));
    this.setState({ expanded: !this.state.expanded });
  }

  changeTypeLayout = (type) => {
    this.props.changeType(type)
    this.setState({ expanded: !this.state.expanded });
  }

  render(){
    const alcoholTypes = this.props.allTypes.map(type => {
      return (
        <TouchableOpacity onPress={() => this.changeTypeLayout(type)} key={type}>
          <Text style={styles.alc_types}>{type.toUpperCase()}</Text>
        </TouchableOpacity>
      )
    })

    return (
      <View >
        <TouchableOpacity onPress={this.changeLayout}>
          <Text style={styles.alc_typeTitle}>
            {this.props.currentType}
          </Text>
        </TouchableOpacity>
        <ScrollView>
          <View style={[{ height: this.state.expanded ? null : 0, overflow: 'hidden' }]}>
            { alcoholTypes }
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

export default connect(mapStateToProps, mapDispatchToProps)(LiquorCategory)
