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

// 191414
// 232121

const header = ({ navigation }) => {
  return {
    headerLeft: (
      <Icon.Button
        onPress={navigation.toggleDrawer}
        name="bars"
        size={25}
        backgroundColor="#232121"
        padding={0}
        marginLeft={15}
        color="#fff"
      />
    ),
    headerTitle: ( <LogoTitle /> ),
    headerRight: (
      <Avatar
        rounded
        marginRight={15}
        size={30}
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1092886547068706816/xQNEOI5f_200x200.jpg',
        }}
      />
    ),
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: '#232121',
      height: 50,
      shadowColor: '#231f20',
      shadowRadius: 3,
      shadowOpacity: 0.1,
      shadowOffset: {
        height: 1,
        width: 0,
      },
    },
    headerTintColor: '#231f20',
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
