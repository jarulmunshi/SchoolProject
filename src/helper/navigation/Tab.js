import React from 'react';
import {TabNavigator,TabBarBottom} from 'react-navigation';
import Profile from './../../component/Profile';
import Student from './../../component/Student';
import Welcome from './../../component/Welcome';
import Icon from 'react-native-vector-icons/FontAwesome';
export default TabNavigator(
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
        Profile:{
            screen:Profile,
            navigationOptions: () => ({
                tabBarIcon: () => (
                    <Icon
                        name="user-circle"
                        size={24}
                    />
                )
            })
        },
        Student:{
            screen:Student,
            navigationOptions: () => ({
                tabBarIcon: () => (
                    <Icon
                        name="user-plus"
                        size={24}
                    />
                )
            })
        }
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: 'rgb(222,151,37)',
            inactiveTintColor: 'gray',
            showIcon:true
        },
        animationEnabled: true,
        swipeEnabled: false,
    }

);