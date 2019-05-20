import React, { Component } from 'react';
// import { TabNavigator, DrawerNavigator } from "react-navigation";
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';

import DetailsScreen from './Details/Details';
import HomeScreen from './HomeScreen2';
import LoginScreen from './LoginScreen2';
import NotificationScreen from './NotificationScreen2';

import DrawerContent from "./SideBar/SideBar"

import First from './First.js';
// import Second from '../views/Second';
//
import Home from './Home';
import Four from './Four.js';
// import Five from '../views/Five';

export const Drawer = DrawerNavigator({
  Home: {
    screen: Home,
  },
  Four: {
    screen: Four,
  }
}, {
  contentComponent: DrawerContent,
  drawerWidth: 250,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
});

export const Tab = TabNavigator({
  Home: {
    screen: Drawer,
  },
  First: {
    screen: First,
  }
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#f2f2f2',
    activeBackgroundColor: "#2EC4B6",
    inactiveTintColor: '#666',
    labelStyle: {
      fontSize: 22,
      padding: 12
    }
  }
});
