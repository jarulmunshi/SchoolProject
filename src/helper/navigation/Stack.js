import React from 'react';
import Login from './../../component/Login';
import Registration from './../../component/Registration';
import Tab from './Tab';
import {createStackNavigator} from 'react-navigation';

const stack = createStackNavigator(
    {
        Login:{
            screen:Login
        },
        Registration:{
            screen:Registration
        },
        Tab:{
            screen:Tab
        }
    },
    {
        initialRouteName:'Tab',
        headerMode:'none'
    }
);

export default stack;