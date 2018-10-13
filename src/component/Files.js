import React,{Component} from 'react';
import {Text,View} from 'react-native';
import Color from './../helper/theme/Color';
import {Header} from './common/Common';
class Files extends Component{
    constructor(props){
        super(props);
        this.state={
            uname:props.navigation.state.params.name ||''
        }
    }
    render(){
        return(
            <View style={styles.viewStyle}>
                <Header headerText="Upload Data" headIcon="upload"/>
                <Text style={styles.textStyle}>File</Text>
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
        alignSelf:'center'
    }
};
export default Files;