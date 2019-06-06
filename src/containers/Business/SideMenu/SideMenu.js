import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './SideMenu.style';
import call from 'react-native-phone-call';
import email from 'react-native-email';
import { NavigationActions } from 'react-navigation';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from "react-redux"
import * as actions from "../../../redux/actions"
import SvgUri from 'react-native-svg-uri';

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
    const args = {
      number: `${this.props.businessInfo.business.data.attributes.representative.rep_phone_number}`,
      prompt: true
    }
    call(args).catch(console.error)
  }

  handleEmail = () => {
    const to = [`${this.props.businessInfo.business.data.attributes.representative.rep_email}`]

    email(to, {
      subject: `${this.props.businessInfo.business.data.attributes.name}`,
      body: "Inquiry"
    }).catch(console.error)
  }

  render () {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.sectionHeadingStyle}></Text>
          <View style={styles.navSectionStyle}>
            <TouchableOpacity style={styles.navItemContainer} onPress={this.navigateToScreen('Account', 0)}>
              <SvgUri width="20" height="20" fill="#ffffff" source={require('../../../../assets/user.svg')} style={styles.iconStyle} />
              <Text style={styles.navItemStyle}>Account Info</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItemContainer} onPress={this.navigateToScreen('Order', 0)}>
              <SvgUri width="20" height="20" fill="#ffffff" source={require('../../../../assets/cart.svg')} style={styles.iconStyle} />
              <Text style={styles.navItemStyle}>Distributor Items</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItemContainer} onPress={this.navigateToScreen('BarInventory', 1)}>
              <SvgUri width="20" height="20" fill="#ffffff" source={require('../../../../assets/barItems.svg')} style={styles.iconStyle} />
              <Text style={styles.navItemStyle}>Bar Inventory</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItemContainer} onPress={this.navigateToScreen('PastOrders', 2)}>
              <SvgUri width="20" height="20" fill="#ffffff" source={require('../../../../assets/history.svg')} style={styles.iconStyle} />
              <Text style={styles.navItemStyle}>Past Orders</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItemContainer} onPress={this.navigateToScreen('Login', 0)}>
              <SvgUri width="20" height="20" fill="#ffffff" source={require('../../../../assets/logout.svg')} style={styles.iconStyle} />
              <Text style={styles.navItemStyle}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={()=> this.makeCall()}>
            <SvgUri width="25" height="25" fill="#ffffff" source={require('../../../../assets/phone.svg')} style={styles.iconStyle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.handleEmail()}>
            <SvgUri width="25" height="25" fill="#ffffff" source={require('../../../../assets/email.svg')} style={styles.iconStyle} />
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
