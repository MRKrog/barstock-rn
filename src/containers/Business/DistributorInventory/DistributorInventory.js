import React, { Component } from "react"
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from "react-native"
import AlchoholCategory from "../AlcoholCategory/AlcoholCategory";
import styles from './DistributorInventory.style';
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";

export class DistributorInventory extends Component{
  componentDidMount(){
    this.props.setAlchohol()
  }

  render() {
    const { alchohol } = this.props;
    const category = alchohol.map(cat => {
      return (
        <AlchoholCategory info={cat} key={cat.name}/>
      )
    })

    return (
      <View style={styles.container}>
        <View style={styles.alc_typeContainer}>
          <Text style={styles.alc_typeTitle}>Alchohol type</Text>
        </View>

        <ScrollView style={styles.alc_catSection}>
          { category }
        </ScrollView>

      </View>
    )
  }
}

export const mapStateToProps = (state) => ({
  alchohol: state.alchohol
})

export const mapDispatchToProps = (dispatch) => ({
  setAlchohol: alchohol => dispatch(actions.setAlchohol(alchohol))
})

export default connect(mapStateToProps, mapDispatchToProps)(DistributorInventory)
