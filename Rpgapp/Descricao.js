import React, { Component } from 'react';
import { View, Text,  } from 'react-native';

class Descricao extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> {this.props.nome} </Text>
        <Text> {this.props.valor} </Text>
      </View>
    );
  }
}

const styles = {
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 150,
    }
}

export default Descricao;
