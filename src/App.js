import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import LogoTitle from './components/LogoTitle/LogoTitle';
import { Avatar } from 'react-native-elements';
import HomeScreen from './containers/HomeScreen/HomeScreen';
import AccountContainer from "./containers/Business/AccountContainer/AccountContainer"
import LoginScreen from './containers/LoginScreen/LoginScreen';
import SideMenu from './containers/SideMenu/SideMenu';
import SubmitOrder from "./containers/Business/SubmitOrder/SubmitOrder"

const header = ({ navigation }) => {
  return {
    headerLeft: (
      <Icon.Button
        onPress={navigation.toggleDrawer}
        name="bars"
        size={30}
        backgroundColor="#11212a"
        color="#fff"
      />
    ),
    headerTitle: ( <LogoTitle /> ),
    headerRight: (
      <Avatar
        rounded
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1092886547068706816/xQNEOI5f_200x200.jpg',
        }}
      />
    ),
    headerStyle: {
      marginRight: 10,
      marginLeft: 10,
      backgroundColor: '#11212a',
      height: 60,
      shadowColor: '#231f20',
      shadowRadius: 5,
      shadowOpacity: 0.2,
      shadowOffset: {
        height: 3,
        width: 0,
      },
    },
    headerTintColor: '#fff',
    gesturesEnabled: false,
  };
}

const MainApp = createStackNavigator(
  {
    Order: {
      screen: HomeScreen,
    },
    SubmitOrder: {
      screen: SubmitOrder,
    },
    Account: {
      screen: AccountContainer,
    }
  },
  {
    initialRouteName: 'Order',
    defaultNavigationOptions: header
  }
);

const Drawer = createDrawerNavigator({
  MainApp: { screen: MainApp },
},
{
  contentComponent: SideMenu,
  drawerWidth: 200,
});

const AppConatiner = createAppContainer(
  createSwitchNavigator({
    Login: LoginScreen,
    MainApp: Drawer,
  },
  {
    initialRouteName: 'Login',
  })
);


export default class App extends Component {
  render() {
      return(
        <AppConatiner />
      );
  }
}
