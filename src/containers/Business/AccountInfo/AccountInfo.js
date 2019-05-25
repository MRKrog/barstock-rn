import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./AccountInfo.style";
import Footer from "../../../components/Footer/Footer";

export default class AccountInfo extends Component{
  constructor(){
    super();
    this.state = {
      test: "account Info",
      address: "21020 E 40th ave"
    }
  }

  render() {
    return(
      <View style={styles.info_container}>
        <View style={styles.account_nameContainer}>
          <Text style={styles.account_name}>The Basement</Text>
        </View>
        <View style={styles.info_TextContainer}>
          <View style={styles.info_section}>
            <Text style={styles.info_text}>
              <Text>
                Address:
              </Text>
              {this.state.address}
            </Text>
          </View>
          <View style={styles.info_section}>
            <Text style={styles.info_text}>
              Representative
            </Text>
          </View>
          <View style={styles.info_section}>
            <Text style={styles.info_text}>
              Distributor
            </Text>
          </View>
        </View>
        <Footer />
      </View>
    )
  }
}
