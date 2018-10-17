import React,{Component} from 'react';
import {Text,View,Image,ScrollView} from 'react-native';
import Color from './../helper/theme/Color';
import {Card,CardSection,Input,Button,Header} from './common/Common';
import ModalDropDown from 'react-native-modal-dropdown';
import ImagePicker from 'react-native-image-picker';
import {insertFile} from './../actions/FileAction';
import {connect} from 'react-redux';
class Files extends Component{
    constructor(props){
        super(props);
        this.state={
            filetype:'lecturenotes',
            img:'',
            fname:'',
            file:'',
            fdesc:''
        }
    }
    // showPicker=()=>{
    //     DocumentPicker.show({
    //         filetype: [DocumentPickerUtil.images()],
    //     },(error,res) => {
    //         // Android
    //         console.log(
    //             res.uri,
    //             res.type, // mime type
    //             res.fileName,
    //             res.fileSize
    //         );
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
                }});

            }
        });
    };
    addFile=()=>{
        const data={
            file_name:this.state.fname,
            file_type:this.state.filetype,
            file:this.state.file,
            file_description:this.state.fdesc,
            user_id:0
        };
        this.props.insertFile(data).then((res)=>{
            alert("File Uploaded Successfully");
            this.setState({fname:'',fdesc:''});
        }).catch((err)=>{
            alert("error");
        });
        alert(data.file_name + data.file_type + data.file + data.file_description);

    };
    render(){
        return(
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
