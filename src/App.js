import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';
import DetailsScreen from './Details/Details';
// import HomeScreen from './HomeScreen';
import ModalScreen from './ModalScreen';
// import MyHomeScreen from './MyHomeScreen';
// import MyNotificationsScreen from './Notifications';

import HomeScreen from './HomeScreen2';
// import ModalScreen from './ModalScreen';
import LoginScreen from './LoginScreen2';
import NotificationScreen from './NotificationScreen2';


const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#11212a',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

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
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

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

// export default createSwitchNavigator({
//   Login: LoginScreen,
//   Home : Drawer
// }, {
//   initialRouteName: 'Login'
// });

const App = createAppContainer(
  createSwitchNavigator({
    Login: LoginScreen,
    Home : Drawer
  },
  {
    initialRouteName: 'Login'
  })
);

export default App
