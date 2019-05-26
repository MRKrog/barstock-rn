import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./PastOrders.style";
import Footer from "../../../components/Footer/Footer";


class PastOrders extends Component{
  constructor(){
    super();
    this.state = {
      test: "past order"
    }
  }

  render(){
    return(
      <View style={styles.conatiner}>
        <View style={styles.content_container}>
          <View style={styles.page_header}>
            <Text style={styles.page_title}>Order History</Text>
          </View>
        </View>
        <Footer />
      </View>
    )
  }
}

export default PastOrders
