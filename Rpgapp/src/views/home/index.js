import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

class Home extends Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: { backgroundColor: 'cyan' },
    }

    navegacao = () => {
        this.props.navigation.navigate('Ficha')
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.navegacao}>
                    <View style={styles.view}><Text style={styles.text}>Ficha</Text></View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    container:{
        justifyContent:'center', 
        alignItems:'center',
        marginVertical: 10,
    },
    view:{
        backgroundColor:'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    text:{
        color:'white',
        fontWeight: 'bold',
    }
}
export default Home;