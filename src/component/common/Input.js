import React from 'react';
import {TextInput,Text,View} from 'react-native';
import Color from './../../helper/theme/Color';
const Input =({label,value,onChange,placeholder,secureTextEntry,keyboardType,editable})=>{
    return(
     <View style={inputStyles.containerStyle}>
         <Text style={inputStyles.textStyle}>{label}</Text>
         <TextInput
             secureTextEntry={secureTextEntry}
             placeholder={placeholder}
             autoCorrect={false}
             value={value}
             onChangeText={onChange}
             style={inputStyles.inputStyle}
             keyboardType={keyboardType||'default'}
             editable={editable||true}
         />
     </View>
    )
};

const inputStyles={
    textStyle:{
        flex:1,
        fontSize:18,
        paddingLeft:5,
        color:Color.lightColor
    },
    inputStyle:{
        color:'#000',
        fontSize:18,
        paddingRight:5,
        paddingLeft:5,
        lineHeight:23,
        flex:2
    },
    containerStyle:{
        height:40,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    }
};
export {Input}