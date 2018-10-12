import React, {Component} from 'react';
import {Text, View, FlatList,Image} from 'react-native';
import {Header} from './common/Common';
import {connect} from 'react-redux';
import {getStudents} from './../actions/StudentAction';
class StudentDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            students:[]
        }
    }

    displayStudent=()=>{
      this.props.getStudents()
    };

    componentDidMount=()=>{
      this.displayStudent();
    };

    renderRow = ({item, index}) => {
        return(
            <View style={{height:50,marginTop:10}} key={index}>
                {item &&
                    <View style={styles.viewStyle}>
                        {item.Gender === true ?<Image style={styles.imgStyle} source={require(`./../image/Profile.png`)}/>:<Image style={styles.imgStyle} source={require(`./../image/Profile2.png`)}/>}
                        <Text style={styles.textStyle}>{item.student_name}</Text>
                    </View>
                }
            </View>)
    };

    render() {
        return (
            <View style={{backgroundColor:'white',flex:1}}>
                <Header headerText="Students" headIcon="users"/>
                <FlatList
                    data={this.props.studentDetail}
                    renderItem={this.renderRow}
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
        height:40
    },
    imgStyle:{
        height:25,
        width:30
    },
    textStyle:{
        paddingLeft:10,
        fontSize:16
    }
};
export default connect(mapStateToProps,{getStudents})(StudentDetail);