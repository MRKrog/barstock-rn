import React, { Component } from "react"
import { connect } from "react-redux"
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native"
import styles from "./BarInventory.style"
import AlcoholModal from "../AlcoholModal/AlcoholModal"
import * as actions from "../../../redux/actions"

export class BarInventory extends Component{

  toggleModal = (alcohol) => {
    this.props.setAlcoholInfo(alcohol)
    this.props.toggleModalDisplay(true)
  }

  render(){
    let BarItems = this.props.businessItems.map(item => {
      return(
        <TouchableOpacity onPress={() => {this.toggleModal(item)}} style={styles.item_card}>
          <View style={styles.item_info}>
            <Image resizeMode="contain" style={{width: 40, height: 40}}
              source={{uri: item.attributes.thumbnail}}/>
            <View style={styles.item_details}>
              <Text style={styles.item_name}>{item.attributes.item_name}</Text>
              <Text style={styles.item_price}>{item.attributes.serving_size} / ${item.attributes.price_sold}</Text>
            </View>
          </View>
          <View style={styles.item_margins}>
            <Text>
              80%
            </Text>
          </View>
          <View style={styles.item_stock}>
            <Text>
              {item.attributes.quantity}
            </Text>
          </View>
        </TouchableOpacity>
      )
    })

    return(
      <View style={styles.bar_invContainer}>
        <View style={styles.bar_titleContainer}>
         <Text style={styles.bar_title}>bar inventory</Text>
        </View>
        {
          this.props.modalDisplay && <AlcoholModal/>
        }
        <View style={styles.bar_itemsHeader}>
            <Text style={styles.items_rowOne}>Alcohol Info</Text>
            <Text style={styles.items_rowTwo}>Margins</Text>
            <Text style={styles.items_rowThree}>In Stock</Text>
        </View>
        <ScrollView>
          {
            BarItems
          }
        </ScrollView>
      </View>
    )
  }
}

export const mapStateToProps = (state) => ({
  businessItems: state.businessItems,
  modalDisplay: state.modalDisplay,
})

export const mapDispatchToProps = (dispatch) => ({
  toggleModalDisplay: bool => dispatch(actions.toggleModalDisplay(bool)),
  setAlcoholInfo: info => dispatch(actions.setAlcoholInfo(info))
})

export default connect(mapStateToProps, mapDispatchToProps)(BarInventory)