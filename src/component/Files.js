import React,{Component} from 'react';
import {Text,View,Image} from 'react-native';
import Color from './../helper/theme/Color';
import {Card,CardSection,Input,Button,Header} from './common/Common';
import ModalDropDown from 'react-native-modal-dropdown';
import ImagePicker from 'react-native-image-picker';
class Files extends Component{
    constructor(props){
        super(props);
        this.state={
            filetype:'lecturenotes',
            img:''
        }
    }
    showImagePicker=()=>{
        ImagePicker.showImagePicker((response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    img: source,
                });
                alert(this.state.img);
            }
        });
    };
    render(){
        return(
            <View style={styles.viewStyle}>
                <Header headerText="Upload Data" headIcon="upload"/>
                <Image source={require('./../image/upload.jpg')} size={30} style={styles.loginImageStyle} resizeMode="contain"/>
                <Card>
                    <CardSection>
                        <Input
                            placeholder="Filename"
                            label="Filename"
                            keyboardType={'default'}
                        />
                    </CardSection>
                    <CardSection>
                        <View style={{flex:1,flexDirection:'row',height:40,alignItems:'center'}}>
                            <Text style={styles.textSelect}>File Type</Text>
                            <ModalDropDown
                                defaultIndex={0}
                                style={{
                                    alignSelf:'flex-start',
                                    height:50,
                                    width:100,
                                    flex:2
                                }}
                                textStyle={{
                                    fontSize:16,
                                    color:Color.extraDark
                                }}
                                options={['Lecture Notes','Progress Report','Time Table']}
                                onSelect={(value)=>{
                                    if(value==0){
                                        data='lecturenotes'
                                    }
                                    else if(value==1){
                                        data='progressreport'
                                    }
                                    else{
                                        data='timetable'
                                    }
                                    this.setState({filetype:data})
                                }}
                            />
                        </View>
                    </CardSection>
                    <CardSection>
                        <Text style={styles.textSelect}>File</Text>
                        <Button onPress={()=>this.showImagePicker()}>Select File</Button>
                    </CardSection>
                    <CardSection>
                        <Input
                            placeholder="File Description"
                            label="Description"
                            keyboardType={'default'}
                        />
                    </CardSection>
                    <CardSection>
                        <Button>Upload</Button>
                    </CardSection>

                </Card>
            </View>
        )
    }
}

const styles={
    viewStyle:{
        backgroundColor:'white',
        flex:1
    },
    loginImageStyle:{
        height:90,
        width:'100%',
        alignSelf:'center',
        marginTop:20
    },
    textSelect:{
        flex:1,
        fontSize:18,
        paddingLeft:5,
        color:Color.lightColor
    },
    textStyle:{
        fontSize:25,
        color:Color.darkColor,
        alignSelf:'center'
    }
};
export default Files;