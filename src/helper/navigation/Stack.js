import React from 'react';
import Login from './../../component/Login';
import Registration from './../../component/Registration';
import Tab from './Tab';
import ParentTab from './ParentTab';
import TeacherTab from './TeacherTab';
import Profile from './../../component/Profile';
import Student from './../../component/Student';
import Help from './../../component/Help';
import Lecture from './../../component/Lecture';
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
        ParentTab:{
            screen:ParentTab
        },
        TeacherTab:{
            screen:TeacherTab
        },
        Profile:{
            screen:Profile
        },
        Student:{
            screen:Student
        },
        Help:{
            screen:Help
        },
        Lecture:{
            screen:Lecture
        }
    },
    {
        initialRouteName:'Login',
        headerMode:'none'
    }
);

export default stack;