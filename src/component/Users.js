import React,{Component} from 'react';
import {Text,View} from 'react-native';
import Color from './../helper/theme/Color';
import {Header} from './common/Common';
import {TabView,TabBar,SceneMap} from 'react-native-tab-view';
import Parent from './Parents';
import Teacher from './Teachers';
class Users extends Component{
    constructor(props){
        super(props);
        this.state={
            index:0,
            routes: [
                { key: 'Parent', title: 'Parents' },
                { key: 'Teacher', title: 'Teachers' },
            ]
        }
    }
    render(){
        return(
            <View style={styles.viewStyle}>
                <Header headerText="Users" headIcon="users"/>
                <TabView navigationState={this.state}
                         onIndexChange={index=>this.setState({index})}
                         renderScene={SceneMap({
                             Parent:Parent,
                             Teacher:Teacher
                         })}
                         style={styles.tabStyle}
                         tabStyle={{backgroundColor:"red"}}
                />
            </View>
        )
    }
}

const styles={
    viewStyle:{
        backgroundColor:'white',
        flex:1
    },
    textStyle:{
        fontSize:16,
        color:Color.lightColor,
        borderWidth:0.5,
        borderColor:'gray',
        borderRadius:4,
        margin:10
    },
    tabStyle:{
        backgroundColor:Color.lightColor,
        marginTop:10
    }
};
export default Users;