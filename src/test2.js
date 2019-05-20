import React from "react";
import {
  View,
  Image,
  Button,
  Text,
  AsyncStorage
} from "react-native";

import {
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";


class LoginScreen extends React.Component {

  login = () => {
    this.props.navigation.navigate('Home');
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: "center"}}>
        <View style={{padding: 20, alignItems: "center"}}>
          <Text>Login Screen </Text>
        </View>
        <Button
          onPress={this.login}
          title="Go to Home"
        />
      </View>
    );
  }
}

class HomeScreen extends React.Component {

  openMenu = () => {
    this.props.navigation.toggleDrawer();
  }
  logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: "center"}}>
        <View style={{padding: 20}}>
          <Button
            onPress={this.openMenu}
            title="Open Menu"
          />
        </View>
        <View style={{padding: 20}}>
          <Button
            onPress={this.logout}
            title="Logout"
          />
        </View>
      </View>
    );
  }
}

class NotificationScreen extends React.Component {

  openMenu = () => {
    this.props.navigation.toggleDrawer();
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: "center"}}>
        <View style={{padding: 20, alignItems: "center"}}>
          <Text>Notification screen </Text>
        </View>
        <Button
          onPress={this.openMenu}
          title="Go to Home"
        />
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
}, {
  initialRouteName: 'Home'
});

const NotificationStack = createStackNavigator({
  Notification: {
    screen: NotificationScreen
  },
}, {
  initialRouteName: 'Notification'
});



const Drawer =  createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  Notifications: {
    screen: NotificationStack,
  },
},
{
  initialRouteName: 'Home'
});


export default createSwitchNavigator({
  Login: LoginScreen,
  Home : Drawer
}, {
  initialRouteName: 'Login'
});
