import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import { Drawer, Avatar, Toolbar } from 'react-native-material-ui'
import { connect } from 'react-redux';
import * as actions from '../../actions';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <View style={styles.header}>
        <Drawer>
          <Drawer.Header >
              <Drawer.Header.Account
                  avatar={<Avatar text="A" />}
                  accounts={[
                      { avatar: <Avatar text="B" /> },
                      { avatar: <Avatar text="C" /> },
                  ]}
                  footer={{
                      dense: true,
                      centerElement: {
                          primaryText: 'Reservio',
                          secondaryText: 'business@email.com',
                      },
                      rightElement: 'arrow-drop-down',
                  }}
              />
          </Drawer.Header>
          <Drawer.Section
              divider
              items={[
                  { icon: 'bookmark-border', value: 'Notifications' },
                  { icon: 'today', value: 'Calendar', active: true },
                  { icon: 'people', value: 'Clients' },
              ]}
          />
          <Drawer.Section
              title="Personal"
              items={[
                  { icon: 'info', value: 'Info' },
                  { icon: 'settings', value: 'Settings' },
              ]}
          />
        </Drawer>
      </View>
    )
  }
}

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    width: screenWidth,
    height: screenHeight * .1,
    backgroundColor: '#11212a'
  }
})


export const mapStateToProps = state => ({
  loading: state.loading,
});

export const mapDispatchToProps = dispatch => ({
  setLoading: data => dispatch(actions.setLoading(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
