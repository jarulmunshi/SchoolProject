import React from 'react';
import {TouchableOpacity,Text} from 'react-native';
import Color from './../../helper/theme/Color';
const Button = ({onPress,children}) =>{
    return(
        <TouchableOpacity onPress={onPress} style={buttonStyles.buttonStyle}>
            <Text style={buttonStyles.textStyle}>{children}</Text>
        </TouchableOpacity>
    )
};
const buttonStyles={
    buttonStyle:{
        backgroundColor:'#fff',
        alignSelf:'stretch',
        borderRadius:5,
        borderWidth:1,
        borderColor:Color.lightColor,
        marginLeft:5,
        marginRight:5,
        height:40,
        flex:1
    },
    textStyle:{
        alignSelf:'center',
        fontSize:20,
        color:Color.darkColor,
        fontWeight:'600',
        paddingBottom:10,
        paddingTop:10
    }
};
export {Button};