import React, {Component} from 'react';
import {Text, View, FlatList,Image,TouchableOpacity,Alert} from 'react-native';
import {Header} from './common/Common';
import {connect} from 'react-redux';
import {getFile} from './../actions/FileAction';
import _ from 'lodash';
class DisplayDocument extends Component {
    constructor(props){
        super(props);
        this.state={
            sid:0
        }
    }
    getData=()=>{
        this.props.getFile();
    };

    componentDidMount(){
        this.getData();
    }
    renderRow = ({item, index}) => {
        return(
            <View style={{height:100,marginTop:10}} key={index}>
                {item &&
                <View  style={styles.viewStyle}>
                    <View>
                        <Image style={styles.imgStyle} source={require(`./../image/Profile.png`)}/>
                    </View>
                    <View>
                        <Text style={styles.textStyle}>{item.file_name}</Text>
                        <Text style={styles.textStyle}>{item.file_description}</Text>
                    </View>
                </View>
                }
            </View>)
    };
    render() {
        let fileData = _.filter(this.props.fileDetail, {file_type:'lecturenotes'});
        return (
            <View style={{backgroundColor:'white',flex:1}}>
                <Header headerText="Lecture Notes" headIcon="book"/>
                <FlatList
                    data={fileData}
                    renderItem={this.renderRow}
                    keyExtractor={item=>item.file_name}
                />
            </View>

        )
    }

}
const styles={
    viewStyle:{
        borderWidth:0.5,
        borderRadius:5,
        shadowColor:'gray',
        shadowOffset:{width:0,height:5},
        shadowOpacity:0.2,
        borderColor:'#ddd',
        margin:5,
        alignItems:'center',
        height:50,
        marginTop:5,
        flexDirection:'row'
    },
    childViewStyle:{
        borderWidth:0.5,
        borderRadius:5,
        shadowColor:'gray',
        shadowOffset:{width:0,height:5},
        shadowOpacity:0.2,
        borderColor:'#ddd',
        margin:15,
        flexDirection:'row',
        alignItems:'center',
        height:60
    },
    loginImageStyle:{
        height:90,
        width:'100%',
        alignSelf:'center',
        marginTop:20
    },
    textStyle:{
        paddingLeft:10,
        fontSize:16,
    },
    iconStyle:{
        flex:0.1
    },
    imgStyle:{
        height:50,
        width:50
    }
};
const mapStateToProps=(state)=>{
    debugger;
    return{
        fileDetail:state.file.fileDetail
    }
};
export default connect(mapStateToProps,{
getFile
})(DisplayDocument);