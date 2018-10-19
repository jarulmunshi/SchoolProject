import React,{Component} from 'react';
import {Text,View,ScrollView,Image,SafeAreaView,TouchableOpacity,Dimensions} from 'react-native';
import Color from './../helper/theme/Color';
import Value from './../helper/theme/Value';
class Welcome extends Component{
    constructor(props){
        super(props);

    }
    render(){
        const {loginImageStyle,childViewStyle,buttonStyle,textStyle,imgTextStyle}=styles;
        return(
            <SafeAreaView style={{backgroundColor:'white',flex:1}}>
                <ScrollView
                            horizontal={true}
                            style={styles.viewStyle}
                            automaticallyAdjustContentInsets={false}
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                >
                    <View style={childViewStyle}>
                        <View style={{flex:3}}>
                            <Image source={require('./../image/home1.png')} style={loginImageStyle} resizeMode="contain"/>
                            <Text style={imgTextStyle}>Teacher</Text>
                            <Text style={imgTextStyle}>
                                Motivate students to do better in class.
                            </Text>
                        </View>
                        <View  style={{flex:1}}>
                            <TouchableOpacity style={buttonStyle}
                                              onPress={()=>this.props.navigation.navigate('Login')}>
                                <Text style={textStyle}>Get Started</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={childViewStyle}>
                        <View style={{flex:3}}>
                            <Image source={require('./../image/home2.png')} style={loginImageStyle} resizeMode="contain"/>
                            <Text style={imgTextStyle}>Parent</Text>
                            <Text style={imgTextStyle}>
                                Know what your child is upto in classroom.
                            </Text>
                        </View>
                        <View  style={{flex:1}}>
                            <TouchableOpacity style={buttonStyle}
                                              onPress={()=>this.props.navigation.navigate('Login')}>
                                <Text style={textStyle}>Get Started</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={childViewStyle}>
                        <View style={{flex:3}}>
                            <Image source={require('./../image/home3.png')} style={loginImageStyle} resizeMode="contain"/>
                            <Text style={imgTextStyle}>School</Text>
                            <Text style={imgTextStyle}>
                                Setup communication channel.
                            </Text>
                        </View>
                        <View  style={{flex:1}}>
                            <TouchableOpacity style={buttonStyle}
                                              onPress={()=>this.props.navigation.navigate('Login')}>
                                <Text style={textStyle}>Get Started</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
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
        color:'white'
    },
    imgTextStyle:{
        fontSize:16,
        color:'black',
        justifyContent:'center',
        alignSelf:'center'
    },
    loginImageStyle:{
        height:400,
        backgroundColor:'white'
    },
    childViewStyle:{
        height:Dimensions.get('window').height,
        width:Dimensions.get('window').width,
        alignItems:'center',
        flex:1
    },
    buttonStyle:{
        backgroundColor:Color.darkColor,
        borderRadius:20,
        alignSelf:'stretch',
        borderWidth:1,
        borderColor:Color.lightColor,
        height:40,
        width:Dimensions.get('window').width-20,
        justifyContent:'center',
        alignItems:'center',
    }
};
export default Welcome;