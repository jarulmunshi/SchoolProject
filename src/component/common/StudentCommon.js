import React, {Component} from 'react';
import {Text,TextInput, View, FlatList,Image,TouchableOpacity,Alert} from 'react-native';
import {Header,Button} from './Common';
import {connect} from 'react-redux';
import {getStudents,getStudentsNameBy} from './../../actions/StudentAction';
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from './../../helper/theme/Color';
import {getAttendance} from './../../actions/AttendanceAction';
import _ from 'lodash';
class StudentDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            sid:0,
            flag:0,
            done:0,
            nameSearch:'',
            searchFlag:0
        }
    }

    displayStudent=()=>{
        this.props.getStudents();
    };
    getData=()=>{
        this.props.getAttendance().then((r)=>{
            if(r.msg == 'Done'){
                this.setState({flag:1,tab:false});
                console.log(this.state.flag);
            }else {
                this.setState({flag:0});
                console.log(this.state.flag);
                console.log("Done");
            }
        }).catch(err=>{
            console.log(err);
        })
    };
    componentDidMount=()=>{
        this.displayStudent();
        this.getData();
    };
    getStudentsByName=(name)=>{
        if(name){
        this.setState({searchFlag:1});}
        else {
            this.setState({searchFlag:0});
            alert("Enter name for search");
        }
        //return studentData = _.filter(this.props.studentDetail, {state_temp:0,student_name:name});
    };

    render() {
        const studData=_.filter(this.props.studentDetail, {state_temp:0,student_name:this.state.nameSearch})||"No Student";
        return (
        <View style={{backgroundColor:'white',flex:1}}>
            {this.props.date &&
            <Text style={styles.textStyle}>{this.props.date}</Text>}
            {this.props.searchStud == 1 && <View style={{flexDirection:'row',height:50,marginTop:5,paddingLeft:15}}>
                <TextInput
                    placeholder="Enter Student Name"
                    style={{flex:1,borderBottomWidth:1,borderBottomColor:Color.darkColor}}
                    onChangeText={(val)=>this.setState({nameSearch:val,searchFlag:0})}
                />
                <TouchableOpacity onPress={()=>this.getStudentsByName(this.state.nameSearch)}>
                    <Icon style={{paddingRight:15,color:Color.lightColor,marginTop:10}} name="search" size={25}/>
                </TouchableOpacity>
            </View>}
            <FlatList
                data={this.state.searchFlag==0 && this.props.data || studData }
                renderItem={this.props.renderItem}
                keyExtractor={this.props.keyExtractor}
            />
        </View>

        )
}
}
const mapStateToProps=(state)=>{
    return{
        studentDetail:state.stud.studentDetail
    }
};
const styles={
    viewStyle:{
        borderWidth:0.5,
        borderRadius:5,
        shadowColor:'gray',
        shadowOffset:{width:0,height:5},
        shadowOpacity:0.2,
        borderColor:'#ddd',
        margin:5,
        flexDirection:'row',
        alignItems:'center',
        height:40,
        flex:1
    },
    imgStyle:{
        height:25,
        width:30
    },
    textStyle:{
        paddingLeft:10,
        fontSize:16,
        color:Color.extraDark,
        marginTop:10
    },
    iconStyle:{
        color:'red',
        paddingRight:5
    }
};
export default connect(mapStateToProps,{
    getStudents,getAttendance,getStudentsNameBy
})(StudentDetail);