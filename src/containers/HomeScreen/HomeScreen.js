import React, { Component } from "react";
import { View, ImageBackground } from "react-native";
import { Avatar } from 'react-native-elements';
import Loading from '../../components/Loading/Loading';
import OrderContainer from "../Business/OrderContainer/OrderContainer";
import { fetchAllItems } from "../../redux/thunks/fetchAllItems";
import { fetchBusinessItems } from "../../redux/thunks/fetchBusinessItems"
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import styles from "./HomeScreen.style";

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
