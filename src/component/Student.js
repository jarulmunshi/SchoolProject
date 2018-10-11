import React,{Component} from 'react';
import {Text,Image,View,SafeAreaView,TouchableOpacity} from 'react-native';
import {Card,CardSection,Button,Input,Header} from './common/Common';
import Color from './../helper/theme/Color';
import DatePicker from 'react-native-datepicker';
import {connect} from 'react-redux';

class Student extends Component{
    constructor(props){
        super(props);
        this.state={
            bgFemale:Color.darkColor,
            bgMale:'',
            name:'',
            bdate:'',
            gender:'female',
            pname:'',
            pmno:'',
            isBack:true,
            iName:'chevron-left'
        }
    }
    onBackButtonPress=()=>{
        this.props.navigation.goBack();
    };
    render(){
        //debugger;
        return(
            <SafeAreaView style={{flex:1,backgroundColor: 'white'}}>
                <Header
                    headerText="Add Student"
                    headIcon="user-plus"
                    onBackButtonPress={this.onBackButtonPress}
                    isBack={this.state.isBack}
                    iName={this.state.iName}
                />
                <Image source={require('./../image/stud.png')} size={30} style={styles.headImgStyle}/>
                <Card>
                    <CardSection>
                        <Input
                            onChange={(value)=>this.setState({name:value})}
                            placeholder="Name"
                            label="Student name"
                            keyboardType={'default'}
                        />
                    </CardSection>
                    <CardSection>
                        <View style={{flex:1,flexDirection:'row',height:40,alignItems:'center'}}>
                            <Text style={styles.textSelect}>Gender</Text>
                            <TouchableOpacity style={[styles.viewStyle,{backgroundColor:this.state.bgFemale}]}
                                              onPress={()=>this.setState({
                                                  gender:'female',bgFemale:Color.darkColor,bgMale:'white'
                                              })}>
                                    <Image style={styles.imgStyle} source={require('./../image/Profile.png')} size={30}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.viewStyle,{backgroundColor:this.state.bgMale}]}
                                              onPress={()=>this.setState({
                                                  gender:'male',bgMale:Color.darkColor,bgFemale:'white'
                                              })}>
                                    <Image style={styles.imgStyle} source={require('./../image/Profile2.png')} size={30}/>
                            </TouchableOpacity>
                        </View>
                    </CardSection>
                    <CardSection>
                        <View style={{flex:1,flexDirection:'row',height:40,alignItems:'center'}}>
                            <Text style={styles.textSelect}>Birthdate</Text>
                            <DatePicker
                                style={styles.datePickerStyle}
                                mode="date"
                                confirmBtnText="Done"
                                cancelBtnText="Cancel"
                                onDateChange={(date) => {this.setState({bdate: date})}}
                                date={this.state.bdate}
                            />
                        </View>
                    </CardSection>
                    <CardSection>
                        <Input
                            onChange={(value)=>this.setState({pname:value})}
                            placeholder="Parent Name"
                            label="Parent name"
                            keyboardType={'default'}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            onChange={(value)=>this.setState({pmno:value})}
                            placeholder="Mobile No."
                            label="Parent No."
                            keyboardType={'number-pad'}
                        />
                    </CardSection>
                    <CardSection>
                        <Button onPress={()=>{alert(this.state.bdate + this.state.name + this.state.gender +
                        this.state.pmno + this.state.pname)}}>Add</Button>
                    </CardSection>
                </Card>

            </SafeAreaView>

        )
    }
}
const styles={
    textSelect:{
        flex:1,
        fontSize:18,
        paddingLeft:5,
        color:Color.lightColor
    },
    imgStyle:{
        height:25,
        width:30,
        alignSelf:'center',
        marginTop:10
    },
    viewStyle:{
        backgroundColor:'white',
        width:50,
        height:40,
        borderWidth:1,
        borderRadius:5,
        flex:1,
        borderColor:Color.darkColor,
        marginLeft:10,
        alignItems:'center'
    },
    datePickerStyle:{
        width: 200,
        paddingRight:10
    },
    headImgStyle:{
        marginTop:10,
        alignSelf:'center',
        height:70
    }
};
const mapToState=()=>{
    return{};
};
export default Student;