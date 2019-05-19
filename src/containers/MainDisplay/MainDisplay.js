import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Login from '../Login/Login'

class MainDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>MainDisplay</Text>
      </View>
    )
  }
}

export const mapStateToProps = state => ({
  loading: state.loading,
});

export const mapDispatchToProps = dispatch => ({
  setLoading: data => dispatch(actions.setLoading(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainDisplay);
