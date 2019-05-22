import React, { Component } from "react"
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from "react-native"
import AlcoholCategory from "../AlcoholCategory/AlcoholCategory";
import styles from './DistributorInventory.style';
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";

export class DistributorInventory extends Component{
  constructor() {
    super()
    this.state = {
      currentType: 'beer'
    }
  }

  render() {
    let category;
    if(this.props.alcohol.data) {
      const { data } = this.props.alcohol;
      let filterCategories = data.filter(type => {
        return type.attributes.alc_type === this.state.currentType
      })



      let reducedCat = filterCategories.reduce((acc, cat) => {
        if(!acc[cat.attributes.alc_category]){
          acc[cat.attributes.alc_category] = []
        }
        acc[cat.attributes.alc_category].push(cat.attributes)
        return acc
      }, {})
      console.log(reducedCat);
      category = Object.keys(reducedCat).map(item => {
          console.log(item);
        return (
          <AlcoholCategory title={item} info={reducedCat[item]} key={reducedCat[item].id}/>
        )
      })


    }

    return (
      <View style={styles.container}>
        <View style={styles.alc_typeContainer}>
          <Text style={styles.alc_typeTitle}>{this.state.currentType}</Text>
        </View>

          <ScrollView style={styles.alc_catSection}>
            {
              category
            }
          </ScrollView>

      </View>
    )
  }
}

export const mapStateToProps = (state) => ({
  alcohol: state.alcohol,
  loading: state.loading,
})

export const mapDispatchToProps = (dispatch) => ({
  setAlcohol: alcohol => dispatch(actions.setAlcohol(alcohol)),
  setLoading: status => dispatch(actions.setLoading(status)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DistributorInventory)
