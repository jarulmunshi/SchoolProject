import React from 'react';
import Login from './../../component/Login';
import Registration from './../../component/Registration';
import {createStackNavigator} from 'react-navigation';

const stack = createStackNavigator(
    {
        Login:{
            screen:Login
        },
        Registration:{
            screen:Registration
        }
    },
    {
        initialRouteName:'Login',
        headerMode:'none'
    }
);

export default stack;