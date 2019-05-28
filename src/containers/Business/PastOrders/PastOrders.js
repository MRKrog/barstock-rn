import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./PastOrders.style";
import Footer from "../../../components/Footer/Footer";
import PastOrderCard from "../PastOrderCard/PastOrderCard";
import { connect } from "react-redux"
import * as actions from "../../../redux/actions";

class PastOrders extends Component{
  async componentDidMount(){
    let response = await fetch("https://barstock-backend.herokuapp.com/api/v1/orders?api_key=0yWwUm5CZ8CGR8MhT7FL9w")
    let data = await response.json()
    this.props.getPastOrder(data.data)
  }

  render(){
    console.log("yo yo", this.props.pastOrder)
    let pastOrder = this.props.pastOrder.map(order => {
      return(
        <PastOrderCard order={order} navigation={this.props.navigation} />
      )
    })
    return(
      <View style={styles.conatiner}>
        <View style={styles.content_container}>
          <View style={styles.page_header}>
            <Text style={styles.page_title}>Order History</Text>
          </View>
        </View>
        <ScrollView>
          {
            pastOrder
          }
        </ScrollView>
        <Footer />
      </View>
    )
  }
}

export const mapStateToProps = (state) => ({
  pastOrder: state.pastOrder
})

export const mapDispatchToProps = (dispatch) => ({
  getPastOrder: order => dispatch(actions.getPastOrder(order))
})

export default connect(mapStateToProps, mapDispatchToProps)(PastOrders)
