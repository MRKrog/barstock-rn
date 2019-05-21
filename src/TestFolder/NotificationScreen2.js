import React from "react";
import {
  View,
  Image,
  Button,
  Text,
  AsyncStorage
} from "react-native";


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

export default NotificationScreen
