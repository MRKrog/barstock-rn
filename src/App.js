import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';
import { StatusBar, View, Text } from "react-native";
// import DetailsScreen from './Details/Details';
// import HomeScreen from './HomeScreen';
// import ModalScreen from './ModalScreen';
// import MyHomeScreen from './MyHomeScreen';
// import MyNotificationsScreen from './Notifications';

// import DrawerContent from "./SideBar/SideBar"
import Icon from 'react-native-vector-icons/FontAwesome';
import LogoTitle from './components/LogoTitle/LogoTitle';
import { Avatar } from 'react-native-elements';

import HomeScreen from './containers/HomeScreen/HomeScreen';

// import { OrderContainer } from "./containers/Business/OrderContainer/OrderContianer"

// import ModalScreen from './ModalScreen';
import LoginScreen from './containers/LoginScreen/LoginScreen';
import SideMenu from './containers/SideMenu/SideMenu';
import SubmitOrder from "./containers/Business/SubmitOrder/SubmitOrder"
// import NotificationScreen from './NotificationScreen2';

// import { View } from 'react-native';
// import { Tab } from "./navigation";


//
// const MainStack = createStackNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//     },
//     Details: {
//       screen: DetailsScreen,
//     },
//   },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: '#11212a',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     },
//   }
// );


// const RootStack = createStackNavigator(
//   {
//     Main: {
//       screen: MainStack,
//     },
//     MyModal: {
//       screen: ModalScreen,
//     },
//   },
//   {
//     mode: 'modal',
//     headerMode: 'none',
//   }
// );

// const App = createAppContainer(RootStack);

// class App extends Component {
//   render() {
//     return (
//       <AppContainer/>
//     )
//   }
// }

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => {
        const params = navigation.state.params || {};
    
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
        };
      }
    },
    SubmitOrder: {
      screen: SubmitOrder,
      navigationOptions: ({ navigation }) => {
        const params = navigation.state.params || {};
    
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
        };
      }
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
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
      headerTintColor: '#fff'
    },
  }
);

// const NotificationStack = createStackNavigator({
//   Notification: {
//     screen: NotificationScreen
//   },
// }, {
//   initialRouteName: 'Notification'
// });

const Drawer = createDrawerNavigator({
  Home: { screen: HomeStack },
  Login: { screen: LoginScreen }
},
{
  contentComponent: SideMenu,
  drawerWidth: 200,
});

// export default createSwitchNavigator({
//   Login: LoginScreen,
//   Home : Drawer
// }, {
//   initialRouteName: 'Login'
// });




const AppConatiner = createAppContainer(
  createSwitchNavigator({
    Login: LoginScreen,
    Home: Drawer,
  },
  {
    initialRouteName: 'Login'
  })
);


export default class App extends Component {
  render() {
      return(
        <AppConatiner />
      );
  }
}
