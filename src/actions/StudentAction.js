import {callApi} from '../services/ApiCall';
import ApiConstant from '../services/ApiConstant'
import {STUDENT_DETAIL} from "./Type";

export const newStudent=(stud)=>{
    debugger;
    return(dispatch,getState)=>{
        return callApi(ApiConstant.baseUrl+ApiConstant.signIn,'post',stud,{}).then((res)=>{
            debugger;
            dispatch({
                type:STUDENT_DETAIL,
                payload:res
            });
            return Promise.resolve(res.data);
        }).catch((err)=>{
            debugger
        })
    }

};