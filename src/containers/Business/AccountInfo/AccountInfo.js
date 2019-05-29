import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./AccountInfo.style";
import Footer from "../../../components/Footer/Footer";
import { connect } from "react-redux"

export class AccountInfo extends Component{
  render() {
    const info = this.props.businessInfo.business.data.attributes
    return (
      <View style={styles.conatiner}>
        <View style={styles.info_container}>
          <View style={styles.account_nameContainer}>
            <Text style={styles.account_name}>Account Information</Text>
          </View>
          <View style={styles.info_TextContainer}>
            <View style={styles.info_section}>
            <Text style={styles.info_title}>
                  Personal
                </Text>
                <Text style={styles.info_text}>
                  Name: {info.name}
                </Text>
                <Text style={styles.info_text}>
                  Address: {info.address}
                </Text>
                <Text style={styles.info_text}>
                  Email: {info.email}
                </Text>
                <Text style={styles.info_text}>
                  Phone: {info.phone_number}
                </Text>
            </View>
            <View style={styles.info_section}>
              <Text style={styles.info_title}>
                Representative
              </Text>
              <Text style={styles.info_text}>
                  Name: {info.representative.rep_name}
                </Text>
                <Text style={styles.info_text}>
                  Phone: {info.representative.rep_phone_number}
                </Text>
                <Text style={styles.info_text}>
                  Email: {info.representative.rep_email}
                </Text>
            </View>
            <View style={styles.info_section}>
              <Text style={styles.info_title}>
                {info.distributor.distributor_name}
              </Text>
              <Text style={styles.info_text}>
                  Address: {info.distributor.distributor_address}
              </Text>
            </View>
          </View>
        </View>
        <Footer />
      </View>
    )
  }
}

export const mapStateToProps = (state) => ({
  businessInfo: state.businessInfo
})

export default connect(mapStateToProps)(AccountInfo)
