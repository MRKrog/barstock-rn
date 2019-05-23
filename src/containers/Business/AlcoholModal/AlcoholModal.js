import React, { Component } from "react"
import { Modal, View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput } from "react-native" 
import styles from "./AlcoholModal.style"

export default class AlcoholModal extends Component{
  constructor(){
    super();
    this.state = {
      test: "test Modal",
    }
  }

  toggle = () => {
    this.props.toggleModal()
  }

  // this is the regex for money /^[0-9]+(\.[0-9]{1,2})?$/gm

  render(){
    return(
      <Modal  visible={this.props.modal}
      transparent={true}>
          <View style={styles.modal_background}>
            <KeyboardAvoidingView behavior="padding" enabled>
              <View style={styles.modal_container}>
                <View style={styles.modal_alcInfo}>
                  <View>
                    <Text>this is the photo</Text>
                  </View>
                  <View>
                    <Text>this is the photo</Text>
                  </View>
                  <View>
                    <View style={styles.modal_textInputDisplay}>
                      <Text>Price for Drink $</Text>
                      <TextInput keyboardType="numeric" style={styles.modal_textInput}></TextInput>
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