import {callApi} from '../services/ApiCall';
import ApiConstant from '../services/ApiConstant'
import {USER_DETAIL} from "./Type";

export const getUser=()=>{
    return(dispatch,getState)=>{
        return callApi(ApiConstant.baseUrl+ApiConstant.signUp,'get',{},{}).then((res)=>{
            const data=res;
            dispatch({
                type:USER_DETAIL,
                payload:data
            })

        }).catch((err)=>{
            debugger
        })
    }

};