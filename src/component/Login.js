import React,{Component} from 'react';
import {Text,View,Image,SafeAreaView,TouchableOpacity,ScrollView} from 'react-native';
import {CardSection,Card,Input,Button,Header} from './common/Common';
import Color from './../helper/theme/Color';
import Icon from 'react-native-vector-icons/FontAwesome';
import {emailEmpty,passwordEmpty,checkEmail} from './../validation/Validation';
import {loginUser} from './../actions/LoginAction';
import {connect} from 'react-redux';
class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:process.env.NODE_ENV === 'development' && 'jarul@gmail.com' || '',
            password:process.env.NODE_ENV === 'development' && '' || 'jarul',
            emailError:'',
            passwordError:'',
            iconError:'',
            isBack:true,
            iName:'chevron-left',
            loginMsg:'',
            userData:[]

        };
    }
    onBackButtonPress=()=>{
        this.props.navigation.goBack();
    };
    validateUser=()=>{
        if(emailEmpty(this.state.email) && passwordEmpty(this.state.password)){
            this.setState({iconError:'exclamation-circle',emailError:'Require',passwordError:'Require'});
        }
        else if(emailEmpty(this.state.email) || passwordEmpty(this.state.password)){
            if(emailEmpty(this.state.email)){
                this.setState({iconError:'exclamation-circle',emailError:'Require'});
            }
            else if(passwordEmpty(this.state.password)){
                this.setState({iconError:'exclamation-circle',passwordError:'Require'});
            }
        }
        else if(!checkEmail(this.state.email)){
            this.setState({iconError:'exclamation-circle',emailError:'Invalid'});
        }
        else {
            const data={
                email:this.state.email,
                password:this.state.password
            };
            this.props.loginUser(data).then((res)=>{
                const name=res.username;
                const role=res.user_role;
                this.setState({userData:res});
                console.log("====");
                console.log(this.state.userData);
                console.log("====");
                if(res.msg == 'Not verified'){
                    this.setState({loginMsg:'Your account not verified yet.Wait some time.'})
                }
                else {
                if(role === 'admin'){
                    this.props.navigation.navigate('Tab',{res,name:res.username,data:this.state.userData});
                }else if(role === 'teacher'){
                   this.props.navigation.navigate('TeacherTab',{res,name:res.username,data:this.state.userData});
                }else {
                    this.props.navigation.navigate('ParentTab',{res,name:res.username,data:this.state.userData});
                }}

            }).catch((err)=>{
                console.log(err);
                alert("Invalid user");
            })
        }

    };

    render(){
        const {imgStyle,viewStyle,headStyle,textStyle,linkStyle,newUserStyle,loginImageStyle}=styles
        return(
            <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <ScrollView>
                <Header
                    headerText="Login"
                    headIcon="sign-in"
                    onBackButtonPress={this.onBackButtonPress}
                    isBack={this.state.isBack}
                    iName={this.state.iName}
                />
                <Image source={require('./../image/Students.png')} size={50} style={loginImageStyle} resizeMode="contain"/>
                <Card>
                    <CardSection>
                        <Input
                            onChange={(value)=>this.setState({email:value,emailError:''})}
                            placeholder="Email"
                            label="Email"
                            value={this.state.email}
                        />
                        {this.state.emailError !=="" &&
                        <Text style={textStyle}><Icon name={this.state.iconError} size={20}/>{this.state.emailError}</Text>}
                    </CardSection>

                    <CardSection>
                        <Input
                            onChange={(value)=>this.setState({password:value,passwordError:''})}
                            placeholder="Password"
                            label="Password"
                            secureTextEntry={true}
                            value={this.state.password}
                        />
                        {this.state.passwordError !=="" &&
                        <Text style={textStyle}><Icon name={this.state.iconError} size={20}/>{this.state.passwordError}</Text>}
                    </CardSection>
                    <CardSection>
                        <Button onPress={()=>this.validateUser()}>Login</Button>
                    </CardSection>
                    <View style={viewStyle}>
                        <Text style={newUserStyle}>New user?</Text>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Registration')}>
                            <Text style={linkStyle}>Register Here</Text>
                        </TouchableOpacity>
                    </View>
                </Card>
                <Text style={[textStyle,{alignSelf:'center'}]}>{this.state.loginMsg}</Text>
            </ScrollView>
            </SafeAreaView>

        );
    };
}

const styles={
    textStyle:{
        color:'red',
        fontSize:16
    },
    headStyle:{
        fontSize:18,
        paddingLeft:20,
        paddingRight:30,
        alignSelf:'center'
    },
    imgStyle:{
        height:80,
        width:170,
        alignSelf:'center',
        marginTop:10
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
    },
    loginImageStyle:{
        height:90,
        width:'100%',
        alignSelf:'center',
        marginTop:20
    }
};
const mapStateToProps=()=>{
    return{};
};
export default connect(mapStateToProps,{loginUser})(Login);