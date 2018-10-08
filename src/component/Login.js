import React,{Component} from 'react';
import {Text,View,Image,SafeAreaView,TouchableOpacity} from 'react-native';
import {CardSection,Card,Input,Button,Header} from './common/Common';
import Color from './../helper/theme/Color'
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


    render(){
        const {imgStyle,viewStyle,headStyle,textStyle,linkStyle,newUserStyle}=styles
        return(
            <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
                <Image source={require('./../image/GD.jpeg')} size={70} style={imgStyle}/>
                <Header headerText="Login" headIcon="sign-in"/>
                <Card>
                    <CardSection>
                        <Input
                            placeholder="Enter Your Email"
                            label="Email"
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            placeholder="Enter Your Password"
                            label="Password"
                        />
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