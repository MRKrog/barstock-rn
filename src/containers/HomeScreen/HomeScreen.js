import React, { Component } from "react";
import { View, Image, Button, Text, StyleSheet, ImageBackground, Dimensions } from "react-native";
import { Avatar } from 'react-native-elements';
import Footer from '../../components/Footer/Footer';
import Loading from '../../components/Loading/Loading';
import Icon from 'react-native-vector-icons/FontAwesome';
import OrderContainer from "../Business/OrderContainer/OrderContianer";
import { fetchAllItems } from "../../redux/thunks/fetchAllItems";
import { fetchBusinessItems } from "../../redux/thunks/fetchBusinessItems"
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

class HomeScreen extends Component {

  async componentDidMount() {
    this.props.navigation.setParams({ openMenu: this._openMenu });
    this.props.setLoading(true)
    await this.props.fetchAllItems()
    await this.props.fetchBusinessItems()
    this.props.setLoading(false)
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    }
    return (
      <View style={styles.MainDisplay}>
        <ImageBackground source={require('../../../assets/bg.png')} style={styles.backgroundImage}>
          {
            this.props.alcohol &&
            <OrderContainer navigation={this.props.navigation} />
          }
        </ImageBackground>
      </View>
    );
  }
}

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

const styles = StyleSheet.create({
  MainDisplay: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },

  backgroundImage: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const mapStateToProps = (state) => ({
  alcohol: state.alcohol,
  loading: state.loading,
})

export const mapDispatchToProps = (dispatch) => ({
  setAlcohol: alcohol => dispatch(actions.setAlcohol(alcohol)),
  setLoading: status => dispatch(actions.setLoading(status)),
  setBusinessItems: businessItems => dispatch(actions.setBusinessItems(businessItems)),
  fetchAllItems: data => dispatch(fetchAllItems(data)),
  fetchBusinessItems: data => dispatch(fetchBusinessItems(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
