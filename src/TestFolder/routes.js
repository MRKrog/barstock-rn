import { StackNavigator } from 'react-navigation';

import Home from './App';
// components
// import ActionButton from './ActionButton';
// import ActionButtonToolbar from './ActionButton/ActionButtonToolbar.react';
// import ActionButtonSpeedDial from './ActionButton/ActionButtonSpeedDial.react';
// import Avatar from './Avatar';
// import BottomNavigation from './BottomNavigation';
// import Badge from './Badge';
// import Button from './Button';
// import Card from './Card';
// import Checkbox from './Checkbox';
// import Dialog from './Dialog';
// import Drawer from './Drawer';
// import IconToggle from './IconToggle';
// import List from './List';
// import RadioButton from './RadioButton';
// import Toolbar from './Toolbars';

const AppNavigator = StackNavigator({
    home: { screen: Home },
}, {
    headerMode: 'none',
});

export default AppNavigator;
