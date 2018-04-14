import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Ficha extends Component {
  static navigationOptions = {
    title: <Text> Ficha </Text>,
    headerStyle: { backgroundColor: 'red' },
    headerTitleStyle: { color: 'green' },
  };

  render() {
    return (
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <Text> Ficha </Text>
      </View>
    );
  }
}

const styles = {
  header:{
    justifyContent:'center', 
    alignItems:'center',   
  }
};

export default Ficha;
