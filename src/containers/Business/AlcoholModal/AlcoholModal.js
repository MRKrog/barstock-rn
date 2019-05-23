import React, { Component } from "react"
import { connect } from "react-redux"
import { Modal, View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput, Image} from "react-native";
import styles from "./AlcoholModal.style";
import * as actions from "../../../redux/actions";

export class AlcoholModal extends Component{
  constructor(){
    super();
    this.state = {
        id: null,
        price: 0
    }
  }

  componentDidMount(){
    const { id, attributes } = this.props.alcoholInfo
    if(id){
      console.log("hello ad;lsfjal;ksdf woksdf ")
      this.setState({
        id,
        price: attributes.price_sold
      })
    }
  }

  toggle = () => {
    this.props.toggleModalDisplay(false)
  }
  // this is the regex for money /^[0-9]+(\.[0-9]{1,2})?$/gm

  render(){
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
                      <TextInput value={`${this.state.price}`} onChangeText={(text) => { this.setState({
                        price: text
                      })}}keyboardType="numeric" style={styles.modal_textInput}></TextInput>
                    </View>
                    <View style={styles.modal_textInputDisplay}>
                      <Text>Size Per Drink</Text>
                      <TextInput keyboardType="numeric"  style={styles.modal_textInput}></TextInput>
                      <Text>oz</Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity onPress={this.toggle} style={styles.modal_button}>
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
  alcoholInfo: state.alcoholInfo
})

export const mapDispatchToProps = (dispatch) => ({
  toggleModalDisplay: bool => dispatch(actions.toggleModalDisplay(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(AlcoholModal)