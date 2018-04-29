import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

class Ficha extends Component {
  static navigationOptions = {
    title: 'Ficha',
    headerStyle: { backgroundColor: 'cyan' },
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.linha}>
          <View style={styles.atributos}>
            <Text style={styles.nomeAtributo}> FOR </Text>
            <TextInput 
              style={styles.textInput} 
              onChangeText={(text) => this.setState({text})}
            />
          </View>

          <View style={styles.atributos}>
            <Text> DES </Text>
            <TextInput 
              style={styles.textInput} 
              onChangeText={(text) => this.setState({text})}
            />
          </View>
        </View>

        <View style={styles.linha}>
          <View style={styles.atributos}>
            <Text> AGI </Text>
            <TextInput 
              style={styles.textInput} 
              onChangeText={(text) => this.setState({text})}
            />
          </View>

          <View style={styles.atributos}>
            <Text> SEN </Text>
            <TextInput 
              style={styles.textInput} 
              onChangeText={(text) => this.setState({text})}
            />
          </View>
        </View>

        <View style={styles.linha}>
          <View style={styles.atributos}>
            <Text> INT </Text>
            <TextInput 
              style={styles.textInput} 
              onChangeText={(text) => this.setState({text})}
            />
          </View>

          <View style={styles.atributos}>
            <Text> CAR </Text>
            <TextInput 
              style={styles.textInput} 
              onChangeText={(text) => this.setState({text})}
            />
          </View>
        </View>

        <View style={styles.linha}>
          <View style={styles.atributos}>
            <Text> VON </Text>
            <TextInput 
              style={styles.textInput} 
              onChangeText={(text) => this.setState({text})}
            />
          </View>

          <View style={styles.atributos}>
            <Text> CON </Text>
            <TextInput 
              style={styles.textInput} 
              onChangeText={(text) => this.setState({text})}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  container:{
    flex: 1,
    flexDirection: 'column',
    maxWidth: '80%',
    maxHeight: '50%',
    justifyContent:'space-between', 
    //alignItems: 'center',
    paddingHorizontal: '5%',
    //paddingVertical: '10%',
    marginVertical: '5%',
    marginHorizontal: '10%',
    borderColor: 'black',
    borderWidth: 3,
  },

  linha:{
    flex: 1,
    flexDirection: 'row',
    maxWidth: '100%',
    maxHeight: '25%',
    justifyContent:'space-between',
  },

  atributos:{
    flex: 1,
    flexDirection: 'row',
    maxWidth: '45%',
    paddingHorizontal: '10%',
    borderColor: 'green',
    borderWidth: 1,
    justifyContent:'space-between', 
    alignItems:'center',
  },

  nomeAtributo:{
    //flex: 1,
    width: '40%',
    height: '100%',
    justifyContent:'center', 
    alignItems:'center',
    backgroundColor: 'grey',
  },

  textInput:{
    height: '80%', 
    width: '40%', 
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'red',
  }
};

/**<Text> Agilidade </Text>
        <TextInput 
          style={styles.textInput} 
          onChangeText={(text) => this.setState({text})}
        />

        <Text> Senso </Text>
        <TextInput 
          style={styles.textInput} 
          onChangeText={(text) => this.setState({text})}
        />

        <Text> Inteligencia </Text>
        <TextInput 
          style={styles.textInput} 
          onChangeText={(text) => this.setState({text})}
        />

        <Text> Carisma </Text>
        <TextInput 
          style={styles.textInput} 
          onChangeText={(text) => this.setState({text})}
        />

        <Text> Vontade </Text>
        <TextInput 
          style={styles.textInput} 
          onChangeText={(text) => this.setState({text})}
        />
        
        <Text> Constituição </Text>
        <TextInput 
          style={styles.textInput} 
          onChangeText={(text) => this.setState({text})}
        /> */

export default Ficha;
