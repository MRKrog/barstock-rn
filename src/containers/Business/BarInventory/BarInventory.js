import React, { Component } from "react"
import { connect } from "react-redux"
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native"
import styles from "./BarInventory.style"
import AlcoholModal from "../AlcoholModal/AlcoholModal";
import Footer from "../../../components/Footer/Footer";
import * as actions from "../../../redux/actions"

export class BarInventory extends Component{

  toggleModal = (alcohol) => {
    this.props.setAlcoholInfo(alcohol)
    this.props.toggleModalDisplay(true)
  }

  getSingleMargin = (item) => {
    const { businessItems, cart, alcohol } = this.props;
    let busItem = item.attributes
    let distItem = alcohol.find(alcoholItem => alcoholItem.id == busItem.id)
    let distProdServSize = distItem.attributes.ounces;
    let menuProdServSize = busItem.serving_size;
    let menuPrice = busItem.price_sold;
    let distCost = distItem.attributes.price;
    let singleMargin = (100 - ((distCost / ((distProdServSize / menuProdServSize) * menuPrice)) * 100))
    return singleMargin
  };


  render(){
    let barItems = this.props.businessItems.map(item => {
      let itemMargin = this.getSingleMargin(item)
      return(
        <TouchableOpacity onPress={() => {this.toggleModal(item)}} style={styles.item_card} key={item.id}>
          <View style={styles.item_info}>
            <Image resizeMode="contain"
                   style={{width: 40, height: 40}}
                   source={{uri: item.attributes.thumbnail}}/>
            <View style={styles.item_details}>
              <Text style={styles.item_name}>{item.attributes.item_name}</Text>
              <Text style={styles.item_price}>{item.attributes.serving_size}oz serving / ${item.attributes.price_sold} charge</Text>
            </View>
          </View>
          <View style={styles.item_margins}>
            <Text style={styles.item_marginsText}>
              {itemMargin.toFixed(0)}%
            </Text>
          </View>
          <View style={styles.item_stock}>
            <Text style={styles.item_stockText}>
              {item.attributes.quantity}
            </Text>
          </View>
        </TouchableOpacity>
      )
    })

    return(
      <View style={styles.bar_invContainer}>
        <View style={styles.bar_titleContainer}>
         <Text style={styles.bar_title}>Bar Inventory</Text>
        </View>
        {
          this.props.modalDisplay && <AlcoholModal/>
        }
        <View style={styles.bar_itemsHeader}>
            <Text style={styles.items_rowOne}>Alcohol Info</Text>
            <Text style={styles.items_rowTwo}>Item Margin</Text>
            <Text style={styles.items_rowThree}>Inventory</Text>
        </View>
        <ScrollView>
          {
            barItems
          }
        </ScrollView>
        <Footer />
      </View>
    )
  }
}

export const mapStateToProps = (state) => ({
  businessItems: state.businessItems,
  modalDisplay: state.modalDisplay,
  cart: state.cart,
  alcohol: state.alcohol
})

export const mapDispatchToProps = (dispatch) => ({
  toggleModalDisplay: bool => dispatch(actions.toggleModalDisplay(bool)),
  setAlcoholInfo: info => dispatch(actions.setAlcoholInfo(info))
})

export default connect(mapStateToProps, mapDispatchToProps)(BarInventory)
