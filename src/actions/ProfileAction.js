import {callApi} from '../services/ApiCall';
import ApiConstant from '../services/ApiConstant'
import {USER_DETAIL} from "./Type";

// export const updateUser=(user)=>{
//     return(dispatch,getState)=>{
//         return callApi(ApiConstant.baseUrl+ApiConstant.signUp+`/${user.user_id}`,'put',user,{}).then((res)=>{
//             dispatch({
//                 type:USER_DETAIL,
//                 payload:res
//             });
//             return Promise.resolve(res);
//
//         }).catch((err)=>{
//             debugger
//         })
//     }
//
// };
export const updateUser=(user)=>{
    return(dispatch,getState)=>{
        return callApi(ApiConstant.baseUrl+ApiConstant.signUp+"/fileupload",'post',user,{}).then((res)=>{
            debugger;
            dispatch({
                type:USER_DETAIL,
                payload:res
            });
            return Promise.resolve(res);

        }).catch((err)=>{
            debugger
        })
    }

};
// export const getUser=()=>{
//     return(dispatch,getState)=>{
//         return callApi(ApiConstant.baseUrl+ApiConstant.signUp,'get',{},{}).then((res)=>{
//             const data=res;
//             dispatch({
//                 type:USER_DETAIL,
//                 payload:data
//             });
//             return Promise.resolve(res);
//
//         }).catch((err)=>{
//             debugger
//         })
//     }
//
// };