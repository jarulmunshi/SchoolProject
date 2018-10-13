import React,{Component} from 'react';
import {Text,Image,View,SafeAreaView,TouchableOpacity,ScrollView} from 'react-native';
import {Card,CardSection,Button,Header} from './common/Common';
import Color from './../helper/theme/Color';
import {updateUser} from './../actions/ProfileAction';
import Home from './common/Home';
import {connect} from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons';
class Profile extends Component{
    constructor(props){
        super(props);
        this.state={
            id:props.userDetail.user_id,
            name:props.userDetail.username||'',
            nameError:'',
            email:props.userDetail.email||'',
            emailError:'',
            mno:props.userDetail.mobile_no||'',
            mnoError:'',
            iconError:'',
            password:props.userDetail.password||'',
            passwordError:'',
            loading:false,
            msg:'',
            color:'green',
            isBack:true,
            usertype:props.userDetail.user_role||'',
            img:'',
            iName:'chevron-left',
            editable:false,
            secureTextEntry:false
        };
        console.log("ID:"+this.state.id);
    }
    onBackButtonPress=()=>{
        this.props.navigation.goBack();
    };
    onUpdate=()=>{
        debugger;
        const data={
            user_id:this.state.id,
            username:this.state.name,
            email:this.state.email,
            mobile_no:this.state.mno
        };
        this.props.updateUser(data).then((res)=>{
            alert("Data updated Success");
        }).catch((err)=>{
            alert("Invalid");
        })
    };
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
    showImagePicker=()=>{
        ImagePicker.showImagePicker((response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    img: source,
                });
                alert(this.state.img);
            }
        });
    };
    render(){
        //debugger;
        //console.log(this.props.userDetail);
        return(
            <SafeAreaView style={{flex:1,backgroundColor: 'white'}}>
            <ScrollView>
                <Header
                    headerText="Profile Settings"
                    headIcon="user-circle"
                    onBackButtonPress={this.onBackButtonPress}
                    isBack={this.state.isBack}
                    iName={this.state.iName}
                />
                <TouchableOpacity onPress={()=>this.showImagePicker()}>
                    <Image source={require('./../image/User.png')} style={styles.imgStyle}/>
                </TouchableOpacity>
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
                        editable={this.state.editable}
                        secureTextEntry={this.state.secureTextEntry}
                    />
                    <CardSection>
                        <View style={{
                            height:40,
                            flex:1,
                            flexDirection:'row',
                            alignItems:'center'
                        }}>
                            <Text style={styles.textSelect}>User Type:</Text>
                            <Text style={styles.textSelect}>{this.state.usertype}</Text>
                        </View>
                    </CardSection>
                    <CardSection>
                        <Button onPress={()=>this.onUpdate()}>Update Profile</Button>
                    </CardSection>
                </Card>
            </ScrollView>
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
        height:100,
        width:100,
        alignSelf:'center',
        marginTop:10
    }
};
const mapStateToProps=(state)=>{
    return{
        userDetail:state.user.userDetail
    };
};
export default connect(mapStateToProps,{
    updateUser
})(Profile);
