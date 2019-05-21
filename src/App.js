import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';
// import DetailsScreen from './Details/Details';
// import HomeScreen from './HomeScreen';
// import ModalScreen from './ModalScreen';
// import MyHomeScreen from './MyHomeScreen';
// import MyNotificationsScreen from './Notifications';

// import DrawerContent from "./SideBar/SideBar"

import HomeScreen from './containers/HomeScreen/HomeScreen';

// import { OrderContainer } from "./containers/Business/OrderContainer/OrderContianer"

// import ModalScreen from './ModalScreen';
import LoginScreen from './containers/LoginScreen/LoginScreen';
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
      screen: HomeScreen
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
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
      headerTitleStyle: {
        fontWeight: 'bold',
      },
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
  Home: {
    screen: HomeStack,
  }
},
{
  // initialRouteName: 'Home',
  // contentComponent: DrawerContent,
  // drawerWidth: 250,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
});

// export default createSwitchNavigator({
//   Login: LoginScreen,
//   Home : Drawer
// }, {
//   initialRouteName: 'Login'
// });




const App = createAppContainer(
  createSwitchNavigator({
    Login: LoginScreen,
    Home: Drawer
  },
  {
    initialRouteName: 'Login'
  })
);


//
// class App extends Component {
//   render() {
//       return(
//         <Tab />
//       );
//   }
// }



export default App
