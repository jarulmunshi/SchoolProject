import React,{Component} from 'react';
import {Text,View} from 'react-native';
import Color from './../helper/theme/Color';
import {Header} from './common/Common';
class Welcome extends Component{
    constructor(props){
        super(props);
        this.state={
            uname:props.navigation.state.params.name ||''
        }
    }
    render(){
        return(
            <View style={styles.viewStyle}>
                <Header headerText="Home" headIcon="home"/>
                <Text style={styles.textStyle}>Welcome {this.state.uname}</Text>
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
        fontSize:25,
        color:Color.darkColor,
        alignSelf:'center',
        justifySelf:'center',
    }
};
export default Welcome;