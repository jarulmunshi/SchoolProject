import React,{Component} from 'react';
import {Text,View,SafeAreaView,Image} from 'react-native';
import {Header} from './common/Common';
import Icon from 'react-native-vector-icons/FontAwesome';
class Account extends Component{
    render(){
        return(
            <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
                <Header headerText="Account" headIcon="user-circle"/>
                <View style={styles.viewStyle}>
                    <Image style={styles.imgStyle} source={require('./../image/userIcon.png')} resizeMode="contain"/>
                    <View style={styles.childViewStyle}>
                        <Text style={styles.txtStyle}>Jarul</Text>
                        <Text style={styles.txtStyle}>+91 7600923449</Text>
                    </View>
                </View>
                <View style={styles.settingsStyle}>
                    <Text style={styles.settingsTextStyle}>SETTINGS</Text>
                </View>
                <View style={{flex:1}}>
                    <View style={styles.viewLinkStyle}>
                        <View style={{flex:1}}>
                            <Icon style={styles.viewIconStyle}name="user-circle" size={20}/>
                        </View>
                        <View style={styles.viewTextStyle}>
                            <Text style={styles.txtStyle}>Manage Profile</Text>
                        </View>

                    </View>
                    <Text style={styles.txtStyle}>Add student</Text>
                </View>
                <View style={{flex:2}}>

                </View>
            </SafeAreaView>
        )
    }
}
const styles={
    viewStyle:{
        flex:0.6,
        flexDirection:'row',
        backgroundColor:'rgb(249,250,252)',
        marginTop:10,
        justifyContent:'center',
        alignItems:'center'
    },
    imgStyle:{
        flex:1,
        height:70,
        width:70,
        marginLeft:10
    },
    childViewStyle:{
        flex:3,
        flexDirection:'column',
    },
    txtStyle:{
        paddingLeft:5,
    },
    settingsStyle:{
        flex:0.3,
        backgroundColor:'rgb(249,250,252)'
    },
    settingsTextStyle:{
        flex:1,
        marginLeft:20,
        marginTop:10
    },
    viewLinkStyle:{
        flexDirection:'row',
        flex:0.3
    },
    viewIconStyle:{
        borderWidth:1,
        marginLeft:10
    },
    viewTextStyle:{
        borderBottomWidth:1,
        borderColor:'gray',
        flex:3,
        marginLeft:10
    }
};
export default Account;