import React from 'react'
import {StackNavigator} from 'react-navigation'
import {Ficha, Home} from '../views'

const Navigator = StackNavigator({
    Home:{
        screen:Home
    },
    Ficha:{
        screen:Ficha
    }
})

export default Navigator