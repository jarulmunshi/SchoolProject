import {USER_DETAIL} from '../actions/Type';
const INTIAL_STATE={
    userDetail: {
        email:'',
        password:'',
        name:'',
        mno:'',
        usertype:'parent'
    }
};

export default (state=INTIAL_STATE,action)=> {
    switch (action.type) {
        case USER_DETAIL:
            debugger;
            //console.log("Data"+action.payload.data.username);
            return {...state, userDetail: action.payload};
        default:
            return state;
    }
}