import React,{Component} from 'react';
import {Text,Image,View,SafeAreaView,Picker,TouchableOpacity} from 'react-native';
import ModalDropDown from 'react-native-modal-dropdown';
import {Card,CardSection,Input,Button,Header} from './common/Common';
import Color from './../helper/theme/Color';
import Icon from 'react-native-vector-icons/FontAwesome';
import {emailEmpty,passwordEmpty,checkEmail,empty,oneEmpty} from './../validation/Validation';
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
            loading:false,
            msg:'',
            color:'green',
            isBack:true
        }
    }
    validateData=()=>{
        if(empty(this.state.email,this.state.password,this.state.mno,this.state.name)){
            this.setState({iconError:'exclamation-circle'});
        }
        else if(oneEmpty(this.state.email,this.state.age,this.state.password,this.state.name)){
            if(emailEmpty(this.state.email)){
                this.setState({iconError:'exclamation-circle'});
            }
            else if(passwordEmpty(this.state.password)){
                this.setState({iconError:'exclamation-circle'});
            }
            else if(nameEmpty(this.state.name)){
                this.setState({iconError:'exclamation-circle'});
            }
            else {
                this.setState({iconError:'exclamation-circle'});
            }
        }
        else if(!checkEmail(this.state.email)){
            this.setState({iconError:'exclamation-circle'});
        }
        else if(!checkAge(this.state.age)){
            this.setState({iconError:'exclamation-circle'});

        }
        else {
            alert("DONE");
        }
    };
    render(){
        //debugger;
        return(
            <SafeAreaView style={{flex:1,backgroundColor: 'white'}}>
                <Image source={require('./../image/GD.jpeg')} size={70} style={styles.imgStyle}/>
                <Header headerText="Registration" headIcon="registered"/>
                <Card>
                    <CardSection>
                        <Input
                            onChange={(value)=>this.setState({name:value})}
                            placeholder="Name"
                            label="Username"
                            keyboardType={'default'}
                        />
                        {this.state.iconError !=="" &&
                        <Text style={styles.errorStyle}><Icon name={this.state.iconError} size={20}/></Text>}
                    </CardSection>
                    <CardSection>
                        <Input
                            onChange={(value)=>this.setState({email:value})}
                            placeholder="Email"
                            label="Email"
                            keyboardType={'email-address'}
                        />
                        {this.state.iconError !=="" &&
                        <Text style={styles.errorStyle}><Icon name={this.state.iconError} size={20}/></Text>}
                    </CardSection>
                    <CardSection>
                        <Input
                            onChange={(value)=>this.setState({password:value})}
                            secureTextEntry={true}
                            placeholder="Password"
                            label="Password"
                            keyboardType={'default'}
                        />
                        {this.state.iconError !=="" &&
                        <Text style={styles.errorStyle}><Icon name={this.state.iconError} size={20}/></Text>}
                    </CardSection>
                    <CardSection>
                        <Input
                            onChange={(value)=>this.setState({mno:value})}
                            placeholder="Mobile no."
                            label="Mobile No."
                            keyboardType={'decimal-pad'}
                        />
                        {this.state.iconError !=="" &&
                        <Text style={styles.errorStyle}><Icon name={this.state.iconError} size={20}/></Text>}
                    </CardSection>
                    <CardSection>
                        <View style={{flex:1,flexDirection:'row'}}>
                            <Text style={styles.textSelect}>User Type:</Text>
                            <ModalDropDown
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
                            />
                        </View>
                    </CardSection>
                    <CardSection>
                        <Button onPress={()=>this.validateData()}>Register</Button>
                    </CardSection>
                </Card>
            </SafeAreaView>

        )
    }
}
const styles={
    errorStyle:{
        color:'red',
        fontSize:16
    },
    textStyle:{
        flex:1,
        fontSize:18,
        paddingLeft:20,
        color:Color.lightColor
    },
    containerStyle:{
        height:40,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    textSelect:{
        flex:1,
        fontSize:18,
        color:Color.lightColor,
        alignSelf:'stretch',
        paddingLeft:5
    },
    imgStyle:{
        height:80,
        width:170,
        alignSelf:'center',
        marginTop:10
    },
    dropdownStyle:{

    }
};
export default Registration;
