import {STUDENT_DETAIL} from '../actions/Type';
const INTIAL_STATE={
    studentDetail: {
        student_name:'',
        gender:'',
        dob:'',
        parent_name:'',
        parent_mno:''
    }
};

export default (state=INTIAL_STATE,action)=> {
    switch (action.type) {
        case STUDENT_DETAIL:
            // console.log("Data"+action.payloa);
            return {...state, studentDetail: action.payload};
        default:
            return state;
    }
}