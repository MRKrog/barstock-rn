import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './DistSideMenu.style';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';


class DistSideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    let { routeName } = this.props.navigation.state;
    console.log(this.props.navigation.state.routes);

    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.sectionHeadingStyle}></Text>
          <View style={styles.navSectionStyle}>
            <TouchableOpacity style={styles.navItemContainer} onPress={this.navigateToScreen('Login')}>
              <Text style={styles.navItemStyle}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

DistSideMenu.propTypes = {
  navigation: PropTypes.object
};

export default DistSideMenu;
