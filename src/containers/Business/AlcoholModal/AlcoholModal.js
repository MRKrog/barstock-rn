import React, { Component } from "react"
import { connect } from "react-redux"
import { Modal, View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput, Image} from "react-native";
import styles from "./AlcoholModal.style";
import * as actions from "../../../redux/actions";
import { fetchOptions } from "../../../utility/fetchOptions"

export class AlcoholModal extends Component {
  constructor(){
    super();
    this.state = {
        id: null,
        price: 0,
        servingSize: 0,
        inStock: 0,
    }
  }

  componentDidMount(){
    const { id, attributes } = this.props.alcoholInfo
    if(id){
      this.setState({
        id,
        price: attributes.price_sold,
        servingSize: attributes.serving_size,
        inStock: attributes.quantity
      })
    }
  }

  updateItem = async () => {
    const { id } = this.props.alcoholInfo
    const { price, servingSize, inStock} = this.state
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

    this.props.toggleModalDisplay(false)
  }

  // this is the regex for money /^[0-9]+(\.[0-9]{1,2})?$/gm

  render(){
    console.log(" im the state in the modal", this.state)
    return(
      <Modal visible={this.props.modalDisplay}
      transparent={true}>
          <View style={styles.modal_background}>
            <KeyboardAvoidingView behavior="padding" enabled>
              <View style={styles.modal_container}>
                <View style={styles.modal_alcInfo}>
                  <Image resizeMode="contain" style={{height: 80, width: 80}}source={{uri: this.props.alcoholInfo.attributes.thumbnail}}></Image>
                  <View>
                    <Text>{this.props.alcoholInfo.attributes.item_name}</Text>
                  </View>
                  <View>
                    <View style={styles.modal_textInputDisplay}>
                      <Text>Price for Drink $</Text>
                      <TextInput value={`${this.state.price}`}
                                 onChangeText={(text) => { this.setState({ price: text })}}
                                 keyboardType="numeric"
                                 style={styles.modal_textInput}>
                      </TextInput>
                    </View>
                    <View style={styles.modal_textInputDisplay}>
                      <Text>Size Per Drink</Text>
                      <TextInput value={`${this.state.servingSize}`}
                                 onChangeText={(text) => { this.setState({ servingSize: text })}}
                                 keyboardType="numeric"
                                 style={styles.modal_textInput}>
                      </TextInput>
                      <Text>oz</Text>
                    </View>
                    {/* this is the stock */}
                    <View style={styles.modal_textInputDisplay}>
                      <Text>In Stock</Text>
                      <TextInput value={`${this.state.inStock}`}
                                 onChangeText={(text) => { this.setState({ inStock: text })}}
                                 keyboardType="numeric"
                                 style={styles.modal_textInput}>
                      </TextInput>
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

})

export const mapDispatchToProps = (dispatch) => ({
  toggleModalDisplay: bool => dispatch(actions.toggleModalDisplay(bool)),
  updateBusinessItems: item => dispatch(actions.updateBusinessItems(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(AlcoholModal)
