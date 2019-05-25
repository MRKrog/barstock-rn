import React, { Component } from "react"
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from "react-native"
import AlcoholCategory from "../AlcoholCategory/AlcoholCategory";
import LiquorCategory from "../LiquorCategory/LiquorCategory";
import styles from './DistributorInventory.style';
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";
import Footer from '../../../components/Footer/Footer';


export class DistributorInventory extends Component{
  constructor() {
    super()
    this.state = {
      currentType: 'liquor'
    }
  }

  changeAlcoholType = (type) => {
    const { currentType } = this.state;
    this.setState({ currentType: type  })
  }

  render() {
    let category;
    let allTypes;

    if(this.props.alcohol) {
      const { alcohol } = this.props;

      let reduceType = alcohol.reduce((acc, type) => {
        if(!acc.includes(type.attributes.alc_type)) {
          acc.push(type.attributes.alc_type)
        }
        return acc
      },[])

      allTypes = reduceType.filter(type => {
        return type !== this.state.currentType
      })

      let selectedType = alcohol.filter(type => {
        return type.attributes.alc_type === this.state.currentType
      })

      let reducedCat = selectedType.reduce((acc, cat) => {
        let liquor_item = {...cat.attributes, id: cat.id}
        if(!acc[cat.attributes.alc_category]){
          acc[cat.attributes.alc_category] = []
        }
        acc[cat.attributes.alc_category].push(liquor_item)
        return acc
      }, {})

      category = Object.keys(reducedCat).map(item => {
        return (
          <AlcoholCategory title={item}
                           info={reducedCat[item]}
                           key={reducedCat[item][0].alc_category}
          />
        )
      })
    }

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.alc_typeContainer}>
            <LiquorCategory allTypes={allTypes}
                            currentType={this.state.currentType}
                            changeType={this.changeAlcoholType}
            />
          </View>
          <View style={styles.alc_catSection}>
            { category }
          </View>
        </View>
        <Footer />
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
