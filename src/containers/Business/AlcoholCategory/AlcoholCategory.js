import React, { Component } from "react";
import styles from './AlcoholCategory.style';
import CategoryItem from '../CategoryItem/CategoryItem';
import { TouchableOpacity, ScrollView, Text, View, LayoutAnimation } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";


// Enable LayoutAnimation under Android
// if (Platform.OS === 'android') {
//   UIManager.setLayoutAnimationEnabledExperimental(true)
// }


export class AlcoholCategory extends Component{

  changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.create(100));
    if(this.props.selectedCategory === this.props.title) {
      this.props.categorySelected("")
    } else {
      this.props.categorySelected(this.props.title)
    }
  }

  render(){
    let iconDisplay;

    const alcohol = this.props.info.map(alcohol => {
      return (
        <CategoryItem info={alcohol} key={alcohol.name}/>
      )
    })

    if(this.props.selectedCategory === this.props.title){
      iconDisplay = <Text style={styles.alc_toggle}>-</Text>
    } else {
      iconDisplay = <Text style={styles.alc_toggle}>+</Text>
    }

    return (
      <View >
        <TouchableOpacity onPress={this.changeLayout} style={styles.alc_catBtn}>
          <Text style={styles.alc_catTitle}>{this.props.title}</Text>
          <Text style={styles.iconContainer}>
            { iconDisplay }
          </Text>
        </TouchableOpacity>
        <ScrollView style={styles.alc_catContainer}>
          <View style={[styles.alc_catInventory, { height: this.props.selectedCategory === this.props.title ? null : 0, overflow: 'hidden' }]}>
            { alcohol }
          </View>
        </ScrollView>
      </View>
    )
  }
}

export const mapStateToProps = (state) => ({
  cart: state.cart,
  selectedCategory: state.selectedCategory
})

export const mapDispatchToProps = (dispatch) => ({
  categorySelected: cat => dispatch(actions.categorySelected(cat))
})

export default connect(mapStateToProps, mapDispatchToProps)(AlcoholCategory)
