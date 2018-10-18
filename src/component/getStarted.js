import React,{Component} from 'react';
import {Text,View,ScrollView,Image} from 'react-native';
import Color from './../helper/theme/Color';

class Welcome extends Component{
    constructor(props){
        super(props);

    }
    render(){
        const {loginImageStyle}=styles;
        return(
            <View style={styles.viewStyle}>
                <ScrollView
                horizontal={true}
                style={{marginTop:30,flex:1,width:'100%'}}
                >
                    <View style={{flex:1}}>
                        <Text>Hi</Text>
                        <Image source={require('./../image/home1.png')} style={loginImageStyle}/>
                        <Image source={require('./../image/home2.png')} style={loginImageStyle} resizeMode="contain"/>
                        <Image source={require('./../image/home3.png')} style={loginImageStyle} resizeMode="contain"/>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles={
    viewStyle:{
        backgroundColor:'white',
        flex:1
    },
    textStyle:{
        fontSize:16,
        color:Color.lightColor,
        borderWidth:0.5,
        borderColor:'gray',
        borderRadius:4,
        margin:10
    },loginImageStyle:{
        height:400,
        width:null,
        flex:1
    }

};
export default Welcome;