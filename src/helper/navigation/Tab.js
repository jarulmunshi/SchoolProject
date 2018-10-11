import React from 'react';
import {TabNavigator,TabBarBottom} from 'react-navigation';
import Account from './../../component/Account';
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