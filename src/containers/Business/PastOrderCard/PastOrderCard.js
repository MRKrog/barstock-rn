import React, { Component } from "react";
import { connect } from "react-redux"
import { View, Text, ScrollView, TouchableOpacity, LayoutAnimation } from "react-native"
import styles from "./PastOrderCard.style"
import * as actions from "../../../redux/actions"

export class PastOrderCard extends Component{
  constructor(){
    super();
    this.state = {
      open: false
    }
  }

  toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.create(100));
    this.setState({
      open: !this.state.open
    })
  }

  addToCart = () => {
    const { items } = this.props.order.attributes
    this.props.reOrder(items)
    this.props.navigation.navigate("Order")
  }

  render(){
    console.log("this is the alcohol info",this.props.alcohol)
    let orderItems = this.props.order.attributes.items.map(item => {
      let itemInfo = this.props.alcohol.find(alcohol => {
        return alcohol.id == item.id
      })
      console.log(itemInfo)
      return(
        <View style={styles.order_item}>
          <Text style={styles.order_name}>
            {itemInfo.attributes.name}
          </Text>
          <Text style={styles.order_quantity}>
            {item.quantity}
          </Text>
          <Text style={styles.order_price}>
            ${itemInfo.attributes.price * item.quantity} 
          </Text>
        </View>
      )
    })
    return(
      <View>
        <TouchableOpacity onPress={this.toggle} style={styles.order_btn}>
          <Text style={styles.order_title}>hello</Text>
        </TouchableOpacity>
        <View style={[{ height: this.state.open ? null : 0, overflow: 'hidden' }]}>
          <View style={styles.order_header}>
            <Text style={styles.order_rowOne}>Name</Text>
            <Text style={styles.order_rowTwo}>Quantity</Text>
            <Text style={styles.order_rowThree}>Price</Text>
          </View>
          <ScrollView>
              {
                orderItems
              }
          </ScrollView>
          <TouchableOpacity style={styles.order_reOrderBtn} onPress={this.addToCart}>
            <Text style={styles.order_reOrder}>Re Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  reOrder: order => dispatch(actions.reOrder(order))
})

export const mapStateToProps = (state) => ({
  alcohol: state.alcohol
})

export default connect(mapStateToProps, mapDispatchToProps)(PastOrderCard)