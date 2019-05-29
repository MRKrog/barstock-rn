import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./PastOrders.style";
import Footer from "../../../components/Footer/Footer";
import PastOrderCard from "../PastOrderCard/PastOrderCard";
import { connect } from "react-redux"

class PastOrders extends Component{
  render(){
    let pastOrder = this.props.pastOrder.map(order => {
      return(
        <PastOrderCard order={order} navigation={this.props.navigation} key={order.id} />
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

export default connect(mapStateToProps)(PastOrders)
