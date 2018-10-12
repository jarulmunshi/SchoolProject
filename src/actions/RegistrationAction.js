import {callApi} from '../services/ApiCall';
import ApiConstant from '../services/ApiConstant'
import {USER_DETAIL} from "./Type";

export const registerUser=(user)=>{
    debugger;
    return(dispatch,getState)=>{
        return callApi(ApiConstant.baseUrl+ApiConstant.signUp,'post',user,{}).then((res)=>{
            dispatch({
                type:USER_DETAIL,
                payload:user
            })

        }).catch((err)=>{
            debugger
        })
    }

};