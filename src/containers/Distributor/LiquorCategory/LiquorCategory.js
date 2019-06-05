import React, { Component } from "react";
import styles from './LiquorCategory.style';
import { TouchableOpacity, ScrollView, Text, View, LayoutAnimation } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";
import { Icon } from 'native-base';

export class LiquorCategory extends Component{
  constructor(){
    super();
    this.state = {
      expanded: false
    }
  }
  changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.create(100));
    this.setState({ expanded: !this.state.expanded });
  }

  changeTypeLayout = (type) => {
    this.props.changeType(type)
    this.setState({ expanded: !this.state.expanded });
  }

  render(){
    const alcoholTypes = this.props.allTypes.map(type => {
      return (
        <TouchableOpacity onPress={() => this.changeTypeLayout(type)} key={type} style={styles.alc_typeContainer}>
          <Text style={styles.alc_types}>
          <Icon name='beer' color='#ffffff' size={20} style={styles.iconStyle} />
          {type.toUpperCase()}
          </Text>
        </TouchableOpacity>
      )
    })

    let expandedStyles;
    if(this.state.expanded === true){
      expandedStyles = styles.expandedTrue
    } else {
      expandedStyles = styles.expandedFalse
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.changeLayout}>
          <Text style={styles.alc_typeTitle}>
            {this.props.currentType}
          </Text>
        </TouchableOpacity>
        <ScrollView style={styles.alc_typeContainer}>
          <View style={[expandedStyles, { height: this.state.expanded ? null : 0, overflow: 'hidden' }]}>
            { alcoholTypes }
          </View>
        </ScrollView>
      </View>
    )
  }
}

export const mapStateToProps = (state) => ({
  cart: state.cart
})

export const mapDispatchToProps = (dispatch) => ({
  addToCart: alcohol => dispatch(actions.addToCart(alcohol)),
  removeFromCart: alcohol => dispatch(actions.removeFromCart(alcohol))
})

export default connect(mapStateToProps, mapDispatchToProps)(LiquorCategory)
