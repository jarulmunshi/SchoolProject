import React,{Component} from 'react';
import {Text,View} from 'react-native';
import Color from './../helper/theme/Color';
class Welcome extends Component{
    constructor(props){
        super(props);
        // const user=this.props.navigation.state.params.name ||'';
        this.state={
            uname:''
        }
    }
    render(){
        return(
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Welcome {this.state.uname}</Text>
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