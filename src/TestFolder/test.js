import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
// import { connect } from 'react-redux';
// import * as actions from '../../actions';

import { Button, Drawer, Avatar } from 'react-native-material-ui';

// import { fetchData } from '../../utility/fetchData'
//
// import Login from '../Login/Login';
// import Header from '../Header/Header';
// import DrawerSpec from '../Drawer/Drawer'

// $dark-blue: #11212a;
// $medium-blue: #2c4969;
// $light-blue: #0098de;
// $light-gray: #adadad;
// $btn-orange: #EEAD0E;
// $dark-gray: #777777;
// $white: #fff;


class MainDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    // const response = await fetchData('http://whateverly-datasets.herokuapp.com/api/v1/distributor')
    // console.log('response', response);
  }

  render() {

    return (
      <View style={styles.MainDisplay}>

      </View>
    )
  }
}

const screenWith = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

const styles = StyleSheet.create({
  MainDisplay: {
    flex: 1,
    width: screenWith,
    height: screenHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },

  backgroundImage: {
    flex: 1,
    width: screenWith,
    height: screenHeight,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const mapStateToProps = state => ({
  loading: state.loading,
});

export const mapDispatchToProps = dispatch => ({
  setLoading: data => dispatch(actions.setLoading(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainDisplay);
