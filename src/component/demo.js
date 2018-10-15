import React,{Component} from 'react';
import {Text,Image,View,SafeAreaView,TouchableOpacity,ScrollView,TouchableHighlight} from 'react-native';
import  ImagePicker from 'react-native-image-picker';
class Demo extends Component{
render(){
    return(
        <TouchableHighlight onPress={()=>{
        var options = {
           title: 'Select Image',
           storageOptions: {
            skipBackup: true,
            path: 'images'
           }
        };
        ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);
        if (response.didCancel) {
          console.log('User cancelled image picker');
        }else if (response.error) {
         console.log('ImagePicker Error: ', response.error);
        }else if (response.customButton) {
         console.log('User tapped custom button: ', response.customButton);
        }else {
         console.log('User selected a file form camera or gallery', response);
         const data = new FormData();
         data.append('name', 'avatar');
         data.append('fileData', {
          uri : response.uri,
          type: response.type,
          name: response.fileName
         });
         const config = {
          method: 'POST',
          headers: {
           'Accept': 'application/json',
           'Content-Type': 'multipart/form-data',
          },
          body: data,
         };
        fetch("http://localhost:3000/user/fileupload", config)
         .then((checkStatusAndGetJSONResponse)=>{
            debugger;
           console.log(checkStatusAndGetJSONResponse);
         }).catch((err)=>{
            debugger;
            console.log(err)});
        }
})
        } } >
            <Text style={{justifyContent:'center',marginTop:50}}>hjdgschg</Text>
        </TouchableHighlight>
)
}
}

export default Demo;