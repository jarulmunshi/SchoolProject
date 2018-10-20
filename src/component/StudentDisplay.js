import React,{Component} from 'react';
import {Text,View} from 'react-native';
import Color from './../helper/theme/Color';
import {Header} from './common/Common';
import {TabView,TabBar,SceneMap} from 'react-native-tab-view';
import Student from './StudentDetail';
import AttendanceStudent from './AttendanceStudent';
class StudentsDisplay extends Component{
    constructor(props){
        super(props);
        this.state={
            index:0,
            routes: [
                { key: 'Students', title: 'Students' },
                { key: 'AttendanceStudent', title: 'Attendance' ,getAccessible:false}
            ]
        }
    }
    render(){
        return(
            <View style={styles.viewStyle}>
                <Header headerText="Information" headIcon="info"/>
                <TabView navigationState={this.state}
                         onIndexChange={index=>this.setState({index})}
                         renderScene={SceneMap({
                             Students:Student,
                             AttendanceStudent:AttendanceStudent
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
export default StudentsDisplay;