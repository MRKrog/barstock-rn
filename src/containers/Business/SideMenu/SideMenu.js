import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './SideMenu.style';
import call from 'react-native-phone-call';
import email from 'react-native-email';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    let { routeName } = this.props.navigation.state;
    console.log(this.props.navigation.state.routes);

    this.props.navigation.dispatch(navigateAction);
  }

  makeCall = (number) => {
   const args = {
     number: "6307154311",
     prompt: true
   }
    call(args).catch(console.error)
  }

  handleEmail = () => {
    const to = ['tiaan@email.com']
    email(to, {
      cc: ['bazzy@moo.com', 'doooo@daaa.com'],
      subject: 'Bar Email',
      body: 'Body'
    }).catch(console.error)
  }


  render () {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.sectionHeadingStyle}></Text>
          <View style={styles.navSectionStyle}>
            <TouchableOpacity style={styles.navItemContainer} onPress={this.navigateToScreen('Account')}>
              <Icon name='user-circle' color='#ffffff' size={20} style={styles.iconStyle} />
              <Text style={styles.navItemStyle}>Account Info</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItemContainer} onPress={this.navigateToScreen('Order')}>
              <Icon name='shopping-cart' color='#ffffff' size={20} style={styles.iconStyle} />
              <Text style={styles.navItemStyle}>Inventory</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItemContainer} onPress={this.navigateToScreen('BarInventory')}>
              <Icon name='edit' color='#ffffff' size={20} style={styles.iconStyle} />
              <Text style={styles.navItemStyle}>Bar Items</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItemContainer} onPress={this.navigateToScreen('PastOrders')}>
              <Icon name='history' color='#ffffff' size={20} style={styles.iconStyle} />
              <Text style={styles.navItemStyle}>Past Orders</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItemContainer} onPress={this.navigateToScreen('Login')}>
              <Icon name='sign-out' color='#ffffff' size={20} style={styles.iconStyle} />
              <Text style={styles.navItemStyle}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={()=> this.makeCall()}>
            <Icon name="phone" size={30} color="#332D2F" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.handleEmail()}>
            <Icon name="envelope-o" size={30} color="#332D2F" />
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;
