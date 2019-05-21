import React, { Component } from "react"
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from "react-native"
import AlcoholCategory from "../AlcoholCategory/AlcoholCategory";
import styles from './DistributorInventory.style';
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";

export class DistributorInventory extends Component{
  componentDidMount(){
    this.props.setAlcohol()
  }

  render() {
    const { alcohol } = this.props;
    const category = alcohol.map(cat => {
      return (
        <AlcoholCategory info={cat} key={cat.name}/>
      )
    })

    return (
      <View style={styles.container}>
        <View style={styles.alc_typeContainer}>
          <Text style={styles.alc_typeTitle}>Alcohol type</Text>
        </View>

        <ScrollView style={styles.alc_catSection}>
          { category }
        </ScrollView>

      </View>
    )
  }
}

export const mapStateToProps = (state) => ({
  alcohol: state.alcohol
})

export const mapDispatchToProps = (dispatch) => ({
  setAlcohol: alcohol => dispatch(actions.setAlcohol(alcohol))
})

export default connect(mapStateToProps, mapDispatchToProps)(DistributorInventory)
