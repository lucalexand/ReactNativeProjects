import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Descricao from './Descricao'
import Navigator from './src/config/routs'

class App extends Component {
  
  navegacao = () => {
    this.props.navigation.navigate('Ficha')
  }
  render() {
    return (
      <Navigator/>
    );
  }
}

export default App;
