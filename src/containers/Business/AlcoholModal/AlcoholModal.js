import React, { Component } from "react"
import { connect } from "react-redux"
import { Modal, View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput, Image} from "react-native";
import styles from "./AlcoholModal.style";
import * as actions from "../../../redux/actions";
import { fetchOptions } from "../../../utility/fetchOptions";
import { getMarkUp, getMargin, getProfit } from "../../../utility/generateMargin"
import Loading from '../../../components/Loading/Loading';

export class AlcoholModal extends Component {
  constructor(){
    super();
    this.state = {
        id: null,
        price: 0,
        servingSize: 0,
        inStock: 0,
        create: false
    }
  }

  componentDidMount(){
    const { id, attributes } = this.props.alcoholInfo
    let itemExists = this.props.businessItems.find(item => item.id == id)
    console.log('itemExists', itemExists);
    if(id && itemExists){
      this.setState({
        id,
        price: attributes.price_sold,
        servingSize: attributes.serving_size,
        inStock: attributes.quantity
      })
    } else {
      this.setState({
        id,
        price: 0,
        servingSize: 0,
        inStock: 0,
        create: true
      })
    }
  }

  updateItem = async () => {
    const { id } = this.props.alcoholInfo
    console.log('INFO YO', this.props.alcoholInfo);
    const { price, servingSize, inStock} = this.state;
    this.props.setLoading(true)
    if(this.state.create) {
      const url = `https://barstock-backend.herokuapp.com/api/v1/business_items`;
      const itemNew = {
        api_key: "0yWwUm5CZ8CGR8MhT7FL9w",
        price_sold: price,
        quantity: inStock,
        serving_size: servingSize,
        item_id: id
      }

      const options = fetchOptions("POST", itemNew)

      try {
        const response = await fetch(url, options)
        const data = await response.json()
        this.props.updateBusinessItems(data.data)
      } catch (error) {
        console.log(error);
      }

      this.props.toggleModalDisplay(false)

    } else {
      const url = `https://barstock-backend.herokuapp.com/api/v1/business_items/${id}`
      const itemNew = {
        api_key: "0yWwUm5CZ8CGR8MhT7FL9w",
        price_sold: price,
        quantity: inStock,
        serving_size: servingSize
      }

      const options = fetchOptions("PATCH", itemNew)

      try {
        const response = await fetch(url, options)
        const data = await response.json()
        this.props.updateBusinessItems(data.data)
      } catch (error) {
        console.log(error);
      }
      this.props.setLoading(false)
      this.props.toggleModalDisplay(false)

    }
  }


  render(){
    const { alcohol } = this.props;
    const { id, attributes } = this.props.alcoholInfo
    const { price, servingSize } = this.state

    let distItem = alcohol.find(item => {
      return item.id == id
    })

    let itemProfit = getProfit({...this.state}, distItem)
    let itemMarkUp = getMarkUp({...this.state}, distItem)
    let itemMargin = getMargin({...this.state}, distItem)


    if(itemMargin == -Infinity || isNaN(itemMargin)){
      itemMargin = 0
    }
    if(itemMarkUp == -100 || isNaN(itemMarkUp)){
      itemMarkUp = 0
    }
    if(itemProfit == -100 || isNaN(itemProfit)){
      itemProfit = 0
    }

    return (
      <Modal visible={this.props.modalDisplay}
      transparent={true}>
        {
          this.props.loading &&
           <Loading />
        }
          <View style={styles.modal_background}>
            <KeyboardAvoidingView behavior="padding" enabled>
              <View style={styles.modal_container}>
                <View style={styles.modal_alcInfoContainer}>
                  <Image resizeMode="contain" style={{height: 100, width: 70}}source={{uri: this.props.alcoholInfo.attributes.thumbnail}}></Image>
                  <View style={styles.modal_alcInfo}>
                    <Text style={styles.info_title}>Distributor Information</Text>
                    <Text style={styles.info_name}>{distItem.attributes.name}</Text>
                    <View style={styles.info_section}>
                      <View style={styles.info_cont}>
                        <Text style={styles.info_text}>${distItem.attributes.price}</Text>
                        <Text style={styles.info_label}>price per</Text>
                      </View>
                      <View style={styles.info_cont}>
                        <Text style={styles.info_text}>{distItem.attributes.ounces} oz</Text>
                        <Text style={styles.info_label}>item size</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.business_content}>
                  <View style={styles.inputContainer}>

                    <Text style={styles.info_title}>Business Information</Text>
                    <View style={styles.modal_textInputDisplay}>
                      <TextInput value={`${this.state.price}`}
                                 onChangeText={(text) => { this.setState({ price: text })}}
                                 keyboardType="numeric"
                                 placeholder="$"
                                 style={styles.modal_textInput}>
                      </TextInput>
                      <Text style={styles.modal_label}>$ Price Per Drink</Text>
                    </View>

                    <View style={styles.modal_textInputDisplay}>
                      <TextInput value={`${this.state.servingSize}`}
                                 onChangeText={(text) => { this.setState({ servingSize: text })}}
                                 keyboardType="numeric"
                                 placeholder="oz"
                                 style={styles.modal_textInput}>
                      </TextInput>
                      <Text style={styles.modal_label}>Size Per Drink oz</Text>
                    </View>

                    <View style={styles.modal_textInputDisplay}>
                      <TextInput value={`${this.state.inStock}`}
                                 onChangeText={(text) => { this.setState({ inStock: text })}}
                                 keyboardType="numeric"
                                 placeholder="#"
                                 style={styles.modal_textInput}>
                      </TextInput>
                      <Text style={styles.modal_label}># Total Inventory</Text>
                    </View>

                  </View>
                  <View style={styles.numberContainer}>
                  <Text style={styles.info_busTitle}>Item Projections</Text>
                    <View style={styles.itemNumber}>
                      <Text style={styles.alcInfo_Margin}>${itemProfit.toFixed(0)}</Text>
                      <Text style={styles.alcInfo_MarginLabel}>Profit Per Item</Text>
                    </View>
                    <View style={styles.itemNumber}>
                      <Text style={styles.alcInfo_Margin}>{itemMargin.toFixed(0)}%</Text>
                      <Text style={styles.alcInfo_MarginLabel}>Profit Margin</Text>
                    </View>
                    <View style={styles.itemNumber}>
                      <Text style={styles.alcInfo_Margin}>{itemMarkUp.toFixed(0)}%</Text>
                      <Text style={styles.alcInfo_MarginLabel}>Item Markup</Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity onPress={this.updateItem} style={styles.modal_button}>
                  <Text style={styles.modal_buttonText}>Save</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
      </Modal>
    )
  }
}

export const mapStateToProps = (state) => ({
  modalDisplay: state.modalDisplay,
  alcoholInfo: state.alcoholInfo,
  alcohol: state.alcohol,
  businessItems: state.businessItems,
  loading: state.loading,
})

export const mapDispatchToProps = (dispatch) => ({
  toggleModalDisplay: bool => dispatch(actions.toggleModalDisplay(bool)),
  updateBusinessItems: item => dispatch(actions.updateBusinessItems(item)),
  setLoading: status => dispatch(actions.setLoading(status)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AlcoholModal)
