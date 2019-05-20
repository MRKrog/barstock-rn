import React from "react";
import {
  View,
  Image,
  Button,
  Text,
  AsyncStorage
} from "react-native";

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

export default LoginScreen
