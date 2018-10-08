import React from 'react';
import {Text,View,TouchableWithoutFeedback} from 'react-native';
import {DrawerAction} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from './../../helper/theme/Color';
const Header = (props) =>{
    const {headerStyle,textStyle} = headerStyles;
    return(
        <View style={headerStyle}>
            <View style={{flexDirection:'row',paddingTop:5}}>
                <Icon style={{paddingRight:5,color:Color.lightColor}} name={props.headIcon} size={25}/>
                <Text style={textStyle}>{props.headerText}</Text>
            </View>
        </View>
    )
};
const headerStyles={
    headerStyle:{
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#ddd',
        shadowColor:'#fff',
        shadowOffset:{width:0,height:5},
        shadowOpacity:0.7,
        flexDirection:'row'
    },
    textStyle:{
        fontWeight:'bold',
        fontSize:20,
        color:Color.darkColor
    }
};
export {Header};