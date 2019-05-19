import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>Login</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
