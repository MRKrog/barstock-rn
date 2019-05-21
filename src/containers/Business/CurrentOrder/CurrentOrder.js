import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux"

export class CurrentOrder extends Component{
    constructor(){
        super();
        this.state = {
            test: "CurrentOrder"
        }
    }

    render(){
      console.log(this.props.cart)
      const cart = this.props.cart.map(alchohol => {
          return(
            <View>
              <Text>{alchohol.count}X{alchohol.name}</Text>
            </View>
          )
      })
        return(
            <View style={styles.container}>
                {
                  cart
                }
            </View>
        )
    }
}

export const mapStateToProps = (state) => ({
  cart: state.cart
})

export const mapDispatchToProps = () => ({

})

export default connect(mapStateToProps)(CurrentOrder)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})
