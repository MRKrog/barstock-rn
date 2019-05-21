import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View } from 'react-native';
import { Button, Drawer, Avatar } from 'react-native-material-ui';
// import { Button } from 'react-native-elements';
import styles from './SideBar.style';
import PropTypes from 'prop-types';


class DrawerContent extends Component {
  //
  // navigateToScreen = (route) => () => {
  //   const navigate = NavigationActions.navigate({
  //     routeName: route
  //   });
  //   this.props.navigation.dispatch(navigate);
  // }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>

          <Text style={styles.separatorTop}>
          </Text>

          <Button
            raised
            icon={{name: 'trash-o', type: 'font-awesome', size: 20}}
            title='Home'
            buttonStyle={styles.button}
    />

            <Text style={styles.sectionHeadingStyle}>
            </Text>

          <Button
            raised
            icon={{name: 'umbrella', type: 'font-awesome', size: 20}}
            title='Four'
            buttonStyle={styles.button}
          />

            <Text style={styles.sectionHeadingStyle}>
           </Text>

          <Button
            raised
            icon={{name: 'user-circle', type: 'font-awesome', size: 20}}
            title='Five'
            buttonStyle={styles.button}
        />

        </ScrollView>
      </View>
    );
  }
}

DrawerContent.propTypes = {
  navigation: PropTypes.object
};

export default DrawerContent;
