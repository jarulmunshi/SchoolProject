import React from 'react';
import Login from './../../component/Login';
import Registration from './../../component/Registration';
import Tab from './Tab';
import Profile from './../../component/Profile';
import Student from './../../component/Student';
import Help from './../../component/Help';
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
        },
        Profile:{
            screen:Profile
        },
        Student:{
            screen:Student
        },
        Help:{
            screen:Help
        }
    },
    {
        initialRouteName:'Login',
        headerMode:'none'
    }
);

export default stack;