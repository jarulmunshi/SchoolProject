import React,{Component} from 'react';
import {Text,View,Image,SafeAreaView,TouchableOpacity} from 'react-native';
import {CardSection,Card,Input,Button,Header} from './common/Common';
import Color from './../helper/theme/Color';
import Icon from 'react-native-vector-icons/FontAwesome';
import {emailEmpty,passwordEmpty,checkEmail} from './../validation/Validation';
class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            emailError:'',
            passwordError:'',
            iconError:''
        };
    }
    validateUser=()=>{
        if(emailEmpty(this.state.email) && passwordEmpty(this.state.password)){
            this.setState({iconError:'exclamation-circle'});
        }
        else if(emailEmpty(this.state.email) || passwordEmpty(this.state.password)){
            if(emailEmpty(this.state.email)){
                this.setState({iconError:'exclamation-circle'});
            }
            else if(passwordEmpty(this.state.password)){
                this.setState({iconError:'exclamation-circle'});
            }
        }
        else if(!checkEmail(this.state.email)){
            this.setState({iconError:'exclamation-circle'});
        }
        else {
            alert("Done");
        }

    };

    render(){
        const {imgStyle,viewStyle,headStyle,textStyle,linkStyle,newUserStyle}=styles
        return(
            <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
                <Image source={require('./../image/GD.jpeg')} size={70} style={imgStyle}/>
                <Header headerText="Login" headIcon="sign-in"/>
                <Card>
                    <CardSection>
                        <Input
                            onChange={(value)=>this.setState({email:value,emailError:''})}
                            placeholder="Email"
                            label="Email"
                        />
                        {this.state.iconError !=="" &&
                        <Text style={textStyle}><Icon name={this.state.iconError} size={20}/></Text>}
                    </CardSection>

                    <CardSection>
                        <Input
                            onChange={(value)=>this.setState({password:value,passwordError:''})}
                            placeholder="Password"
                            label="Password"
                        />
                        {this.state.iconError !=="" &&
                        <Text style={textStyle}><Icon name={this.state.iconError} size={20}/></Text>}
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
    }
};
export default Login;