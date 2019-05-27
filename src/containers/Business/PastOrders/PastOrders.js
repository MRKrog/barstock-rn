import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./PastOrders.style";
import Footer from "../../../components/Footer/Footer";
import PastOrderCard from "../PastOrderCard/PastOrderCard"


class PastOrders extends Component{
  constructor(){
    super();
    this.state = {
      pastOrders:  [{
        "id": "1",
        "type": "order",
        "attributes": {
          "id": 1,
          "total_cost": 200,
          "total_revenue": 380,
          "items": [
            {
              "id": "1",
              "distributor_id": 1,
              "name": "Fireball",
              "alc_type": "liquor",
              "alc_category": "whiskey",
              "price": 18.78,
              "ounces": 33.8,
              "unit": "handle",
              "thumbnail": "https://products2.imgix.drizly.com/ci-fireball-cinnamon-whisky-355ddd0b8b3a2c55.png?auto=format%2Ccompress&fm=jpeg&q=20",
              "quantity": 100,
              "created_at": {},
              "updated_at": {}
            },
            {
              "id": "2",
              "distributor_id": 1,
              "name": "Jim Bean",
              "alc_type": "liquor",
              "alc_category": "whiskey",
              "price": 16.99,
              "ounces": 25.3,
              "unit": "handle",
              "thumbnail": "https://products2.imgix.drizly.com/ci-fireball-cinnamon-whisky-355ddd0b8b3a2c55.png?auto=format%2Ccompress&fm=jpeg&q=20",
              "quantity": 100,
              "created_at": {},
              "updated_at": {}
            }
          ]
        }
      },
      {
        "id": "1",
        "type": "order",
        "attributes": {
          "id": 90,
          "total_cost": 200,
          "total_revenue": 380,
          "items": [
            {
              "id": "1",
              "distributor_id": 1,
              "name": "Fireball",
              "alc_type": "liquor",
              "alc_category": "whiskey",
              "price": 18.78,
              "ounces": 33.8,
              "unit": "handle",
              "thumbnail": "https://products2.imgix.drizly.com/ci-fireball-cinnamon-whisky-355ddd0b8b3a2c55.png?auto=format%2Ccompress&fm=jpeg&q=20",
              "quantity": 100,
              "created_at": {},
              "updated_at": {}
            }
          ]
        }
      }]
    }
  }

  render(){
    let pastOrder = this.state.pastOrders.map(order => {
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

export default PastOrders
