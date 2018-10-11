import {callApi} from '../services/ApiCall';
import ApiConstant from '../services/ApiConstant'
import {USER_DETAIL} from "./Type";

export const loginUser=(user)=>{
    debugger;
    return(dispatch,getState)=>{
        return callApi(ApiConstant.baseUrl+ApiConstant.signUp+ApiConstant.login,'post',user,{}).then((res)=>{
            dispatch({
                type:USER_DETAIL,
                payload:res
            });
            return Promise.resolve(res.data);
        }).catch((err)=>{
            debugger
        })
    }

};