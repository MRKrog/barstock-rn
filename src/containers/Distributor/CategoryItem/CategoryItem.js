import React, { Component } from "react";
import styles from './CategoryItem.style';
import { TouchableOpacity, Text, StyleSheet, Dimensions, View, LayoutAnimation, Image } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";
import AlcoholModal from "../AlcoholModal/AlcoholModal";

export class CategoryItem extends Component {

  editProduct = (id) => {
    const { alcohol } = this.props;
    let distItem = alcohol.find(item => item.id == id)
    console.log('product', distItem);
    this.props.setAlcoholInfo(distItem)
    this.props.toggleModalDisplay(true)
  };

  render() {
    const { category_item } = styles;
    const { name, unit, price, thumbnail, id, ounces } = this.props.info;

    return(
      <View style={category_item}>
        <View style={styles.item_info}>
          <View style={styles.item_image}>
            <Image resizeMode="contain" style={{width: 40, height: 40}} source={{ uri: thumbnail }} />
          </View>
          <View style={styles.item_details}>
            <Text style={styles.item_name}>{name}</Text>
            <Text style={styles.item_price}>{ounces} {unit} / ${price}</Text>
          </View>
        </View>

        <View style={styles.item_action}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => this.editProduct(id)} style={styles.btnEdit}>
            </TouchableOpacity>
          </View>
        </View>
        { this.props.modalDisplay && <AlcoholModal/> }
      </View>
    )
  }
}

export const mapStateToProps = (state) => ({
  alcohol: state.alcohol,
  modalDisplay: state.modalDisplay,
})

export const mapDispatchToProps = (dispatch) => ({
  toggleModalDisplay: bool => dispatch(actions.toggleModalDisplay(bool)),
  setAlcoholInfo: info => dispatch(actions.setAlcoholInfo(info))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)
