import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

class Home extends Component {
    navegacao = () => {
        this.props.navigation.navigate('Ficha')
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.navegacao}>
                    <View style={styles.view}><Text style={styles.text}>Home</Text></View>
                </TouchableOpacity>
                <Button title='Ficha' onPress={this.navegacao}/>
            </View>
        );
    }
}

const styles = {
    container:{
        justifyContent:'center', 
        alignItems:'center',
    },
    view:{
        backgroundColor:'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    text:{
        color:'white'
    }
}
export default Home;