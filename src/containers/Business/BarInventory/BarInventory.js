import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native"
import styles from "./BarInventory.style"
import AlcoholModal from "../AlcoholModal/AlcoholModal"

export default class BarInventory extends Component{
  constructor(){
    super();
    this.state = {
      test: "bar inventory",
      items: [],
      modal: false
    }
  }

  async componentDidMount(){
    let response = await fetch("https://barstock-backend.herokuapp.com/api/v1/business_items?api_key=0yWwUm5CZ8CGR8MhT7FL9w")
    let items = await response.json()
    console.log(items.data)
    this.setState({
      items: items.data
    })
  }

  toggleModal = () => {
    console.log("hello")
    this.setState({
      modal: !this.state.modal
    })
  }

  render(){
    console.log(this.state.items)
    let BarItems = this.state.items.map(item => {
      return(
        <TouchableOpacity onPress={this.toggleModal} style={styles.item_card}>
          <View style={styles.item_info}>
          <View style={styles.item_image}>
            <Image style={{width: 40, height: 40}}
            source={{uri: item.attributes.thumbnail}}/>
            </View>
          <View style={styles.item_details}>
            <Text style={styles.item_name}>{item.attributes.id}</Text>
            <Text style={styles.item_price}>{item.attributes.serving_size} / ${item.attributes.price_sold}</Text>
          </View>
          </View>
          <View>
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
         <Text style={styles.bar_title}>{this.state.test}</Text>
        </View>
        <AlcoholModal modal={this.state.modal} toggleModal={this.toggleModal}/>
        <ScrollView>
          {
            BarItems
          }
        </ScrollView>
      </View>
    )
  }
}