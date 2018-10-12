import React from 'react';
import {TabNavigator,TabBarBottom,createBottomTabNavigator} from 'react-navigation';
import Account from './../../component/Account';
import Welcome from './../../component/Welcome';
import Students from './../../component/StudentDetail';
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from './../theme/Color';
export default createBottomTabNavigator(
    {
        Welcome:{
            screen:Welcome,
            navigationOptions: () => ({
            tabBarIcon: () => (
                <Icon
                    name="home"
                    size={24}
                />
            )
            })
        },

        Students:{
            screen:Students,
            navigationOptions: () => ({
                tabBarIcon: () => (
                    <Icon
                        name="users"
                        size={24}
                    />
                )
            })
        },
        Account:{
            screen:Account,
            navigationOptions: () => ({
                tabBarIcon: () => (
                    <Icon
                        name="user-circle"
                        size={24}
                    />
                )
            })
        }
    },
    {
        tabBarOptions: {
            activeTintColor:Color.darkColor,
            inactiveTintColor: 'gray',
            showIcon:true
        },
        animationEnabled: true,
        swipeEnabled: false,
    }

);