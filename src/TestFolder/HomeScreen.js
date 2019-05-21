import React, { Component } from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import LogoTitle from './LogoTitle';
import { fetchData } from './utility/fetchData';


class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: <LogoTitle />,
      headerLeft: <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Notifications')}>
            <Image
                source={require('./images/barStock.png')}
                style={{width: 26, height: 26, resizeMode: 'contain', align: 'right', marginTop: 8}}
            />
        </TouchableOpacity>,
      headerRight: (
        <Button onPress={params.increaseCount} title="+1" color="#fff" />
      ),
    };
  };

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetchData('http://whateverly-datasets.herokuapp.com/api/v1/distributor')
    console.log('response', response);
  }

  componentWillMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text>Count: {this.state.count}</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'First Details',
            });
          }}
        />
      </View>
    );
  }
}

export default HomeScreen
