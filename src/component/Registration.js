import React,{Component} from 'react';
import {Text,Image,View,SafeAreaView,Picker,TouchableOpacity,ScrollView} from 'react-native';
import ModalDropDown from 'react-native-modal-dropdown';
import {Card,CardSection,Input,Button,Header} from './common/Common';
import Color from './../helper/theme/Color';
import Icon from 'react-native-vector-icons/FontAwesome';
import {emailEmpty,passwordEmpty,checkEmail,empty,oneEmpty} from './../validation/Validation';
import {registerUser} from './../actions/RegistrationAction';
import Home from './common/Home';
import {connect} from 'react-redux';
class Registration extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            nameError:'',
            email:'',
            emailError:'',
            mno:'',
            mnoError:'',
            iconError:'',
            password:'',
            passwordError:'',
            usertype:'parent',
            loading:false,
            msg:'',
            color:'green',
            isBack:true
        }
    }
    onChange=(text,key)=>{
        let state=this.state;
        state[key]=text;
        if(key === 'name'){
            state['nameError']='';
            state['msg']='';
        }
        else if(key === 'email'){
            state['emailError']='';
            state['msg']='';
        }
        else if(key === 'password'){
            state['passwordError']='';
            state['msg']='';
        }
        else if(key === 'mno'){
            state['mnoError']='';
            state['msg']='';
        }
        this.setState(this.state);
    };
    validateData=()=>{
        if(empty(this.state.email,this.state.password,this.state.mno,this.state.name)){
            this.setState({
                iconError:'exclamation-circle',
                emailError:'Require',
                passwordError:'Require',
                mnoError:'Require',
                nameError:'Require'
            });
        }
        else if(oneEmpty(this.state.email,this.state.age,this.state.password,this.state.name)){
            if(emailEmpty(this.state.email)){
                this.setState({iconError:'exclamation-circle',emailError:'Require'});
            }
            else if(passwordEmpty(this.state.password)){
                this.setState({iconError:'exclamation-circle',passwordError:'Require'});
            }
            else if(nameEmpty(this.state.name)){
                this.setState({iconError:'exclamation-circle',nameError:'Require'});
            }
            else {
                this.setState({iconError:'exclamation-circle',mnoError:'Require'});
            }
        }
        else if(!checkEmail(this.state.email)){
            this.setState({iconError:'exclamation-circle',emailError:'Invalid'});
        }
        else {
            //alert(this.state.usertype);
            const data={
                username:this.state.name,
                email:this.state.email,
                password:this.state.password,
                mobile_no:this.state.mno,
                user_role:this.state.usertype
            };
            //alert(this.state.name+this.state.email+this.state.password+this.state.mno+this.state.usertype);
            this.props.registerUser(data).then((res)=>{
                alert("Valid");
            }).catch((err)=>{
                alert("error");
            })
        }
    };
    render(){
        //debugger;
        const {viewStyle,textStyle,textSelect,loginImageStyle,newUserStyle,linkStyle}=styles;
        return(
            <SafeAreaView style={{flex:1,backgroundColor: 'white'}}>
                <ScrollView>
                <Header headerText="Registration" headIcon="registered"/>
                <Image source={require('./../image/Students.png')} size={50} style={loginImageStyle} resizeMode="contain"/>
                <Card>
                    <Home
                        name={this.state.name}
                        nameError={this.state.nameError}
                        email={this.state.email}
                        emailError={this.state.emailError}
                        password={this.state.password}
                        passwordError={this.state.passwordError}
                        mno={this.state.mno}
                        mnoError={this.state.mnoError}
                        iconError={this.state.iconError}
                        onChange={this.onChange}
                    />
                    <CardSection>
                        <View style={{flex:1,flexDirection:'row',height:40,alignItems:'center'}}>
                            <Text style={textSelect}>User Type:</Text>
                            <ModalDropDown
                                defaultIndex={2}
                                style={{
                                    alignSelf:'flex-start',
                                    height:50,
                                    width:100,
                                    flex:2
                                }}
                                textStyle={{
                                    fontSize:16,
                                    color:Color.extraDark
                                }}
                                options={['Class Teacher','Teacher','Parent']}
                                onSelect={(value)=>{
                                    if(value==0){
                                        data='admin'
                                    }
                                    else if(value==1){
                                        data='teacher'
                                    }
                                    else{
                                        data='parent'
                                    }
                                    this.setState({usertype:data})
                                }}
                            />
                        </View>
                    </CardSection>
                    <CardSection>
                        <Button onPress={()=>this.validateData()}>Register</Button>
                    </CardSection>
                    <View style={viewStyle}>
                        <Text style={newUserStyle}>Already user?</Text>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
                            <Text style={linkStyle}>Login Here</Text>
                        </TouchableOpacity>
                    </View>
                </Card>
                </ScrollView>
            </SafeAreaView>

        )
    }
}
const styles={
    textStyle:{
        flex:1,
        fontSize:18,
        paddingLeft:20,
        color:Color.lightColor
    },
    textSelect:{
        flex:1,
        fontSize:18,
        paddingLeft:5,
        color:Color.lightColor
    },
    loginImageStyle:{
        height:90,
        width:'100%',
        alignSelf:'center',
        marginTop:20
    },
    viewStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:5
    },
    newUserStyle:{
        color:Color.lightColor,
        fontSize:16,
        fontWeight:'bold',
        paddingRight:5
    },
    linkStyle:{
        color:Color.extraDark,
        fontSize:16,
        fontWeight:'bold'
    }
};
const mapStateToProps=()=>{
    return{};
};
export default connect(mapStateToProps,{
    registerUser
})(Registration);
