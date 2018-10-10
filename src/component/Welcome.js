import React,{Component} from 'react';
import {Text,View} from 'react-native';
import Color from './../helper/theme/Color';
class Welcome extends Component{
    render(){
        return(
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Welcome</Text>
            </View>
        )
    }
}

const styles={
    viewStyle:{
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    textStyle:{
        fontSize:25,
        color:Color.darkColor
    }
};
export default Welcome;