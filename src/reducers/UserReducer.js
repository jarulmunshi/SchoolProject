import {USER_DETAIL} from '../actions/Type';
const INTIAL_STATE={
    userDetail: {
        user_id:0,
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
            // console.log("Data"+action.payloa);
            return {...state, userDetail: action.payload};
        default:
            return state;
    }
}