import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './SideMenu.style';
import call from 'react-native-phone-call';
import email from 'react-native-email';
import { NavigationActions } from 'react-navigation';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from "react-redux"
import * as actions from "../../../redux/actions"

export class SideMenu extends Component {
  navigateToScreen = (route ,index) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    let { routeName } = this.props.navigation.state;
    this.props.navigation.closeDrawer();
    this.props.navigation.dispatch(navigateAction);
    this.props.swiperIndex(index);
  }

  makeCall = () => {
   const { attributes } = this.props.business.data;
   const args = {
     number: `${attributes.phone_number}`,
     prompt: true
   }
    call(args).catch(console.error)
  }

  handleEmail = () => {
    const { attributes } = this.props.business.data;
    const to = [`${attributes.representative.rep_email}`]
    email(to, {
      subject: `${attributes.name}`,
      body: 'Body'
    }).catch(console.error)
  }


  render () {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.sectionHeadingStyle}></Text>
          <View style={styles.navSectionStyle}>
            <TouchableOpacity style={styles.navItemContainer} onPress={this.navigateToScreen('Account', 0)}>
              <Text style={styles.navItemStyle}>Account Info</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItemContainer} onPress={this.navigateToScreen('Order', 0)}>
              <Text style={styles.navItemStyle}>Inventory</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItemContainer} onPress={this.navigateToScreen('BarInventory', 1)}>
              <Text style={styles.navItemStyle}>Bar Items</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItemContainer} onPress={this.navigateToScreen('PastOrders', 2)}>
              <Text style={styles.navItemStyle}>Past Orders</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItemContainer} onPress={this.navigateToScreen('Login', 0)}>
              <Text style={styles.navItemStyle}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={()=> this.makeCall()}>

          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.handleEmail()}>

          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export const mapStateToProps = (state) => ({
  businessInfo: state.businessInfo
})

export const mapDispatchToProps = (dispatch) => ({
  swiperIndex: index => dispatch(actions.swiperIndex(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
