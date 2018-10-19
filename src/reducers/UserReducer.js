import {USER_DETAIL} from '../actions/Type';
const INTIAL_STATE={
    userDetail: []
};

export default (state=INTIAL_STATE,action)=> {
    debugger;
    switch (action.type) {
        case USER_DETAIL:
            // console.log("Data"+action.payloa);
            return {...state, userDetail: action.payload};
        default:
            return state;
    }
}