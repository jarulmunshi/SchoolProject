import React,{Component} from 'react';
import {Text,View,Image,ScrollView,SafeAreaView} from 'react-native';
import Color from './../helper/theme/Color';
import {Card,CardSection,Input,Button,Header} from './common/Common';
import ModalDropDown from 'react-native-modal-dropdown';
import ImagePicker from 'react-native-image-picker';
import {insertFile} from './../actions/FileAction';
import {connect} from 'react-redux';
import {DocumentPicker,DocumentPickerUtil} from 'react-native-document-picker';
class Files extends Component{
    constructor(props){
        super(props);
        this.state={
            filetype:'lecturenotes',
            img:'',
            fname:'',
            file:'',
            fdesc:'',
            uid:props.navigation.state.params.res.user_id ||0,
            imgName:''
        }
    }
    // showPicker=()=>{
    //     DocumentPicker.show({
    //         filetype: [DocumentPickerUtil.allFiles()],
    //     },(error,res) => {
    //         // Android
    //         if(res){
    //             let name=res.fileName;
    //             const type=name.split('.');
    //             const fileType=type[type.length - 1];
    //             this.setState({file:{
    //                 uri:res.uri,
    //                 name:res.fileName,
    //                 type:fileType
    //             },imgName:name});
    //             console.log(res.uri);
    //         }
    //         else {
    //             console.log(error);
    //         }
    //     });
    //
    // };
    showImagePicker=()=>{
        const options = {
            quality:0.1,
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            },
            customButtons:[
                {name:'fileUpload',title:'Choose file'}],
        };
        ImagePicker.showImagePicker(options,(response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                console.log(response);
                let name=response.fileName;
                const type=name.split('.');
                const fileType=type[type.length - 1];
                this.setState({file:{
                    uri:response.uri,
                    name:response.fileName,
                    type:fileType
                },imgName:name});
                console.log(response.uri);

            }
        });
    };
    addFile=()=>{
        const data={
            file_name:this.state.fname,
            file_type:this.state.filetype,
            file_info:this.state.file,
            file_description:this.state.fdesc,
            userid:this.state.uid
        };
        this.props.insertFile(data).then((res)=>{
            this.setState({fname:'',fdesc:''});
            alert("File Uploaded Successfully");
        }).catch((err)=>{
            alert("Failed to upload file");
        });
        //alert(data.file_name + data.file_type + data.file + data.file_description);

    };

    render(){
        //alert(this.state.uid);
        return(
            <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
            <ScrollView style={{flex:1,backgroundColor:'white'}}>
            <View style={styles.viewStyle}>
                <Header headerText="Upload Data" headIcon="upload"/>
                <Image source={require('./../image/upload.jpg')} size={30} style={styles.loginImageStyle} resizeMode="contain"/>
                <Card>
                    <CardSection>
                        <Input
                            onChange={(value)=>this.setState({fname:value})}
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
                        <View style={{height:40,
                            flex:1,
                            flexDirection:'row',
                            alignItems:'center'}}>
                            <Text style={styles.textSelect}>File</Text>
                            <Button onPress={()=>this.showImagePicker()}>Select File</Button>
                            <Text style={styles.textSelect}>{this.state.imgName}</Text>
                        </View>
                    </CardSection>
                    <CardSection>
                        <Input
                            onChange={(value)=>this.setState({fdesc:value})}
                            placeholder="File Description"
                            label="Description"
                            keyboardType={'default'}
                        />
                    </CardSection>
                    <CardSection>
                        <Button onPress={()=>this.addFile()}>Upload</Button>
                    </CardSection>

                </Card>
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
const mapStateToProps=()=>{
    return{
    };
};
export default connect(mapStateToProps,{
    insertFile
})(Files);
