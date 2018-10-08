import React,{Component} from 'react';
import {Text,Image,View,SafeAreaView,Picker,TouchableOpacity} from 'react-native';
import {Card,CardSection,Input,Button,Header} from './common/Common';
import Color from './../helper/theme/Color';
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
            loading:false,
            msg:'',
            color:'green',
            isBack:true
        }
    }
    openPicker=()=>{
        <Picker
            style={{ height: 50, width: 100 }}>
            <Picker.Item label="Class Teacher" value="admin" />
            <Picker.Item label="Teacher" value="teacher" />
            <Picker.Item label="Parenta" value="parent" />
        </Picker>
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
                            placeholder="Enter name"
                            label="Username"
                            keyboardType={'default'}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            placeholder="Enter email"
                            label="Email"
                            keyboardType={'email-address'}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            secureTextEntry={true}
                            placeholder=" Enter password"
                            label="Password"
                            keyboardType={'default'}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            placeholder="Enter mobile no."
                            label="Mobile No."
                            keyboardType={'decimal-pad'}
                        />
                    </CardSection>
                    <CardSection>
                        <View style={styles.containerStyle}>
                            <Text style={styles.textStyle}>User Type:</Text>
                            <TouchableOpacity style={{height:50}}>
                                <Text style={styles.textSelect}>Select Type</Text>
                                {/*<Input*/}
                                    {/*placeholder="Select Your Type"*/}
                                    {/*label="User Type"*/}
                                    {/*editable={false}*/}
                                {/*/>*/}
                            </TouchableOpacity>
                        </View>
                    </CardSection>
                    <CardSection>
                        <Button>Register</Button>
                    </CardSection>
                </Card>
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
    containerStyle:{
        height:40,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    textSelect:{
        flex:1,
        fontSize:18,
        color:Color.darkColor,
        alignSelf:'stretch',
        width:100
    },
    imgStyle:{
        height:80,
        width:170,
        alignSelf:'center',
        marginTop:10
    }
};
export default Registration;
